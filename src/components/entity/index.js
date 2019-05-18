import React from 'react';

function Entity({entity, name, category}) {
  let entityImage = null;
  if (entity) {
    const imgUrl = `./img/{entity}.png`;
    entityImage = <img src={imgUrl} data-testid="entity-image" />
  }

  return (
    <div className="entity" data-testid="entity">
      {entityImage}
    </div>
  );
}

export default Entity;