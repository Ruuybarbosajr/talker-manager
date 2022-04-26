const fs = require('fs/promises');

module.exports = async (arquivo) => {
  const readFile = JSON.parse(await fs.readFile(arquivo));
  return readFile;
};
