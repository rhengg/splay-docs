const id = "b8579cc0-9d40-43ef-8636-a32976e84899";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMmI2NDZkNWUtYzMxZC00YTMxLWFmM2UtMjYxYTRlZWY0MDYyIiwiaXNzIjoic2thcmEtcGxheWVyIiwic3ViIjoiYjg1NzljYzAtOWQ0MC00M2VmLTg2MzYtYTMyOTc2ZTg0ODk5IiwiYXVkIjpbInBsYXllci1kZXYiXSwibmJmIjoxNzA4NDIxNjExLCJpYXQiOjE3MDg0MjE2MTF9.VTkmc4KiFtO1xwQTb_dP3xjuErzYr1SSUJU4fgVpxPg";
const player = new window.SkaraPlayer("player", id, token);
player.start();

const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", () => player.play());

const pauseBtn = document.querySelector("#pause-btn");
pauseBtn.addEventListener("click", () => player.pause());
``;