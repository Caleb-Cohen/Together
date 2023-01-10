const httpError = require("../utilities/httpError");

const validateBody = schema => {
  const func = async (req, _, next) => {
    try {
      const data = JSON.parse(req.body.data);
      const { error } = schema.validate(data);
      if (error) {
        throw httpError(400, error.message);
      }
      next();
    } catch (err) {
      next(err);
    }
  };

  return func;
};

module.exports = validateBody;
