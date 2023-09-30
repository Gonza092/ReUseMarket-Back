import { generateError } from "../../helpers/generateError";
import Item from "../../models/itemModel";

const getItemById = async (item_id: number | string) => {
  const item = await Item.findOne({
    where: { item_id: item_id },
    attributes: [
      "item_id",
      "title",
      "description",
      "price",
      "category",
      "seller_id",
    ],
  });
  console.log(item);
  if (!item) {
    throw generateError("No hay ningún articulo con esa id", 404);
  }

  return item;
};

export default getItemById;
