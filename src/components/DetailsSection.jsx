import React, { useState } from "react";

const DetailsSection = () => {
  const initialState = {
    name: "Zach",
    address: "Morayfield",
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
      <h2>Details Section</h2>
      <p>Name: {details.name}</p>
      <p>Address: {details.address}</p>
      <p>Phone: {details.phone}</p>
      <p>Website: {details.website}</p>
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
                  name="name"
                  value={editedDetails.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={editedDetails.address}
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
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsSection;
