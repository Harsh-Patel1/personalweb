import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Harsh</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Deep-Learning</h2>
            <span>
              Deep-Learning, Python, PyTorch, CNNs, GRUs, LSTM, Transformers
            </span>
          </li>
          <li className="item">
            <h2>Web Development</h2>
            <span>
              HTML, CSS, React, JavaScript, MySQL, Flask
            </span>
          </li>
          <li className="item">
            <h2>Other</h2>
            <span>Python, AWS, Pytorch, Git/Github, Java, JavaScript, C++, Rust, SQL, HTML, CSS, OCaml</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;