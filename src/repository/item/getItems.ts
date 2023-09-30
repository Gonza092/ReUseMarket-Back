import { generateError } from "../../helpers/generateError";
import Item from "../../models/itemModel";

const getItems = async () => {
  const items = await Item.findAll({
    attributes: [
      "item_id",
      "title",
      "description",
      "price",
      "category",
      "seller_id",
    ],
    order: [["item_id", "DESC"]],
  });

  if (!items) {
    throw generateError("No hay ningún articulo", 400);
  }

  return items;
};

export default getItems;
