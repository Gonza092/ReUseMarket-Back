import { NextFunction, Response } from "express";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { generate } from "randomstring";

import { RequestExt } from "../../types/req-ext";
import updateUserSchema from "../../schemasJoi/users/updateUserSchema";
import validateSchema from "../../helpers/validateJoi";
import createPathIfNotExists from "../../helpers/createPathIfNotExists";
import getUserById from "../../repository/user/getUserById";
import updateUser from "../../repository/user/updateUser";
import { UploadedFile } from "express-fileupload";

const updateUserController = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req;

    const { newUsername, oldPassword, newPassword, newBio } = req.body;

    const user = await getUserById(userId);

    await validateSchema(updateUserSchema, req.body);

    const uploadsDir = path.join(__dirname, "../../../uploads");
    const avatarsDir = path.join(__dirname, "../../../uploads/avatars");

    let imageFileName: string;

    if (req.files && req.files?.newAvatar) {
      await createPathIfNotExists(uploadsDir);
      await createPathIfNotExists(avatarsDir);

      const newAvatarFile = req.files.newAvatar as UploadedFile;
      const image = sharp(newAvatarFile.data);

      image.resize(300, 200).toFormat("png");

      const randomName = generate(7) + ".png";

      imageFileName = `${randomName}`;

      image.toFile(path.join(avatarsDir, imageFileName));
    }

    if (user.avatar && req.files?.newAvatar) {
      await fs.rm(path.join(avatarsDir, user.avatar));
    }

    const updates = await updateUser(
      userId!,
      newUsername,
      oldPassword,
      newPassword,
      imageFileName!,
      newBio
    );

    res.send({
      status: "ok",
      data: updates,
    });
  } catch (error) {
    next(error);
  }
};

export default updateUserController;
