import React, { useContext } from "react";

import Board from "../Board";
import GameContext from "../../contexts/game";

import * as Styles from "./GameMobile.styles";

const GameMobile: React.FC = () => {
  const { turn, handleUndo, handleRestart } = useContext(GameContext);

  return (
    <Styles.Layout>
      <Styles.Title>Gomoku</Styles.Title>
      <Styles.Content>
        <Styles.TopLine>
          <Styles.Turn turn={turn}>Your turn</Styles.Turn>
        </Styles.TopLine>
        <Board />
        <Styles.BottomLine>
          <Styles.UndoButton onClick={handleUndo}>Undo</Styles.UndoButton>
          <Styles.RestartButton onClick={handleRestart}>
            Restart
          </Styles.RestartButton>
        </Styles.BottomLine>
      </Styles.Content>
    </Styles.Layout>
  );
};

export default GameMobile;
