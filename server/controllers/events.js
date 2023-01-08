const Event = require("../models/Event");

module.exports = {
  //test function
  ping: (req, res) => {
    return res.json({ message: "pong" });
  },
  create: async (req, res) => {
    try {
      let data = JSON.parse(req.body.data);
      console.log(data);
      // Watch out for big max length
      // Mongoose might have built in max length
      // Do something to make this work with the latest schema... so do this with the updated event
      
      // Whitelist - Focus on full control
      // THIS below is the whitelist.
      await Event.create({
        title: data.title,
        description: data.description,
        initialDate: data.initialDate,
        finalDate: data.finalDate,
        startTime: data.startTime,
        endTime: data.endTime,
        recurring: data.recurring.rate === "weekly",
        dates: data.dates,
        recurringPattern: data.recurring,
        location: data.location,
        discordName: req.user.displayName,
      });
      res.json({ message: "Event created!" });
    } catch (err) {
      console.log(err);
    }
  },
  getAll: async (req, res) => {
    try {
      const events = await Event.find();
      // return all events
      res.json(events);
    } catch (err) {
      console.log(err);
    }
  },
  getOne: async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      res.json(event);
    } catch (err) {
      console.log(err);
    }
  },
};
