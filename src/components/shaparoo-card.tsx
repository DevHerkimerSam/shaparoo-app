import Card from "react-bootstrap/Card";

// Import interfaces
import { ShaparooCardUI } from "./shaparoo-types";

export function ShaparooCard(props: ShaparooCardUI) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.shaparoo.name}</Card.Title>
        <Card.Text>
          <svg width="200" height="200" version="1.1">
            <circle cx="25" cy="75" r="20" fill={props.shaparoo.color} />
          </svg>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
