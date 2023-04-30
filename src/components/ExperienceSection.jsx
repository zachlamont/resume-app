import React, { useState } from "react";

const ExperienceSection = () => {
  const [experienceList, setExperienceList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperienceList([...experienceList, newExperience]);
    setNewExperience({
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
    setIsModalOpen(false);
  };

  const handleDelete = (index) => {
    const updatedList = experienceList.filter((_, i) => i !== index);
    setExperienceList(updatedList);
  };

  return (
    <div className="experience-section">
      <h2>Experience Section</h2>
      <button onClick={handleAddClick}>Add</button>

      {experienceList.map((experience, index) => (
        <ExperienceCard
          key={index}
          experience={experience}
          onDelete={() => handleDelete(index)}
        />
      ))}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
            <form onSubmit={handleSubmit}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={newExperience.title}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Company:
                <input
                  type="text"
                  name="company"
                  value={newExperience.company}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Start Date:
                <input
                  type="text"
                  name="startDate"
                  value={newExperience.startDate}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                End Date:
                <input
                  type="text"
                  name="endDate"
                  value={newExperience.endDate}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Location:
                <input
                  type="text"
                  name="location"
                  value={newExperience.location}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={newExperience.description}
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

const ExperienceCard = ({ experience, onDelete }) => {
  return (
    <div className="experience-card">
      <p>Title: {experience.title}</p>
      <p>Company: {experience.company}</p>
      <p>Start Date: {experience.startDate}</p>
      <p>End Date: {experience.endDate}</p>
      <p>Location: {experience.location}</p>
      <p>Description: {experience.description}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ExperienceSection;
