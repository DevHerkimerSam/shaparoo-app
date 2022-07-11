// Import deps
import React from 'react'

// Create interfaces
interface ShaparooListRowUI {
  position: number;
  shaparoo: {
    id: number;
    name: string;
    form: string;
    color: string;
  }
  handleShaparooRemove: (id: number, name: string) => void;
}

// Create ShaparooListRow component
export const ShaparooListRow = (props: ShaparooListRowUI) => (
  <tr className="table-row">
    <td className="table-item">
      {props.position}
    </td>

    <td className="table-item">
      {props.shaparoo.name}
    </td>

    <td className="table-item">
      {props.shaparoo.form}
    </td>

    <td className="table-item">
      {props.shaparoo.color}
    </td>

    <td className="table-item">
      <button
        className="btn btn-remove"
        onClick={() => props.handleShaparooRemove(props.shaparoo.id, props.shaparoo.name)}>
        Remove shaparoo
      </button>
    </td>
  </tr>
)