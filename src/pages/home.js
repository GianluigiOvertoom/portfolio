import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component
{
  state = { loading: true, project: null };
  
  async componentDidMount()
  {
    const url = "http://localhost/api/api.php/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ project: data, loading: false });
  }

  render()
  {
    return (
      <div className="page">
        <p className="main-title">GIANLUIGI OVERTOOM'S PORTFOLIO WEBSITE</p>
        <div>
        {
          this.state.loading || !this.state.project ?
          <div>false data was given</div> :
          <div className="home-grid">

            <NavLink exact to="/project" className="home-project">
              <img src={require('../images/audioproject.png').default} className="home-project-image" alt="" />
              <div className="home-project-name"> { this.state.project[0].name }</div>
              <div className="home-project-border"></div>
              <div className="home-project-description">{ this.state.project[0].summary }</div>
            </NavLink>

            <NavLink exact to="/" className="home-project">
              <img src={require('../images/background.png').default} className="home-project-image" alt="" />
              <div className="home-project-name">Project 2</div>
              <div className="home-project-border"></div>
              <div className="home-project-description">A small description about the project.</div>
            </NavLink>

            <NavLink exact to="/" className="home-project">
              <img src={require('../images/background.png').default} className="home-project-image" alt="" />
              <div className="home-project-name">Project 3</div>
              <div className="home-project-border"></div>
              <div className="home-project-description">A small description about the project.</div>
            </NavLink>

            <NavLink exact to="/" className="home-project">
              <img src={require('../images/background.png').default} className="home-project-image" alt="" />
              <div className="home-project-name">Project 4</div>
              <div className="home-project-border"></div>
              <div className="home-project-description">A small description about the project.</div>
            </NavLink>

            <NavLink exact to="/" className="home-project">
              <img src={require('../images/background.png').default} className="home-project-image" alt="" />
              <div className="home-project-name">Project 5</div>
              <div className="home-project-border"></div>
              <div className="home-project-description">A small description about the project.</div>
            </NavLink>
            
          </div>
        }
        </div>           
      </div>
    );
  }
}