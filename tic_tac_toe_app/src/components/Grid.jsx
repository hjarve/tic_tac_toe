import Row from "./Row";

const Grid = ({xTurn, gridValues, setGridValues, playingAllowed}) => {

  return(
    <div className="grid">
      {gridValues.map((row, n) => {
        return(
          <Row 
            key={n} 
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