import React from "react";

const Row = ({rowArray, rowIndex, gridValues, setGridValues, player, playingAllowed}) => {

  return(
    <div className="rowContainer">
      {rowArray.map((value, i) => {
        let content = value !== 'free' ? value : null;
        return(
          <button 
            className="gridButton"
            onClick={() => {
              if (!content && playingAllowed) {
                setGridValues(gridValues.map((row, n) => {
                  return(
                    row.map((value, m) => {
                      if(n===rowIndex && m===i && value==='free') return player
                      else return value;
                    })
                  )
                }))
              }
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