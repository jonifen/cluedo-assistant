import Entities from '../entities-config';

function getSuspects() {
  return Entities.suspects;
}

function getRooms() {
  return Entities.rooms;
}

function getWeapons() {
  return Entities.weapons;
}

function getAllEntities() {
  return [
    ...getSuspects(),
    ...getRooms(),
    ...getWeapons()
  ];
}

export default getAllEntities;