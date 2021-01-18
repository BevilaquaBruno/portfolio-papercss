import React from 'react';

import '../node_modules/papercss/dist/paper.min.css';
import './css/App.css';

import Card from './components/Card';
import SocialNetworks from './components/SocialNetworks';

let name = '{your name here}',
    photo1 = "https://unsplash.it/300",
    photo2 = "https://unsplash.it/200";

class App extends React.Component{
  render() {
    return (
      <div className="paper container">
        <div className="row">
          <h2 className="no-margin">Welcome here!</h2>
          <div className="col-12 col">
            <span>
              <img src={photo1} className="float-left" alt="You here" />
              <h2>I'm {name}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <img src={photo2} className="float-right" alt="Javascript ♥"/>
              <article className="article">
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec lorem non mi faucibus auctor a sed arcu.
                Vestibulum id sapien vitae odio molestie ultricies eu sed augue. Donec id mauris eget odio tincidunt vulputate.
                Sed diam libero, accumsan pulvinar lobortis ac, rhoncus ac purus. Duis accumsan fringilla purus, quis consequat nisi ultrices id.</p>
              </article>
            </span>
          </div>
          <h4>Here is some project's of my <a rel="noreferrer" target="_blank" href="https://www.github.com/bevilaquaBruno">github profile</a></h4>
          <div className="md-6 sm-12 col">
            <Card
              headerText="start message"
              cardTitle="Project's Title"
              cardSubtitle="Short description about the tecnologies used"
              cardText="final message"
              githubUrl="https://github.com/BevilaquaBruno"
            />
          </div>
          <div className="md-6 sm-12 col">
            <Card
              headerText="Lorem ipsum dolor sit amet"
              cardTitle="Lorem ipsum dolor sit amet"
              cardSubtitle="Lorem ipsum dolor sit amet"
              cardText="Lorem ipsum dolor sit amet"
              githubUrl="https://github.com/BevilaquaBruno/"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col">
            <h4 className="no-margin">My social networks:</h4>
          </div>
        </div>
        <SocialNetworks />
        <h5>created with ♥ by {name} with <a targer="_blank" href="https://www.getpapercss.com/">PaperCSS</a></h5>
      </div>
    );
  }
}

export default App;
