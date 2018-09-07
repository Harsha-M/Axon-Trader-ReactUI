import React from 'react';

const Header = () => {
  return (
    <div>
      <h1 className="homepage-heading">Welcome</h1>
      <p className="text-info-homepage header-info">
        Have fun playing with the trader
      </p>
      <p className="text-homepage">
        There are a few things implemented.
        You can choose the company to trade stock items for.
        Before you can use them you need to login.
      </p>
    </div>
  );
}

export default Header;
