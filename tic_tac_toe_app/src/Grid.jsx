import Row from "./Row";

const Grid = ({xTurn, gridValues, setGridValues, playingAllowed}) => {

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
            player={xTurn ? 'X' : 'O'}
            playingAllowed={playingAllowed}
          />
        )
      })}
    </div>
  )
}

export default Grid;