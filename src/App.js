import React, { useState, useEffect } from "react";
import Greeter from "./Greeter";

const App = (props) => {
  const [username, setUsername] = useState("");
  const [hasLoaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log("hasLoaded has changed");
  }, [hasLoaded]);

  if (hasLoaded) {
    return (
      <div>
        <Greeter phrase={"Hello"} name={"Whitney!"} />
        <Greeter phrase={"Hi"} name={"Janay"} />
        <Greeter phrase={"Bye"} name={"Whitney!"} />

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <p>You are logged in {username}</p>
      </div>
    );
  } else {
    return (
      <>
        <h1>Website is loading....</h1>
        <button onClick={() => setLoaded(true)}>Load Website</button>
      </>
    );
  }
};

export default App;
