import { Navbar, Text } from '@nextui-org/react';

const TopNav = () => (
  <Navbar isCompact variant={"sticky"} >
    <Navbar.Brand>
      <Text b color="inherit">
        BarBack
      </Text>
    </Navbar.Brand>
    <Navbar.Content hideIn="md">
      <Navbar.Link href="/inventory">Inventory</Navbar.Link>
      <Navbar.Link href="/menus">Menus</Navbar.Link>
    </Navbar.Content>
  </Navbar>
);

export default TopNav;
