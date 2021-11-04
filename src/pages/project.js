import React from 'react';
import Image1 from '../images/audioproject.png';
import Image2 from '../images/banner.jpg';

export default class Home extends React.Component
{
  state = { loading: true, project: null };
  
  async componentDidMount()
  {
    const url = "http://localhost/api/api.php/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ project: data[0], loading: false });
  }

  render()
  {
    return (
      <div className="page">
        <div className="page-column-left">
        {
          this.state.loading || !this.state.project ?
          <div>false data was given</div> :
          <div className="project-grid">
            <iframe className="project-video" src={ this.state.project.video } title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            <img src={ Image1 } className="project-screenshot" alt="" />
            <img src={ Image2 } className="project-screenshot" alt=""  />
          </div>
        }
        </div>

        <div className="page-column-right">
        {
          this.state.loading || !this.state.project ?
          <div>false data was given</div> :
          <div>
            <div className="project-name">{ this.state.project.name } </div>
            <div className="project-description"> { this.state.project.description } </div>
            <div className="project-gitrepo">
              <p className="project-gitrepo-text">Project link:</p>
              <a className="project-gitrepo-image" href={ this.state.project.link }> </a>
            </div>
          </div>
        }
        </div>
      </div>
    );
  }
}