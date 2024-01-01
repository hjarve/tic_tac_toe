import { useState } from "react";
import Row from "./Row";

const Grid = ({xTurn, gridValues, setGridValues}) => {

  return(
    <div>
      {gridValues.map((row, n) => {
        return(
          <Row
            key={n} 
            rowArray={row} 
            rowIndex={n} 
            gridValues={gridValues}
            setGridValues={setGridValues}
            player={xTurn ? 'X' : 'O'}/>
        )
      })}
    </div>
  )
}

export default Grid;