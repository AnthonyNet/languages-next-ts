"use client";
import {Bpi} from "./interface";

interface Table {
  readonly myData: Bpi;
}

const Table = ({myData}:Table) => {

  
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Currency</th>
          <th>Rate</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{myData.EUR.code}</td>
          <td>{myData.EUR.rate}</td>
         
          
        </tr>
        <tr>
        <td>{myData.USD.code}</td>
        <td>{myData.USD.rate}</td>
          
        </tr>
        <tr>
        <td>{myData.GBP.code}</td>
        <td>{myData.GBP.rate}</td>
          
        </tr>
      </tbody>
      
    </table>
  );
};

export default Table;
