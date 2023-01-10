const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/events");
const auth = require("../middleware/auth");
const validateBody = require("../middleware/validateBody");
const validateObjectId = require("../middleware/validateObjectId");
const { createEventSchema } = require("../models/Event");

router.post(
  "/",
  auth.ensureAuth,
  validateBody(createEventSchema),
  eventsController.create
);

router.get("/", eventsController.getAll);

router.get("/:id", validateObjectId, eventsController.getOne);

router.delete(
  "/:id",
  auth.ensureAuth,
  validateObjectId,
  eventsController.deleteEvent
);

router.delete(
  "/deleteAllEvents/:groupId",
  auth.ensureAuth,
  eventsController.deleteAllEvents
);

module.exports = router;
