const mongoose = require("mongoose");
const personData = require("../schema/userData");


const register = async (req, res) => {
    try {
        console.log(req.body);
        const ifExists = await personData.findOne({ email: req.body.email });
        if (ifExists) {
            res.status(201).json("Email Already Exists");
        }
        else {
            const registerPerson = new personData({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            const registered = await registerPerson.save();

            res.status(201).json("registered");
        }
    }
    catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const ifExists = await personData.findOne({ email: email })
        if (ifExists) {
            if (ifExists.password == password) {
                res.json("success");
            }
            else {
                res.json("Incorrect Password");
            }
        }
        else {
            res.json("Please Register");
        }
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { register, login }