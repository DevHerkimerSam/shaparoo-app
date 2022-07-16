// Import deps
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { ShaparooUI } from "./shaparoo-types";
import { ShaparooCard } from "./shaparoo-card";

export const ShaparooGallery = () => {
  const [shaparoos, setShaparoos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all shaparoos on initial render
  useEffect(() => {
    fetchShaparoos();
  }, []);

  // Fetch all shaparoos
  const fetchShaparoos = async () => {
    // Send GET request to 'shaparoos/all' endpoint
    axios
      .get("http://localhost:4001/shaparoos/all")
      .then((response) => {
        // Update the shaparoos state
        setShaparoos(response.data);

        // Update loading state
        setLoading(false);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the shaparoo list: ${error}`
        )
      );
  };

  // Reset shaparoo list (remove all shaparoos)
  const handleListReset = () => {
    // Send PUT request to 'shaparoos/reset' endpoint
    axios
      .put("http://localhost:4001/shaparoo/reset")
      .then(() => {
        // Fetch all shaparoos to refresh
        // the shaparoos on the shaparoos list
        fetchShaparoos();
      })
      .catch((error) =>
        console.error(
          `There was an error resetting the shaparoo list: ${error}`
        )
      );
  };

  // Remove shaparoo
  const handleShaparooRemove = (id: number, name: string) => {
    // Send PUT request to 'shaparoos/delete' endpoint
    axios
      .put("http://localhost:4001/shaparoos/delete", { id: id })
      .then(() => {
        console.log(`Shaparoo ${name} removed.`);

        // Fetch all shaparoos to refresh
        // the shaparoos on the shaparoos list
        fetchShaparoos();
      })
      .catch((error) =>
        console.error(
          `There was an error removing the ${name} shaparoo: ${error}`
        )
      );
  };

  // Show loading message
  if (loading) return <p>Shaparoos table is loading...</p>;

  return (
    <CardGroup>
      {shaparoos.length > 0 ? (
        shaparoos.map((shaparoo: ShaparooUI, idx) => (
          <ShaparooCard
            key={shaparoo.id}
            shaparoo={shaparoo}
            position={idx + 1}
            handleShaparooRemove={handleShaparooRemove}
          />
        ))
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Empty Gallery</Card.Title>
            <Card.Text>There are no shaparoos to show.</Card.Text>
            <Link role="button" className="btn btn-primary" to="/shaparoos/new">
              Create One!
            </Link>
          </Card.Body>
        </Card>
      )}
    </CardGroup>
  );
};
