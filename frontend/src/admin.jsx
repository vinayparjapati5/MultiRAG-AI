import React, { useState } from "react";
import "./Admin.css";

function AdminPortal() {
  const [file, setFile] = useState(null);
  return (
    <>
      <div className="main-container">
        <header className="main-heading">
          <h1>Welcome to the Admin Portal</h1>
        </header>
      </div>

      <div className="card-container">
        <div className="card">
          <h1>Upload Docs.</h1>
          <p>Upload your documents and videos related things.</p>
          <button className="button">Upload Docs</button>
        </div>

        <div className="card">
          <h1>Preview Docs</h1>
          <p>Click to check preview of the documents you've uploaded recently.</p>
          <button className="button">Preview Docs</button>
        </div>

        <div className="card">
          <h1>Settings Docs</h1>
          <p>Click to set new settings for the uploaded documents.</p>
          <button className="button">Setting Docs</button>
        </div>
      </div>
    </>
  );
}
export default AdminPortal;
