window.onload = function() {
	var itemsTitle = document.querySelectorAll(".flex-mappedcanvas-aree li p");
	var itemsDescription = document.querySelectorAll(".flex-mappedcanvas-description");


	var layer1 = document.getElementById("privatiCanvasL1");
	var layer2 = document.getElementById("privatiCanvasL2");
	var layer3 = document.getElementById("privatiCanvasL3");
	var layer4 = document.getElementById("privatiCanvasL4");
	var layer5 = document.getElementById("privatiCanvasL5");
	var ctx1 = layer1.getContext("2d");
	var ctx2 = layer2.getContext("2d");
	var ctxMiddle = layer3.getContext("2d");
	var ctxCasa = layer4.getContext("2d");
	var ctxInactiveItem = layer5.getContext("2d");
	var centerX = layer1.width / 2;
	var centerY = layer1.height / 2;
	var img = document.getElementById("imageCanvas");
	var elements


	// find mouse click position
	function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

	layer5.addEventListener('click', on_canvas_click, false);
	function on_canvas_click(ev) {
		var mousePos = getMousePos(layer2, ev);

		var x = mousePos.x;
    var y = mousePos.y;
		// console.log('x = '+x);
		// console.log('y = '+y);
		ctxInactiveItem.clearRect(0, 0, layer1.width, layer1.height);

		elements.forEach(function(element) {
			var cornRadius = 12;
			var centY = parseFloat(element.top) + 8;
			var centX = parseFloat(element.left) + 8;
			var rLength = parseFloat(element.width) + parseFloat(centX);
			ctxInactiveItem.lineJoin = "round";
			ctxInactiveItem.lineWidth = cornRadius;
			ctxInactiveItem.beginPath();
			ctxInactiveItem.moveTo(parseFloat(centX) - 2, centY);
			ctxInactiveItem.lineTo(rLength, centY);
			ctxInactiveItem.lineTo(centX, centY);
			ctxInactiveItem.closePath();
			ctxInactiveItem.strokeStyle = "rgba(255,255,255,.6)";
			ctxInactiveItem.stroke();
			ctxInactiveItem.fill();


        if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
            showDescription(element.id);
						ctxCasa.clearRect(0, 0, layer1.width, layer1.height);
						ctxInactiveItem.clearRect(element.left, element.top, element.width, element.height);

						if (element.id == 'area3item3') {
							ctxCasa.beginPath();
				    	ctxCasa.moveTo(124, 78);
				    	ctxCasa.lineTo(263, 118);
				    	ctxCasa.lineTo(215, 241);
				    	ctxCasa.lineTo(42, 167);
				    	ctxCasa.fillStyle= "rgba(255,0,0,.1)" ;
				    	ctxCasa.fill();
						}else if (element.id == 'area3item1') {
							var rectP = [
								[ [115,97], [120,91], [120,103], [115,109] ],
								[ [132,87], [146,91], [146,101], [132,97] ],
								[ [162,96], [165,97], [165,101], [162,100] ],
								[ [188,104], [197,107], [197,109], [188,106] ],
								[ [207,109], [217,113], [217,127], [207,123] ],
								[ [232,115], [253,121], [253,132], [232,127] ],
								[ [127,181], [136,184], [136,196], [127,193] ],
								[ [76,161], [93,168], [93,176], [76,169] ],
								[ [70,146], [77,140], [77,148], [70,154] ],
								[ [164,204], [194,217], [194,224], [164,211] ]
							];

							for (var i = 0; i < rectP.length; i++) {
									ctxCasa.beginPath();
									ctxCasa.moveTo(rectP[i][0][0], rectP[i][0][1]);
									for (var j = 1; j < rectP[i].length; j++) {
										ctxCasa.lineTo(rectP[i][j][0], rectP[i][j][1]);
									}
									ctxCasa.fillStyle= 'rgba(255,0,0,.5)' ;
									ctxCasa.fill();
							}
						}else if (element.id == 'area3item2') {
							var centers = [ [112,105], [113,154], [165,191], [226,183], [173,129] ];
							// console.log(centers);
							ctxCasa.transform(1,0.1,-0.3,1,38,-18);
							for (var j = 0; j < centers.length; j++) {
								// console.log(centers[j]);
								var radiusBase = 8
								for (var i = radiusBase; i <= 3*radiusBase; i += radiusBase) {
									ctxCasa.beginPath();
									ctxCasa.arc(centers[j][0],centers[j][1],i,0,2*Math.PI,false);
									ctxCasa.lineWidth = 1;
									ctxCasa.strokeStyle = "rgba(255,0,0,.5)";
									ctxCasa.stroke();
								}
							}
							ctxCasa.transform(1,-0.1,0.3,1,-38,18);
						} else if (element.id == 'area3item4') {
							var triangP = [
								[ [127, 85], [198, 107], [86, 129], [135, 117] ],
								[ [254, 124], [222, 205], [198, 108], [219, 143] ],
								[ [216, 216], [198, 114], [142, 184], [165, 171] ],
								[ [67, 151], [142, 180], [187, 112], [150, 158] ]
							];

							for (var i = 0; i < triangP.length; i++) {
									ctxCasa.beginPath();
									ctxCasa.moveTo(triangP[i][0][0], triangP[i][0][1]);
									for (var j = 1; j < (triangP[i].length -1); j++) {
										ctxCasa.lineTo(triangP[i][j][0], triangP[i][j][1]);
									}

									var grd = ctxCasa.createLinearGradient(triangP[i][0][0], triangP[i][0][1], triangP[i][3][0], triangP[i][3][1]);
									grd.addColorStop(0, 'rgba(255,0,0,.5)');
									grd.addColorStop(1, 'rgba(255,0,0,.0)');
									ctxCasa.fillStyle = grd ;
									ctxCasa.fill();
							}
						}
        }
    });

	}

	layer5.addEventListener('mousemove', on_items_hover, false);
	function on_items_hover(ev) {
		var mousePos = getMousePos(layer2, ev);
		var x = mousePos.x;
    var y = mousePos.y;
		layer5.style.cursor='default';
		elements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
            layer5.style.cursor='pointer';
        }
    });

	}

	// draw layer1 image and circles
	function baseDraw() {
		ctx1.drawImage(img,centerX - img.width / 2,
			centerY - img.height / 2);
		ctx1.beginPath();
		ctx1.arc(centerX,centerY,150,0,2*Math.PI,false);
		ctx1.lineWidth = 1;
		ctx1.strokeStyle = '#4F6297';
		ctx1.stroke();
		ctx1.beginPath();
		ctx1.arc(centerX,centerY,125,0,2*Math.PI,false);
		ctx1.stroke();
	};
	baseDraw();

	for (var i=0; i < itemsTitle.length; i++) {
		itemsTitle.item(i).onclick = activeItem;
	}

	function activeItem() {
		//clear canvas layers
		ctxMiddle.clearRect(0, 0, layer1.width, layer1.height);
		ctx2.clearRect(0, 0, layer1.width, layer1.height);
		ctxCasa.clearRect(0, 0, layer1.width, layer1.height);
		ctxInactiveItem.clearRect(0, 0, layer1.width, layer1.height);
		elements = [];

		// active and hide menu and description items
		hideDescription();

		itemsTitle.forEach(function(el){
			el.classList.remove("active");
		});
		this.className += "active";

		var itemIdName = this.getAttribute("id");
		var itemId = eval(itemIdName);

		// transparent layer for area3
		if (itemIdName == 'area3') {
			ctxMiddle.beginPath();
    	ctxMiddle.moveTo(124, 78);
    	ctxMiddle.lineTo(263, 118);
    	ctxMiddle.lineTo(215, 241);
    	ctxMiddle.lineTo(42, 167);
    	ctxMiddle.fillStyle= "rgba(255,255,255,.8)" ;
    	ctxMiddle.fill();
		}

		// dots on layer2
		for (var i = 0; i < Object.keys(itemId).length; i++) {
			drawDot(i+1);
		}


		function drawDot(n){
			var item = itemId['item'+n];
			var angle = parseFloat(item.dot.angle) + 90;
			if (item.dot.onCircle != true) {
				var centerDotX = item.dot.positionX;
				var centerDotY = item.dot.positionY;
			}else{
				switch (item.dot.circle) {
					case "1":
					var centerDotX = centerX + 150 * Math.cos(- angle * Math.PI/180);
					var centerDotY = centerY + 150 * Math.sin(- angle * Math.PI/180);
					break;
					case "2":
					var centerDotX = centerX + 125 * Math.cos(- angle * Math.PI/180);
					var centerDotY = centerY + 125 * Math.sin(- angle * Math.PI/180);
				}
			}

			if (itemIdName == 'area4') {
				var startAngle = 0.4 * Math.PI;
      	var endAngle = 0.9 * Math.PI;
				var radiusBase = 11;

				for (var i = radiusBase; i <= 6*radiusBase; i += radiusBase) {
					ctxMiddle.beginPath();
					ctxMiddle.arc(centerDotX,centerDotY,i,startAngle,endAngle,false);
					ctxMiddle.lineWidth = 1;
					ctxMiddle.strokeStyle = "rgba(255,0,0,.5)";
					ctxMiddle.stroke();
				}
				showDescription('area4item1')

			}else{
				var dotTitle = item.dot.title;
				// console.log(centerDotX);
				// console.log(centerDotX);
				var titleX = parseFloat(centerDotX) + 10;
				var titleY = parseFloat(centerDotY) + 3;
				var dotBgLength = (dotTitle.length * 5) + parseFloat(centerDotX)+5;


				var cornerRadius = 12;

				// Set faux rounded corners
				ctx2.lineJoin = "round";
				ctx2.lineWidth = cornerRadius;
				ctx2.beginPath();
				ctx2.moveTo(parseFloat(centerDotX) - 2, centerDotY);
				ctx2.lineTo(dotBgLength, centerDotY);
				ctx2.lineTo(centerDotX, centerDotY);
				ctx2.closePath();
				ctx2.strokeStyle = "rgba(255,255,255,.6)";
				ctx2.stroke();
				ctx2.fill();

				ctx2.lineWidth = 1;
				ctx2.beginPath();
				ctx2.arc(centerDotX,centerDotY,5,0,2*Math.PI,false);
				ctx2.fillStyle = '#4F6297';
				ctx2.fill();
				ctx2.stroke();
				ctx2.font = 'bold 10px Roboto';
				ctx2.fillStyle = '#333333';
				ctx2.fillText(dotTitle, titleX, titleY);

				elements.push({
					width: dotBgLength - (parseFloat(centerDotX) - 15),
			    height: cornerRadius+4,
			    top: centerDotY-8,
			    left: centerDotX - 8,
			    id: itemIdName+'item'+n,
					title: dotTitle
				});

			}


		};
	};

	function showDescription(id) {
		hideDescription();
		var activeEl = document.getElementById(id);
		activeEl.classList.remove("hide");
	}
	function hideDescription(){
		itemsDescription.forEach(function(el){
			if (!el.classList.contains('hide')) {
				el.className += " hide";
			}
		});
	};
};
