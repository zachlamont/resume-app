import React, { useState } from "react";

const ExperienceSection = () => {
  const [experienceList, setExperienceList] = useState([
    {
      company: "Unitywater",
      description: "Actively review practices to ensure ongoing compliance to the drinking water quality management system ensuring protection of public health in accordance with relevant legislation and policies. Identify operational risks and instigate operational contingenciesas required to maintain water quality within the network.",
      endDate: "Current",
      location: "Sunshine Coast, QLD",
      startDate: "Aug 2022",
      title: "Water Quality Technician",
    },
    {
      company: "Unitywater",
      description:
        "Review and analyse the water quality performance and the identification of emerging water quality trends and prepare formal reports to meet statutory requirements. Lead collaborative investigations to identify engineering solutions for complex water quality related issues. Deliver projects relating to water quality matters including field investigations with the ability to utilise water quality instruments and conduct field tests.",
      endDate: "Aug 2022",
      location: "Sunshine Coast, QLD",
      startDate: "Apr 2021",
      title: "Water Quality Officer",
    },
  ]);
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
  console.log(experienceList);
  return (
    <div className="experience-section">
      <h2>Experience</h2>
      <button onClick={handleAddClick} className="edit-button">
        Add
      </button>

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

const ExperienceCard = ({ experience, onDelete }) => {
  return (
    <div className="experience-card">
      <h3>{experience.title} | {experience.startDate} - {experience.endDate}</h3>
      <p>{experience.company}</p>
      <p>{experience.location}</p>
      <p className="description">{experience.description}</p>
      <hr />
      <button onClick={onDelete} className='delete-button'>Delete</button>
    </div>
  );
};

export default ExperienceSection;
