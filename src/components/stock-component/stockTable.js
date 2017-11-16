import * as React from 'react';

const StockTable = (props) => (
  <div>
    <table id="example" className="table table-inverted table-bordered" cellSpacing="0" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Stock</th>
          <th>Description</th>
          <th>Price</th>
          <th>Last Update</th>
          <th>Industry</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>ID</th>
          <th>Stock</th>
          <th>Description</th>
          <th>Price</th>
          <th>Last Update</th>
          <th>Industry</th>
        </tr>
      </tfoot>
      <tbody>
        {
          props.data.map(
            (stock,idx) => (
              <tr key={idx}>
                <td>{stock.ID}</td>
                <td>{stock.stock}</td>
                <td>{stock.description}</td>
                <td>${stock.price}</td>
                <td>{new Date(stock.lastUpdate).toLocaleString()}</td>
                <td>{stock.industry}</td>
              </tr>
            )
          )
        }
      </tbody>
    </table>
  </div>
);

export default StockTable;
