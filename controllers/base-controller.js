exports.baseFunction = async (req, res) => {
    // const id = req.params.id;
    console.log(req.body);
    const name = req.body.name;
    const response = {
        status: "sucess",
        message: "this is a success",
        name: name
    }
    res.send(response);
};