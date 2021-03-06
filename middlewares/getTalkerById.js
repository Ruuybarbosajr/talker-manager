const fileSystem = require('../utils/fs');

async function getTalkerById(req, res, next) {
  try {
    const { id } = req.params;
    const readFile = await fileSystem.readFile('talker.json');
    const talkerById = readFile.find((talker) => talker.id === Number(id));
    if (!talkerById) return next({ status: 404, message: 'Pessoa palestrante não encontrada' });
    return res.status(200).json(talkerById);
  } catch (error) {
    next(error);
  }
}

module.exports = getTalkerById;