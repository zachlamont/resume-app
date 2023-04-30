import React, { useState } from 'react';

const EducationSection = () => {
  const [educationList, setEducationList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEducation, setNewEducation] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: ''
  });

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducationList([...educationList, newEducation]);
    setNewEducation({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: ''
    });
    setIsModalOpen(false);
  };

  const handleDelete = (index) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedList);
  };

  return (
    <div className='education-section'>
      <h2>Education Section</h2>
      <button onClick={handleAddClick}>Add</button>

      {educationList.map((education, index) => (
        <EducationCard
          key={index}
          education={education}
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
                School:
                <input
                  type="text"
                  name="school"
                  value={newEducation.school}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Degree:
                <input
                  type="text"
                  name="degree"
                  value={newEducation.degree}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Start Date:
                <input
                  type="text"
                  name="startDate"
                  value={newEducation.startDate}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                End Date:
                <input
                  type="text"
                  name="endDate"
                  value={newEducation.endDate}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Location:
                <input
                  type="text"
                  name="location"
                  value={newEducation.location}
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

const EducationCard = ({ education, onDelete }) => {
  return (
    <div className="education-card">
      <p>School: {education.school}</p>
      <p>Degree: {education.degree}</p>
      <p>Start Date: {education.startDate}</p>
      <p>End Date: {education.endDate}</p>
      <p>Location: {education.location}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default EducationSection;

