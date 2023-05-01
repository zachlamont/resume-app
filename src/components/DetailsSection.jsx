import React, { useState } from "react";

const DetailsSection = () => {
  const initialState = {
    name: "Zach",
    email: "zachlamont1@gmail.com",
    phone: "0437767345",
    website: "zachlamont.com",
  };

  const [details, setDetails] = useState(initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedDetails, setEditedDetails] = useState(initialState);

  const handleEditClick = () => {
    setIsModalOpen(true);
    setEditedDetails(details);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails(editedDetails);
    setIsModalOpen(false);
  };

  return (
    <div className="details-section">
      <p>{details.email} </p>
      <p>|</p>
      <p>{details.phone}</p>
      <p>|</p>
      <p>{details.website}</p>
      <button onClick={handleEditClick} className="edit-button">Edit</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  value={editedDetails.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={editedDetails.phone}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Website:
                <input
                  type="text"
                  name="website"
                  value={editedDetails.website}
                  onChange={handleInputChange}
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
    </div>
  );
};

export default DetailsSection;
