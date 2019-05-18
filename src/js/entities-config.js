const suspects = [
  { "entity":"colonel-mustard", "name":"Col. Mustard", "category":"suspect" },
  { "entity":"professor-plum", "name":"Prof. Plum", "category":"suspect" },
  { "entity":"mrs-white", "name":"Mrs White", "category":"suspect" },
  { "entity":"miss-scarlett", "name":"Miss Scarlett", "category":"suspect" },
  { "entity":"reverend-green", "name":"Rev. Green", "category":"suspect" },
  { "entity":"mrs-peacock", "name":"Mrs Peacock", "category":"suspect" }
];

const weapons = [
  { "entity":"candlestick", "name":"Candlestick", "category":"weapon" },
  { "entity":"dagger", "name":"Dagger", "category":"weapon" },
  { "entity":"lead-pipe", "name":"Lead Pipe", "category":"weapon" },
  { "entity":"revolver", "name":"Revolver", "category":"weapon" },
  { "entity":"rope", "name":"Rope", "category":"weapon" },
  { "entity":"spanner", "name":"Spanner", "category":"weapon" }
]

const rooms = [
  { "entity":"ballroom", "name":"Ballroom", "category":"room" },
  { "entity":"billiard-room", "name":"Billiard Room", "category":"room" },
  { "entity":"conservatory", "name":"Conservatory", "category":"room" },
  { "entity":"dining-room", "name":"Dining Room", "category":"room" },
  { "entity":"hall", "name":"Hall", "category":"room" },
  { "entity":"kitchen", "name":"Kitchen", "category":"room" },
  { "entity":"library", "name":"Library", "category":"room" },
  { "entity":"lounge", "name":"Lounge", "category":"room" },
  { "entity":"study", "name":"Study", "category":"room" }
]

export default [
  ...suspects,
  ...weapons,
  ...rooms
];