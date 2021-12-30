import React from "react";
import Jumbotron from "../../components/Jumbotron/index";
import BootstrapCarousel from "../../components/BootstrapCarousel/index";
import Navbar from "../../components/Navbar/index";
import Container from "../../components/Container/index"
import Footer from "../../components/Footer/index";
import Wrapper from "../../components/Wrapper/index";
const Home = () => {
  


  return (
    <Container>
      <Wrapper>
        <Jumbotron/>
        <Navbar/>
        <BootstrapCarousel/>
        <Footer/>
      </Wrapper>
    </Container>
  );


};

export default Home;
