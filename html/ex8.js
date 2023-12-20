(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ex8_atlas_", frames: [[472,330,499,276],[990,0,433,287],[472,0,516,328],[602,608,499,276],[0,0,470,817],[0,819,600,300]]}
];


// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2951,897);


(lib.CachedBmp_8 = function() {
	this.initialize(ss["ex8_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["ex8_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["ex8_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["ex8_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["ex8_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4208,2112);


(lib._2b = function() {
	this.initialize(ss["ex8_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-737.75,-224.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-737.7,-224.2,1475.5,448.5), null);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-124.75,-68.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.7,-68.9,249.5,138);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-108.1,-71.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.1,-71.7,216.5,143.5);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-129.1,-81.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.1,-81.9,258,164);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-124.75,-68.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.7,-68.9,249.5,138);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-117.4,-203.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-203.8,235,408.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Анимация1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-117.4,-203.8,235,408.5), null);


// stage content:
(lib.ex8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("https://www.coral.ru/main/turkey/kapadokya/", "_blank");
		}
		playSound("_013WAV");
		playSound("песнянафон");
		this.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("https://www.coral.ru/main/turkey/kapadokya/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Слой_11
	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(-505.95,179.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:199.8},33).to({x:936.6,y:206.85},26).wait(1));

	// Слой_10
	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.setTransform(495.2,517.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:1047.8,y:583.7},33).to({x:1666.35,y:521.65},26).wait(1));

	// Слой_7
	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.setTransform(-252.05,459.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:387.8,y:506},33).to({x:1129.45,y:588.4},26).wait(1));

	// Слой_6
	this.instance_3 = new lib.Анимация2("synched",0);
	this.instance_3.setTransform(400.5,165.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:1098.5,y:226.5},33).to({x:1580.8,y:68.95},26).wait(1));

	// Слой_1
	this.movieClip_1 = new lib.Символ1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(85.85,356.05,1,1,0,0,0,0,0.2);

	this.instance_4 = new lib.Анимация1("synched",0);
	this.instance_4.setTransform(412.25,314.6,1,1,-5.9408);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).to({_off:true,regY:0,rotation:-5.9408,x:412.25,y:314.6,mode:"synched",startPosition:0},16).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},16).to({rotation:-29.9992,x:692.7,y:298.75},17).to({regY:0.1,rotation:-8.7444,x:1017.5,y:340.1},12).to({regY:0,rotation:-4.9441,x:1408.9,y:411.3},14).wait(1));

	// Слой_8
	this.movieClip_2 = new lib.Символ2();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(635,766.05);

	this.instance_5 = new lib.CachedBmp_5();
	this.instance_5.setTransform(-730.55,-62.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.movieClip_2}]}).wait(60));

	// Слой_2
	this.instance_6 = new lib._2b();
	this.instance_6.setTransform(-123,-24,2.5633,2.5633);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},50).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.5,297.5,1865.3,696);
// library properties:
lib.properties = {
	id: '050A0E9D6F2BC44DB15EE3E5E648767D',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_9.png", id:"CachedBmp_9"},
		{src:"images/CachedBmp_5.png", id:"CachedBmp_5"},
		{src:"images/ex8_atlas_.png", id:"ex8_atlas_"},
		{src:"sounds/_013WAV.mp3", id:"_013WAV"},
		{src:"sounds/песнянафон_.mp3", id:"песнянафон"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['050A0E9D6F2BC44DB15EE3E5E648767D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;