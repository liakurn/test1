(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"4 задание_atlas_", frames: [[951,902,353,360],[1098,1264,59,59],[951,1264,145,138],[0,902,949,742],[0,0,1800,900]]}
];


// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(ss["4 задание_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["4 задание_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["4 задание_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["4 задание_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.фонполе = function() {
	this.initialize(ss["4 задание_atlas_"]);
	this.gotoAndStop(4);
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


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-0.5,-0.5,176.5,180), null);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-14.6,-14.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-14.6,29.5,29.5);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-36.3,-34.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,-34.4,72.5,69);


// stage content:
(lib._4задание = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_5
	this.instance = new lib.Анимация6("synched",0);
	this.instance.setTransform(451,303.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[451.1,303.4,462.5,307.8,471.4,314.1,488.4,326.1,488.9,326.5,495,330.1,515.9,334.4,536.3,338.5,546.9,338.5,555.5,338.5,566.8,333.3,572.9,330.5,587.8,321.9,601.7,313.9,609.7,310.5,622.1,305.3,632.3,305.3,637.5,305.3,655.3,303.5,673.1,301.6,679.8,301.6,741.8,301.6,783.1,314.6,793.4,317.8,810.1,323.4,824.2,327.5,838,327.5,860.2,327.5,877.8,322.4,901.7,315.6,909.5,300.7,910.7,298.5,914.6,272.5,918.7,244.7,918.7,233.8,918.7,228.9,907.2,213.1,897.2,199.5,887.4,189,882.8,184.2,869.7,175.4,857.9,167.5,856,167,841,162.9,824.9,160.1,805.9,156.8,792.7,156.8,771.8,156.8,760.9,163.5,753.3,168.2,744.4,181.7,741.5,186.2,740.6,187.4,739.4,189.2,737.5,190.4,729.4,194.8,715.8,202.9,708.9,207.1,705.7,209.7,703.7,211.6,703.1,212,702.8,212.2,683.5,217.7,677.5,217.7,671.5,217.7,670.5,211.2,663.2,208.8,658.3,207.2,649.3,207.4,643,207.7,635.5,206.6,625.7,205.2,616.1,201.9,604.1,197.8,599.4,192,597.5,189.6,595.4,188.4,592.1,186.7,584.8,185.4,570.2,182.7,569.1,182.6,568.9,182.6,556.6,182.6,545,182.6,518.6,201.3,493.9,218.8,484.3,231.5,480.6,236.7,470.1,254.8,457,277.6,455.8,284.1]}},54).wait(1));

	// Слой_10
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(330.05,529.55,1,1,0,0,0,87.9,89.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:87.8,regY:89.5,rotation:-0.5129,x:330.8,y:524.7},0).wait(1).to({rotation:-1.0258,x:331.65,y:519.8},0).wait(1).to({rotation:-1.5386,x:332.45,y:514.8},0).wait(1).to({rotation:-2.0515,x:333.35,y:509.85},0).wait(1).to({rotation:-2.5644,x:334.2,y:504.9},0).wait(1).to({rotation:-3.0773,x:335.05,y:500},0).wait(1).to({rotation:-3.5902,x:335.95,y:495.05},0).wait(1).to({rotation:-4.103,x:336.75,y:490.1},0).wait(1).to({rotation:-4.6159,x:337.6,y:485.2},0).wait(1).to({rotation:-5.1288,x:338.5,y:480.25},0).wait(1).to({rotation:-5.6417,x:339.3,y:475.25},0).wait(1).to({rotation:-6.1546,x:340.2,y:470.4},0).wait(1).to({rotation:-6.6675,x:341.05,y:465.45},0).wait(1).to({rotation:-7.1803,x:341.9,y:460.5},0).wait(1).to({rotation:-7.6932,x:342.75,y:455.55},0).wait(1).to({rotation:-8.2061,x:343.6,y:450.6},0).wait(1).to({x:344.45,y:445.7},0).wait(1).to({x:345.3,y:440.75},0).wait(1).to({x:346.15,y:435.8},0).wait(1).to({x:347,y:430.85},0).wait(1).to({x:347.85,y:425.95},0).wait(1).to({x:348.7,y:421},0).wait(1).to({x:349.55,y:416.05},0).wait(1).to({x:350.4,y:411.1},0).wait(1).to({x:351.25,y:406.15},0).wait(1).to({x:352.15,y:401.25},0).wait(1).to({x:353,y:396.3},0).wait(1).to({x:353.85,y:391.35},0).wait(1).to({x:354.7,y:386.4},0).wait(1).to({x:355.55,y:381.5},0).wait(1).to({x:356.4,y:376.55},0).wait(1).to({x:357.25,y:371.6},0).wait(1).to({x:358.1,y:366.65},0).wait(1).to({x:358.95,y:361.75},0).wait(1).to({y:369.4},0).wait(1).to({y:377.1},0).wait(1).to({y:384.8},0).wait(1).to({y:392.5},0).wait(1).to({y:400.2},0).wait(1).to({y:407.9},0).wait(1).to({y:415.6},0).wait(1).to({y:423.3},0).wait(1).to({y:431},0).wait(1).to({y:438.7},0).wait(1).to({y:446.35},0).wait(1).to({y:454.05},0).wait(1).to({y:461.75},0).wait(1).to({y:469.45},0).wait(1).to({y:477.15},0).wait(1).to({y:484.85},0).wait(1).to({y:492.55},0).wait(1).to({y:500.25},0).wait(1).to({y:507.95},0).wait(1).to({y:515.65},0).wait(1));

	// Слой_2
	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.setTransform(1142.1,616.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:943.35},23).to({skewY:180,y:618.85},1).to({x:1140.35},29).to({skewY:0,x:1144.9},1).wait(1));

	// Слой_1
	this.instance_3 = new lib.фонполе();
	this.instance_3.setTransform(-103,0,0.807,0.807);

	this.instance_4 = new lib.CachedBmp_1();
	this.instance_4.setTransform(223.6,227.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(55));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(537,360,812.5999999999999,366.29999999999995);
// library properties:
lib.properties = {
	id: '18CB05100C711049AD85677CAB0472AC',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/4 задание_atlas_.png", id:"4 задание_atlas_"}
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
an.compositions['18CB05100C711049AD85677CAB0472AC'] = {
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