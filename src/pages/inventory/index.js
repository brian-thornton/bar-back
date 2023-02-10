import { Container, Text, Table, Row, Button, Link } from '@nextui-org/react';
import { useEffect, useState } from "react";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  const fetchInventory = async () => {
    const response = await fetch("/api/inventory");
    const data = await response.json();
    console.log(data);
    setInventory(data);
  };

  useEffect(fetchInventory, []);

  const inventoryRows = (
    inventory?.items?.map(item => (
      <Table.Row style={{ color: "#000000" }}>
        <Table.Cell style={{ color: "#000000" }}>{item.name}</Table.Cell>
        <Table.Cell>{item.category}</Table.Cell>
        <Table.Cell>{item.type}</Table.Cell>
        <Table.Cell>{item.maker}</Table.Cell>
      </Table.Row>
    ))
  );

  return (
    <Container>
      <Table
        aria-label="Breweries"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column>Name</Table.Column>
          <Table.Column>Beer / Wine / Spirit</Table.Column>
          <Table.Column>Type</Table.Column>
          <Table.Column>Maker</Table.Column>
        </Table.Header>
        <Table.Body>
          {inventory?.items?.length > 0 && inventoryRows}
        </Table.Body>
      </Table>
      <Row>
        <Button as={Link} href="/inventory/add">Add</Button>
      </Row>
    </Container>
  );
};

export default Inventory;
