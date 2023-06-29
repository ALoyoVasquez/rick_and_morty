const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const { postFav, deleteFav, getFav } = require("../controllers/handleFavorites");

const router = require("express").Router();

// router.use();

//OPCION 1
router.get("/character/:id", getCharById );
router.get("/login", login);
// router.get("/fav", getFav);

//opcion 2
router.post("/fav", (req, res) => {
  postFav(req, res);
});

router.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
});


module.exports = router;
