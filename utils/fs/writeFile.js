const fs = require('fs/promises');

module.exports = async (arquivo, content) => { 
  await fs.writeFile(arquivo, JSON.stringify(content, null, 2));
};