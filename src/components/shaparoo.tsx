// Import deps
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

// Import components
import { ShaparooList, ShaparooListUI, ShaparooUI } from "./shaparoo-list";

// Import styles
import "./../styles/shaparoo.css";

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

  return (
    <div className="shaparoo-list-wrapper">
      {/* Render shaparoos list component */}
      <ShaparooList
        shaparoos={shaparoos}
        loading={loading}
        handleShaparooRemove={handleShaparooRemove}
      />

      {/* Show reset button if list contains at least one shaparoo */}
      {shaparoos.length > 0 && (
        <button className="btn btn-reset" onClick={handleListReset}>
          Reset shaparoos list.
        </button>
      )}
    </div>
  );
};

const ShaparooForm = (shaparoo: ShaparooUI) => {
  // Prepare states
  const [name, setName] = useState("");
  const [form, setForm] = useState("");
  const [color, setColor] = useState("");
  const [id, setId] = useState(0);

  // Reset all input fields
  const handleInputsReset = () => {
    setName("");
    setForm("");
    setColor("");
    setId(0);
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
        id: shaparoo.id,
        name: shaparoo.name,
        form: shaparoo.form,
        color: shaparoo.color,
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
        `There were incomplete required fields. Must include: name,`
      );
    } else if (id === 0) {
      // Create new shaparoo
      handleShaparooCreate();

      console.info(
        `Shaparoo ${name} with form ${form} and color ${color} added.`
      );
      // Reset all input fields
      handleInputsReset();
    } else {
      handleShaparooUpdate();
    }
  };
  return (
    <div className="shaparoo-list-wrapper">
      {/* Form for creating new shaparoo */}
      <div className="shaparoo-list-form">
        <div className="form-wrapper" onSubmit={handleShaparooSubmit}>
          <div className="form-row">
            <input type="hidden" id="id" name="id" value={id} />
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
          Add the shaparoo
        </button>
      </div>
    </div>
  );
};

export const ShaparooNew = () => {
  return <ShaparooForm id={0} name={""} form={""} color={""} />;
};

export const ShaparooShow = () => {
  return (
    <>
      <h2>Shaparoo Show</h2>
    </>
  );
};

export const ShaparooEdit = () => {
  return (
    <>
      <h2>Shaparoo Edit</h2>
    </>
  );
};

// Create Shaparoo component
export const Shaparoo = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
