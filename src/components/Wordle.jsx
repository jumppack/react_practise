import React, { useState } from 'react';

const SECRET_WORD = "SPEND";
const MAX_GUESSES = 5;
const WORD_LENGTH = 5;

export default function Wordle() {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameState, setGameState] = useState("playing"); // "playing", "won", "lost"

  const getColor = (char, index, word) => {
    if (!word) return "transparent";
    const secretChar = SECRET_WORD[index];
    
    if (char === secretChar) return "green";
    if (SECRET_WORD.includes(char)) return "yellow";
    return "red";
  };

  const handleKeyDown = (e) => {
    if (gameState !== "playing") return;

    if (e.key === "Enter" && currentGuess.length === WORD_LENGTH) {
      const newGuesses = [...guesses, currentGuess.toUpperCase()];
      setGuesses(newGuesses);
      setCurrentGuess("");

      if (currentGuess.toUpperCase() === SECRET_WORD) {
        setGameState("won");
      } else if (newGuesses.length === MAX_GUESSES) {
        setGameState("lost");
      }
    }
  };

  const renderCell = (char, color) => (
    <div 
      style={{ 
        width: '40px', 
        height: '40px', 
        border: '1px solid #ccc', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: color,
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }}
    >
      {char}
    </div>
  );

  const grid = [];
  for (let i = 0; i < MAX_GUESSES; i++) {
    const row = [];
    const guess = guesses[i];
    const isCurrentRow = i === guesses.length && gameState === "playing";

    for (let j = 0; j < WORD_LENGTH; j++) {
      let char = "";
      let color = "transparent";

      if (guess) {
        char = guess[j];
        color = getColor(char, j, guess);
      } else if (isCurrentRow) {
        char = currentGuess[j] || "";
      }

      row.push(<React.Fragment key={j}>{renderCell(char, color)}</React.Fragment>);
    }
    grid.push(<div key={i} style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>{row}</div>);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
      <div id="grid-container">
        {grid}
      </div>

      {gameState === "playing" ? (
        <input
          type="text"
          maxLength={WORD_LENGTH}
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
          autoFocus
          style={{ marginTop: '20px', padding: '10px', fontSize: '16px' }}
        />
      ) : (
        <div style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
          {gameState === "won" ? "You've won!" : "You've lost!"}
        </div>
      )}
    </div>
  );
}