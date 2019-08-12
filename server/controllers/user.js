import models from '../models';

const {
    User
} = models;

export default class Users {

    //Get All
    static GetAll(req, res) {
        User.findAll().then(query => res.status(200).send({
            success: true,
            data: query
        }));
    }

    //Get One
    static Get(req, res) {
        return User.findByPk(req.params.id)
            .then(query => {
                if (!query) {
                    res.status(400).send({
                        success: false,
                        message: 'User not found!'
                    });
                } else {
                    res.status(200).send({
                        success: true,
                        data: query
                    });
                }
            }).catch(error => res.status(400).send(error));
    }

    //Add User
    static Post(req, res){
        const {
            strName,
            strEmail,
            strRole
        } = req.body;

        return User.create({
            strName,
            strEmail,
            strRole
        })
        .then(query => res.status(201).send({
            success: true,
            message: 'User created successfully',
            data: query
        }))
        .catch(error => res.status(400).send(error));
    }

    //Edit User
    static Put(req, res){
        const {
            strName,
            strEmail,
            strRole
        } = req.body;

        return User.findByPk(req.params.id)
            .then(data => {
                data.update({
                    strName: strName,
                    strEmail: strEmail,
                    strRole, strRole
                })
                .then(updatedData => {
                    res.status(200).send({
                        success: true,
                        message: 'User successfully updated!',
                        data: {
                            id: req.params.id,
                            strName: updatedData.strName,
                            strEmail: strEmail,
                            strRole: strRole
                        }
                    })
                }).catch(error => res.status(400).send(error));
            }).catch(error => res.status(400).send(error));
    }


    //Delete User
    static Delete(req, res){
        return User.findByPk(req.params.id)
            .then(data => {
                if(!data){
                    res.status(400).send({
                        success: false,
                        message: 'User not found!'
                    });
                }

                return data.destroy()
                    .then(() => res.status(200).send({
                        success: true,
                        message: 'User deleted successfully!'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
}