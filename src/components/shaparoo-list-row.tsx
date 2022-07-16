// Import deps
import React from "react";

// Import interfaces

import { ShaparooListRowUI } from "./shaparoo-types";

// Create ShaparooListRow component
export const ShaparooListRow = (props: ShaparooListRowUI) => (
  <tr className="table-row">
    <td className="table-item">{props.position}</td>

    <td className="table-item">{props.shaparoo.name}</td>

    <td className="table-item">{props.shaparoo.form}</td>

    <td className="table-item">{props.shaparoo.color}</td>

    <td className="table-item">
      <button
        className="btn btn-remove"
        onClick={() =>
          props.handleShaparooRemove(props.shaparoo.id, props.shaparoo.name)
        }
      >
        Remove shaparoo
      </button>
    </td>
  </tr>
);
