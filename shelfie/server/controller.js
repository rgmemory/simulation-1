module.exports = {
    get: (req, res) => {
        console.log("get worked");

        req.app.get('db').get_inventory().then(products => {
            res.status(200).send(products);
        })
    }
}