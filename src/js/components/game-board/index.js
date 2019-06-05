import React, { useState } from 'react';
import getAllEntities from '../../repositories/entities-repository';
import Entity from '../entity/index';

function GameBoard() {
  const entities = getAllEntities();
  const [selectedEntities, setSelectedEntities] = useState([]);

  function onEntityClick(entityName) {
    if (!selectedEntities[entityName])
      selectedEntities[entityName] = false;

    selectedEntities[entityName] = !selectedEntities[entityName];
    setSelectedEntities(selectedEntities);
  }

  return (
    <div data-testid="game-board">
      <div>
      {
        entities.map(entity => {
          return <Entity key={entity.entity} {...entity} currentSelectedState={selectedEntities[entity.entity]} onClickEvent={onEntityClick} />
        })
      }
      </div>
      <div className="commentsSection">
        <h3>Comments:</h3>
        <textarea name="comments" className="comments" rows="8" data-testid="comments"></textarea>
      </div>
    </div>
  );
}

export default GameBoard;