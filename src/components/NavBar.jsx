import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar bg-gray-900 flex justify-between items-center text-white">
      <p className="text-xl mx-2 ">Tuwaiq</p>
      <div className="flex gap-10 me-10">
        <Link to={'../'}>Home</Link>
        <Link to={'../info'}>info</Link>
        <Link to={'../login'}>Login</Link>
      </div>
    </div>
  );
}

export default NavBar;
