import './App.css';
import gmail from './visuals/gmail.png'
import github from './visuals/githubDarkMode.png'
import linkedin from './visuals/linkedin.png'
import React from 'react';


// Set mode to start
let mode = "dark";
localStorage.setItem("mode", mode);
export let getCurrentMode = () => {
  let getMode = localStorage.getItem("mode");
  return getMode;
}

let modeV = getCurrentMode();
console.log(modeV);

const colors = {
  lightBackground: "rgb(226, 218, 218)",
  lightText: "rgb(22, 22, 22)",
  darkBackground: "rgb(22, 22, 22)",
  darkText: "rgb(226, 218, 218)",
  outlineLight: "rgb(226, 218, 218)",
  outlineDark: "rgb(22, 22, 22)",
}


export function modeFunc() {
    if (modeV === "dark") {
      document.body.style.backgroundColor = colors.lightBackground;
      document.body.style.color = colors.lightText;
      modeV = "light";
      localStorage.setItem("mode", modeV);
      return modeV;
    } 
    else {
      document.body.style.backgroundColor = colors.darkBackground;
      document.body.style.color = colors.darkText;
      modeV = "dark";
      localStorage.setItem("mode", modeV);
      return modeV;
    }
}
modeV = modeFunc();


export class NavBar extends React.Component {
  render() {
    const pages = [
      {
        name: 'Home',
        link: '#top'
      },
      {
        name: 'Background',
        link: '#backgroundDesc'
      },
      {
        name: 'Projects',
        link: '#projects'
      },
      {
        name: 'Contact',
        link: '#contact'
      },
      {
        name: 'Github',
        link: 'https://github.com/bracesproul',
        target: "_blank",
        rel: "noreferrer"
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/brace-sproul-16a185195/',
        target: "_blank",
        rel: "noreferrer"
      },
      {
        name: 'Login',
        link: '#',
      }
    ]
    let navBarCount = 0;
    const pageLinks = pages.map(page => {
      navBarCount++;
      return (
        <a className="navBarButton" href={page.link} key={navBarCount} target={page.target} rel={page.rel}>
          <p className="navBarText">
          {page.name}
          </p>
        </a>
      )
    })
    
    return (
      <div className="navBar">
          {pageLinks}
          <ColorButton />
      </div>
    );
  }
}

export class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <h1>Welcome to my Portfolio Website</h1>
        <hr></hr>
      </div>
    )
  }
}

export class BackgroundDesc extends React.Component {
  render() {
    return (
      <div className="backgroundDesc" id="backgroundDesc">
        <h3>My Background</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <hr></hr>
      </div>
    )
  }
}

export class Projects extends React.Component {
  render() {
    const projectList = [
      {
        name: 'Project 1',
        description: 'This is a project',
        link: 'https://www.google.com'
      },
      {
        name: 'Project 2',
        description: 'This is another project',
        link: 'https://www.google.com'
      },
      {
        name: 'Project 3',
        description: 'This is my fav project',
        link: 'https://www.google.com'
      },
      {
        name: 'Project 4',
        description: 'This is my most complex project',
        link: 'https://www.google.com'
      },
    ]
    let projectCount = 0;
    const projectTemplate = projectList.map(project => {
      projectCount++;
      return (
          <div id="projectTemplate" className="projectTemplate" key={projectCount}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a className="projectLink" href={project.link}>
              {project.name}
            </a>
          </div>
      )
    })

    return (
      <div id="projects" className="projects">
        <h2>Projects</h2>
        <div className="flex-container">
          {projectTemplate}
        </div>
      </div>
    )
  }
}



export class FooterFunc extends React.Component {
  render() {
    return (
      <div className="footer">
        <a id="githubImgA" href="https://github.com/bracesproul" target="_blank" rel="noreferrer"><img alt="Github Icon" className="githubImg" id="githubImgImg" src={github} /></a>
        <a id="gmailImgA" href="mailto:braceasproul@gmail.com" target="_blank" rel="noreferrer"><img alt="Gmail Icon" className="githubImg" id="gmailImgImg" src={gmail} /></a>
        <a id="linkedinImgA" href="https://www.linkedin.com/in/brace-sproul-16a185195/" target="_blank" rel="noreferrer"><img alt="Linkedin Icon" className="linkedinImg" id="linkedinImgImg" src={linkedin} /></a>
      </div>
    )
  }
}

export function LineBreak() {
  return (
    <hr></hr>
  )
}

class ColorButton extends React.Component {
  render() {
    return (
      <a onClick={modeFunc} id="colorModeBtnId" className="navBarButton"><p>Light/Dark</p></a>
    )
  }
}