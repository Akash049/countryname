import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import CountryCard from  './../CountryCard/CountryCard.jsx';
import axios from 'axios';
import './Home.css';

export default class Home extends Component {
  
  constructor(props){
      super(props);
      this.state = {
          //CountryData 
          countryData : "",
          allData : "",

          //controlPlot
          readyPlot : false,

          //Filter 
          countryName : "",
          capitalName : "",
          regionName : ""
      }
  }  

  componentWillMount = () => {
        //Downlaod news data
        axios.get("https://restcountries.eu/rest/v2/")
        .then((response) => {
            console.log(response)
            this.setState({
                countryData : response.data,
                allData : response.data,
                readyPlot : true
            })
        })
        .catch( error => {

        })
  }

  handleTextSearch = (event, type) => {
    const val = event.target.value;
    if( type == "country" ){
        this.setState({
            countryName : val,
            readyPlot : false
        }, ()=>{
            this.filterDataForSearch(type);
        })
    }else if(type == "capital"){
        this.setState({
            capitalName : val,
            readyPlot : false
        }, ()=>{
            this.filterDataForSearch(type);
        })
    }else if(type == "region"){
        this.setState({
            regionName : val,
            readyPlot : false
        }, ()=>{
            this.filterDataForSearch(type);
        })
    }
  }

  filterDataForSearch = () => {
       let filterArr = [];
       const searchCountry = this.state.countryName.toLowerCase();
       const searchCapital = this.state.capitalName.toLowerCase();
       const searchRegion = this.state.regionName.toLowerCase();
       this.state.allData.forEach( (item)=>{
            if( item.name.toLowerCase().indexOf(searchCountry) != -1 
                && item.capital.toLowerCase().indexOf(searchCapital) != -1 
                && item.region.toLowerCase().indexOf(searchRegion) != -1 ){
                filterArr.push(item);
            }
        })
        this.setState({
            countryData : filterArr,
            readyPlot : true
        })
  }

  render() {
    let countryArr = [];
    if( this.state.countryData == "" ){
        countryArr = ""
    }else{
        this.state.countryData.forEach( (item, index) =>{
            console.log(item)
            countryArr.push(
                <div className="country-card-block">
                        <CountryCard
                            name = {item.name}
                            capital = {item.capital}
                            flag = {item.flag}
                            region = {item.region}
                        />
                </div>
            )
        })
    }
    
    return (
      <div className="home-main">
        <div className="filter-box-div">
            <div className="filter-box-main">
                <div className="search-box-div" >
                        <TextField
                            id="standard-name"
                            style={{width:"100%",marginTop:"2%"}}
                            label="Search Country"
                            value={this.state.countryName}
                            onChange={(event)=> this.handleTextSearch(event,"country") }
                            margin="normal"
                        />
                </div>
            </div>
            <div className="filter-box-main">
                <div className="search-box-div" >
                        <TextField
                            id="standard-name"
                            style={{width:"100%",marginTop:"2%"}}
                            label="Search Capital"
                            value={this.state.capitalName}
                            onChange={(event)=> this.handleTextSearch(event,"capital") }
                            margin="normal"
                        />
                </div>
            </div>
            <div className="filter-box-main">
                <div className="search-box-div" >
                        <TextField
                            id="standard-name"
                            style={{width:"100%",marginTop:"2%"}}
                            label="Search Region"
                            value={this.state.regionName}
                            onChange={(event)=> this.handleTextSearch(event,"region") }
                            margin="normal"
                        />
                </div>
            </div>
            <div className="filter-box-main"></div>
        </div>
        <hr />  
        <div className="country-body-div">
            { (this.state.readyPlot)?countryArr:""}
        </div>
      </div>
    )
  }
}
