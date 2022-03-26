import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../assets/logo.svg";

export default function Home() {
  return (
    <Card border="secondary" bg="primary" className="text-center">
      <Card.Img src={logo} alt="Card image" id="App-logo" />
      <Card.ImgOverlay>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
