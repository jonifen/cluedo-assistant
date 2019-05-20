import React, { useState } from 'react';
import getAllEntities from '../../repositories/entities-repository';
import Entity from '../entity/index';

function GameBoard() {
  const [entities, setEntities] = useState(getAllEntities());

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