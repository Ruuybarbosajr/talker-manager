const fileSystem = require('../utils/fs');

async function getTalkersByQuery(req, res, next) {
  try {
    const { q } = req.query;
    const readFile = await fileSystem.readFile('talker.json');
    const dataFilteredByQuery = readFile.filter(({ name }) => name.includes(q || ''));
    return res.status(200).json(dataFilteredByQuery);
  } catch (error) {
    next(error);
  }
}

module.exports = getTalkersByQuery;