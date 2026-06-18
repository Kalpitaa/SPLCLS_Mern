export const processData = (req, res) => {
    const params = req.params;
    const query = req.query;
    const headers = req.headers;
    const body = req.body;

    res.status(200).json({
        sucess : true,
        data: {
            params,
            query,
            headers,
            body
        }
    });
}
