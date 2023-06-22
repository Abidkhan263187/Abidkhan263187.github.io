import React from 'react';

export const Contacts = () => {
  const phoneNumber = '62-8000-7521';
  const email = 'abidkhan263187@gmail.com';

  return (
    <div id="contact" style={styles.container}>
      <h2 style={styles.contactTitle}>Contact Information</h2>
      <div style={styles.contactDetails}>
        <p style={styles.contactInfo} id="contact-phone" >Phone <span style={{color:"white"}}> : {phoneNumber}</span> </p>
        <p style={styles.contactInfo} id="contact-email"  >Email  <span style={{color:"white"}}> : {email}</span> </p>
      </div>
      <div style={styles.socialMedia}>
        <p style={styles.socialMediaText}>Social Media</p>
        <div style={styles.socialMediaLinks}>
          <a style={styles.socialMediaLink} id="contact-linkedin" href="https://www.linkedin.com/in/abid-khan-325795182/"><i class="fa-brands fa-linkedin  fa-2xl"></i></a>
          <a style={styles.socialMediaLink} id="contact-github" href="https://github.com/Abidkhan263187"><i class="fa-brands fa-github fa-2xl"></i></a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'transparent',
    borderRadius: '10px',
  },
  contactTitle: {
    border: '2px solid #03c8d7',
    fontSize: '20px',
    fontWeight: 'bold',
    padding:"0px 40px",
    fontFamily: 'Arial, sans-serif',
    color: '#03c8d7',
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0',
  },
  contactInfo: {
    fontWeight:"700",
    fontSize: '15px',
    fontFamily: 'Arial, sans-serif',
    color:'#03c8d7',
    margin: '10px 0',
  },
  socialMedia: {
  border:"1px solid #03c8d7",
    display: 'flex',
   borderRadius:"20px",
    padding:"40px 50px",
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom:"40px"
  },
  socialMediaText: {
    border: '2px solid #03c8d7',
    fontSize: '16px',
    fontWeight:"700",
    fontFamily: 'Arial, sans-serif',
    color: '#03c8d7',
    padding:"7px 35px",
    margin: '10px 0',
  },
  socialMediaLinks: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
  },
  socialMediaLink: {
    fontSize: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#03c8d7',
    textDecoration: 'none',
    margin: '0 10px',
    cursor: 'pointer',
  },
};
