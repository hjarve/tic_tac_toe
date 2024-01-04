
const Row = ({rowIndex, gridValues, setGridValues, player, playingAllowed=true}) => {

  const handleClick = (content, index) => {
    if (!content && playingAllowed) {
      setGridValues(gridValues.map((row, n) => {
        return(
          row.map((value, m) => {
            if(n===rowIndex && m===index && value==='free') return player
            else return value;
          })
        )
      }))
    }
  }

  return(
    <div className="rowContainer">
      {gridValues[rowIndex].map((value, i) => {
        let content = value !== 'free' ? value : null;
        return(
          <button 
            className="gridButton"
            onClick={() => handleClick(content, i)}
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