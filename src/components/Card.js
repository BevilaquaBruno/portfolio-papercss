import React from "react";

class Card extends React.Component{

    render(){
        return(
            <div className="card">
              <div className="card-header"><p className="no-margin">{this.props.headerText}</p></div>
              <div className="card-body">
                <h4 className="card-title">{this.props.cardTitle}</h4>
                <h5 className="card-subtitle">{this.props.cardSubtitle}</h5>
                <p className="card-text">{this.props.cardText}</p>
                <a rel="noreferrer" target="_blank" href={this.props.githubUrl} className="paper-btn">Let me go here!</a>
              </div>
            </div>
        )
    }
}

export default Card;