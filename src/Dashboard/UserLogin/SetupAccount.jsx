import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
// import "./SetupAccount.css";

const SetupAccount = () => {
  const [role, setRole] = useState("");
  const [accountType, setAccountType] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");

  const fileData = (files) => {
    console.log(URL.createObjectURL(files[0]), "sdfsdfgsdfgdfgd");
    setImage(URL.createObjectURL(files[0]));
  };

  const saveAndContinue = () => {
    const data = {
      role,
      accountType,
      phoneNumber,
      linkedInProfile, // Include the image if you want to send the image URL or data
    };

    // Save to sessionStorage
    sessionStorage.setItem("profileData", JSON.stringify(data));
   
    // Send data to the backend
    fetch(`http://192.168.0.108:5000/user/detail`, {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="profile-main">
        <div className="profile-setup">
          <div className="profile-info">
            <h2>Your Profile Information</h2>
            <p>Choose your role *</p>
            <div className="role-options">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Content Writer"
                  checked={role === "Content Writer"}
                  onChange={() => setRole("Content Writer")}
                  required
                />
                <span className="role-text">
                  Content Writer
                  <br />
                  English
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Content Editor"
                  checked={role === "Content Editor"}
                  onChange={() => setRole("Content Editor")}
                />
                <span className="role-text">
                  Content Editor
                  <br />
                  All Languages
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Content Writer/Translator"
                  checked={role === "Content Writer/Translator"}
                  onChange={() => setRole("Content Writer/Translator")}
                />
                <span className="role-text">
                  Content Writer/Translator
                  <br />
                  Other Languages
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Creative/Art Director or Graphic Designer"
                  checked={role === "Creative/Art Director or Graphic Designer"}
                  onChange={() => setRole("Creative/Art Director or Graphic Designer")}
                />
                <span className="role-text">
                  Creative/Art Director or Graphic Designer
                  <br />
                  Design
                </span>
              </label>
            </div>
            <div className="account-main">
              <div className="account-type">
                Identify Yourself*
                <label>
                  <input
                    type="radio"
                    name="accountType"
                    value="Individual"
                    checked={accountType === "Individual"}
                    onChange={() => setAccountType("Individual")}
                    required
                  />
                  <span className="account-type-text">Individual</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="accountType"
                    value="Agency"
                    checked={accountType === "Agency"}
                    onChange={() => setAccountType("Agency")}
                  />
                  <span className="account-type-text">Agency</span>
                </label>
              </div>
            </div>

            <div className="additional-info">
              <label>
                Share your LinkedIn profile *
                <input
                  type="text"
                  placeholder="LinkedIn profile URL"
                  value={linkedInProfile}
                  onChange={(e) => setLinkedInProfile(e.target.value)}
                  required
                />
              </label>
              <label>
                Enter your phone number *
                <input
                  type="text"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </label>
            </div>
            <hr></hr>
            <div className="submit-button">
              <p>Step 1/3</p>
              <Link to="/details/verify">
                <button onClick={saveAndContinue}>
                  Save And Continue <IoIosArrowForward />
                </button>
              </Link>
            </div>
          </div>

          <div className="profile-details">
            <div className="profile-picture">
              <img src={image ? image : "/images.png"} alt="Profile" />
              <input
                type="file"
                id="profileImage"
                accept="*"
                className="hidden"
                capture
                onChange={(e) => fileData(e.target?.files)}
              />
              <button>
                <label htmlFor="profileImage">Add profile picture</label>
              </button>
            </div>
            <div className="profile-data">
              <h3>danish khan</h3> {/* Replace with dynamic user name */}
              <p>danishsalmani45434500@gmail.com</p> {/* Replace with dynamic email */}
              <div className="creator-type">
                <span>Creator Type:</span>
                <div>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Select Your role"
                    readOnly
                  />
                  <input
                    type="text"
                    value={accountType}
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
                  value={linkedInProfile}
                  onChange={(e) => setLinkedInProfile(e.target.value)}
                  placeholder="LinkedIn Url"
                  readOnly
                />
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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

export default SetupAccount;
