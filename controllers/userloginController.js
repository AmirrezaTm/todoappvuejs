require('dotenv').config()
const user = require('../models/userlogin');
const twj = require('jsonwebtoken')

const createToken = (id) => {
    return twj.sign({ id }, process.env.TOKEN, { expiresIn: '3d' })
}

const signup_user = async (req, res) => {
    const { email, password } = req.body
    try {
        const User = await user.signup(email, password)
        const token = createToken(User._id)

        res.status(200).json({ email, token })
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

const login_user = async (req, res) => {
    const { email, password } = req.body

    try {
        const User = await user.login(email, password)
        const token = createToken(User._id)

        res.status(200).json({ email, token })
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }

}

module.exports = {
    login_user,
    signup_user
}