import React from "react";

import { addToWatchlist } from "../actions/user";

const Main = () => {
  const stock = "apple";

  return (
    <>
      <button onClick={stock => addToWatchlist(stock)}>Test3</button>
    </>
  );
};

export default Main;