const { NotFoundError, BadRequestError } = require('../utils/errors');

const usersDatabase = [
  { id: 1, name: 'Amaan', role: 'Software Engineer', email: 'amaan@example.com' },
  { id: 2, name: 'Pandey', role: 'DevOps Engineer', email: 'pandey@example.com' },
];

const getUsers = (req, res) => {
  res.status(200).json({
    success: true,
    count: usersDatabase.length,
    data: usersDatabase,
  });
};

const getUserById = (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return next(new BadRequestError('User ID must be a valid integer'));
  }

  const user = usersDatabase.find((u) => u.id === userId);
  if (!user) {
    return next(new NotFoundError(`User with ID ${userId} not found`));
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};

const createUser = (req, res, next) => {
  const { name, role, email } = req.body || {};

  if (!name || !email) {
    return next(new BadRequestError('Name and email are required fields'));
  }

  const newUser = {
    id: usersDatabase.length + 1,
    name,
    role: role || 'Member',
    email,
  };

  usersDatabase.push(newUser);

  res.status(201).json({
    success: true,
    data: newUser,
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
