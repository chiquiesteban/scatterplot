var horLength = [];
var verLength = [];
var sizeLength = [];
var colorLength = [];
var alphaLength = [];

var horPcts = [];
var verPcts = [];
var sizePcts = [];
var colorPcts = [];
var alphaPcts = [];

var h, minHor, maxHor, minVer, maxVer, minSize, maxSize, minColor, maxColor, minAlpha, maxAlpha, leftcorrection, leftdata, leftnumber, bottomcorrection, bottomdata, bottomnumber, seePosition, setPosition;

function setAll() {
  
	h = ($("#scatterplot-cont").width())*ratio;
	$("#scatterplot-cont").css("height", h);
	
	for (var i in data) { 
		horLength.push(data[i][1]); 
		verLength.push(data[i][2]); 
		if (data[i][3] != undefined) { sizeLength.push(data[i][3]);}; 
		if (data[i][4] != undefined) { alphaLength.push(data[i][4]);}; 
		if (data[i][5] != undefined) { colorLength.push(data[i][5]);} ; 
	}

	horLength.sort(function(a,b){return a-b}); 
	verLength.sort(function(a,b){return a-b}); 
	sizeLength.sort(function(a,b){return a-b}); 
	colorLength.sort(function(a,b){return a-b}); 
	alphaLength.sort(function(a,b){return a-b});
	
	minHor = horLength[0]; 
	minVer = verLength[0]; 
	minSize = sizeLength[0]; 
	minColor = colorLength[0]; 
	minAlpha = alphaLength[0];

	maxHor = horLength[horLength.length-1]; 
	maxVer = verLength[verLength.length-1]; 
	maxSize = sizeLength[sizeLength.length-1]; 
	maxColor = colorLength[colorLength.length-1]; 
	maxAlpha = alphaLength[alphaLength.length-1];

	
	for (var h in data) { 
	
		horPcts.push((data[h][1]*100)/maxHor); 
		verPcts.push((data[h][2]*100)/maxVer); 
		if (data[i][3] != undefined) {sizePcts.push((data[h][3]*100)/maxSize)}else{sizePcts.push(10)};
		if (data[i][4] != undefined) {alphaPcts.push((data[h][4]*100)/maxAlpha)}else{alphaPcts.push(50)};  
		if (data[i][5] != undefined) {colorPcts.push((data[h][5]*100)/maxColor)}else{colorPcts.push(5)}; 
		$("#scatterplot-cont").append('<div class="bubble" id="b'+h+'" style="width:'+sizePcts[h]*bubblesize+'px; height:'+sizePcts[h]*bubblesize+'px; background:rgba('+ getColor(colorPcts[h]) +','+ (alphaPcts[h]*0.01) +'); z-index:'+ Math.floor((1/sizePcts[h])*1000) +';" onmouseover="doHover('+h+')" onmouseout="quitHover('+h+')"></div>');		
		$("#b"+h).css("left", horPcts[h]+"%");
		$("#b"+h).css("bottom", verPcts[h]+"%");
		leftcorrection =  $("#b"+h).css("left");
		leftdata = leftcorrection.split("px");
		leftnumber = leftdata[0];
		seePosition = $("#b"+h).position()
		setPosition = ($("#scatterplot-cont").height() - seePosition.top)
		$("#b"+h).css("left", leftnumber - (sizePcts[h]*bubblesize)*0.5 +'px');
		$("#b"+h).css("bottom", setPosition - (sizePcts[h]*bubblesize)*1.5 +'px');
		$("#scatterplot-cont").append('<div class="bubbleover" id="bo'+h+'" style="width:2px; height:2px; background:rgba(0,0,0,0.9);"></div>')	
		$("#bo"+h).css("bottom", setPosition - (sizePcts[h]*bubblesize) -1+'px');
		$("#bo"+h).css("left", parseInt(leftnumber) -1+'px');
	
	}

	for (var j in data) {
		$("#scatterplot-cont").append('<div class="bar" id="barh'+j+'" style="bottom:0; left:calc('+horPcts[j]+'% - 1px); height:calc('+verPcts[j]+'% - 1px); width:1px;"></div>');
		$("#scatterplot-cont").append('<div class="bar" id="barv'+j+'" style="left:0; bottom:calc('+verPcts[j]+'% - 1px); width:calc('+horPcts[j]+'% - 1px); height:1px;"></div>');
	}
	$("#hkey").append(horLabel); $("#vkey").append(verLabel);
}

$(document).ready(function(){ 	
	
	$(window).resize(function(){
		$(".bar").remove();
		$(".bubble").remove();
		$(".bubbleover").remove();
		$(".keyover").empty();
		setAll()
	})	
	
	setAll()
	
});

function doHover(num) {
	var nw = $("#b"+num).width()-2;
	$("#b"+num).css("border", "1px solid #000000").css("cursor", "pointer").css("width", nw).css("height", nw);
	$("#barh"+num).css("background", "rgba(0,0,0,0.7)");
	$("#barv"+num).css("background", "rgba(0,0,0,0.7)");
	$("#ntname").append(data[num][0]); 
	$("#ntx").append('<span>'+ horLabel +'</span> '+ data[num][1] +' '); 
	$("#nty").append('<span>'+ verLabel +'</span> '+ data[num][2] +' '); 
	if (data[0][3] == undefined) { $('#ntsize').remove() } else {$("#ntsize").append('<span>'+ sizeLabel +'</span> '+ data[num][3] +' ')}; 
	if (data[0][4] == undefined) { $('#ntalpha').remove() } else {$("#ntalpha").append('<span>'+ alphaLabel +'</span> '+ data[num][4] +' ')}; 
	if (data[0][5] == undefined) { $('#ntcolor').remove() } else {$("#ntcolor").append('<span>'+ colorLabel +'</span> '+ data[num][5] +' ')};
	$("#nametag").css("display", "block");
	
	$(document).mousemove(function(e){
		
		if ( e.pageX > ($("#scatterplot-cont").width() - 300) && e.pageY < ($("#scatterplot-cont").height() - 100)) {
      		$("#nametag").css("right", "2px").css("top", e.pageY)
      	} else if (e.pageY > ($("#scatterplot-cont").height() - 100) && e.pageX > ($("#scatterplot-cont").width() - 300)) {
      		$("#nametag").css("right", "2px").css("bottom", 50)
      	} else if ( e.pageX <= ($("#scatterplot-cont").width() - 300) && e.pageY >= ($("#scatterplot-cont").height() - 100)) {
      		$("#nametag").css("left", e.pageX).css("bottom", 50)
      	}  else if ( e.pageX < ($("#scatterplot-cont").width() - 300) && e.pageY < ($("#scatterplot-cont").height() - 100) ) {
      		$("#nametag").css("left", e.pageX).css("top", e.pageY)
      	} else {
      	};

   	});
}

function quitHover(num) {
	var nw2 = $("#b"+num).width()+2;
	$("#b"+num).css("border", "none").css("width", nw2).css("height", nw2);
	$("#barh"+num).css("background", "rgba(235,235,235,0.5)");
	$("#barv"+num).css("background", "rgba(235,235,235,0.5)");
	$("#ntname").empty(); 
	$("#ntx").empty(); 
	$("#nty").empty(); 
	if (data[num][3] == undefined) { } else {$("#ntsize").empty()}; 
	if (data[num][4] == undefined) { } else {$("#ntalpha").empty()}; 
	if (data[num][5] == undefined) { } else {$("#ntcolor").empty()};
	$("#nametag").css("display", "none");
}

function getColor(num) {
	
	if ( num==0) {
		return("200,200,200")
	} else if ( num>=0 && num <5) {
		return("222,84,80")
	} else if ( num >=5 && num <10) {
		return("243,118,78")
	} else if ( num >=10 && num <15) {
		return("247,150,108") 
	} else if ( num >=15 && num <20) {
		return("253,195,123")
	} else if ( num >=20 && num <25) {
		return("253,207,139")
	} else if ( num >=25 && num <30) {
		return("226,218,99")
	} else if ( num >=30 && num <35) {
		return("197,220,105")
	} else if ( num >=35 && num <40) {
		return("182,203,91")
	} else if ( num >=40 && num <45) {
		return("162,185,62")
	} else if ( num >=45 && num <50) {
		return("164,185,98")
	} else if ( num >=50 && num <55) {
		return("135,186,98")
	} else if ( num >=55 && num <60) {
		return("137,201,123")
	} else if ( num >=60 && num <65) {
		return("122,182,113")
	} else if ( num >=65 && num <70) {
		return("140,195,176")
	} else if ( num >=70 && num <75) {
		return("140,196,214")
	} else if ( num >=75 && num <80) {
		return("112,184,214")
	} else if ( num >=80 && num <85) {
		return("106,142,190")
	} else if ( num >=85 && num <90) {
		return("64,109,160")
	} else if ( num >=90 && num <95) {
		return("14,90,158")
	} else if ( num >=95) {
		return("8,62,104")
	} else {
		return("200,200,200")
	}
}
