import React from 'react'

export const Contacts = () => {
  const phoneNumber = '+1 (123) 456-7890';
  const email = 'johndoe@example.com';
  const linkedinLink = 'https://www.linkedin.com/in/johndoe';
  const githubLink = 'https://github.com/johndoe';

  return (
    <div id="contact">
      <h2>Contact Information</h2>
      <p id="contact-phone">Phone: {phoneNumber}</p>
      <p  id="contact-email">Email: {email}</p>
      <p>
        Social Media:
        <br />
        <a   id="contact-linkedin" href={"https://www.linkedin.com/in/abid-khan-325795182/"}>LinkedIn</a>
        <br />
        <a  id="contact-github" href={"https://github.com/Abidkhan263187"}>GitHub</a>
      </p>
    </div>
  );
};


