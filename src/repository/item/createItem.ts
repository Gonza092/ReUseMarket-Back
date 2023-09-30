// import { generateError } from "../../helpers/generateError";
import ItemImages from "../../models/itemImagesModel";
import Item from "../../models/itemModel";
import { NewItem } from "../../types/newItemTypes";

const createItem = async ({
  userId,
  title,
  category,
  price,
  description = "",
  images = [],
}: NewItem) => {
  const newItem = await Item.create(
    {
      seller_id: userId,
      title,
      category,
      price,
      description,
    },
    {
      fields: ["seller_id", "title", "category", "price", "description"],
    }
  );

  let newImages;

  if (images.length > 0) {
    newImages = await Promise.all(
      images.map(async (image) => {
        return await ItemImages.create(
          { image_url: image, item_id: newItem.item_id },
          { fields: ["image_url", "item_id"] }
        );
      })
    );
  }

  return { newItem, newImages };
};

export default createItem;
