import React, { useState } from "react";

const NameSection = () => {
  const [name, setName] = useState("Zach");
  const [profile, setProfile] = useState("Developer");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newProfile, setNewProfile] = useState("");

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewName("");
    setNewProfile("");
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleProfileChange = (e) => {
    setNewProfile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName !== "") {
      setName(newName);
    }
    if (newProfile !== "") {
      setProfile(newProfile);
    }
    handleCloseModal();
  };

  return (
    <div className="name-section">
      <h2>Name Section</h2>
      <button onClick={handleEditClick}>Edit</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  value={newName}
                  onChange={handleNameChange}
                />
              </label>
              <label>
                Profile:
                <input
                  type="text"
                  value={newProfile}
                  onChange={handleProfileChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <div>
        <h3>Details</h3>
        <p>Name: {name}</p>
        <p>Profile: {profile}</p>
      </div>
    </div>
  );
};

export default NameSection;
