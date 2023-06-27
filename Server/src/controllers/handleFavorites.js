let myFavorites = [];

const postFav = (req, res) => {
  const character  = req.body;

  myFavorites.push(character);
  
  return res.status(200).json(myFavorites);
};

const deleteFav=(req, res)=> {
  const { id } = req.params;
                                       //parsea Numero ↓
  myFavorites = myFavorites.filter((fav) => fav.id !== +id);
//   myFavorites = favorite;
  return res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
};
