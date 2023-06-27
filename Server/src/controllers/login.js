const user = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  const userFound = user.find(
    (use) => use.email === email && use.password === password
  );

  // return userFound
  //   ? res.status(200).json({ access: true })
  //   : res.status(200).json({ access: false });

  // console.log(`Email: ${email}, password: ${password} ${userFound}`)
  if (userFound) return res.status(200).json({ access: true });

  return res.status(404).json({ access: false });
};

module.exports = { login };
