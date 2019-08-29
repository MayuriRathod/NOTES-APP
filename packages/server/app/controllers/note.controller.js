const Note = require('../models/note.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request

    // Create a Note
    const note = new Note({
        title: req.body.title || "Untitled Note",
        content: req.body.content
    });

    // Save Note in the database
    note.save()
        .then(data => {
            res.send(data);
        })
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Note.find()
        .then(notes => {
            res.send(notes);
        })
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Note.findById(req.params.noteId)
        .then(note => {
            res.send(note);
        })

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {


    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
            title: req.body.title || "Untitled Note",
            content: req.body.content
        }, {
            new: true
        })
        .then(note => {
            res.send(note);
        })
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.noteId)
        .then(note => {
            res.send({
                message: "Note deleted successfully!"
            });
        })
};