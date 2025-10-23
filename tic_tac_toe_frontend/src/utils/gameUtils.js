const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// PUBLIC_INTERFACE
export function calculateWinner(squares) {
  /** 
   * Determine the winner and winning line from a 9-length array of 'X'|'O'|null.
   * Returns: { winner: 'X'|'O', line: [a,b,c] } | null
   */
  for (const [a, b, c] of LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

// PUBLIC_INTERFACE
export function getNextPlayer(xIsNext) {
  /** Returns 'X' or 'O' based on the xIsNext boolean. */
  return xIsNext ? 'X' : 'O';
}

// PUBLIC_INTERFACE
export function isBoardFull(squares) {
  /** Returns true if all squares are filled. */
  return squares.every((s) => s !== null);
}
