const fileSystem = require('../utils/fs');

async function postTalker(req, res, next) {
  try {
    const { name, age, talk } = req.body;
    const readFile = await fileSystem.readFile('talker.json');
    const talker = {
      id: readFile.length + 1,
      name,
      age,
      talk,
    };
    await fileSystem.writeFile('talker.json', [...readFile, talker]);
    return res.status(201).json(talker);
  } catch (error) {
    next(error);
  }
}

module.exports = postTalker;