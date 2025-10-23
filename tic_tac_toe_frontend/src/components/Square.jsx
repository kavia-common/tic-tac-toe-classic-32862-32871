import React from 'react';

// PUBLIC_INTERFACE
export default function Square({ value, onClick, isWinning, disabled, index }) {
  /**
   * Accessible square button:
   * - role="gridcell"
   * - aria-pressed for selected state
   * - aria-label describes the square index and value
   */
  const label = `Square ${index + 1}${value ? `, ${value}` : ''}`;
  return (
    <button
      type="button"
      className={`square ${value ? `square-${value}` : ''} ${isWinning ? 'square-winning' : ''}`}
      onClick={onClick}
      disabled={disabled}
      role="gridcell"
      aria-label={label}
      aria-pressed={Boolean(value)}
    >
      <span className="square-value">{value}</span>
    </button>
  );
}
