import React from "react";

const History = () => {

  const historyArray = [{playerX: 'Hanna ', playerO: 'Jenni', winner: 'tie', date: new Date()}, {playerX: 'John', playerO: 'Jane', winner: 'John', date: new Date()}]

  return (
    <div>
      <h3>History:</h3>
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
          {historyArray.map((game, i) => {
            return (
              <tr key={i}>
                <td>{game.playerX}</td>
                <td>{game.playerO}</td>
                <td>{game.winner}</td>
                <td>{game.date.toLocaleDateString()}</td>
              </tr> 
            )
          })}
        </tbody>
      </table>
    </div>
    
  )
}
export default History;