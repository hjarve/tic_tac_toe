import React from "react";

const History = ({historyArray}) => {

  return (
    <div className="historyContainer">
      <h3>History:</h3>
      {historyArray.length === 0 ? 
      <p>No history data available</p>
      :
<div>
      <table>
        <thead>
          <tr>
          <th>player X</th>
          <th>player O</th>
          <th>winner</th>
          <th>date</th>
        </tr>
        </thead>
        <tbody>
          {historyArray.map((game) => {
            return (
              <tr key={game.id}>
                <td>{game.playerX}</td>
                <td>{game.playerO}</td>
                <td>{game.winner}</td>
                <td>{new Date(game.date).toLocaleDateString()}</td>
              </tr> 
            )
          })}
        </tbody>
      </table>
    </div>
    
    }
    
      
    </div>
    
  )
}
export default History;