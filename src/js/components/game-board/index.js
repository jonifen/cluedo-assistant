import React, { useState } from 'react';
import Entities from '../../entities-config';
import Entity from '../entity/index';

function GameBoard() {
  const [entities, setEntities] = useState(Entities);

  return (
    <div data-testid="game-board">
    {
      entities.map(entity => {
        return <Entity key={entity.entity} {...entity} />
      })
    }
    </div>
  );
}

export default GameBoard;