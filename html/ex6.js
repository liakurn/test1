(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ex6_atlas_", frames: [[0,0,1176,1032]]},
		{name:"ex6_atlas_2", frames: [[1168,1101,475,322],[949,1101,1,14],[949,0,761,633],[949,635,719,464],[0,0,947,1276],[0,1278,1166,696],[1584,1425,402,367],[1168,1425,414,369]]}
];


// symbols:



(lib.CachedBmp_1922 = function() {
	this.initialize(ss["ex6_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2572,1442);


(lib.CachedBmp_1921 = function() {
	this.initialize(img.CachedBmp_1921);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2573,541);


(lib.CachedBmp_1920 = function() {
	this.initialize(ss["ex6_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.golova = function() {
	this.initialize(ss["ex6_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ruka_levaya = function() {
	this.initialize(ss["ex6_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ruka_pravaya = function() {
	this.initialize(ss["ex6_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.shar1 = function() {
	this.initialize(ss["ex6_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.shar2pngкопия = function() {
	this.initialize(img.shar2pngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1113,2198);


(lib.telo = function() {
	this.initialize(ss["ex6_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ukho_levoe = function() {
	this.initialize(ss["ex6_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ukho_pravoe = function() {
	this.initialize(ss["ex6_atlas_2"]);
	this.gotoAndStop(7);
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


(lib.шар2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.shar2pngкопия();
	this.instance.setTransform(0,0,0.3104,0.3104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.шар2, new cjs.Rectangle(0,0,345.5,682.3), null);


(lib.шар1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.shar1();
	this.instance.setTransform(0,0,0.2707,0.2707);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.шар1, new cjs.Rectangle(0,0,256.4,345.4), null);


(lib.ушко2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ukho_levoe();
	this.instance.setTransform(0,0,0.3016,0.3016);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ушко2, new cjs.Rectangle(0,0,121.3,110.7), null);


(lib.ушко1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ukho_pravoe();
	this.instance.setTransform(0,0,0.3213,0.3213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ушко1, new cjs.Rectangle(0,0,133,118.6), null);


(lib.тело = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.telo();
	this.instance.setTransform(0,0,0.2895,0.2895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.тело, new cjs.Rectangle(0,0,337.6,201.5), null);


(lib.рука2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ruka_levaya();
	this.instance.setTransform(0,0,0.2977,0.2977);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.рука2, new cjs.Rectangle(0,0,226.6,188.4), null);


(lib.рука1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ruka_pravaya();
	this.instance.setTransform(0,0,0.3121,0.3121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.рука1, new cjs.Rectangle(0,0,224.4,144.8), null);


(lib.голова = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.golova();
	this.instance.setTransform(0,0,0.3055,0.2781);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.голова, new cjs.Rectangle(0,0,359.3,287), null);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1922();
	this.instance.setTransform(-98.05,-66.5,0.4132,0.4132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-66.5,196.3,133.1);


(lib.шары = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.ikNode_6 = new lib.шар2();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(100.5,551.4,1,1,0,0,0,72,551.4);

	this.instance = new lib.шар1();
	this.instance.setTransform(128.2,185.9,1,1,0,0,0,128.2,172.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.ikNode_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.шары, new cjs.Rectangle(0,0,374,682.3), null);


// stage content:
(lib.ex6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Каркас_9
	this.ikNode_2 = new lib.голова();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(643.6,479.5,1,1,0,0,0,179.6,143.5);

	this.ikNode_1 = new lib.тело();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(659,658.9,1,1,0,0,0,167,139.9);

	this.ikNode_7 = new lib.рука1();
	this.ikNode_7.name = "ikNode_7";
	this.ikNode_7.setTransform(431.7,602.1,1,1,0,0,0,69.7,61.1);

	this.ikNode_5 = new lib.рука2();
	this.ikNode_5.name = "ikNode_5";
	this.ikNode_5.setTransform(863.4,585.7,1,1,0,0,0,153.4,73.7);

	this.ikNode_4 = new lib.ушко1();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(564.2,332,1,1,0,0,0,57.2,35);

	this.ikNode_3 = new lib.ушко2();
	this.ikNode_3.name = "ikNode_3";
	this.ikNode_3.setTransform(744.8,350.9,1,1,0,0,0,71.8,40.9);

	this.ikNode_8 = new lib.шары();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(525.15,637.5,1,1,0,0,0,169.9,575.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_8,p:{rotation:0,x:525.15,y:637.5,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:0,x:744.8,y:350.9,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:0,x:564.2,y:332,regY:35}},{t:this.ikNode_5,p:{rotation:0,x:863.4,y:585.7,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:0,x:431.7,y:602.1,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:643.6,y:479.5,regX:179.6,regY:143.5}}]}).to({state:[{t:this.ikNode_8,p:{rotation:-0.3401,x:525.05,y:637.65,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.0551,x:744.5,y:350.55,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.3,rotation:-0.7021,x:563.8,y:332.25,regY:35}},{t:this.ikNode_5,p:{rotation:-0.3891,x:863.1,y:584.9,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-0.3401,x:431.4,y:602.85,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.0472,x:643.65,y:479.4,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-0.6811,x:525.05,y:638,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.111,x:744.2,y:350.2,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-1.4042,x:563.15,y:332.6,regY:35}},{t:this.ikNode_5,p:{rotation:-0.7781,x:862.85,y:584.15,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-0.6811,x:431.3,y:603.65,regX:69.8}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.0944,x:643.8,y:479.4,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-1.0221,x:524.85,y:638.2,regX:169.8,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.167,x:743.9,y:349.9,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-2.1057,x:562.65,y:333.05,regY:35.1}},{t:this.ikNode_5,p:{rotation:-1.1672,x:862.55,y:583.6,regY:73.8,regX:153.4}},{t:this.ikNode_7,p:{rotation:-1.0221,x:430.95,y:604.5,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.1416,x:643.85,y:479.4,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-1.3631,x:524.95,y:638.45,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.2229,x:743.6,y:349.55,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-2.8084,x:562.15,y:333.2,regY:35}},{t:this.ikNode_5,p:{rotation:-1.5564,x:862.3,y:582.7,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-1.3631,x:430.7,y:605.4,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.1888,x:643.95,y:479.4,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-1.7033,x:524.75,y:638.8,regX:169.8,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.2789,x:743.3,y:349.3,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-3.5106,x:561.65,y:333.6,regY:35}},{t:this.ikNode_5,p:{rotation:-1.9456,x:862.05,y:582,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-1.7033,x:430.4,y:606.2,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.2361,x:644.05,y:479.4,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-2.0445,x:525,y:639.05,regX:170,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.334,x:743.05,y:349,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-4.2126,x:561.1,y:333.9,regY:35}},{t:this.ikNode_5,p:{rotation:-2.335,x:861.75,y:581.3,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-2.0445,x:430.25,y:607,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.2833,x:644.15,y:479.35,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-2.3848,x:524.8,y:639.35,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.3899,x:742.75,y:348.65,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-4.915,x:560.65,y:334.2,regY:35}},{t:this.ikNode_5,p:{rotation:-2.7244,x:861.35,y:580.55,regY:73.7,regX:153.3}},{t:this.ikNode_7,p:{rotation:-2.3848,x:430,y:607.85,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.3305,x:644.4,y:479.35,regX:179.7,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-2.7261,x:524.75,y:639.6,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.4459,x:742.4,y:348.4,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-5.6166,x:560.05,y:334.6,regY:35}},{t:this.ikNode_5,p:{rotation:-3.1139,x:861.1,y:579.8,regY:73.7,regX:153.3}},{t:this.ikNode_7,p:{rotation:-2.7261,x:429.75,y:608.75,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.3777,x:644.35,y:479.35,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-3.0666,x:524.7,y:639.75,regX:169.9,regY:575.3}},{t:this.ikNode_3,p:{rotation:-0.5018,x:742.15,y:348.05,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-6.319,x:559.6,y:334.95,regY:35}},{t:this.ikNode_5,p:{rotation:-3.5028,x:860.9,y:579.1,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-3.0666,x:429.5,y:609.5,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.4258,x:644.45,y:479.35,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-3.4073,x:524.7,y:640.1,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.5578,x:741.85,y:347.75,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-7.0213,x:559.1,y:335.25,regY:35}},{t:this.ikNode_5,p:{rotation:-3.8926,x:860.65,y:578.55,regY:73.8,regX:153.4}},{t:this.ikNode_7,p:{rotation:-3.4073,x:429.45,y:610.4,regX:69.8}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.473,x:644.55,y:479.35,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-3.7481,x:524.65,y:640.4,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.6137,x:741.55,y:347.5,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-7.7231,x:558.6,y:335.6,regY:35}},{t:this.ikNode_5,p:{rotation:-4.2818,x:860.35,y:577.7,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-3.7481,x:429.1,y:611.2,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.5202,x:644.65,y:479.3,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-4.0889,x:524.45,y:640.7,regX:169.8,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.6688,x:741.25,y:347.15,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.3,rotation:-8.426,x:558.25,y:335.9,regY:35}},{t:this.ikNode_5,p:{rotation:-4.6711,x:860.05,y:576.95,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-4.0889,x:428.85,y:612.1,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.5674,x:644.7,y:479.3,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-4.43,x:524.6,y:641,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.7248,x:740.95,y:346.9,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-9.1274,x:557.65,y:336.35,regY:35}},{t:this.ikNode_5,p:{rotation:-5.0607,x:859.75,y:576.2,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-4.43,x:428.65,y:612.9,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.6146,x:644.85,y:479.3,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-4.7703,x:524.55,y:641.2,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.7808,x:740.65,y:346.55,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-9.8304,x:557.15,y:336.8,regY:35.1}},{t:this.ikNode_5,p:{rotation:-5.4497,x:859.45,y:575.55,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-4.7703,x:428.5,y:613.75,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.6618,x:644.95,y:479.45,regX:179.6,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-5.1116,x:524.35,y:641.5,regX:169.8,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.8367,x:740.35,y:346.3,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-10.5322,x:556.65,y:337.05,regY:35}},{t:this.ikNode_5,p:{rotation:-5.8389,x:859.15,y:574.8,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-5.1116,x:428.25,y:614.6,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.7091,x:645.15,y:479.45,regX:179.7,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-5.4523,x:524.45,y:641.8,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.8927,x:740.05,y:346,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-11.2345,x:556.1,y:337.4,regY:35}},{t:this.ikNode_5,p:{rotation:-6.2283,x:858.9,y:574.05,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-5.4523,x:428.1,y:615.45,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.7563,x:645.15,y:479.45,regX:179.6,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-5.7931,x:524.45,y:642.05,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.9486,x:739.75,y:345.7,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-11.937,x:555.65,y:337.75,regY:35}},{t:this.ikNode_5,p:{rotation:-6.6172,x:858.7,y:573.35,regY:73.7,regX:153.5}},{t:this.ikNode_7,p:{rotation:-5.7931,x:427.9,y:616.3,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.8044,x:645.2,y:479.45,regX:179.6,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-6.1334,x:524.4,y:642.35,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-1.0037,x:739.45,y:345.45,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-12.6385,x:555.15,y:338.15,regY:35}},{t:this.ikNode_5,p:{rotation:-7.0073,x:858.25,y:572.7,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-6.1334,x:427.75,y:617.15,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.8516,x:645.45,y:479.4,regX:179.7,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-6.4747,x:524.3,y:642.6,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-1.0597,x:739.15,y:345.1,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-13.3409,x:554.7,y:338.5,regY:35}},{t:this.ikNode_5,p:{rotation:-7.3959,x:857.95,y:571.95,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-6.4747,x:427.55,y:618,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.8988,x:645.4,y:479.4,regX:179.6,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-6.8153,x:524.3,y:642.85,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-1.1156,x:738.85,y:344.85,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-14.0428,x:554.2,y:338.85,regY:35}},{t:this.ikNode_5,p:{rotation:-7.7858,x:857.75,y:571.2,regY:73.7,regX:153.5}},{t:this.ikNode_7,p:{rotation:-6.8153,x:427.35,y:618.85,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.946,x:645.45,y:479.4,regX:179.6,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-7.1561,x:524.3,y:643.15,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-1.1716,x:738.55,y:344.7,regY:41,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-14.7451,x:553.7,y:339.25,regY:35}},{t:this.ikNode_5,p:{rotation:-8.175,x:857.45,y:570.5,regY:73.7,regX:153.5}},{t:this.ikNode_7,p:{rotation:-7.1561,x:427.15,y:619.65,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.9932,x:645.6,y:479.4,regX:179.6,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-7.4973,x:524.3,y:643.4,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-1.2276,x:738.25,y:344.25,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-15.4477,x:553.2,y:339.6,regY:35}},{t:this.ikNode_5,p:{rotation:-8.5638,x:857,y:569.85,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-7.4973,x:427,y:620.55,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-1.0404,x:645.7,y:479.35,regX:179.6,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-7.8378,x:524.2,y:643.7,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-1.2827,x:737.9,y:344,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-16.1493,x:552.75,y:340,regY:35}},{t:this.ikNode_5,p:{rotation:-8.9531,x:856.7,y:569.15,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-7.8378,x:426.85,y:621.45,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-1.0876,x:645.75,y:479.25,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-8.1786,x:524.15,y:644,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-1.3386,x:737.6,y:343.7,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-16.8514,x:552.25,y:340.35,regY:35}},{t:this.ikNode_5,p:{rotation:-9.3427,x:856.35,y:568.4,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-8.1786,x:426.7,y:622.3,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-1.1349,x:645.9,y:479.25,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-8.5197,x:524.15,y:644.25,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-1.3946,x:737.3,y:343.45,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-17.5541,x:551.8,y:340.75,regY:35}},{t:this.ikNode_5,p:{rotation:-9.732,x:856.05,y:567.7,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-8.5197,x:426.55,y:623.15,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-1.1821,x:645.95,y:479.2,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-8.8602,x:524,y:644.55,regX:169.8,regY:575.4}},{t:this.ikNode_3,p:{rotation:-1.4506,x:737,y:343.25,regY:41,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-18.2561,x:551.25,y:341.15,regY:35}},{t:this.ikNode_5,p:{rotation:-10.1215,x:855.7,y:567.05,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-8.8602,x:426.35,y:623.95,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-1.2302,x:646.1,y:479.2,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-9.201,x:524.1,y:644.8,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-1.5065,x:736.6,y:342.85,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-18.9583,x:550.8,y:341.5,regY:35}},{t:this.ikNode_5,p:{rotation:-10.5107,x:855.5,y:566.3,regY:73.7,regX:153.5}},{t:this.ikNode_7,p:{rotation:-9.201,x:426.2,y:624.8,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-1.2774,x:646.2,y:479.2,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-9.5412,x:524.1,y:645.1,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-1.5625,x:736.2,y:342.6,regY:40.9,regX:71.7}},{t:this.ikNode_4,p:{regX:57.2,rotation:-19.6604,x:550.3,y:341.9,regY:35}},{t:this.ikNode_5,p:{rotation:-10.8996,x:855.2,y:565.6,regY:73.7,regX:153.5}},{t:this.ikNode_7,p:{rotation:-9.5412,x:426.2,y:625.7,regX:69.8}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-1.3246,x:646.25,y:479.2,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-9.8827,x:524.05,y:645.35,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-1.6176,x:736,y:342.3,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-20.3629,x:549.95,y:342.3,regY:35}},{t:this.ikNode_5,p:{rotation:-11.289,x:854.9,y:564.9,regY:73.7,regX:153.5}},{t:this.ikNode_7,p:{rotation:-9.8827,x:425.9,y:626.55,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-1.3719,x:646.4,y:479.2,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-9.3826,x:524.1,y:645.35,regX:170,regY:575.4}},{t:this.ikNode_3,p:{rotation:-1.3605,x:737,y:342.7,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.3,rotation:-20.1858,x:550.8,y:341.95,regY:35}},{t:this.ikNode_5,p:{rotation:-11.0251,x:855.15,y:565.85,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-9.3826,x:426.05,y:625.75,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-1.2573,x:646.75,y:479.15,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-8.8822,x:524.05,y:645.35,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-1.1043,x:738,y:343.05,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.3,rotation:-20.0099,x:551.6,y:341.65,regY:35}},{t:this.ikNode_5,p:{rotation:-10.7616,x:855.6,y:566.7,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-8.8822,x:426.25,y:624.85,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-1.1428,x:647.05,y:479.1,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-8.3818,x:524,y:645.4,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.8472,x:738.95,y:343.45,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-19.8332,x:552.2,y:341.3,regY:35}},{t:this.ikNode_5,p:{rotation:-10.4974,x:856.15,y:567.6,regY:73.7,regX:153.5}},{t:this.ikNode_7,p:{rotation:-8.3818,x:426.45,y:624.05,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-1.0282,x:647.45,y:479.2,regX:179.6,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-7.882,x:524.05,y:645.35,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.5901,x:739.9,y:343.85,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-19.6568,x:553,y:341,regY:35}},{t:this.ikNode_5,p:{rotation:-10.2335,x:856.4,y:568.55,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-7.882,x:426.75,y:623.15,regX:69.8}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.9137,x:647.9,y:479.25,regX:179.7,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-7.3818,x:524,y:645.25,regX:169.9,regY:575.3}},{t:this.ikNode_3,p:{rotation:-0.3331,x:740.9,y:344.3,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-19.4803,x:553.75,y:340.75,regY:35}},{t:this.ikNode_5,p:{rotation:-9.9697,x:856.85,y:569.45,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-7.3818,x:426.8,y:622.35,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.7991,x:648.2,y:479.1,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-6.8813,x:524,y:645.4,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:-0.0761,x:741.8,y:344.65,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-19.3042,x:554.6,y:340.4,regY:35}},{t:this.ikNode_5,p:{rotation:-9.7054,x:857.1,y:570.35,regY:73.7,regX:153.3}},{t:this.ikNode_7,p:{rotation:-6.8813,x:427,y:621.5,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.6846,x:648.55,y:479.05,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-6.3814,x:524,y:645.35,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:0.1801,x:742.75,y:345.15,regY:41,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-19.1275,x:555.35,y:340.05,regY:35}},{t:this.ikNode_5,p:{rotation:-9.4419,x:857.65,y:571.3,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-6.3814,x:427.2,y:620.65,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.57,x:648.95,y:479.05,regX:179.7,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-5.881,x:524,y:645.4,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:0.4371,x:743.7,y:345.45,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-18.9508,x:556.15,y:339.75,regY:35}},{t:this.ikNode_5,p:{rotation:-9.178,x:858.05,y:572.2,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-5.881,x:427.45,y:619.85,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.4555,x:649.2,y:479,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-5.3811,x:524,y:645.3,regX:169.9,regY:575.3}},{t:this.ikNode_3,p:{rotation:0.6942,x:744.65,y:345.85,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-18.7753,x:556.95,y:339.5,regY:35}},{t:this.ikNode_5,p:{rotation:-8.9141,x:858.45,y:573.1,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-5.3811,x:427.8,y:619,regX:69.8}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.341,x:649.55,y:479,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-4.8808,x:524,y:645.45,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:0.9513,x:745.6,y:346.3,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-18.5981,x:557.7,y:339.15,regY:35}},{t:this.ikNode_5,p:{rotation:-8.6496,x:858.85,y:574.05,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-4.8808,x:427.9,y:618.15,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.2264,x:649.9,y:479,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-4.3809,x:524,y:645.3,regX:169.9,regY:575.3}},{t:this.ikNode_3,p:{rotation:1.2083,x:746.6,y:346.7,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-18.422,x:558.5,y:338.85,regY:35}},{t:this.ikNode_5,p:{rotation:-8.3862,x:859.2,y:574.95,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-4.3809,x:428.15,y:617.35,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:-0.1119,x:650.3,y:478.95,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-3.8804,x:524,y:645.35,regX:169.9,regY:575.3}},{t:this.ikNode_3,p:{rotation:1.4646,x:747.55,y:347.2,regY:41,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-18.2453,x:559.3,y:338.55,regY:35}},{t:this.ikNode_5,p:{rotation:-8.1221,x:859.6,y:575.85,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-3.8804,x:428.5,y:616.55,regX:69.8}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0.0017,x:650.65,y:478.95,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-3.3802,x:523.85,y:645.5,regX:169.8,regY:575.4}},{t:this.ikNode_3,p:{rotation:1.7217,x:748.3,y:347.55,regY:40.9,regX:71.7}},{t:this.ikNode_4,p:{regX:57.2,rotation:-18.0695,x:560.15,y:338.2,regY:35}},{t:this.ikNode_5,p:{rotation:-7.8581,x:860,y:576.8,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-3.3802,x:428.65,y:615.7,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0.1163,x:651,y:478.95,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-2.8802,x:524,y:645.35,regX:169.9,regY:575.3}},{t:this.ikNode_3,p:{rotation:1.9789,x:749.4,y:348.05,regY:41,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-17.8928,x:560.9,y:337.95,regY:35}},{t:this.ikNode_5,p:{rotation:-7.5942,x:860.4,y:577.75,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-2.8802,x:428.85,y:614.85,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0.2308,x:651.35,y:478.9,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-2.3804,x:524,y:645.5,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:2.2361,x:750.35,y:348.35,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-17.7167,x:561.75,y:337.8,regY:35.1}},{t:this.ikNode_5,p:{rotation:-7.3306,x:860.75,y:578.75,regY:73.8,regX:153.4}},{t:this.ikNode_7,p:{rotation:-2.3804,x:429.2,y:614.05,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0.3453,x:651.7,y:478.95,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-1.88,x:524,y:645.55,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:2.4925,x:751.3,y:348.75,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-17.5394,x:562.5,y:337.35,regY:35}},{t:this.ikNode_5,p:{rotation:-7.0662,x:861.15,y:579.7,regY:73.8,regX:153.4}},{t:this.ikNode_7,p:{rotation:-1.88,x:429.45,y:613.2,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0.4599,x:652.05,y:478.9,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-1.3797,x:523.95,y:645.4,regX:169.9,regY:575.3}},{t:this.ikNode_3,p:{rotation:2.7497,x:752.25,y:349.2,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-17.3636,x:563.3,y:337.1,regY:35}},{t:this.ikNode_5,p:{rotation:-6.8029,x:861.45,y:580.65,regY:73.8,regX:153.4}},{t:this.ikNode_7,p:{rotation:-1.3797,x:429.7,y:612.4,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0.5744,x:652.4,y:478.9,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-0.8795,x:524.05,y:645.55,regX:170,regY:575.4}},{t:this.ikNode_3,p:{rotation:3.0071,x:753.15,y:349.65,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-17.1869,x:564.1,y:336.9,regY:35.1}},{t:this.ikNode_5,p:{rotation:-6.5389,x:861.85,y:581.45,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-0.8795,x:430.05,y:611.65,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0.6889,x:652.75,y:478.9,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:-0.3794,x:523.95,y:645.55,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:3.2637,x:754.1,y:350.2,regY:41,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-17.0104,x:564.9,y:336.45,regY:35}},{t:this.ikNode_5,p:{rotation:-6.2749,x:862.2,y:582.4,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:-0.3794,x:430.3,y:610.8,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0.8035,x:653.25,y:478.85,regX:179.7,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:0.1198,x:523.9,y:645.55,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:3.5203,x:755.05,y:350.5,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-16.834,x:565.7,y:336.25,regY:35}},{t:this.ikNode_5,p:{rotation:-6.0112,x:862.5,y:583.3,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:0.1198,x:430.55,y:610,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0.918,x:653.45,y:479,regX:179.6,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:0.6199,x:524.05,y:645.55,regX:170,regY:575.4}},{t:this.ikNode_3,p:{rotation:3.7778,x:756,y:351,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-16.6578,x:566.5,y:336.05,regY:35.1}},{t:this.ikNode_5,p:{rotation:-5.7466,x:863,y:584.35,regY:73.8,regX:153.5}},{t:this.ikNode_7,p:{rotation:0.6199,x:430.9,y:609.2,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:1.0326,x:653.8,y:478.9,regX:179.6,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:1.12,x:523.9,y:645.6,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:4.0346,x:756.75,y:351.4,regY:40.9,regX:71.7}},{t:this.ikNode_4,p:{regX:57.3,rotation:-16.4808,x:567.4,y:335.6,regY:35}},{t:this.ikNode_5,p:{rotation:-5.483,x:863.25,y:585.2,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:1.12,x:431.2,y:608.45,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:1.1471,x:654.25,y:478.8,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:1.6202,x:524.05,y:645.6,regX:170,regY:575.4}},{t:this.ikNode_3,p:{rotation:4.2914,x:757.85,y:351.85,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-16.3048,x:568.1,y:335.5,regY:35.1}},{t:this.ikNode_5,p:{rotation:-5.2187,x:863.55,y:586.15,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:1.6202,x:431.45,y:607.6,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:1.2617,x:654.6,y:478.8,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:2.1206,x:523.9,y:645.65,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:4.5484,x:758.65,y:352.3,regY:40.9,regX:71.7}},{t:this.ikNode_4,p:{regX:57.2,rotation:-16.1283,x:568.85,y:335.05,regY:35}},{t:this.ikNode_5,p:{rotation:-4.9554,x:863.9,y:587.05,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:2.1206,x:431.85,y:606.85,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:1.3762,x:654.95,y:478.8,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:2.6202,x:523.9,y:645.65,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:4.8054,x:759.65,y:352.75,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-15.9518,x:569.65,y:334.85,regY:35}},{t:this.ikNode_5,p:{rotation:-4.6913,x:864.35,y:588,regY:73.7,regX:153.5}},{t:this.ikNode_7,p:{rotation:2.6202,x:432.2,y:606.1,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:1.4908,x:655.3,y:478.75,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:3.121,x:523.95,y:645.7,regX:170,regY:575.4}},{t:this.ikNode_3,p:{rotation:5.0625,x:760.6,y:353.35,regY:41,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-15.7755,x:570.5,y:334.7,regY:35.1}},{t:this.ikNode_5,p:{rotation:-4.4273,x:864.55,y:588.95,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:3.121,x:432.5,y:605.25,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:1.6054,x:655.8,y:478.8,regX:179.7,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:3.621,x:523.85,y:645.7,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:5.3197,x:761.55,y:353.65,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-15.5992,x:571.3,y:334.25,regY:35}},{t:this.ikNode_5,p:{rotation:-4.1634,x:864.85,y:589.85,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:3.621,x:432.9,y:604.5,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:1.7191,x:656,y:478.9,regX:179.6,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:4.1205,x:523.9,y:645.65,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:5.5762,x:762.45,y:354.2,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-15.4223,x:572.15,y:334.15,regY:35.1}},{t:this.ikNode_5,p:{rotation:-3.8996,x:865.15,y:590.85,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:4.1205,x:433.2,y:603.7,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:1.8337,x:656.35,y:478.85,regX:179.6,regY:143.6}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:4.6212,x:523.9,y:645.7,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:5.8336,x:763.4,y:354.65,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-15.2465,x:572.9,y:333.75,regY:35}},{t:this.ikNode_5,p:{rotation:-3.6358,x:865.45,y:591.75,regY:73.7,regX:153.4}},{t:this.ikNode_7,p:{rotation:4.6212,x:433.6,y:602.9,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:1.9482,x:656.7,y:478.75,regX:179.6,regY:143.5}}]},1).to({state:[{t:this.ikNode_8,p:{rotation:5.1213,x:523.85,y:645.7,regX:169.9,regY:575.4}},{t:this.ikNode_3,p:{rotation:6.0902,x:764.3,y:355.05,regY:40.9,regX:71.8}},{t:this.ikNode_4,p:{regX:57.2,rotation:-15.0698,x:573.7,y:333.5,regY:35}},{t:this.ikNode_5,p:{rotation:-3.3714,x:865.9,y:592.75,regY:73.7,regX:153.5}},{t:this.ikNode_7,p:{rotation:5.1213,x:433.95,y:602.1,regX:69.7}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:2.0629,x:657.2,y:478.75,regX:179.7,regY:143.5}}]},1).wait(1));

	// Слой_8
	this.instance = new lib.CachedBmp_1920();
	this.instance.setTransform(-643.65,350.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Слой_4
	this.instance_1 = new lib.CachedBmp_1921();
	this.instance_1.setTransform(0.05,512,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Слой_7
	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.setTransform(744.75,349.05,1.21,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:955.2,y:328.45},29).to({x:1141.9,y:290.5},30).wait(1));

	// Слой_17
	this.instance_3 = new lib.Анимация1("synched",0);
	this.instance_3.setTransform(-421.05,216.05,1.21,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-142.2,y:182},29).to({x:254.25,y:240.3},30).wait(1));

	// Слой_5
	this.instance_4 = new lib.Анимация1("synched",0);
	this.instance_4.setTransform(162.2,384.4,1.21,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:386.9,y:374.05},29).to({x:687.1,y:395.4},30).wait(1));

	// Слой_6
	this.instance_5 = new lib.Анимация1("synched",0);
	this.instance_5.setTransform(304.55,182);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:575.15,y:125.05},29).to({x:783.6,y:123.95},30).wait(1));

	// Слой_3
	this.instance_6 = new lib.CachedBmp_1();
	this.instance_6.setTransform(0.05,-1.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,358.8,1290.1999999999998,423.7);
// library properties:
lib.properties = {
	id: '1A420B91AE58284F9E9F0B563710863F',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1.png", id:"CachedBmp_1"},
		{src:"images/CachedBmp_1921.png", id:"CachedBmp_1921"},
		{src:"images/shar2pngкопия.png", id:"shar2pngкопия"},
		{src:"images/ex6_atlas_.png", id:"ex6_atlas_"},
		{src:"images/ex6_atlas_2.png", id:"ex6_atlas_2"}
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
an.compositions['1A420B91AE58284F9E9F0B563710863F'] = {
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