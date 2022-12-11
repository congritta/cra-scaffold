import {NavLink} from "react-router-dom";
import React from "react";

export default function Navigation() {

  // Render
  return (
    <div
      style={{
        marginTop: 10
      }}
    >
      <hr />
      <h2>Navigation</h2>

      <div
        className="flex _wrap" style={{
          marginTop: 10
        }}
      >
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/sendNotification">
          Send Notification
        </NavLink>
        <NavLink to="/infiniteScroll">
          Infinite Scroll
        </NavLink>
      </div>
    </div>
  );
}
