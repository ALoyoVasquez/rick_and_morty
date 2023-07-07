let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;

  myFavorites.push(character);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
                                        //parsea Numero ↓
  myFavorites = myFavorites.filter((fav) => fav.id !== +id);
  return res.status(200).json(myFavorites);
};

const getFav = () => {
  
};

module.exports = {
  postFav,
  deleteFav,
};
