import React, { useState } from 'react';
import getAllEntities from '../../repositories/entities-repository';
import Entity from '../entity/index';

function GameBoard() {
  const [entities, setEntities] = useState(getAllEntities());
  const [selectedEntities, setSelectedEntities] = useState([]);

  function onEntityClick(entityName) {
    if (!selectedEntities[entityName])
      selectedEntities[entityName] = false;

    selectedEntities[entityName] = !selectedEntities[entityName];
    setSelectedEntities(selectedEntities);
  }

  return (
    <div data-testid="game-board">
    {
      entities.map(entity => {
        return <Entity key={entity.entity} {...entity} currentSelectedState={selectedEntities[entity.entity]} onClickEvent={onEntityClick} />
      })
    }
    </div>
  );
}

export default GameBoard;