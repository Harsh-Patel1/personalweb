import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <a href="https://github.com/Harsh-Patel1" target= "_blank" rel="noopener noreferrer">
                <GitHubIcon />
            </a>
            <a href="mailto:hpatel1@iwu.edu" target="_blank" rel="noopener noreferrer">
                <EmailIcon />
            </a>
            <a href="www.linkedin.com/in/harsh-patel-5b17a4226" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
            </a>
        </div>
        <p> &copy; 2024 harshtech.com </p>
    </div>
  )
}

export default Footer