const express = require("express");
const { NoteModel } = require("../model/note.model");

const noteRouter = express.Router();

noteRouter.get("/", async (req, res) => {
  try {
    const notes = await NoteModel.find();
    res.send({ msg: notes });
  } catch (error) {
    res.send({ msg: "Can't read notes" });
  }
});

noteRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const note = new NoteModel(payload);
    await note.save();
    res.send({ msg: "Notes created successfully" });
  } catch (error) {
    res.send({ msg: "Unable to create Notes" });
  }
});

noteRouter.delete("/delete/:id", async (req, res) => {
  const noteID = req.params.id;
  try {
    await NoteModel.findByIdAndDelete({ _id: noteID });

    res.send({ msg: "Notes deleted successfully" });
  } catch (error) {
    res.send({ msg: "Unable to delete Notes" });
  }
});


module.exports = {
    noteRouter
}
