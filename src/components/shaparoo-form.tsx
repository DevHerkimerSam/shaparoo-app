// Import deps
import React, { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ShaparooForm = () => {
  let { id } = useParams();
  console.log(id);
  if (id === undefined) {
    id = "0";
  }

  const shaparooId = id!;

  // Prepare states
  const [name, setName] = useState("");
  const [form, setForm] = useState("");
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(true);

  // Reset changable input fields
  const handleInputsReset = () => {
    setName("");
    setForm("");
    setColor("");
  };

  const handleShaparooFetch = (data: any) => {
    console.log("data.length: " + data.length);
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
    <div className="shaparoo-list-wrapper">
      {/* Form for creating new shaparoo */}
      <div className="shaparoo-list-form">
        <div className="form-wrapper" onSubmit={handleShaparooSubmit}>
          <div className="form-row">
            <input type="hidden" id="id" name="id" value={shaparooId} />
            <fieldset>
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
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="form">
                Enter form:
              </label>
              <input
                className="form-input"
                type="text"
                id="form"
                name="form"
                value={form}
                onChange={(e) => setForm(e.currentTarget.value)}
              />
            </fieldset>
          </div>

          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="color">
                Enter color:
              </label>
              <input
                className="form-input"
                type="text"
                id="color"
                name="color"
                value={color}
                onChange={(e) => setColor(e.currentTarget.value)}
              />
            </fieldset>
          </div>
        </div>

        <button onClick={handleShaparooSubmit} className="btn btn-add">
          {shaparooId === "0" ? "Add" : "Update"}
        </button>
      </div>
    </div>
  );
};
