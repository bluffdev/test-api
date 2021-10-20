const User = require('../models/User')

const getUsers = async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({user}) 
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })

        if (!user) {
            return res.status(404).json({ msg: `No users match id ${req.params.id}`})
        }

        res.status(200).json( {user} )
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json(req.body)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id })

        if (!user) {
            return res.status(404).json({ msg: `No users match id ${req.params.id}`})
        }

        res.status(200).json( { user: null, status: 'success'} )
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
}