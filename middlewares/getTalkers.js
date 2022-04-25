const fs = require('fs/promises');

async function getTalkers(_req, res, next) {
  try {
    const readFile = JSON.parse(await fs.readFile('talker.json'));
    return res.status(200).json(readFile);
  } catch (error) {
    next(error);
  }
}

module.exports = getTalkers;