import React, { Component } from 'react'
import { Image} from 'react-bootstrap';
import './CountryCard.css';

export default class CountryCard extends Component {
  
  constructor(props){
      super(props);
      this.state = {
        name : this.props.name,
        capital : this.props.capital,
        flag : this.props.flag,
        region : this.props.region,
      }
  }  
    
  render() {
    return (
      <div className="country-card-main">
        <div className="country-name">{this.state.name}</div>
        <div className="info-body">
            <div className="country-flag">
            <Image style={{maxHeight:'100%', maxWidth:'100%'}} alt="Loading..." src={this.state.flag} circle className="flag-img" />
            </div>
            <div className="country-info">
                <div className="info-class">
                    <div className="sub-country-info-type">Capital: </div><div className="sub-country-info-value">{this.state.capital}</div>
                </div>
                <div className="info-class">
                    <div className="sub-country-info-type">Region : </div><div className="sub-country-info-value">{this.state.region}</div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
