const fileSystem = require('../utils/fs');

async function getTalkers(_req, res, next) {
  try {
    const readFile = await fileSystem.readFile('talker.json');
    return res.status(200).json(readFile);
  } catch (error) {
    next(error);
  }
}

module.exports = getTalkers;