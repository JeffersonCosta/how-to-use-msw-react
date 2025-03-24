import { delay, http, HttpResponse } from 'msw'
import { User } from '../App'

const mock = [
  {
    userId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    name: 'Alice Silva',
    email: 'alice.silva@gmail.com',
  },
  {
    userId: 'b2c3d4e5-f678-9012-abcd-ef2345678901',
    name: 'Bruno Souza',
    email: 'bruno.souza@yahoo.com',
  },
  {
    userId: 'c3d4e5f6-7890-1234-abcd-ef3456789012',
    name: 'Carla Mendes',
    email: 'carla.mendes@outlook.com',
  },
  {
    userId: 'd4e5f678-9012-3456-abcd-ef4567890123',
    name: 'Daniel Oliveira',
    email: 'daniel.oliveira@hotmail.com',
  },
  {
    userId: 'e5f67890-1234-5678-abcd-ef5678901234',
    name: 'Elisa Costa',
    email: 'elisa.costa@icloud.com',
  },
];

export const handlers = [
  http.get('http://meudominio.com.br/users', async () => {

    await delay(2000);
    return HttpResponse.json<User[]>(mock);
  }),
]