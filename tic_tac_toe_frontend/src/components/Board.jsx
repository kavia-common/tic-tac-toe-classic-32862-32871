import Square from './Square';

// PUBLIC_INTERFACE
export default function Board({ squares, onPlay, winningLine, disabled }) {
  /**
   * Renders a 3x3 grid of Square buttons.
   * - Highlights squares in winningLine
   * - Disables interaction when disabled=true
   */
  const renderSquare = (i) => {
    const isWinning = Array.isArray(winningLine) && winningLine.includes(i);
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onPlay(i)}
        isWinning={isWinning}
        disabled={disabled || Boolean(squares[i])}
        index={i}
      />
    );
  };

  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe grid" aria-readonly={disabled}>
      {[0, 1, 2].map((row) => (
        <div className="board-row" role="row" key={row}>
          {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
        </div>
      ))}
    </div>
  );
}
