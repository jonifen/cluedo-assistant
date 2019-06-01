import React, {useState} from 'react';

function Entity({entity, name, category, currentSelectedState, onClickEvent}) {
  const [selected, setSelected] = useState(currentSelectedState);

  function onEntityClick(e) {
    setSelected(!selected);
    onClickEvent(entity);
  }

  let entityImage = null;
  if (entity) {
    const imgUrl = `./img/${entity}.png`;
    entityImage = <img src={imgUrl} data-testid="entity-image" />
  }

  let entityClassName = selected ? "entity selected" : "entity";

  return (
    <div className={entityClassName} data-testid="entity" onClick={onEntityClick}>
      {entityImage}
      <span className="cover"></span>
    </div>
  );
}

export default Entity;