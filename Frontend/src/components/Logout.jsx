
import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Users");
    localStorage.removeItem("accessToken"); // Remove the token
    toast.success("Logout successfully");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    navigate("/"); // Redirect to the home page or another route
  };

  return (
    <button onClick={handleLogout} className="bg-red-600 text-white rounded-md px-3 py-1 hover:bg-red-700 duration-200">
      Logout
    </button>
  );
}

export default Logout;
