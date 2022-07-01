import React from "react";

import { SucessBody, SucessImage, SucessContainer } from "./Sucess.Styled.js";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Sucess() {
  return (
    <div>
      <Header />
      <SucessBody>
        <SucessImage />
        <SucessContainer>
          <h2 id="h2">Our mission is</h2>
          <p id="p">Nossa missão é</p>
          <h1 id="h1">to transform the world</h1>
          <p id="p">transformar o mundo</p>
          <h1 id="h1">building digital experiences</h1>
          <p id="p">construindo experiências digitais</p>
          <h1 id="h1">that enable our clients growth</h1>
          <p id="p">que permitam o crescimento dos nossos clientes</p>
        </SucessContainer>
      </SucessBody>
      <Footer />
    </div>
  );

}
