import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  const [showDesc, setsetShowDesc] = useState(false);
  return (
    <Container
      style={{ background: "darkred" }}
      className="p-4 rounded-4 h-100 lang-card"
      onClick={() => setsetShowDesc(!showDesc)}
      type="button"
    >
      {!showDesc && (
        <Container>
          <Image className="lang-logo" src={img} width="70%"></Image>
          <h3 className="display-6 text-light">{name}</h3>
        </Container>
      )}

      {showDesc && (
        <ol className="h-100">
          {options.map((item) => {
            return <li className="text-start text-light h5">{item}</li>;
          })}
        </ol>
      )}
    </Container>
  );
};

export default Language;
