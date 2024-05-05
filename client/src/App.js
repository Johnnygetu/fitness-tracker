import "./fitness.css";
import { useEffect, useState } from "react";
export default function App() {
  const [state, setState] = useState("status");
  const [allUsers, setAllUser] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null)

  useEffect(function () {
    async function getAllUsers() {
      const res = await fetch("http://127.0.0.1:6969/users");
      const data = await res.json();
      console.log(data);
      setAllUser(data.data.users);
    }
    getAllUsers();
  }, []);

  async function addUser(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:6969/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.status === "success") {
        setAllUser((a) => [...a, data.data.user]);
      }
      setState("status");
      setLoading(false);
    } catch (err) {}
  }

  async function getUserData(){

  }

  return (
    <>
      <div className="card">
        <div className="acc">
          <span className="accLabel">Users</span>
          <div className="accContainer">
            <ul>
              {allUsers.map((user) => (
                <UsersList user={user} selectedId={selectedId} setSelectedId={setSelectedId}/>
              ))}
            </ul>
            <svg
              className="addAcc"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              onClick={() => setState("form")}
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </div>
        </div>
        {state === "status" && <Status selectedId={selectedId} />}
        {state === "form" && (
          <AddForm
            setFormData={setFormData}
            addUser={addUser}
            loading={loading}
          />
        )}
      </div>
    </>
  );
}

function UsersList({ user ,selectedId, setSelectedId}) {
  return (
    <li className={`accList ${selectedId === user._id ? "selectedUser": ""}` }onClick={()=>(setSelectedId(user._id))}>
      {/* <svg
        className="profileImg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
      </svg> */}
      {user ? user.name : "Loading..."}
    </li>
  );
}

function Status({}) {
  return (
    <div className="status">
      <span className="stat-name">Johnny</span>
      <div className="bmiStatus">
        <b>BMI</b>: 22
      </div>
      <div className="otherStatus">
        <div className="ageStatus">
          <b>Age</b>: 20
        </div>
        <div className="heightStatus">
          <b>Height</b>: 1.75m
        </div>
        <div className="weightStatus">
          <b>Weight</b>: 71kg
        </div>
      </div>
    </div>
  );
}

function AddForm({ setFormData, addUser, loading }) {
  return (
    <div className="userFormCard">
      {loading ? (
        <Loader />
      ) : (
        <>
          <span className="formLabel">User Form</span>
          <form onSubmit={(e) => addUser(e)} action="">
            <span className="userForm name">
              Name:{" "}
              <input
                type="text"
                onChange={(e) =>
                  setFormData((form) => ({ ...form, name: e.target.value }))
                }
                required
              />
            </span>
            <span className="userForm age">
              Age:{" "}
              <input
                type="number"
                onChange={(e) =>
                  setFormData((form) => ({
                    ...form,
                    age: Number(e.target.value),
                  }))
                }
                required
              />
            </span>
            <span className="userForm weight">
              Weight:{" "}
              <input
                type="number"
                onChange={(e) =>
                  setFormData((form) => ({
                    ...form,
                    weight: Number(e.target.value),
                  }))
                }
                required
              />
            </span>
            <span className="userForm height">
              Height:{" "}
              <input
                type="number"
                onChange={(e) =>
                  setFormData((form) => ({
                    ...form,
                    height: Number(e.target.value),
                  }))
                }
              />
            </span>
            <input className="submit" type="submit" required />
          </form>
        </>
      )}
    </div>
  );
}

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
}
