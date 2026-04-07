import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import Note from "../models/Note.js";


const router = express.Router();

// Creating notes ------------------------------------>
router.post("/", authMiddleware, async (req, res) =>{
    const note = await Note.create({
        title: req.body.title,
        content: req.body.content,
        user: req.user.id
    });

    res.json(note);
});


// get notes ------------------------------------------->
router.get("/", authMiddleware, async (req, res) =>{
    const notes = await Note.find({user: req.user.id});
    res.json(notes);
});


// Deleting the notes -------------------------------------->
router.delete("/:id", authMiddleware, async (req, res) =>{
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: "Note deleted"});
});

// // updating the notes ---------------------------------------->
// router.put("/:id", authMiddleware, async (req, res) =>{
//     const note = await Note.findByIdAndUpdate(req.params.id, req.body, {new: true});
//     res.json(note);
// });

export default router;