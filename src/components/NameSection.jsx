import React, { useState } from "react";
import DetailsSection from "./DetailsSection";

const NameSection = () => {
  const [name, setName] = useState("Zach Lamont");
  const [profile, setProfile] = useState(
    "I am a versatile professional with expertise in the water industry, front-end development, and music production. With a strong background in water quality management for urban water utilities, I possess a deep understanding of ensuring safe and sustainable water resources. My skills encompass water treatment processes, quality monitoring, and regulatory compliance."
  );
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
      <button onClick={handleEditClick} className="edit-button">
        Edit
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            
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
              <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
            </form>
          </div>
        </div>
      )}

      <div>
        <h1 className="name">{name}</h1>
        <DetailsSection />
        <p>{profile}</p>
      </div>
    </div>
  );
};

export default NameSection;
