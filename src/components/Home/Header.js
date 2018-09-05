import React from 'react';

const Header = () => {
  return (
    <div>
      <h1 className="jumbotron-heading text-white my-4">Welcome</h1>
      <p className="lead text-info">
        Have fun playing with the trader
      </p>
      <p className="font-weight-light text-white">
        There are a few things implemented.
        You can choose the company to trade stock items for.
        Before you can use them you need to login.
      </p>
    </div>
  );
}

export default Header;
