import path from "path";

import { NextFunction, Response } from "express";
import { RequestExt } from "../../types/req-ext";
import createItemSchema from "../../schemasJoi/item/createItemSchema";
import validateSchema from "../../helpers/validateJoi";
import createPathIfNotExists from "../../helpers/createPathIfNotExists";
import sharp from "sharp";
import { generate } from "randomstring";
import createItem from "../../repository/item/createItem";

const createItemController = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req;

    const { title, category, price, description } = req.body;

    await validateSchema(createItemSchema, req.body);

    const uploadsDir = path.join(__dirname, "../../../uploads");

    const imageFileNames: string[] = [];

    if (req.files?.image) {
      await createPathIfNotExists(uploadsDir);

      const imageFiles = Array.isArray(req.files.image)
        ? req.files.image
        : [req.files.image];

      for (const createImageItemFile of imageFiles) {
        const image = sharp(createImageItemFile.data);
        image.resize(300, 200).toFormat("png");
        const randomName = generate(7) + ".png";
        const imageFileName = `${randomName}`;
        imageFileNames.push(imageFileName);
        image.toFile(path.join(uploadsDir, imageFileName));
      }
    }

    const newItem = await createItem({
      userId: userId!,
      title,
      category,
      price,
      description,
      images: imageFileNames,
    });

    res.send({
      status: "ok",
      data: newItem,
    });
  } catch (error) {
    next(error);
  }
};

export default createItemController;
