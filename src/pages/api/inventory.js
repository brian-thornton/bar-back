import FileAdapter from "@/adapters/file-adapter";
const fileAdapter = new FileAdapter('../storage');

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      const items = fileAdapter.get('inventory', 'inventory');

      const response = {
        items,
        totalItems: items.length,
      }

      res.status(200).json(response);
      break;
    case "POST":
      let inventory = fileAdapter.get('inventory', 'inventory');
      if (inventory === {}) {
        inventory = [
          req.body
        ]
        fileAdapter.write('inventory', 'inventory', inventory);
      } else {
        inventory.push(req.body);
        fileAdapter.update('inventory', 'inventory', inventory);
      }

      res.status(200).json(inventory);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}