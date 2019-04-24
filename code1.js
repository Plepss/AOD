gdjs.WATYKANCode = {};
gdjs.WATYKANCode.GDCICHOCIEMNIObjects1= [];
gdjs.WATYKANCode.GDCICHOCIEMNIObjects2= [];
gdjs.WATYKANCode.GDCICHOCIEMNIObjects3= [];
gdjs.WATYKANCode.GDplayer2Objects1= [];
gdjs.WATYKANCode.GDplayer2Objects2= [];
gdjs.WATYKANCode.GDplayer2Objects3= [];
gdjs.WATYKANCode.GDRRSZObjects1= [];
gdjs.WATYKANCode.GDRRSZObjects2= [];
gdjs.WATYKANCode.GDRRSZObjects3= [];
gdjs.WATYKANCode.GDPOINTObjects1= [];
gdjs.WATYKANCode.GDPOINTObjects2= [];
gdjs.WATYKANCode.GDPOINTObjects3= [];

gdjs.WATYKANCode.conditionTrue_0 = {val:false};
gdjs.WATYKANCode.condition0IsTrue_0 = {val:false};
gdjs.WATYKANCode.condition1IsTrue_0 = {val:false};
gdjs.WATYKANCode.condition2IsTrue_0 = {val:false};


gdjs.WATYKANCode.mapOfGDgdjs_46WATYKANCode_46GDCICHOCIEMNIObjects1Objects = Hashtable.newFrom({"CICHOCIEMNI": gdjs.WATYKANCode.GDCICHOCIEMNIObjects1});gdjs.WATYKANCode.mapOfGDgdjs_46WATYKANCode_46GDCICHOCIEMNIObjects1Objects = Hashtable.newFrom({"CICHOCIEMNI": gdjs.WATYKANCode.GDCICHOCIEMNIObjects1});gdjs.WATYKANCode.mapOfGDgdjs_46WATYKANCode_46GDplayer2Objects1Objects = Hashtable.newFrom({"player2": gdjs.WATYKANCode.GDplayer2Objects1});gdjs.WATYKANCode.eventsList0x69f8d8 = function(runtimeScene) {

{

gdjs.WATYKANCode.GDCICHOCIEMNIObjects2.createFrom(gdjs.WATYKANCode.GDCICHOCIEMNIObjects1);

gdjs.WATYKANCode.GDplayer2Objects2.createFrom(gdjs.WATYKANCode.GDplayer2Objects1);


gdjs.WATYKANCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WATYKANCode.GDplayer2Objects2.length;i<l;++i) {
    if ( gdjs.WATYKANCode.GDplayer2Objects2[i].getX() == (( gdjs.WATYKANCode.GDCICHOCIEMNIObjects2.length === 0 ) ? 0 :gdjs.WATYKANCode.GDCICHOCIEMNIObjects2[0].getX()) + 100 ) {
        gdjs.WATYKANCode.condition0IsTrue_0.val = true;
        gdjs.WATYKANCode.GDplayer2Objects2[k] = gdjs.WATYKANCode.GDplayer2Objects2[i];
        ++k;
    }
}
gdjs.WATYKANCode.GDplayer2Objects2.length = k;}if (gdjs.WATYKANCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WATYKANCode.GDCICHOCIEMNIObjects2 */
{for(var i = 0, len = gdjs.WATYKANCode.GDCICHOCIEMNIObjects2.length ;i < len;++i) {
    gdjs.WATYKANCode.GDCICHOCIEMNIObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("POINT").add(1);
}}

}


{

gdjs.WATYKANCode.GDCICHOCIEMNIObjects2.createFrom(gdjs.WATYKANCode.GDCICHOCIEMNIObjects1);

gdjs.WATYKANCode.GDplayer2Objects2.createFrom(gdjs.WATYKANCode.GDplayer2Objects1);


gdjs.WATYKANCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WATYKANCode.GDCICHOCIEMNIObjects2.length;i<l;++i) {
    if ( gdjs.WATYKANCode.GDCICHOCIEMNIObjects2[i].getX() == (( gdjs.WATYKANCode.GDplayer2Objects2.length === 0 ) ? 0 :gdjs.WATYKANCode.GDplayer2Objects2[0].getX()) + 100 ) {
        gdjs.WATYKANCode.condition0IsTrue_0.val = true;
        gdjs.WATYKANCode.GDCICHOCIEMNIObjects2[k] = gdjs.WATYKANCode.GDCICHOCIEMNIObjects2[i];
        ++k;
    }
}
gdjs.WATYKANCode.GDCICHOCIEMNIObjects2.length = k;}if (gdjs.WATYKANCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WATYKANCode.GDCICHOCIEMNIObjects2 */
{for(var i = 0, len = gdjs.WATYKANCode.GDCICHOCIEMNIObjects2.length ;i < len;++i) {
    gdjs.WATYKANCode.GDCICHOCIEMNIObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("POINT").add(1);
}}

}


{

/* Reuse gdjs.WATYKANCode.GDCICHOCIEMNIObjects1 */
/* Reuse gdjs.WATYKANCode.GDplayer2Objects1 */

gdjs.WATYKANCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WATYKANCode.GDplayer2Objects1.length;i<l;++i) {
    if ( gdjs.WATYKANCode.GDplayer2Objects1[i].getY() == (( gdjs.WATYKANCode.GDCICHOCIEMNIObjects1.length === 0 ) ? 0 :gdjs.WATYKANCode.GDCICHOCIEMNIObjects1[0].getY()) + 100 ) {
        gdjs.WATYKANCode.condition0IsTrue_0.val = true;
        gdjs.WATYKANCode.GDplayer2Objects1[k] = gdjs.WATYKANCode.GDplayer2Objects1[i];
        ++k;
    }
}
gdjs.WATYKANCode.GDplayer2Objects1.length = k;}if (gdjs.WATYKANCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EKRAN STARTOWY", false);
}}

}


}; //End of gdjs.WATYKANCode.eventsList0x69f8d8
gdjs.WATYKANCode.mapOfGDgdjs_46WATYKANCode_46GDRRSZObjects1Objects = Hashtable.newFrom({"RRSZ": gdjs.WATYKANCode.GDRRSZObjects1});gdjs.WATYKANCode.eventsList0x69e918 = function(runtimeScene) {

{


gdjs.WATYKANCode.condition0IsTrue_0.val = false;
{
gdjs.WATYKANCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Witam");
}if (gdjs.WATYKANCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WATYKANCode.GDRRSZObjects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.WATYKANCode.mapOfGDgdjs_46WATYKANCode_46GDRRSZObjects1Objects, gdjs.random(400), 800, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Witam");
}}

}


}; //End of gdjs.WATYKANCode.eventsList0x69e918
gdjs.WATYKANCode.mapOfGDgdjs_46WATYKANCode_46GDRRSZObjects1Objects = Hashtable.newFrom({"RRSZ": gdjs.WATYKANCode.GDRRSZObjects1});gdjs.WATYKANCode.mapOfGDgdjs_46WATYKANCode_46GDplayer2Objects1Objects = Hashtable.newFrom({"player2": gdjs.WATYKANCode.GDplayer2Objects1});gdjs.WATYKANCode.eventsList0x65ea00 = function(runtimeScene) {

{

gdjs.WATYKANCode.GDRRSZObjects2.createFrom(gdjs.WATYKANCode.GDRRSZObjects1);

gdjs.WATYKANCode.GDplayer2Objects2.createFrom(gdjs.WATYKANCode.GDplayer2Objects1);


gdjs.WATYKANCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WATYKANCode.GDplayer2Objects2.length;i<l;++i) {
    if ( gdjs.WATYKANCode.GDplayer2Objects2[i].getX() == (( gdjs.WATYKANCode.GDRRSZObjects2.length === 0 ) ? 0 :gdjs.WATYKANCode.GDRRSZObjects2[0].getX()) + 100 ) {
        gdjs.WATYKANCode.condition0IsTrue_0.val = true;
        gdjs.WATYKANCode.GDplayer2Objects2[k] = gdjs.WATYKANCode.GDplayer2Objects2[i];
        ++k;
    }
}
gdjs.WATYKANCode.GDplayer2Objects2.length = k;}if (gdjs.WATYKANCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WATYKANCode.GDRRSZObjects2 */
{for(var i = 0, len = gdjs.WATYKANCode.GDRRSZObjects2.length ;i < len;++i) {
    gdjs.WATYKANCode.GDRRSZObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("POINT").add(1);
}}

}


{

gdjs.WATYKANCode.GDRRSZObjects2.createFrom(gdjs.WATYKANCode.GDRRSZObjects1);

gdjs.WATYKANCode.GDplayer2Objects2.createFrom(gdjs.WATYKANCode.GDplayer2Objects1);


gdjs.WATYKANCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WATYKANCode.GDRRSZObjects2.length;i<l;++i) {
    if ( gdjs.WATYKANCode.GDRRSZObjects2[i].getX() == (( gdjs.WATYKANCode.GDplayer2Objects2.length === 0 ) ? 0 :gdjs.WATYKANCode.GDplayer2Objects2[0].getX()) + 100 ) {
        gdjs.WATYKANCode.condition0IsTrue_0.val = true;
        gdjs.WATYKANCode.GDRRSZObjects2[k] = gdjs.WATYKANCode.GDRRSZObjects2[i];
        ++k;
    }
}
gdjs.WATYKANCode.GDRRSZObjects2.length = k;}if (gdjs.WATYKANCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WATYKANCode.GDRRSZObjects2 */
{for(var i = 0, len = gdjs.WATYKANCode.GDRRSZObjects2.length ;i < len;++i) {
    gdjs.WATYKANCode.GDRRSZObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("POINT").add(1);
}}

}


{

/* Reuse gdjs.WATYKANCode.GDRRSZObjects1 */
/* Reuse gdjs.WATYKANCode.GDplayer2Objects1 */

gdjs.WATYKANCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WATYKANCode.GDplayer2Objects1.length;i<l;++i) {
    if ( gdjs.WATYKANCode.GDplayer2Objects1[i].getY() == (( gdjs.WATYKANCode.GDRRSZObjects1.length === 0 ) ? 0 :gdjs.WATYKANCode.GDRRSZObjects1[0].getY()) - 100 ) {
        gdjs.WATYKANCode.condition0IsTrue_0.val = true;
        gdjs.WATYKANCode.GDplayer2Objects1[k] = gdjs.WATYKANCode.GDplayer2Objects1[i];
        ++k;
    }
}
gdjs.WATYKANCode.GDplayer2Objects1.length = k;}if (gdjs.WATYKANCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.WATYKANCode.eventsList0x65ea00
gdjs.WATYKANCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.WATYKANCode.condition0IsTrue_0.val = false;
{
gdjs.WATYKANCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WATYKANCode.condition0IsTrue_0.val) {
gdjs.WATYKANCode.GDCICHOCIEMNIObjects1.createFrom(runtimeScene.getObjects("CICHOCIEMNI"));
gdjs.WATYKANCode.GDRRSZObjects1.createFrom(runtimeScene.getObjects("RRSZ"));
gdjs.WATYKANCode.GDplayer2Objects1.createFrom(runtimeScene.getObjects("player2"));
{for(var i = 0, len = gdjs.WATYKANCode.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.WATYKANCode.GDplayer2Objects1[i].setPosition(230,350);
}
}{for(var i = 0, len = gdjs.WATYKANCode.GDCICHOCIEMNIObjects1.length ;i < len;++i) {
    gdjs.WATYKANCode.GDCICHOCIEMNIObjects1[i].setPosition(gdjs.random(400),0);
}
}{for(var i = 0, len = gdjs.WATYKANCode.GDRRSZObjects1.length ;i < len;++i) {
    gdjs.WATYKANCode.GDRRSZObjects1[i].setPosition(gdjs.random(400),gdjs.random(750));
}
}{for(var i = 0, len = gdjs.WATYKANCode.GDRRSZObjects1.length ;i < len;++i) {
    gdjs.WATYKANCode.GDRRSZObjects1[i].hide();
}
}}

}


{

gdjs.WATYKANCode.GDplayer2Objects1.createFrom(runtimeScene.getObjects("player2"));

gdjs.WATYKANCode.condition0IsTrue_0.val = false;
gdjs.WATYKANCode.condition1IsTrue_0.val = false;
{
gdjs.WATYKANCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.WATYKANCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.WATYKANCode.GDplayer2Objects1.length;i<l;++i) {
    if ( gdjs.WATYKANCode.GDplayer2Objects1[i].getX() > 0 ) {
        gdjs.WATYKANCode.condition1IsTrue_0.val = true;
        gdjs.WATYKANCode.GDplayer2Objects1[k] = gdjs.WATYKANCode.GDplayer2Objects1[i];
        ++k;
    }
}
gdjs.WATYKANCode.GDplayer2Objects1.length = k;}}
if (gdjs.WATYKANCode.condition1IsTrue_0.val) {
/* Reuse gdjs.WATYKANCode.GDplayer2Objects1 */
{for(var i = 0, len = gdjs.WATYKANCode.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.WATYKANCode.GDplayer2Objects1[i].addPolarForce(180, 500, 0);
}
}}

}


{

gdjs.WATYKANCode.GDplayer2Objects1.createFrom(runtimeScene.getObjects("player2"));

gdjs.WATYKANCode.condition0IsTrue_0.val = false;
gdjs.WATYKANCode.condition1IsTrue_0.val = false;
{
gdjs.WATYKANCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.WATYKANCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.WATYKANCode.GDplayer2Objects1.length;i<l;++i) {
    if ( gdjs.WATYKANCode.GDplayer2Objects1[i].getX() < 400 ) {
        gdjs.WATYKANCode.condition1IsTrue_0.val = true;
        gdjs.WATYKANCode.GDplayer2Objects1[k] = gdjs.WATYKANCode.GDplayer2Objects1[i];
        ++k;
    }
}
gdjs.WATYKANCode.GDplayer2Objects1.length = k;}}
if (gdjs.WATYKANCode.condition1IsTrue_0.val) {
/* Reuse gdjs.WATYKANCode.GDplayer2Objects1 */
{for(var i = 0, len = gdjs.WATYKANCode.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.WATYKANCode.GDplayer2Objects1[i].addPolarForce(0, 500, 0);
}
}}

}


{


{
gdjs.WATYKANCode.GDCICHOCIEMNIObjects1.createFrom(runtimeScene.getObjects("CICHOCIEMNI"));
{for(var i = 0, len = gdjs.WATYKANCode.GDCICHOCIEMNIObjects1.length ;i < len;++i) {
    gdjs.WATYKANCode.GDCICHOCIEMNIObjects1[i].addPolarForce(90, 200, 0);
}
}}

}


{


gdjs.WATYKANCode.condition0IsTrue_0.val = false;
{
gdjs.WATYKANCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Tesciowa");
}if (gdjs.WATYKANCode.condition0IsTrue_0.val) {
gdjs.WATYKANCode.GDCICHOCIEMNIObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.WATYKANCode.mapOfGDgdjs_46WATYKANCode_46GDCICHOCIEMNIObjects1Objects, gdjs.random(400), 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Tesciowa");
}}

}


{

gdjs.WATYKANCode.GDCICHOCIEMNIObjects1.createFrom(runtimeScene.getObjects("CICHOCIEMNI"));
gdjs.WATYKANCode.GDplayer2Objects1.createFrom(runtimeScene.getObjects("player2"));

gdjs.WATYKANCode.condition0IsTrue_0.val = false;
{
gdjs.WATYKANCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WATYKANCode.mapOfGDgdjs_46WATYKANCode_46GDCICHOCIEMNIObjects1Objects, gdjs.WATYKANCode.mapOfGDgdjs_46WATYKANCode_46GDplayer2Objects1Objects, false, runtimeScene, false);
}if (gdjs.WATYKANCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WATYKANCode.eventsList0x69f8d8(runtimeScene);} //End of subevents
}

}


{


{
gdjs.WATYKANCode.GDPOINTObjects1.createFrom(runtimeScene.getObjects("POINT"));
{for(var i = 0, len = gdjs.WATYKANCode.GDPOINTObjects1.length ;i < len;++i) {
    gdjs.WATYKANCode.GDPOINTObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("POINT"))));
}
}}

}


{


gdjs.WATYKANCode.condition0IsTrue_0.val = false;
{
gdjs.WATYKANCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("POINT")) >= 5;
}if (gdjs.WATYKANCode.condition0IsTrue_0.val) {
gdjs.WATYKANCode.GDRRSZObjects1.createFrom(runtimeScene.getObjects("RRSZ"));
{for(var i = 0, len = gdjs.WATYKANCode.GDRRSZObjects1.length ;i < len;++i) {
    gdjs.WATYKANCode.GDRRSZObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.WATYKANCode.GDRRSZObjects1.length ;i < len;++i) {
    gdjs.WATYKANCode.GDRRSZObjects1[i].addPolarForce(270, 200, 0);
}
}
{ //Subevents
gdjs.WATYKANCode.eventsList0x69e918(runtimeScene);} //End of subevents
}

}


{

gdjs.WATYKANCode.GDRRSZObjects1.createFrom(runtimeScene.getObjects("RRSZ"));
gdjs.WATYKANCode.GDplayer2Objects1.createFrom(runtimeScene.getObjects("player2"));

gdjs.WATYKANCode.condition0IsTrue_0.val = false;
{
gdjs.WATYKANCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WATYKANCode.mapOfGDgdjs_46WATYKANCode_46GDRRSZObjects1Objects, gdjs.WATYKANCode.mapOfGDgdjs_46WATYKANCode_46GDplayer2Objects1Objects, false, runtimeScene, false);
}if (gdjs.WATYKANCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WATYKANCode.eventsList0x65ea00(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.WATYKANCode.eventsList0xb25a8


gdjs.WATYKANCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.WATYKANCode.GDCICHOCIEMNIObjects1.length = 0;
gdjs.WATYKANCode.GDCICHOCIEMNIObjects2.length = 0;
gdjs.WATYKANCode.GDCICHOCIEMNIObjects3.length = 0;
gdjs.WATYKANCode.GDplayer2Objects1.length = 0;
gdjs.WATYKANCode.GDplayer2Objects2.length = 0;
gdjs.WATYKANCode.GDplayer2Objects3.length = 0;
gdjs.WATYKANCode.GDRRSZObjects1.length = 0;
gdjs.WATYKANCode.GDRRSZObjects2.length = 0;
gdjs.WATYKANCode.GDRRSZObjects3.length = 0;
gdjs.WATYKANCode.GDPOINTObjects1.length = 0;
gdjs.WATYKANCode.GDPOINTObjects2.length = 0;
gdjs.WATYKANCode.GDPOINTObjects3.length = 0;

gdjs.WATYKANCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['WATYKANCode'] = gdjs.WATYKANCode;
