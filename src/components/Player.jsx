import React, { useState } from "react";

const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditng] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const editHandler = () => {
    setIsEditng((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const nameHandler = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName ? playerName : name}</span>
        ) : (
          <input
            type="text"
            value={playerName}
            onChange={nameHandler}
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
