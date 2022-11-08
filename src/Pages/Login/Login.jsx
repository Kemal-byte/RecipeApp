import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Login.css";

const Loging = () => {
  const [account, setAccount] = useState(true);
  const [users, setUsers] = useState({});
  const [createAcc, setCreateAcc] = useState({
    email: "",
    password: "",
  });
  const url = "https://636a266dc07d8f936d947e88.mockapi.io/api/users";
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  useEffect(() => {
    async function getUser() {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
      // console.log(data);
    }
    getUser();
  }, []);
  console.log(users);

  // This one is for adding a user to the api
  const addUser = async (newUser) => {
    try {
      await axios.post(url, newUser);
    } catch (err) {
      console.log(err);
    }
  };

  // This will handle whether the user have an account or not. If yes it will check the inputs otherwise it will
  // make a post request to add user to the api.
  function handleClick(e) {
    if (email.value.trim() == "" || password.value.trim() == "") {
      alert("You cant have empty input fields");
      return;
    }
    e.preventDefault();
    if (account) {
      users.map((user) => {
        if (user.email === email.value && user.password === password.value) {
          console.log("Yes");
        } else {
          console.log("Incorrect email or password");
        }
      });
    } else {
      console.log("It has been posted");
      setCreateAcc((prev) => {
        let newUser = { ...prev };
        newUser.email = email.value;
        newUser.password = password.value;
        return { newUser };
      });
      addUser(createAcc);
    }
  }

  return (
    <div className="container-login">
      {/* <img
        src="https://raw.githubusercontent.com/clarusway/clarusway-full-stack-tr-12-22/88c9228d1bc95ff7f74e01944546f59ec93726c0/react/projects/005-Recipe-App/assets/home.svg?token=ATNSJ4AQNNDYRB645SKYAKDDNIREY"
        alt=""
      /> */}

      <h3 className="title">{account ? "Welcome" : "Register"}</h3>
      {account ? (
        <form action="get" className="form">
          <input type="email" id="email" placeholder="Email" required />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="btn btn-primary px-4"
            onClick={handleClick}
          >
            {account ? "Login" : "Register"}
          </button>
        </form>
      ) : (
        <form action="post" className="form">
          <input
            type="email"
            id="email"
            placeholder="Email - register"
            required
          />
          <input
            type="pasword"
            id="password"
            placeholder="Password"
            minLength={6}
            maxLength={12}
            required
          />
          <button
            type="submit"
            className="btn btn-primary px-4"
            onClick={handleClick}
          >
            {account ? "Login" : "Register"}
          </button>
        </form>
      )}

      {account && (
        <h6 onClick={() => setAccount(false)}>Don't have an account?</h6>
      )}
    </div>
  );
};

export default Loging;
