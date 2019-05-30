import React, {useEffect, useState} from 'react';

function Entity({entity, name, category, currentSelectedState, onClickEvent}) {
  function onEntityClick(e) {
    onClickEvent(entity);
  }

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    console.log(`use effect! ${entity} : ${currentSelectedState}`);
    if (currentSelectedState != selected)
      setSelected(currentSelectedState);
  }, []);

  let entityImage = null;
  if (entity) {
    const imgUrl = `/img/${entity}.png`;
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