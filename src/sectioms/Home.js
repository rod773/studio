import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  min-height: 200vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Section>
      <i>Video</i>
      <i>Logo</i>
      <i>NavBar</i>
    </Section>
  );
};

export default Home;
