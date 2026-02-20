import { useState, useEffect } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

function Users() {

  const [users, setUsers] = useState<any[]>([]);

  async function getUsers() {
    try {
      const snapshot = await getDocs(collection(db, "users"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addUser() {
    try {
      const body = { nome: "Fulano", telefone: "(99) 99999-9999", email: "fulano@mail.com" }
      await addDoc(collection(db, "users"), body);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <button onClick={addUser}>Add</button>
      <h1>Users</h1>
      {users?.map(user => (
        <p>{user?.nome}</p>
      ))}
    </>
  );
}

export default Users;
