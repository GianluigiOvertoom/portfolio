import React from 'react';

export default class About extends React.Component
{
  render()
  {
      return (
        <div className="page">

          <div className="page-column-left">
            <div className="profile">
              <div className="profile-border">
                <img className="profile-image" alt="" />
              </div>
              <div className="profile-skills">
                <p className="profile-skills-title">Skills:</p>
                <ul className="profile-skills-icons">
                  <img src={ require('../images/unity.svg').default } alt="" />
                  <img src={ require('../images/aseprite.svg').default } alt="" />
                  <img src={ require('../images/visualstudio.svg').default } alt="" />
                  <img src={ require('../images/github.svg').default } alt="" />
                </ul>
              </div>
            </div>
          </div>

          <div className="page-column-right">
            <p className="information">
              Im am an ICT student with years of experience with gamedevelopment. I also learned how to make pixel art and have 6 and a half years of experience. 
              I'm currently leaning more towards the back-end side of development, but I would like to learn some more front end related subjects too.
            </p>
          </div>
                    
        </div>
      );
  }
}