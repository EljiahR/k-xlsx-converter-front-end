const handler = (req, res) => {
  const requestMethod = req.method;
  const body = JSON.parse(req.body);
  switch (requestMethod) {
    case "POST":
      res
        .status(200)
        .json({ message: `You submitted the following data: ${body.test}` });
    default:
      res.status(200).json({ message: `You called /api/test` });
  }
};

export default handler;
