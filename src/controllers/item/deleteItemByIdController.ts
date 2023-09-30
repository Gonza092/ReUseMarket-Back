import { NextFunction, Response } from "express";
import { RequestExt } from "../../types/req-ext";
import deleteItemById from "../../repository/item/deleteItemById";

const deleteItemByIdController = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req;

    const { id } = req.params;

    await deleteItemById(userId, id);

    res.send({
      status: "ok",
      data: "Articulo borrado correctamente.",
    });
  } catch (error) {
    next(error);
  }
};

export default deleteItemByIdController;

// const deletePostController = async (req, res, next) => {
//     try {
//       const { id } = req.params;

//       const image = await getPostById(id);

//       if (req.userId !== image.user_id) {
//         throw generateError(
//           'Estás intentando borrar una imagen que no es tuya',
//           401
//         );
//       }

//       await deletePostById(id);
//       await fs.rm(path.join(__dirname, `../uploads/${image.post_image}`));

//       res.send({
//         status: 'ok',
//         message: `La imagen ${image.post_image} con id ${id} fue borrada`,
//       });
//     } catch (error) {
//       next(error);
//     }
//   };
