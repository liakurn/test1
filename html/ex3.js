(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ex3_atlas_", frames: [[0,0,1355,980],[0,982,1644,592]]},
		{name:"ex3_atlas_2", frames: [[0,921,949,727],[0,1650,323,318],[0,0,888,919]]}
];


// symbols:



(lib._1614138024_50pzadniifonsdorogoi60jpgкопия = function() {
	this.initialize(ss["ex3_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body = function() {
	this.initialize(ss["ex3_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.car2 = function() {
	this.initialize(ss["ex3_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wheel1 = function() {
	this.initialize(ss["ex3_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wing = function() {
	this.initialize(ss["ex3_atlas_2"]);
	this.gotoAndStop(2);
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
	this.instance = new lib.wing();
	this.instance.setTransform(0,0,0.1255,0.1255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,111.5,115.4), null);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wheel1();
	this.instance.setTransform(-78.25,-77.05,0.4847,0.4847);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-77,156.5,154.1);


(lib.wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.setTransform(55.7,57.7,1,1,0,0,0,55.8,57.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:55.7,scaleY:1.0347,x:55.6},0).wait(1).to({scaleY:1.0693},0).wait(1).to({scaleY:1.104},0).wait(1).to({scaleY:1.1387},0).wait(1).to({scaleY:1.1733},0).wait(1).to({scaleY:1.208},0).wait(1).to({scaleY:1.2426},0).wait(1).to({scaleY:1.2773},0).wait(1).to({scaleY:1.2253,y:57.75},0).wait(1).to({scaleY:1.1733},0).wait(1).to({scaleY:1.1212},0).wait(1).to({scaleY:1.0692},0).wait(1).to({scaleY:1.0172},0).wait(1).to({scaleY:0.9652,y:57.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-16,111.5,147.4);


(lib.wheel22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Анимация4("synched",0);
	this.instance.setTransform(78.25,77.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-90},9).to({rotation:-180},10).to({rotation:-270},10).to({rotation:-360},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-32.9,219.7,219.8);


(lib.carrrr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.car2();
	this.instance.setTransform(0,0,0.4754,0.4754);

	this.instance_1 = new lib.wheel22();
	this.instance_1.setTransform(149.75,238,1,1,0,0,0,78.2,77);

	this.instance_2 = new lib.wheel22();
	this.instance_2.setTransform(638.2,238,1,1,0,0,0,78.2,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carrrr, new cjs.Rectangle(0,0,781.6,315.2), null);


(lib.butterfly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.body();
	this.instance.setTransform(25.8,0,0.2239,0.2239,9.1291);

	this.instance_1 = new lib.wing1();
	this.instance_1.setTransform(138.35,84.45,1,1,-10.2094,0,0,55.7,57.8);

	this.instance_2 = new lib.wing1();
	this.instance_2.setTransform(146.55,87.6,1,1,0,0,0,55.8,57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.butterfly, new cjs.Rectangle(0,0,235.6,194.4), null);


// stage content:
(lib.ex3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_6
	this.instance = new lib.carrrr();
	this.instance.setTransform(1771.05,517.6,1,1,0,0,0,390.8,157.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:712.25},46).to({x:-401.5},50).wait(1));

	// Слой_2
	this.instance_1 = new lib.butterfly();
	this.instance_1.setTransform(1434.25,170.8,0.5225,0.5225,0,0,0,144.7,97.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[1434.2,170.8,1413.1,164.7,1378.7,160.4,1358.8,158,1349,156.7,1331.9,154.4,1319.5,151.9,1313.9,150.7,1295.6,146.4,1280.7,142.8,1271.5,141.3,1255.2,138.5,1235.2,138,1220.8,137.7,1198.6,138.5,1179.2,139.3,1168.7,141.3,1160.1,143,1149.5,146.6,1143.9,148.6,1130.8,153.8,1089.7,170.1,1063.5,177.8,1025.9,188.9,993.8,190.7,976.6,191.7,963.2,189.6,955.2,188.4,945.5,185.5,939.9,183.9,928.2,179.9,909.1,173.4,890,166.9,881.6,164,877.5,162.9,870.5,160.9,864.7,160.4,860,159.9,854,160.2,851.6,160.2,843.3,160.8,815.3,162.9,811.7,163.3,793.8,165.2,780.9,169.4,777.6,170.4,771.6,172.7,765.3,175,762.4,176,751.6,179.6,736.3,182.5,718.6,185.4,709.7,187,673.2,193.3,640.9,204.4,629.6,208.3,627.8,208.8,620.3,211.1,614.4,211.9,608.5,212.6,601,212.3,596.4,212.1,587.5,211.2,569.2,209.5,567.5,199.6,532.1,201.3,484,194.7,468.5,192.6,442.4,188.3,411.4,183.1,400.8,181.5,378.6,178.2,363.5,177.2,343.1,175.8,326.2,177.7,315.9,178.8,303.4,181.6,295.4,183.4,280.9,187.2,253.2,194.3,238.8,198.8,215.7,206.1,198.2,214.6,191.4,218,189.7,218.7,184.8,220.8,180.7,221.4,176.1,222.2,170.3,221.5,166.7,221.1,160,219.6,98.6,206.5,37.2,193.4,28,191.4,23.4,189.8,15.9,187.3,10.8,183.5,7.1,180.7,2.5,175.2,-4.5,166.8,-5.3,166,-27.6,142.2,-75.4,140.8,-80.5,140.7,-83.6,141,-88.1,141.4,-91.5,142.7,-93.7,143.5,-99.1,146.7,-103.9,149.5,-106.9,150.2,-110,151,-120.6,150.5,-129.1,150.2,-133.3,153.1,-133.2,153.2,-133.2,153.2]}},96).wait(1));

	// Слой_4
	this.instance_2 = new lib.butterfly();
	this.instance_2.setTransform(1433.85,300.35,0.5509,0.5509,0,0,0,118.2,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:117.8,regY:97.2,scaleX:0.5481,scaleY:0.5481,x:1423.7,y:297.45},0).wait(1).to({scaleX:0.5454,scaleY:0.5454,x:1413.8,y:294.7},0).wait(1).to({scaleX:0.5427,scaleY:0.5427,x:1403.9,y:291.95},0).wait(1).to({scaleX:0.5399,scaleY:0.5399,x:1393.95,y:289.25},0).wait(1).to({scaleX:0.5372,scaleY:0.5372,x:1384.05,y:286.5},0).wait(1).to({scaleX:0.5345,scaleY:0.5345,x:1374.1,y:283.75},0).wait(1).to({scaleX:0.5317,scaleY:0.5317,x:1364.2,y:281.05},0).wait(1).to({scaleX:0.529,scaleY:0.529,x:1354.25,y:278.25},0).wait(1).to({scaleX:0.5263,scaleY:0.5263,x:1344.4,y:275.55},0).wait(1).to({scaleX:0.5235,scaleY:0.5235,x:1334.45,y:272.85},0).wait(1).to({scaleX:0.5208,scaleY:0.5208,x:1324.55,y:270.05},0).wait(1).to({scaleX:0.518,scaleY:0.518,x:1314.6,y:267.35},0).wait(1).to({scaleX:0.5153,scaleY:0.5153,x:1304.7,y:264.65},0).wait(1).to({scaleX:0.5126,scaleY:0.5126,x:1294.8,y:261.85},0).wait(1).to({scaleX:0.5098,scaleY:0.5098,x:1284.85,y:259.15},0).wait(1).to({scaleX:0.5071,scaleY:0.5071,x:1274.95,y:256.4},0).wait(1).to({scaleX:0.5044,scaleY:0.5044,x:1265.05,y:253.65},0).wait(1).to({scaleX:0.5016,scaleY:0.5016,x:1255.15,y:250.95},0).wait(1).to({scaleX:0.4989,scaleY:0.4989,x:1245.2,y:248.2},0).wait(1).to({scaleX:0.4962,scaleY:0.4962,x:1235.3,y:245.5},0).wait(1).to({scaleX:0.4934,scaleY:0.4934,x:1225.4,y:242.7},0).wait(1).to({scaleX:0.4907,scaleY:0.4907,x:1215.45,y:240},0).wait(1).to({scaleX:0.488,scaleY:0.488,x:1205.55,y:237.3},0).wait(1).to({scaleX:0.4852,scaleY:0.4852,x:1195.6,y:234.5},0).wait(1).to({scaleX:0.4825,scaleY:0.4825,x:1185.75,y:231.8},0).wait(1).to({scaleX:0.4798,scaleY:0.4798,x:1175.8,y:229.1},0).wait(1).to({scaleX:0.477,scaleY:0.477,x:1165.9,y:226.3},0).wait(1).to({scaleX:0.4743,scaleY:0.4743,x:1155.95,y:223.6},0).wait(1).to({scaleX:0.4715,scaleY:0.4715,x:1146.05,y:220.85},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,x:1136.1,y:218.1},0).wait(1).to({scaleX:0.4661,scaleY:0.4661,x:1126.2,y:215.4},0).wait(1).to({scaleX:0.4633,scaleY:0.4633,x:1116.3,y:212.65},0).wait(1).to({scaleX:0.4606,scaleY:0.4606,x:1103.3,y:209.6},0).wait(1).to({scaleX:0.4579,scaleY:0.4579,x:1090.4,y:206.6},0).wait(1).to({scaleX:0.4551,scaleY:0.4551,x:1077.4,y:203.6},0).wait(1).to({scaleX:0.4524,scaleY:0.4524,x:1064.45,y:200.55},0).wait(1).to({scaleX:0.4497,scaleY:0.4497,x:1051.45,y:197.55},0).wait(1).to({scaleX:0.4469,scaleY:0.4469,x:1038.5,y:194.55},0).wait(1).to({scaleX:0.4442,scaleY:0.4442,x:1025.5,y:191.5},0).wait(1).to({scaleX:0.4415,scaleY:0.4415,x:1012.55,y:188.5},0).wait(1).to({scaleX:0.4387,scaleY:0.4387,x:999.6,y:185.5},0).wait(1).to({scaleX:0.436,scaleY:0.436,x:986.6,y:182.5},0).wait(1).to({scaleX:0.4332,scaleY:0.4332,x:973.65,y:179.45},0).wait(1).to({scaleX:0.4305,scaleY:0.4305,x:960.65,y:176.45},0).wait(1).to({scaleX:0.4278,scaleY:0.4278,x:947.7,y:173.45},0).wait(1).to({scaleX:0.425,scaleY:0.425,x:934.7,y:170.4},0).wait(1).to({scaleX:0.4223,scaleY:0.4223,x:921.75,y:167.4},0).wait(1).to({scaleX:0.4196,scaleY:0.4196,x:908.8,y:164.4},0).wait(1).to({scaleX:0.4168,scaleY:0.4168,x:895.8,y:161.35},0).wait(1).to({scaleX:0.4141,scaleY:0.4141,x:882.85,y:158.35},0).wait(1).to({scaleX:0.4114,scaleY:0.4114,x:869.9,y:155.35},0).wait(1).to({scaleX:0.4086,scaleY:0.4086,x:856.95,y:152.3},0).wait(1).to({scaleX:0.4059,scaleY:0.4059,x:843.95,y:149.3},0).wait(1).to({scaleX:0.4032,scaleY:0.4032,x:831,y:146.3},0).wait(1).to({scaleX:0.4004,scaleY:0.4004,x:818,y:143.25},0).wait(1).to({scaleX:0.3977,scaleY:0.3977,x:805.05,y:140.2},0).wait(1).to({scaleX:0.395,scaleY:0.395,x:792.05,y:137.2},0).wait(1).to({scaleX:0.3922,scaleY:0.3922,x:779.1,y:134.15},0).wait(1).to({scaleX:0.3895,scaleY:0.3895,x:766.15,y:131.15},0).wait(1).to({scaleX:0.3993,scaleY:0.3993,x:745.8,y:132.9},0).wait(1).to({scaleX:0.4092,scaleY:0.4092,x:725.45,y:134.6},0).wait(1).to({scaleX:0.419,scaleY:0.419,x:705.15,y:136.4},0).wait(1).to({scaleX:0.4289,scaleY:0.4289,x:684.8,y:138.1},0).wait(1).to({scaleX:0.4387,scaleY:0.4387,x:664.5,y:139.85},0).wait(1).to({scaleX:0.4486,scaleY:0.4486,x:644.15,y:141.55},0).wait(1).to({scaleX:0.4584,scaleY:0.4584,x:623.8,y:143.3},0).wait(1).to({scaleX:0.4683,scaleY:0.4683,x:603.5,y:145},0).wait(1).to({scaleX:0.4781,scaleY:0.4781,x:583.2,y:146.8},0).wait(1).to({scaleX:0.488,scaleY:0.488,x:562.85,y:148.5},0).wait(1).to({scaleX:0.4979,scaleY:0.4979,x:542.5,y:150.25},0).wait(1).to({scaleX:0.5077,scaleY:0.5077,x:522.2,y:151.95},0).wait(1).to({scaleX:0.5176,scaleY:0.5176,x:501.85,y:153.7},0).wait(1).to({scaleX:0.5274,scaleY:0.5274,x:481.55,y:155.4},0).wait(1).to({scaleX:0.5373,scaleY:0.5373,x:461.2,y:157.15},0).wait(1).to({scaleX:0.5471,scaleY:0.5471,x:440.85,y:158.9},0).wait(1).to({scaleX:0.557,scaleY:0.557,x:420.55,y:160.65},0).wait(1).to({scaleX:0.5668,scaleY:0.5668,x:400.2,y:162.35},0).wait(1).to({x:377.25,y:156.7},0).wait(1).to({x:354.25,y:151.05},0).wait(1).to({x:331.3,y:145.45},0).wait(1).to({x:308.35,y:139.8},0).wait(1).to({x:285.4,y:134.15},0).wait(1).to({x:262.45,y:128.5},0).wait(1).to({x:239.5,y:122.85},0).wait(1).to({x:216.55,y:117.2},0).wait(1).to({x:193.55,y:111.55},0).wait(1).to({x:170.6,y:105.9},0).wait(1).to({x:147.65,y:100.25},0).wait(1).to({x:124.7,y:94.6},0).wait(1).to({x:101.75,y:88.95},0).wait(1).to({x:78.8,y:83.3},0).wait(1).to({x:55.85,y:77.65},0).wait(1).to({x:32.9,y:72},0).wait(1).to({x:9.95,y:66.35},0).wait(1).to({x:-13,y:60.7},0).wait(1).to({x:-35.95,y:55.1},0).wait(1));

	// body_png
	this.instance_3 = new lib.butterfly();
	this.instance_3.setTransform(1343.15,235.25,0.4835,0.4835,0,0,0,158.8,126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:117.8,regY:97.2,scaleX:0.4819,scaleY:0.4819,x:1314.6,y:222.95},0).wait(1).to({scaleX:0.4802,scaleY:0.4802,x:1305.95,y:224.8},0).wait(1).to({scaleX:0.4786,scaleY:0.4786,x:1297.35,y:226.6},0).wait(1).to({scaleX:0.477,scaleY:0.477,x:1288.7,y:228.45},0).wait(1).to({scaleX:0.4753,scaleY:0.4753,x:1280.05,y:230.35},0).wait(1).to({scaleX:0.4737,scaleY:0.4737,x:1271.35,y:232.2},0).wait(1).to({scaleX:0.4721,scaleY:0.4721,x:1262.7,y:234.05},0).wait(1).to({scaleX:0.4704,scaleY:0.4704,x:1254.05,y:235.9},0).wait(1).to({scaleX:0.4688,scaleY:0.4688,x:1245.4,y:237.7},0).wait(1).to({scaleX:0.4672,scaleY:0.4672,x:1236.8,y:239.6},0).wait(1).to({scaleX:0.4655,scaleY:0.4655,x:1228.15,y:241.45},0).wait(1).to({scaleX:0.4639,scaleY:0.4639,x:1219.45,y:243.3},0).wait(1).to({scaleX:0.4623,scaleY:0.4623,x:1210.8,y:245.15},0).wait(1).to({scaleX:0.4606,scaleY:0.4606,x:1202.15,y:246.95},0).wait(1).to({scaleX:0.459,scaleY:0.459,x:1193.5,y:248.85},0).wait(1).to({scaleX:0.4573,scaleY:0.4573,x:1184.85,y:250.7},0).wait(1).to({scaleX:0.4557,scaleY:0.4557,x:1176.25,y:252.55},0).wait(1).to({scaleX:0.4541,scaleY:0.4541,x:1167.55,y:254.4},0).wait(1).to({scaleX:0.4524,scaleY:0.4524,x:1158.9,y:256.3},0).wait(1).to({scaleX:0.4508,scaleY:0.4508,x:1150.25,y:258.1},0).wait(1).to({scaleX:0.4492,scaleY:0.4492,x:1141.6,y:259.95},0).wait(1).to({scaleX:0.4475,scaleY:0.4475,x:1132.95,y:261.8},0).wait(1).to({scaleX:0.4459,scaleY:0.4459,x:1124.3,y:263.65},0).wait(1).to({scaleX:0.4443,scaleY:0.4443,x:1115.65,y:265.55},0).wait(1).to({scaleX:0.4426,scaleY:0.4426,x:1107,y:267.35},0).wait(1).to({scaleX:0.441,scaleY:0.441,rotation:11.5616,x:1096.45,y:264.05},0).wait(1).to({scaleX:0.4393,scaleY:0.4393,x:1083,y:264.15},0).wait(1).to({scaleX:0.4377,scaleY:0.4377,x:1069.45,y:264.3},0).wait(1).to({scaleX:0.4361,scaleY:0.4361,x:1056,y:264.4},0).wait(1).to({scaleX:0.4344,scaleY:0.4344,x:1042.5},0).wait(1).to({scaleX:0.4328,scaleY:0.4328,x:1028.95,y:264.5},0).wait(1).to({scaleX:0.4312,scaleY:0.4312,x:1015.45,y:264.65},0).wait(1).to({scaleX:0.4295,scaleY:0.4295,rotation:20.637,x:1007.55,y:260.85},0).wait(1).to({scaleX:0.4279,scaleY:0.4279,x:996.9,y:259.2},0).wait(1).to({scaleX:0.4263,scaleY:0.4263,x:986.35,y:257.65},0).wait(1).to({scaleX:0.4246,scaleY:0.4246,x:975.7,y:256.05},0).wait(1).to({scaleX:0.423,scaleY:0.423,x:965.1,y:254.45},0).wait(1).to({scaleX:0.4214,scaleY:0.4214,x:954.45,y:252.85},0).wait(1).to({scaleX:0.4197,scaleY:0.4197,x:943.8,y:251.2},0).wait(1).to({scaleX:0.4181,scaleY:0.4181,x:933.25,y:249.6},0).wait(1).to({scaleX:0.4164,scaleY:0.4164,x:922.6,y:248},0).wait(1).to({scaleX:0.4148,scaleY:0.4148,x:912,y:246.35},0).wait(1).to({scaleX:0.4132,scaleY:0.4132,x:901.35,y:244.8},0).wait(1).to({scaleX:0.4115,scaleY:0.4115,x:890.7,y:243.2},0).wait(1).to({scaleX:0.4099,scaleY:0.4099,x:880.1,y:241.55},0).wait(1).to({scaleX:0.4083,scaleY:0.4083,x:869.45,y:239.95},0).wait(1).to({scaleX:0.4066,scaleY:0.4066,x:858.85,y:238.35},0).wait(1).to({scaleX:0.405,scaleY:0.405,x:848.25,y:236.7},0).wait(1).to({scaleX:0.4034,scaleY:0.4034,x:837.65,y:235.1},0).wait(1).to({scaleX:0.4017,scaleY:0.4017,x:827.05,y:233.5},0).wait(1).to({scaleX:0.4001,scaleY:0.4001,x:816.4,y:231.85},0).wait(1).to({scaleX:0.3984,scaleY:0.3984,x:805.75,y:230.3},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,x:795.15,y:228.65},0).wait(1).to({scaleX:0.3952,scaleY:0.3952,x:784.5,y:227.05},0).wait(1).to({scaleX:0.3935,scaleY:0.3935,x:773.9,y:225.45},0).wait(1).to({scaleX:0.3919,scaleY:0.3919,x:763.25,y:223.8},0).wait(1).to({scaleX:0.3903,scaleY:0.3903,x:752.65,y:222.2},0).wait(1).to({scaleX:0.3886,scaleY:0.3886,x:742.05,y:220.6},0).wait(1).to({scaleX:0.387,scaleY:0.387,x:731.4,y:218.95},0).wait(1).to({scaleX:0.3948,scaleY:0.3948,rotation:8.0953,x:705.1,y:222.9},0).wait(1).to({scaleX:0.4026,scaleY:0.4026,x:682,y:224.1},0).wait(1).to({scaleX:0.4104,scaleY:0.4104,x:658.9,y:225.2},0).wait(1).to({scaleX:0.4182,scaleY:0.4182,x:635.85,y:226.4},0).wait(1).to({scaleX:0.426,scaleY:0.426,x:612.75,y:227.55},0).wait(1).to({scaleX:0.4337,scaleY:0.4337,x:589.7,y:228.7},0).wait(1).to({scaleX:0.4415,scaleY:0.4415,x:566.6,y:229.85},0).wait(1).to({scaleX:0.4493,scaleY:0.4493,x:543.5,y:231},0).wait(1).to({scaleX:0.4571,scaleY:0.4571,x:520.45,y:232.2},0).wait(1).to({scaleX:0.4649,scaleY:0.4649,x:497.35,y:233.35},0).wait(1).to({scaleX:0.4727,scaleY:0.4727,x:474.35,y:234.5},0).wait(1).to({scaleX:0.4805,scaleY:0.4805,x:451.2,y:235.65},0).wait(1).to({scaleX:0.4883,scaleY:0.4883,x:428.1,y:236.8},0).wait(1).to({scaleX:0.4961,scaleY:0.4961,x:405.05,y:238},0).wait(1).to({scaleX:0.5039,scaleY:0.5039,x:381.95,y:239.15},0).wait(1).to({scaleX:0.5117,scaleY:0.5117,x:358.85,y:240.3},0).wait(1).to({scaleX:0.5195,scaleY:0.5195,x:335.85,y:241.45},0).wait(1).to({scaleX:0.5273,scaleY:0.5273,rotation:28.485,x:320.35,y:228.7},0).wait(1).to({scaleX:0.5123,scaleY:0.5123,rotation:20.584,x:297.5,y:228},0).wait(1).to({scaleX:0.4973,scaleY:0.4973,x:277.8,y:225.55},0).wait(1).to({scaleX:0.4823,scaleY:0.4823,x:258.15,y:223},0).wait(1).to({scaleX:0.4673,scaleY:0.4673,x:238.5,y:220.5},0).wait(1).to({scaleX:0.4523,scaleY:0.4523,x:218.85,y:218},0).wait(1).to({scaleX:0.4373,scaleY:0.4373,x:199.15,y:215.45},0).wait(1).to({scaleX:0.4223,scaleY:0.4223,x:179.4,y:213},0).wait(1).to({scaleX:0.4073,scaleY:0.4073,x:159.8,y:210.4},0).wait(1).to({scaleX:0.3924,scaleY:0.3924,x:140.1,y:207.9},0).wait(1).to({scaleX:0.3774,scaleY:0.3774,x:120.45,y:205.45},0).wait(1).to({scaleX:0.3624,scaleY:0.3624,x:100.75,y:202.85},0).wait(1).to({scaleX:0.3474,scaleY:0.3474,x:81.1,y:200.35},0).wait(1).to({scaleX:0.3324,scaleY:0.3324,x:61.45,y:197.85},0).wait(1).to({scaleX:0.3174,scaleY:0.3174,x:41.75,y:195.35},0).wait(1).to({scaleX:0.3024,scaleY:0.3024,x:22.15,y:192.75},0).wait(1).to({scaleX:0.2874,scaleY:0.2874,x:2.5,y:190.3},0).wait(1).to({scaleX:0.2725,scaleY:0.2725,x:-17.2,y:187.8},0).wait(1).to({scaleX:0.2575,scaleY:0.2575,x:-36.85,y:185.3},0).wait(1).to({scaleX:0.2425,scaleY:0.2425,x:-56.55,y:182.75},0).wait(1));

	// bg
	this.instance_4 = new lib._1614138024_50pzadniifonsdorogoi60jpgкопия();
	this.instance_4.setTransform(-75,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(97));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.3,140,2314.1000000000004,620);
// library properties:
lib.properties = {
	id: '2B352FC03BD5484C925C3F8DB9B40C64',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ex3_atlas_.png", id:"ex3_atlas_"},
		{src:"images/ex3_atlas_2.png", id:"ex3_atlas_2"}
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
an.compositions['2B352FC03BD5484C925C3F8DB9B40C64'] = {
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