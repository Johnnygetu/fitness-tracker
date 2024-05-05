import "./fitness.css";
export default function App() {
  return (
    <>
      <div className="card">
        <div className="acc">
          <span className="accLabel">Users</span>
          <div className="accContainer">
            <ul>
              <UsersList />
            </ul>
            <svg
              className="addAcc"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </div>
        </div>
        <Status/>
      </div>
    </>
  );
}

function UsersList() {
  return (
    <li className="accList">
      <svg
        className="profileImg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
      </svg>
      Johnny
    </li>
  );
}

function Status() {
  return (
    <div className="status">
      <span className="name">Johnny</span>
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
