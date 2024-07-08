import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Checkbox from "./Checkbox";
// import "./SetupAccount.css";

const Second = () => {
  const [role, setRole] = useState("");
  const [accountType, setAccountType] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState(JSON.parse(sessionStorage.getItem('profileImage')));
  const [image, setImage] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState("");

  const fileData = (files) => {
    console.log(URL.createObjectURL(files[0]), 'sdfsdfgsdfgdfgd');
    setImage(URL.createObjectURL(files[0]));
  };

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((item) => item !== option)
        : [...prevSelectedOptions, option]
    );
  };

  const handleSubmit = () => {
    const minRequired = 1; // Set the minimum number of required selections
    if (selectedOptions.length < minRequired) {
      setError(`Please select at least ${minRequired} option${minRequired > 1 ? 's' : ''}.`);
      return;
    }

    const data = {
      role,
      accountType,
      linkedInProfile,
      selectedOptions
    };

    console.log('Data to send:', data);

    fetch('https://your-backend-endpoint.com/api/submit', { // Replace with your actual backend endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setError(""); // Clear the error message if submission is successful
  };

  return (
    <>
      <div className="profile-main">
        <div className="profile-setup">
          <div className="profile-info">
            <h2>Professional Experience & Expertise</h2>
            <h3>What design style are you proficient in ? *</h3>
            <div className="role-options">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="" disabled>Select your role</option>
                <option value="Illustrator">Illustrator</option>
                <option value="Graphic Designer">Graphic Designer</option>
                <option value="Photoshop editor">Photoshop Editor</option>
                <option value="UI/UX Designer">
                  UI/UX Designer
                </option>
                <option value="3D Artist">3D Artist</option>
                <option value="Typographer">Typographer</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="account-main">
              <div className="account-type">
                <h3>How long have you been designing for? *</h3>
                <select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  required
                >
                  <option value="" disabled>Select your experience</option>
                  <option value="0-1 years">0-1 years</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="4-5 years">4-5 years</option>
                  <option value="6-10 years">6-10 years</option>
                </select>
              </div>
            </div>

            <div className="additional-info">
              <h3>What kind of design do you create? *</h3>
              <Checkbox selectedOptions={selectedOptions} handleCheckboxChange={handleCheckboxChange} />
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <hr></hr>
            <div className="submit-button">
              <p>Step 2/3</p>
              <button onClick={handleSubmit}>
                Save And Continue <IoIosArrowForward />
              </button>
            </div>
          </div>

          <div className="profile-details">
            <div className="profile-picture">
              <img src={image ? image : "/images.png"} alt="Profile" />
              <input type="file" id="profileImage" accept="*" className="hidden" capture onChange={(e) => fileData(e.target?.files)} />
              <button><label htmlFor="profileImage">Add profile picture</label></button>
            </div>
            <div className="profile-data">
              <h3>danish khan</h3> {/* Replace with dynamic user name */}
              <p>danishsalmani45434500@gmail.com</p> {/* Replace with dynamic email */}
              <div className="creator-type">
                <span>Creator Type:</span>
                <div>
                  <input
                    type="text"
                    value={linkedInProfile?.role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Select Your role"
                    readOnly
                  />
                  <input
                    type="text"
                    value={linkedInProfile?.accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    placeholder=" Select Your Account Type"
                    readOnly
                  />
                </div>
              </div>
              <div className="contact-details">
                <span>Contact Details:</span>
                <input
                  type="text"
                  value={linkedInProfile?.linkedInProfile}
                  onChange={(e) => setLinkedInProfile(e.target.value)}
                  placeholder="LinkedIn Url"
                  readOnly
                />
                <input
                  type="text"
                  value={linkedInProfile?.phoneNumber}
                  placeholder="Phone Number"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
          <p>©2024 Pepper Content Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Second;
