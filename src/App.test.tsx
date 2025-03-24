import { afterAll, beforeAll, describe, expect, test } from 'vitest'
import { setupServer } from "msw/node";
import { handlers } from "./mocks/handlers";
import App from "./App";
import { afterEach } from 'node:test';
import { render, screen, waitFor } from '@testing-library/react';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("<App/> Component", () => {
  test("deve fazer uma requisição para obter os usuários", async () => {
    render(<App />);

    expect(screen.getByText(/carregando lista de usuários.../i)).toBeDefined();

    await waitFor(() => {
      expect(screen.getByText(/Alice Silva/i)).toBeDefined();
      expect(screen.getByText(/Bruno Souza/i)).toBeDefined();
    }, {
      timeout: 2100
      // Aguarda o delay configurado no msw para carregar a lista de usuários
      // Obs*: Não usar essa abordagem em testes, isto é apenas um exemplo
    });
  });
});
