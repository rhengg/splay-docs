const id = "d09bcbf7-2cfb-491f-842e-fc1685fde009";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYjE2MmNjNTItNjM1My00ZDM0LWI5MGMtYzczNDRjNDE0NDBiIiwiaXNzIjoic2thcmEtcGxheWVyIiwic3ViIjoiZDA5YmNiZjctMmNmYi00OTFmLTg0MmUtZmMxNjg1ZmRlMDA5IiwiYXVkIjpbInBsYXllci1wcm9kIl0sIm5iZiI6MTcwOTYzMzEzMCwiaWF0IjoxNzA5NjMzMTMwfQ.CwVdZg6e6GeHE0IVHFZ7duxvH5BZfHtVGIhpnxOz1LQ"
const player = new window.SkaraPlayer("player", id, token);
player.start();

const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", () => player.play());

const pauseBtn = document.querySelector("#pause-btn");
pauseBtn.addEventListener("click", () => player.pause());
``;