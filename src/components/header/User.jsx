import React, { useState } from "react";

export const User = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);
  const close = () => {
    setProfileOpen(false);
  };
  return (
    <>
      <div className="profile">
        <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
          <img
            src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </button>
      </div>
    </>
  );
};
