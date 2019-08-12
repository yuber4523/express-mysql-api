import Users from '../controllers/user';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the default API route!'
    }))

    app.get('/api/users/:id', Users.Get);
    app.get('/api/users', Users.GetAll);
    app.post('/api/users', Users.Post);
    app.put('/api/users/:id', Users.Put);
    app.delete('/api/users/:id', Users.Delete);
}