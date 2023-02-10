export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      fetch("https://api.openbrewerydb.org/breweries").then(response => {
        response.json().then(d => {
          res.status(200).json(d)
        })
      });

      break;
    case "POST":
      const { todo, completed } = req.body;
      todos.push({
        id: todos.length + 1,
        todo,
        completed,
      });
      res.status(200).json(inventory);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}