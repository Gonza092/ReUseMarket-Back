import fs from "fs/promises";

const createPathIfNotExists = async (path: string) => {
  try {
    await fs.access(path);
  } catch {
    await fs.mkdir(path);
  }
};

export default createPathIfNotExists;
