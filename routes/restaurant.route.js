var express = require("express");
const {
  getAllRestaurant,
  getOneRestaurantById,
} = require("../services/restaurant.service");
var router = express.Router();
console.log("343434343443");
router.get("/", async (req, res) => {
  console.log("1212121212");
  let response = await getAllRestaurant();
  res.json(response);
});

router.get("/:restaurantId", async (req, res) => {
  let restaurantId = req?.params?.restaurantId;
  let response = await getOneRestaurantById(restaurantId);
  res.json(response);
});

module.exports = router;
