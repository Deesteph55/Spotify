import React, { useContext } from "react";
import { Menu, Container, Button } from "semantic-ui-react";

export const Navbar = ({ openSearch, openTracks }) => {
  return (
    <Menu fixed="left" inverted vertical>
      <Container>
        <Menu.Item>
       
          <Button content="Home" />
        </Menu.Item>
        <Menu.Item>
          
          <Button onClick={openTracks} content="Tracks" />
        </Menu.Item>
        <Menu.Item>
          
          <Button onClick={openSearch} content="Search" />
        </Menu.Item>
        <Menu.Item>
          
          <Button content="Popular" />
        </Menu.Item>

        <Menu.Item>
          {/* onClick={} */}
          <Button content="Search Everything" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
