const fileSystem = require('../utils/fs');

async function deleteTalker(req, res, next) {
  try {
    const { id } = req.params;
    const readFile = await fileSystem.readFile('talker.json');
    const newData = readFile.filter((talker) => talker.id !== Number(id));
    await fileSystem.writeFile('talker.json', newData);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
}

module.exports = deleteTalker;