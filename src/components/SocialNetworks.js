import React from 'react';

import facebookIcon from '../imgs/facebook.svg';
import instagramIcon from '../imgs/instagram.svg';
import githubIcon from '../imgs/github.svg';
import emailIcon from '../imgs/email.svg';
import steamIcon from '../imgs/steam.svg';
import twitchIcon from '../imgs/twitch.svg';

class SocialNetworks extends React.Component{

    render(){
        return(
            <div className="row">
              <div className="col-1"></div>
              <div className='md-1 sm-6'>
                <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><img alt="My Facebook" className="no-border icon-social" src={facebookIcon}/></a>
              </div>
              <div className="md-1 sm-6">
                <a href="https://www.instagram.com" rel="noreferrer" target="_blank"><img alt="My Instagram" className="no-border icon-social" src={instagramIcon}/></a>
              </div>
              <div className="md-1 sm-6">
                <a href="https://www.github.com/bevilaquaBruno" rel="noreferrer" target="_blank"><img alt="My Github" className="no-border icon-social" src={githubIcon}/></a>
              </div>
              <div className="md-1 sm-6">
                <a href="https://steamcommunity.com/" rel="noreferrer" target="_blank"><img alt="My steam" className="no-border icon-social" src={steamIcon}/></a>
              </div>
              <div className="md-1 sm-6">
                <a href="https://www.twitch.tv/" rel="noreferrer" target="_blank"><img alt="My Twitch" className="no-border icon-social" src={twitchIcon}/></a>
              </div>
              <div className="md-1 sm-6">
                <a href="mailto:email@email.com?subject=Mail from portfolio" rel="noreferrer" target="_blank"><img alt="My Email" className="no-border icon-social" src={emailIcon}/></a>
              </div>
              <div className="md-1 sm-6">
                <a href="https://dev.to/bevilaquabruno">
                  <img className="no-border" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="DEV Community Profile" height="30" width="30" />
                </a>
              </div>
            </div>
        )
    }
}

export default SocialNetworks;