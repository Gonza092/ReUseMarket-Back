import "dotenv/config";

import app from "./app";
import { sequelize } from "./db/db";

const PORT = process.env.PORT ?? 4001;

const main = async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
