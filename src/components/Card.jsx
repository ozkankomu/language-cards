import Language from "./Language";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { data } from "../helpers/data.js";
import { Col } from "react-bootstrap";

const Card = () => {
  console.log(data);
  return (
    <Container
      className="rounded-4 mt-4 p-4"
      style={{ backgroundColor: "#F48B29" }}
    >
      <h1 className="text-light mb-4" style={{ fontSize: "3rem" }}>
        Languages
      </h1>
      <Row className="g-3 justify-content-center">
        {data.map((lang, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index}>
              <Language {...lang} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
