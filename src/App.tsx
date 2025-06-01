import { useEffect, useState } from "react";
import type { User } from "./types.ts";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Failed to fetch users.");
      }
      const data: User[] = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);


  return <UserList users={users} />;
};

export default App;