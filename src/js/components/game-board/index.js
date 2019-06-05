import React, { useState } from 'react';
import getAllEntities from '../../repositories/entities-repository';
import Entity from '../entity/index';
import Accordion from '../accordion/index';

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
      <Accordion headingText="Entities">
      {
        entities.map(entity => {
          return <Entity key={entity.entity} {...entity} currentSelectedState={selectedEntities[entity.entity]} onClickEvent={onEntityClick} />
        })
      }
      </Accordion>
      <Accordion headingText="Comments">
        <div className="commentsSection">
          <textarea name="comments" className="comments" rows="8" data-testid="comments"></textarea>
        </div>
      </Accordion>
    </div>
  );
}

export default GameBoard;