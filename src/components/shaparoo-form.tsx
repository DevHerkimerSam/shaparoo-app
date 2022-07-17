// Import deps
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ShaparooForm = () => {
  let { id } = useParams();
  if (id === undefined) {
    id = "0";
  }

  const shaparooId = id!;

  // Prepare states
  const [name, setName] = useState("");
  const [form, setForm] = useState("");
  const [color, setColor] = useState("#0000FF");
  const [loading, setLoading] = useState(true);

  // Reset changable input fields
  const handleInputsReset = () => {
    setName("");
    setForm("");
    setColor("#0000FF");
  };

  const handleShaparooFetch = (data: any) => {
    if (data.length === 0) {
      handleInputsReset();
    } else {
      const record = data[0];
      setName(record.name);
      setForm(record.form);
      setColor(record.color);
    }
  };

  // Fetch shaparoo on initial render
  useEffect(() => {
    fetchShaparoo();
  }, []);

  // Fetch shaparoo if shaparooId is not null
  const fetchShaparoo = async () => {
    if (shaparooId === "0") {
      handleInputsReset();
    } else {
      // Send GET request to 'shaparoos/one' endpoint
      axios
        .get(`http://localhost:4001/shaparoos/one`, {
          params: { id: shaparooId },
        })
        .then((response) => {
          // Update the shaparoos state
          handleShaparooFetch(response.data);
          // Update loading state
          setLoading(false);
        })
        .catch((error) =>
          console.error(
            `There was an error retrieving the shaparoo list: ${error}`
          )
        );
    }
  };

  // Create new shaparoo
  const handleShaparooCreate = () => {
    // Send POST request to 'shaparoos/create' endpoint
    axios
      .post("http://localhost:4001/shaparoos/create", {
        name: name,
        form: form,
        color: color,
      })
      .catch((error) =>
        console.error(
          `There was an error creating the ${name} shaparoo: ${error}`
        )
      );
  };

  // Update a shaparoo
  const handleShaparooUpdate = () => {
    // Send PUT request to 'shaparoos/update' endpoint
    axios
      .put("http://localhost:4001/shaparoos/update", {
        id: shaparooId,
        name: name,
        form: form,
        color: color,
      })
      .catch((error) =>
        console.error(
          `There was an error updating the ${name} shaparoo: ${error}`
        )
      );
  };

  // Submit new shaparoo
  const handleShaparooSubmit = () => {
    // Check if all fields are filled
    if (!(name.length > 0 && form.length > 0 && color.length > 0)) {
      console.error(
        `There were incomplete required fields. Must include: name, form, and color`
      );
    } else if (shaparooId === "0") {
      // Create new shaparoo
      handleShaparooCreate();

      console.info(
        `Shaparoo ${name} with form ${form} and color ${color} added.`
      );
    } else {
      handleShaparooUpdate();
      console.info(
        `Shaparoo ${name} with form ${form} and color ${color} updated.`
      );
    }
    handleInputsReset();
  };

  return (
    <div className="container">
      <h2>
        {shaparooId === "0"
          ? "Make a Shaparoo!"
          : `Edit Shaparoo: ${shaparooId}`}
      </h2>
      <form onSubmit={handleShaparooSubmit}>
        {/* Form for creating new shaparoo */}
        <input type="hidden" id="id" name="id" value={shaparooId} />
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Enter name:
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="form">
            Choose form:
          </label>
          <select
            className="form-input"
            id="form"
            name="form"
            value={form}
            onChange={(e) => setForm(e.currentTarget.value)}
          >
            <option value="">Please select ...</option>
            <option value="triangle">triangle</option>
            <option value="circle">circle</option>
            <option value="square">square</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="color">
            Pick color:
          </label>
          <input
            className="form-input"
            type="color"
            id="color"
            name="color"
            value={color}
            onChange={(e) => setColor(e.currentTarget.value)}
          />
        </div>

        <button onClick={handleShaparooSubmit} className="btn btn-primary">
          {shaparooId === "0" ? "Add" : "Update"}
        </button>
      </form>
    </div>
  );
};
