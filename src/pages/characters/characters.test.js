import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Para envolver el componente con un router
import Characters from "./Characters"; // Ajusta la ruta a tu archivo
import * as api from "../../api/services"; // Mock de la API
import { useAppDispatch, useAppSelector } from "../../store"; // Mock de redux hooks
import {
  setFilterSpecies,
  setFilterStatus,
} from "../../store/filter/filterSlice";

// Mock de getCharacters
jest.mock("../../api/services", () => ({
  getCharacters: jest.fn(),
}));

// Mock de useAppSelector y useAppDispatch
jest.mock("../../store", () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

// Mock de componentes hijos
jest.mock("../../characters", () => ({
  Loading: () => <div>Loading...</div>,
  CharactersGrid: ({ characters }) => <div>{characters.length} characters</div>,
  Filter: ({ handleFilter }) => (
    <button onClick={() => handleFilter({ type: "status", value: "alive" })}>
      Set Status Filter
    </button>
  ),
  Pagination: ({ changePagination }) => (
    <button onClick={() => changePagination("2")}>Next Page</button>
  ),
}));

describe("Characters Component", () => {});
