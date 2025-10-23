import React, { useMemo, useState } from 'react';
import './App.css';
import './styles.css';
import Board from './components/Board';
import { calculateWinner, getNextPlayer, isBoardFull } from './utils/gameUtils';

// PUBLIC_INTERFACE
export default function App() {
  /**
   * The main Tic Tac Toe app implementing a 3x3 grid, alternating turns,
   * win/draw detection, winning-line highlight, and reset.
   * Styled with an Ocean Professional theme.
   */
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const result = useMemo(() => calculateWinner(squares), [squares]);
  const winner = result?.winner || null;
  const winningLine = result?.line || null;
  const isDraw = !winner && isBoardFull(squares);

  const currentPlayer = useMemo(() => getNextPlayer(xIsNext), [xIsNext]);

  const canPlay = !winner && !isDraw;

  const statusText = useMemo(() => {
    if (winner) return `Winner: ${winner}`;
    if (isDraw) return "It's a draw!";
    return `Next player: ${currentPlayer}`;
  }, [winner, isDraw, currentPlayer]);

  const handlePlay = (index) => {
    if (!canPlay || squares[index]) return;
    const next = squares.slice();
    next[index] = xIsNext ? 'X' : 'O';
    setSquares(next);
    setXIsNext(!xIsNext);
  };

  // PUBLIC_INTERFACE
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="app-root">
      <div className="app-card" role="region" aria-label="Tic Tac Toe game board">
        <div className="app-header">
          <h1 className="app-title">Tic Tac Toe</h1>
          <p className="app-subtitle">Ocean Professional</p>
        </div>

        <div
          className={`status-bar ${winner ? 'status-win' : isDraw ? 'status-draw' : ''}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {statusText}
        </div>

        <Board
          squares={squares}
          onPlay={handlePlay}
          winningLine={winningLine}
          disabled={!canPlay}
        />

        <div className="actions">
          <button
            type="button"
            className="btn-primary"
            onClick={resetGame}
            aria-label="Reset or play again"
          >
            {winner || isDraw ? 'Play Again' : 'Reset'}
          </button>
        </div>

        <footer className="app-footer">
          <small>Two players on the same device. X goes first.</small>
        </footer>
      </div>
    </div>
  );
}
