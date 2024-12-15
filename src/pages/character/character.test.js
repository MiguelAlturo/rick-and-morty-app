import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Para envolver el componente con un router
import CharacterPage from "./CharacterPage"; // Asegúrate de ajustar la ruta a tu archivo
import * as api from "../../api/services"; // Mockear las funciones de api
import { SimpleCharacter } from "../../characters"; // Importamos SimpleCharacter para comprobar su renderizado

// Mock de getCharacter
jest.mock("../../api/services", () => ({
  getCharacter: jest.fn(),
}));

// Mock de useParams
jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

describe("CharacterPage", () => {
  it("debería renderizar el componente SimpleCharacter cuando getCharacter devuelve un personaje", async () => {
    // Datos ficticios del personaje
    const mockCharacter = {
      id: 1,
      name: "Rick Sanchez",
      species: "Human",
      gender: "Male",
      image: "rick-image.jpg",
    };

    // Mock de useParams para devolver un id ficticio
    require("react-router-dom").useParams.mockReturnValue({ id: "1" });

    // Mock de getCharacter para devolver un personaje
    api.getCharacter.mockResolvedValue(mockCharacter);

    // Renderizamos el componente dentro de un MemoryRouter (necesario para el enrutamiento)
    render(
      <MemoryRouter>
        <CharacterPage />
      </MemoryRouter>
    );

    // Verificamos que el SimpleCharacter con los datos del personaje se haya renderizado
    await waitFor(() => {
      expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
      expect(screen.getByText("Human")).toBeInTheDocument();
      expect(screen.getByText("Male")).toBeInTheDocument();
    });
  });

  it("debería mostrar un estado de carga o vacío si no se encuentra un personaje", async () => {
    // Mock de getCharacter para simular que no hay personaje
    api.getCharacter.mockResolvedValue(null);

    // Mock de useParams para devolver un id ficticio
    require("react-router-dom").useParams.mockReturnValue({ id: "1" });

    // Renderizamos el componente
    render(
      <MemoryRouter>
        <CharacterPage />
      </MemoryRouter>
    );

    // Esperamos que el componente SimpleCharacter no se renderice si no se ha cargado un personaje
    await waitFor(() => {
      expect(screen.queryByText("Rick Sanchez")).not.toBeInTheDocument();
    });
  });
});
