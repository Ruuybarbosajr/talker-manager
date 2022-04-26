const fileSystem = require('../utils/fs');

async function putTalker(req, res, next) {
  try {
    const readFile = await fileSystem.readFile('talker.json');
    const { id } = req.params;
    const editTalker = readFile.find((talker) => talker.id === Number(id));
    if (!editTalker) next({ status: 400, message: 'Id não existe' });
    const { name, age, talk } = req.body;
    editTalker.name = name;
    editTalker.age = age;
    editTalker.talk = talk;
    await fileSystem.writeFile('talker.json',
    [...readFile
      .filter((talker) => talker.id !== Number(id)), editTalker]
      .sort((talkA, talkB) => talkA.id - talkB.id));
    return res.status(200).json(editTalker);
  } catch (error) {
    next(error);
  }
}

module.exports = putTalker;