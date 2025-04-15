import React, { useState, useEffect } from 'react';
import API from '../services/api';

const FormSubmission = () => {
  const [submissions, setSubmissions] = useState([]);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    age: ''
  });

  // Fetch all submissions on component mount
  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await API.getSubmissions();
      setSubmissions(response.data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.createSubmission(formData);
      fetchSubmissions(); // Refresh the list
      setFormData({ fname: '', lname: '', age: '' }); // Reset form
    } catch (error) {
      console.error('Error creating submission:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.deleteSubmission(id);
      fetchSubmissions(); // Refresh the list
    } catch (error) {
      console.error('Error deleting submission:', error);
    }
  };

  return (
    <div className="container">
      <h2>Form Submissions</h2>
      
      {/* Submission Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>

      {/* Submissions List */}
      <div className="submissions-list">
        <h3>Existing Submissions</h3>
        <ul>
          {submissions.map(sub => (
            <li key={sub.id}>
              {sub.fname} {sub.lname} (Age: {sub.age})
              <button onClick={() => handleDelete(sub.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormSubmission;