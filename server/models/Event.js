const mongoose = require("mongoose");
const Joi = require("joi");

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startAt: {
      type: Date,
      required: true,
    },
    endAt: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId, // User: is the ObjectId of author user
      required: true,
      ref: "User",
    },
    groupId: {
      type: String,
    },
    rsvpList: {
      type: Array
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", EventSchema);

// Schema for request.body validation when event is created
const createEventSchema = Joi.array().items(
  Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    groupId: Joi.string().allow(null),
    startAt: Joi.date().timestamp().greater("now").required(),
    endAt: Joi.date()
      .timestamp()
      .greater(Joi.ref("startAt"))
      .less(
        Joi.ref("startAt", {
          adjust: timestamp => {
            let date = new Date(timestamp);
            date.setMonth(date.getMonth() + 3);
            return date;
          },
        })
      )
      .required(),
  })
);

module.exports = {
  Event,
  createEventSchema,
};
