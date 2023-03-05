require('dotenv').config()
const express = require('express')
const app = express()
const Workout = require('../models/workoutBook.js');

app.use(express.json())

// get all books
const get_blog = (req, res) => {
    Workout.find()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => console.log(err))
}

// get a single book
const getid_blog = (req, res) => {
    const id = req.params.id
    Workout.findById(id)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => console.log(err))
}

// post book
const post_blog = (req, res) => {
    Workout.create({ ...req.body })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => console.log(err))
}

// delete book
const delete_blog = (req, res) => {
    const id = req.params.id

    Workout.findOneAndDelete({ _id: id })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json({ error: 'No such workout' })
        })
}

// update book
const patch_blog = (req, res) => {
    const id = req.params.id

    Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
        .then((result) => {
            res.status(200).json(result)
        })
}

module.exports = {
    get_blog,
    getid_blog,
    post_blog,
    delete_blog,
    patch_blog
}