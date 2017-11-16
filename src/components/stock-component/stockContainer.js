import * as React from 'react';
import StockTable from './stockTable';
import './stockComponent.css';

class StockContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      stocks: [
        { "ID": "1", "stock": "AAPL", "price": "785.34", "industry": "Tech", "description": "Apple Inc", "lastUpdate": 1510855355000 },
        { "ID": "3", "stock": "AMZN", "price": "810.45", "industry": "Tech", "description": "Amazon.com Inc", "lastUpdate": 1510855355000 },
        { "ID": "4", "stock": "FB", "price": "95.34", "industry": "Tech", "description": "Facebook Inc", "lastUpdate": 1510855355000 },
        { "ID": "5", "stock": "GOOG", "price": "620.25", "industry": "Tech", "description": "Alphabet Inc. - Class C Capital Stock", "lastUpdate": 1510855355000 },
        { "ID": "6", "stock": "DIS", "price": "125.34", "industry": "Entertainment", "description": "Walt Disney Co", "lastUpdate": 1510855355000 },
        { "ID": "7", "stock": "CRM", "price": "125.35", "industry": "Tech", "description": "Salesforce.com Inc", "lastUpdate": 1510855355000 },
        { "ID": "8", "stock": "ORCL", "price": "45.35", "industry": "Tech", "description": "Oracle Corp", "lastUpdate": 1510855355000 },
        { "ID": "9", "stock": "SAP", "price": "75.34", "industry": "Tech", "description": "SAP SE ADS", "lastUpdate": 1510855355000 },
        { "ID": "11", "stock": "WMT", "price": "75.34", "industry": "Retail", "description": "Wal-Mart Stores Inc", "lastUpdate": 1510855355000 },
        { "ID": "12", "stock": "TGT", "price": "32.34", "industry": "Retail", "description": "Target Corp", "lastUpdate": 1510855355000 },
      ],
      filteredStocks: []
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.getData = this.getData.bind(this);
  }
  componentWillMount() {
    this.setState({ filteredStocks: this.state.stocks })
  }
  handleFilter() {
    if (this.filterTerm.value) {
      let filteredArray = this.state.filteredStocks.filter(
        (stock) => {
          return stock.industry.toLowerCase() === this.filterTerm.value.toLowerCase()
        }
      )
      this.setState({ filteredStocks: filteredArray })
      this.filterTerm.value = "";
    } else {
      this.setState({ filteredStocks: this.state.stocks })
    }
  }
  refreshData() {
    this.getData().then(
      (data) => {
        let updatedData = data.quote.map(
          (element, idx) => {
            return {
              "ID": ++idx,
              "stock": element.symbol,
              "price": element.bid,
              "description": element.description,
              "lastUpdate": element.ask_date
            }
          }
        )
        updatedData.map(
          (stock) => {
            console.log("Evaluating stock=", stock);
            switch (stock.stock) {
              case "DIS":
                stock.industry = "Entertainment";
                break;
              case "WMT":
              case "TGT":
                stock.industry = "Retail";
                break;
              default:
                stock.industry = "Tech";
                break;
            }
          }
        )
        this.setState({ filteredStocks: updatedData })
      }
    )
  }
  getData() {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer lJp04MlcB0eSfbv9GWAjB3at4Gox");
    myHeaders.append("Accept", "application/json");

    let myConfig = {
      method: "GET",
      headers: myHeaders
    }
    return fetch("https://sandbox.tradier.com/v1/markets/quotes?symbols=aapl,amzn,fb,goog,dis,crm,orcl,sap,wmt,tgt", myConfig)
      .then(
      (res) => res.json()
      )
      .then(
      (response) => response.quotes
      )

  }
  render() {
    return (
      <div className="stock-container">
        <div className="row">
          <div className="col-lg-6">
            <h1>Watched Stocks</h1>
          </div>
          <div className="col-lg-6" style={{ paddingTop: "11px" }}>
            <button className="btn btn-lg btn-block btn-success" onClick={this.refreshData}>
              Refresh
            </button>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-md-12 mt-4">
            <div className="input-group md-form form-sm form-2 pl-0">
              <input className="form-control my-0 py-1 grey-border" type="text" placeholder="Search by industry..." aria-label="Search" ref={(input) => this.filterTerm = input} />
              <span className="input-group-addon waves-effect grey lighten-3" id="basic-addon1">
                <button onClick={this.handleFilter} style={{ backgroundColor: "transparent", color: "#3282b1", border: "none" }}><i className="fa fa-search text-grey" aria-hidden="true" /></button>
              </span>
            </div>

          </div>
        </div>
        <br />
        <StockTable data={this.state.filteredStocks} />
      </div>
    )
  }
}
export default StockContainer;
