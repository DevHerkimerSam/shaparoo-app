import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { ShaparooImage } from "./shaparoo-image";

// Import interfaces
import { ShaparooCardUI } from "./shaparoo-types";

export function ShaparooCard(props: ShaparooCardUI) {
  return (
    <Link className="card-link" to={`/shaparoos/${props.shaparoo.id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.shaparoo.name}</Card.Title>
          <ShaparooImage
            form={props.shaparoo.form}
            color={props.shaparoo.color}
          />
        </Card.Body>
      </Card>
    </Link>
  );
}
