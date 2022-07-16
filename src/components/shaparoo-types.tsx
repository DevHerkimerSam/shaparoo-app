import React from "react";

// Create interfaces
export interface ShaparooUI {
  id: number;
  name: string;
  form: string;
  color: string;
}

export interface ShaparooListUI {
  shaparoos: ShaparooUI[];
  loading: boolean;
  handleShaparooRemove: (id: number, name: string) => void;
}

export interface ShaparooListRowUI {
  position: number;
  shaparoo: {
    id: number;
    name: string;
    form: string;
    color: string;
  };
  handleShaparooRemove: (id: number, name: string) => void;
}

export interface ShaparooCardUI {
  position: number;
  shaparoo: {
    id: number;
    name: string;
    form: string;
    color: string;
  };
  handleShaparooRemove: (id: number, name: string) => void;
}
