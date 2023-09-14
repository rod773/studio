import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 100vw;
  z-index: 6;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuBtn = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
  list-style: none;
  color: ${(props) => props.theme.body};
`;

export const NavBar = () => {
  return (
    <div>
      <NavContainer>
        <MenuBtn>Menu</MenuBtn>
      </NavContainer>
    </div>
  );
};
