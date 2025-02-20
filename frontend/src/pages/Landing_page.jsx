import { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  return (
    <div className="container">
      {!selectedRole ? (
        <div className="role-selection">
          <h1 className="title">Choose Your Role</h1>
          <div className="cards">
            <Link to="/admin" className="beautiful-card">
              <h2>Admin</h2>
              <p>Manage the system</p>
            </Link>
            <Link to="/user" className="beautiful-card">
              <h2>User</h2>
              <p>Access the platform</p>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
