import React, {useState} from 'react';

function Entity({entity, name, category, currentSelectedState, onClickEvent}) {
  const [currentState, setCurrentState] = useState("none");

  function onEntityClick(e) {
    const nextStates = {
      "none": "selected",
      "selected": "suspected",
      "suspected": "none"
    };

    setCurrentState(nextStates[currentState]);
    onClickEvent(entity);
  }

  let entityImage = null;
  if (entity) {
    const imgUrl = `./img/${entity}.png`;
    entityImage = <img src={imgUrl} data-testid="entity-image" />
  }

  let entityClassName = `entity ${currentState}`;

  return (
    <div className={entityClassName} data-testid="entity" onClick={onEntityClick}>
      {entityImage}
      <span className="cover"></span>
    </div>
  );
}

export default Entity;