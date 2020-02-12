#pragma strict
var t: float;
var at: boolean;
public var charged: boolean;
function Start () {
charged=false;
at=true;
}
function Update () {
if (Atkbutton.pressed==true) {t+=Time.deltaTime; if (t>0.4&&at==true) {charged=true;at=false;}
if (t>0.6) charged=false;} else {t=0; charged=false; at=true;}
if (t>=1) {t=0; at=true;}
}