import React from "react";
import {useNavigate} from 'react-router-dom'

const Header = () => {

  const navigate=useNavigate()
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a  className="btn btn-ghost normal-case text-3xl  text-cyan-700">fe.Work</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal font-bold px-1 text-xl text-cyan-700">
            <li>
              <a onClick={() => navigate('/signin')}>Sign In</a>
            </li>
            <li>
              <a onClick={() => navigate('/register')} >Register</a>
            </li>
            {/* <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>SignIn</a>
                  </li>
                  <li>
                    <a>Register</a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
