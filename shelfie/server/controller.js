module.exports = {
    get: (req, res) => {
        console.log("get worked");

        req.app.get('db').get_inventory().then(products => {
            res.status(200).send(products);
        })
    },

    post: (req, res) => {
        console.log("post works");
        console.log(req.body.name);
        req.app.get('db').create_product([req.body.name, req.body.price, req.body.image]).then(ok => {
            console.log(ok);
            res.status(200).send(ok);
        })
    }
}