import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCRUDComponent = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editingUser, setEditingUser] = useState(null);
  const[file,setFile] = useState("")

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const upload = async () => {
    try {
      const formData = new FormData()
      formData.append("file", file)
      const res = await axios.post("/upload", formData)
      console.log(res.data)
    } catch (err) { (console.log(err)) };
  }

  const addUser = async () => {
    try {
      const response = await axios.post("/users", newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: "", email: "" });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.put(`/users/${editingUser.id}`, editingUser);
      const updatedUsers = users.map((user) =>
        user.id === editingUser.id ? editingUser : user
      );
      setUsers(updatedUsers);
      setEditingUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleClick = async e => {
    e.preventDefault()
    const imgUrl=upload()
   try{

   }catch(err){
    console.log(err)
   }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  return (

    <div>
      <br /><br /><br /><br /><br />
      <h1>User </h1>

      {/* Add User Form */}
      <h2>Add User</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newUser.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={newUser.email}
        onChange={handleInputChange}
      />
      <button onClick={addUser}>Add User</button>
      <button onClick={ handleClick }>upload</button>

      {/* User List */}
      <h2>User List</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => editUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Edit User Form */}
      {editingUser && (
        <div>
          <h2>Edit User</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={editingUser.name}
            onChange={(e) =>
              setEditingUser((prevUser) => ({
                ...prevUser,
                name: e.target.value,
              }))
            }
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={editingUser.email}
            onChange={(e) =>
              setEditingUser((prevUser) => ({
                ...prevUser,
                email: e.target.value,
              }))
            }
          />
          <button onClick={updateUser}>Update User</button>
          <button onClick={() => setEditingUser(null)}>Cancel</button>
          <br />
          
        </div>

      )}
    </div>

  );
};

export default UserCRUDComponent;

