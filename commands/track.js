const tracks = require("../data/tracks.json");

function getTrack(technology, level) {
  const track = tracks.tracks.find(
    (item) =>
      item.technology.toLowerCase() === technology.toLowerCase() &&
      item.level.toLowerCase() === level.toLowerCase()
  );

  if (!track) {
    return "Trilha não encontrada.";
  }

  return track;
}

module.exports = { getTrack };