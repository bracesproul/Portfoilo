import './App.css';
import gmail from './visuals/gmail.png'
import github from './visuals/githubDarkMode.png'
import React from 'react';


let mode = "dark";
mode = localStorage.setItem('mode', mode);
let projectOutline = document.getElementById("projectTemplate");

const colors = {
  lightBackground: "rgb(226, 218, 218)",
  lightText: "rgb(22, 22, 22)",
  darkBackground: "rgb(22, 22, 22)",
  darkText: "rgb(226, 218, 218)",
  outlineLight: "rgb(226, 218, 218)",
  outlineDark: "rgb(22, 22, 22)",
}


export function changeColor() {
  let modeV = localStorage.getItem("mode")
  console.log(modeV)
  if (modeV === "light") {
    document.body.style.backgroundColor = colors.lightBackground;
    document.body.style.color = colors.lightText;
    //document.body.projectTemplate.outline = colors.outlineLight;
  } else if (modeV === "dark") {
    document.body.style.backgroundColor = colors.darkBackground;
    document.body.style.color = colors.darkText;
    //document.body.projectTemplate.style = "outline: 1px solid rgb(226, 218, 218)";
  }
  console.log(`colors changed to ${modeV}`)
}


function modeFunc() {
  let modeV = localStorage.getItem("mode")
    if (modeV === "light") {
      modeV = "dark";
      localStorage.setItem("mode", modeV);
    } else {
      modeV = "light";
      localStorage.setItem("mode", modeV);
    }
    changeColor();
}



export class NavBar extends React.Component {
  render() {
    const pages = [
      {
        name: 'Home',
        link: '#top'
      },
      {
        name: 'Projects',
        link: '#projects'
      },
      {
        name: 'Background',
        link: '#backgroundDesc'
      },
      {
        name: 'Contact',
        link: '#contact'
      }
    ]

    const pageLinks = pages.map(page => {
      return (
        <a className="navBarButton" href={page.link}>
          <p className="navBarText">
          {page.name}
          </p>
        </a>
      )
    })
    
    return (
      <div className="navBar">
          {pageLinks}
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

    const projectTemplate = projectList.map(project => {
      return (
          <div id="projectTemplate" className="projectTemplate">
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
        <a id="githubImgA" href="https://github.com/bracesproul" target="_blank"><img className="githubImg" id="githubImgImg" src={github} /></a>
        <a id="gmailImgA" href="mailto:braceasproul@gmail.com" target="_blank"><img className="githubImg" id="gmailImgImg" src={gmail} /></a>
      </div>
    )
  }
}

export function LineBreak() {
  return (
    <hr></hr>
  )
}
// NOT FULLY FUNCTIONAL
export class ColorMode extends React.Component {
  render() {
    return (
      <div className="colorMode">
        <button onClick={modeFunc} id="colorModeBtnId" className="colorModeBtn">{localStorage.getItem('mode') === "light" ? "Change to Dark Mode" : "Change to Light Mode"}</button>
      </div>
    )
  }
}



//export default { App, NavBar };
/*
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  height: 3%;
  width: 100%;
*/