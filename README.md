# Splay custom code documentation

## Step 1: Create a div with an id, wherever you want to add the video player, and name it as you wish.

#### For this demo, we are naming the id as "player"

```html
<div id="player"></div>
```

## Step 2: Pass the attributes: data-src (custom video url) and data-media-type (custom video media type)to the div you created in Step 1, like the example below.

### Note : If the video type is hls then pass the data-media-type as "hls", otherwise you need to pass it as "mp4" (Currently Splay supports only "hls" and "mp4")

```html
Example :

<div
  id="player"
  data-src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  data-media-type="hls"
></div>
```

## Step 3: Copy this CSS link

`
https://splay-plugin-web.s3.ap-south-1.amazonaws.com/development/index-0.1.40.css`

## Step 4: Create a 'link' tag and add the CSS link you copied in Step 3.

```html
<link
  rel="stylesheet"
  href="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/development/index-0.1.40.css"
/>
```

## Step 5: Now copy this JS link

`
https://splay-plugin-web.s3.ap-south-1.amazonaws.com/development/index-0.1.40.js`

## Step 6: Create a 'script' tag inside body element and add the JS link you copied in Step 5

```html
<script src="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/development/index-0.1.40.js"></script>
```

<!-- ```html
<head>
  <link
    rel="stylesheet"
    href="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/development/index-0.1.40.css"
  />
</head>

<body>
  <div
    id="player"
    data-src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    data-media-type="hls"
  ></div>

  <script src="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/development/index-0.1.40.js"></script>
</body>
``` -->

## Step 7: To add functionality to the video player, add the following code to your main JS file or under 'script' tag inside the body element of HTML.

### Note: For No-code builders like Webflow, it is to be added in the custom code field.

#### To use in JS file

```js
const id = "b8579cc0-9d40-43ef-8636-a32976e84899";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMmI2NDZkNWUtYzMxZC00YTMxLWFmM2UtMjYxYTRlZWY0MDYyIiwiaXNzIjoic2thcmEtcGxheWVyIiwic3ViIjoiYjg1NzljYzAtOWQ0MC00M2VmLTg2MzYtYTMyOTc2ZTg0ODk5IiwiYXVkIjpbInBsYXllci1kZXYiXSwibmJmIjoxNzA4NDIxNjExLCJpYXQiOjE3MDg0MjE2MTF9.VTkmc4KiFtO1xwQTb_dP3xjuErzYr1SSUJU4fgVpxPg";
const player = new window.SkaraPlayer("player", id, token);
player.start();
```

#### To use in HTML script tag

```html
<body>
  <script>
    const id = "b8579cc0-9d40-43ef-8636-a32976e84899";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMmI2NDZkNWUtYzMxZC00YTMxLWFmM2UtMjYxYTRlZWY0MDYyIiwiaXNzIjoic2thcmEtcGxheWVyIiwic3ViIjoiYjg1NzljYzAtOWQ0MC00M2VmLTg2MzYtYTMyOTc2ZTg0ODk5IiwiYXVkIjpbInBsYXllci1kZXYiXSwibmJmIjoxNzA4NDIxNjExLCJpYXQiOjE3MDg0MjE2MTF9.VTkmc4KiFtO1xwQTb_dP3xjuErzYr1SSUJU4fgVpxPg";
    const player = new window.SkaraPlayer("player", id, token);
    player.start();
  </script>
</body>
```

### Note : SkaraPlayer required parameters are: 'id' and 'token', which are available on the Splay dashboard.

<!-- ### The div id is the one you created in Step 2 -->

## Step 8 : To add custom play and pause button, write this in the HTML file

```html
<button id="play-btn">play</button>

<button id="pause-btn">puase</button>
```

## Step 9 : To add custom play and pause button functionality, use the following in JS file or HTML script tag created in Step 7

```js
const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", () => player.play());

const pauseBtn = document.querySelector("#pause-btn");
pauseBtn.addEventListener("click", () => player.pause());
```

## This is what the code will finally look like

#### For usage in HTML only

```html
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/development/index-0.1.40.css"
    />
  </head>

  <body>
    <div
      id="player"
      data-src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
      data-media-type="hls"
    ></div>

    <button id="play-btn">play</button>
    <button id="pause-btn">puase</button>

    <script src="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/development/index-0.1.40.js"></script>
    <script>
      const id = "b8579cc0-9d40-43ef-8636-a32976e84899";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMmI2NDZkNWUtYzMxZC00YTMxLWFmM2UtMjYxYTRlZWY0MDYyIiwiaXNzIjoic2thcmEtcGxheWVyIiwic3ViIjoiYjg1NzljYzAtOWQ0MC00M2VmLTg2MzYtYTMyOTc2ZTg0ODk5IiwiYXVkIjpbInBsYXllci1kZXYiXSwibmJmIjoxNzA4NDIxNjExLCJpYXQiOjE3MDg0MjE2MTF9.VTkmc4KiFtO1xwQTb_dP3xjuErzYr1SSUJU4fgVpxPg";
      const player = new window.SkaraPlayer("player", id, token);
      player.start();

      const playBtn = document.querySelector("#play-btn");
      playBtn.addEventListener("click", () => player.play());

      const pauseBtn = document.querySelector("#pause-btn");
      pauseBtn.addEventListener("click", () => player.pause());
    </script>
  </body>
</html>
```

#### For usage in HTML and JS

```html
index.html ->

<html>
  <head>
    <link
      rel="stylesheet"
      href="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/development/index-0.1.40.css"
    />
  </head>

  <body>
    <div
      id="player"
      data-src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
      data-media-type="hls"
    ></div>

    <button id="play-btn">play</button>
    <button id="pause-btn">puase</button>

    <script src="https://splay-plugin-web.s3.ap-south-1.amazonaws.com/development/index-0.1.40.js"></script>
    <script src="index.js"></script>
  </body>
</html>
```

```js
index.js ->

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
```
