const User = require('../models').Users;
// console.log(Users)

module.exports = {
     list(req, res) {
        return User
          .findAll()
          .then(users => res.status(200).send(users))
          .catch((error) => {
            console.log(error.toString());
            res.status(400).send(error)
          });
      },

    async create(req, res) {
        try {
            const userCollection = await User
                .create({
                    email: req.body.email,
                });
            res.status(201).send(userCollection);
        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

    async update(req, res) {
        try {
            const userCollection = await User.find({
                id: req.params.userId
            });
            if (userCollection) {
                const updatedUser = await User.update({
                    id: req.body.email
                });
                res.status(201).send(updatedUser)
            }
            else {
                res.status(404).send("User Not Found");
            }
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }
}