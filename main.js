<!DOCTYPE HTML>
<html><head>
<meta charset="utf-8">
<style>
#img1 {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100px;
  height: 100px;
  background-color: #000000;
}

    </style>
	<script type="text/javascript">
	var curPosX = 0;
var curPosY = 0;
var interval;
var n = 10; // На сколько двигать за раз
var width = document.documentElement.clientWidth; // Ширина экрана
var height = document.documentElement.clientHeight; // Высота экрана
var imgWidth = 100; // Ширина картинки
var imgHeight = 100; // Высота картинки
var img1 = document.getElementById("img1");
var t = 0;
function move() {
  document.all.img1.style.left = 200 + 100*Math.sin(t*2*Math.PI/360) + "px";
  document.all.img1.style.top = 200 + 100*Math.cos(t*2*Math.PI/360) + "px";
  if ((curPosX == (width - imgWidth)) || (curPosY == (height - imgHeight))) {
    clearInterval(interval);
  }
  t += 1;
  if (t > 360)
  {
	t = 0;
  }
  
}
interval = setInterval(move, 10);
	</script>
</head>
<body>
<img id="img1" src="UePhL9aPuzQ.jpg">
</body>
</html>