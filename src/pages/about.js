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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sed adipiscing diam donec adipiscing tristique risus nec feugiat. 
              Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. 
              Purus sit amet luctus venenatis lectus magna. Congue eu consequat ac felis donec et odio pellentesque diam. 
              Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Fermentum odio eu feugiat pretium. 
              Tincidunt praesent semper feugiat nibh. Massa tempor nec feugiat nisl pretium fusce id. Euismod nisi porta lorem mollis. 
              Consectetur adipiscing elit duis tristique sollicitudin nibh. Fringilla ut morbi tincidunt augue interdum velit euismod. 
              Placerat duis ultricies lacus sed turpis tincidunt.
            </p>
          </div>
                    
        </div>
      );
  }
}