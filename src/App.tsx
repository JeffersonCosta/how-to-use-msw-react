import axios from "axios";
import { useEffect, useState } from "react";

export type User = {
  name: string;
  email: string;
  userId: string;
}

function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  useEffect(() => {

    function getUsers() {
      setLoadingUsers(true);

      axios
        .get<User[]>("http://meudominio.com.br/users")
        .then(({ data }) => {
          setUsers(data);
        })
        .finally(() => setLoadingUsers(false))
    }

    getUsers();
  }, []);

  return (
    <>
      <h1>User list</h1>
      <div>
        {
          loadingUsers
            ? (
              <p>Carregando lista de usuários...</p>
            ) : (
              <ul>
                {
                  users.map(user => (
                    <li key={user.userId}>{user.name} - {user.email}</li>
                  ))
                }
              </ul>
            )
        }
      </div>
    </>
  )
}

export default App
