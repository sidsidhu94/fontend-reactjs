import React from "react";

const SideNavbar = () => {
  return (
    <div className="px-5">
      <ul className="menu bg-base-200 w-56 rounded-box mt-10 px-5">
        <li>
          <a>Filter</a>
        </li>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <li>
                <a>level 2 item 1</a>
              </li>
              <li>
                <a>level 2 item 2</a>
              </li>
              <li>
                <details open>
                  <summary>Parent</summary>
                  <ul>
                    <li>
                      <a>level 3 item 1</a>
                    </li>
                    <li>
                      <a>level 3 item 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
