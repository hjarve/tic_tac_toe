import React from "react";
import './row.css';

const Row = ({rowArray, rowIndex, gridValues, setGridValues, player}) => {

  return(
    <div className="rowContainer">
      {rowArray.map((value, i) => {
        let content = value !== 'free' ? value : null;
        return(
          <button 
            className="gridButton"
            onClick={() => {
              setGridValues(gridValues.map((row, n) => {
                return(
                  row.map((value, m) => {
                    console.log(value);
                    if(n===rowIndex && m===i && value==='free') return player
                    else return value;
                  })
                )
              }))
            }}
            key={i}
          >
            {content}
          </button>
        )
      })}
    </div>
  )
}

export default Row;