import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <div></div>
      <h1>Users Management System</h1>
      <h3>Numbers of Users: {users.length}</h3>
    </>
  );
}

export default App;
