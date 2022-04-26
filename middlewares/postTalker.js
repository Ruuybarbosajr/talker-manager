const fs = require('fs/promises');

async function postTalker(req, res, next) {
  try {
    const readFile = JSON.parse(await fs.readFile('talker.json'));
    const { name, age, talk } = req.body;
    const talker = {
      id: readFile.length + 1,
      name,
      age,
      talk,
    };
    await fs.writeFile('talker.json', JSON.stringify([...readFile, talker], null, 2));
    return res.status(201).json(talker);
  } catch (error) {
    next(error);
  }
}

module.exports = postTalker;