import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
`;

const About = () => {
  return (
    <Section>
      <Title>About Us</Title>
    </Section>
  );
};

export default About;
