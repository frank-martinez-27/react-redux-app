import * as React from 'react';
import ItunesPresentation from './itunesPresentation';
import './itunesComponent.css';

class ItunesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term:"",
      entity:"song",
      data:[]
    };
    this.handleSearch=this.handleSearch.bind(this);
  }
  callApi(term,entity){
    fetch(`http://itunes.apple.com/search?term=${term}&entity=${entity}&limit=5.`).then(
      (res)=>res.json()
    ).then(
      (data)=>{
        this.setState(()=>{
          return {data:data.results}
        })
      }
    ).then(
      ()=>{
        this.searchTerm.value="";
        console.log("Done")
      }
    )
  }
  handleSearch() {
    let term=this.searchTerm.value.replace(/\s/g, "+")
    this.setState({term},function(){
      this.callApi(this.state.term,this.state.entity);
    })
  }
  render() {
    return (
      <div>
        <div className="col-lg-1" />
        <div className="col-lg-4 container-title">Search song on iTunes</div>
        <div className="row">
          <div className="col-lg-6" style={{paddingTop:"5px"}}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
                ref={(input)=>this.searchTerm=input}
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-default"
                  type="button"
                  onClick={this.handleSearch}
                >
                  Go!
                </button>
              </span>
            </div>
          </div>
        </div>
        <hr />
        <ItunesPresentation results={this.state.data}/>
      </div>
    );
  }
}

export default ItunesContainer;
