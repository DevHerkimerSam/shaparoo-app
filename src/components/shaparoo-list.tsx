// Import deps
import React from "react";

// Import components
import { ShaparooListRow } from "./shaparoo-list-row";

// Import interfaces
import { ShaparooUI, ShaparooListUI } from "./shaparoo-types";

// Import styles
import "./../styles/shaparoo-list.css";

// Create ShaparooList component
export const ShaparooList = (props: ShaparooListUI) => {
  // Show loading message
  if (props.loading) return <p>Shaparoos table is loading...</p>;

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-head-item" />

          <th className="table-head-item">Name</th>

          <th className="table-head-item">Form</th>

          <th className="table-head-item">Color</th>

          <th className="table-head-item" />
        </tr>
      </thead>

      <tbody className="table-body">
        {props.shaparoos.length > 0 ? (
          props.shaparoos.map((shaparoo: ShaparooUI, idx) => (
            <ShaparooListRow
              key={shaparoo.id}
              shaparoo={shaparoo}
              position={idx + 1}
              handleShaparooRemove={props.handleShaparooRemove}
            />
          ))
        ) : (
          <tr className="table-row">
            <td
              className="table-item"
              style={{ textAlign: "center" }}
              colSpan={6}
            >
              There are no shaparoos to show. Create one!
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
