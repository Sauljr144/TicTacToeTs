import React from 'react'

interface mySquares{
  value: string,
  onSquareClick: () => void,
}

const Square = ({value, onSquareClick}:mySquares) => {
  return (
      <button className="square" onClick={onSquareClick}>{value}</button>
  )
}

export default Square