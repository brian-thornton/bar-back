import { Container, Grid, Text, Textarea, Row, Table, Spacer, Input, Col, Button, Link } from '@nextui-org/react';
import { useEffect, useState } from "react";

const AddInventoryItem = () => {
  const [item, setItem] = useState({category: 'Beer'});

  const onSaveClick = () => {
    fetch('/api/inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
  }

  return (
    <Container justify='center'>
      <Input placeholder='Beer Name' fullWidth onChange={e => setItem({ ...item, name: e.target.value })}/>
      <Spacer y={1} />
      <Input placeholder='Beer Type' onChange={e => setItem({ ...item, type: e.target.value })} />
      <Spacer y={1} />
      <Input placeholder='Brewery' onChange={e => setItem({ ...item, maker: e.target.value })}/>
      <Spacer y={1} />
      <Input placeholder='ABV' onChange={e => setItem({ ...item, abv: e.target.value })}/>
      <Spacer y={1} />
      <Input placeholder='Quantity on Hand' onChange={e => setItem({ ...item, quantity: e.target.value })} />
      <Spacer y={1} />
      <Input placeholder='Location' onChange={e => setItem({ ...item, location: e.target.value })}/>
      <Spacer y={1} />
      <Textarea placeholder='Description' fullWidth onChange={e => setItem({ ...item, description: e.target.value })}/>
      <Spacer y={1} />
      <Row justify='flex-end'>
        <Button onClick={onSaveClick}>Save</Button>
        <Spacer x={1} />
        <Button ghost as={Link} href="/inventory">Cancel</Button>
      </Row>
    </Container>
  );
};

export default AddInventoryItem;
