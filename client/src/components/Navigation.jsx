import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
      <div className="nav-div">
        <h1 className="nav-header">
          Car Trader
        </h1>
        <table className="nav-table">
          <tr className="nav-row">
            <td className="nav-column">
              <Link className="nav-link" to="/">Home</Link>
            </td>
            <td className="nav-column">
              <Link className="nav-link" to="/login">Login</Link>
            </td>
            <td className="nav-column">
              <Link className="nav-link" to="/post">Create Post</Link>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Navigation;
