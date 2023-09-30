const fs = require("fs/promises");
const path = require("path");

import { generateError } from "../../helpers/generateError";
import ItemImages from "../../models/itemImagesModel";
import Item from "../../models/itemModel";

const deleteItemById = async (user_id?: number, item_id?: number | string) => {
  const item = await Item.findOne({
    where: { item_id: item_id },
    attributes: ["seller_id"],
  });

  if (!item) {
    throw generateError("Ese articulo no existe", 400);
  }

  if (user_id !== item.seller_id) {
    throw generateError(
      "Estás intentando borrar un articulo que no es tuyo",
      401
    );
  }

  const itemImages = await ItemImages.findAll({
    where: { item_id: item_id },
    attributes: ["image_url"],
  });

  for (const itemImage of itemImages) {
    await fs.rm(
      path.join(__dirname, `../../../uploads/${itemImage.image_url}`)
    );
  }

  await Item.destroy({
    where: { item_id: item_id },
  });
};

export default deleteItemById;
