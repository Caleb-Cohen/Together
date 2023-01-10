const { isValidObjectId } = require("mongoose");
const httpError = require("../utilities/httpError");

// Check if Mongoose ObjectId is valid
const validateObjectId = (req, _, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw httpError(404);
  }
  next();
};

module.exports = validateObjectId;
