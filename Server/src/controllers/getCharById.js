const axios = require("axios");
const { response } = require("express");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    let result = await axios.get(`${URL}/${id}`);
    // .then((response) => response.data)
    // .then(({ id, status, name, species, origin, image, gender }) => {
      if (result.data.name) {
        let { id, status, name, species, origin, image, gender } = result.data;
        let character = {
          id,
          name,
          species,
          origin,
          image,
          gender,
          status,
        }
        return res.status(200).json(character);
      }
      return res.status(404).send("Not found");
  } catch (error) {
    res.status(500).send(error.message);
  } 
};

module.exports = { getCharById };
