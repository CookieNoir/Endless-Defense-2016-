#pragma strict
var ammo: GameObject;
var timer: float;
var hero: GameObject;
var charg: boolean;
public static var launch: boolean;
function Start () {
launch=false;
charg=true;
hero=GameObject.FindWithTag("Player");
}

function Update () {
if (launch==true){ timer+=Time.deltaTime; if (timer>=0.4&&charg==true) {Instantiate(ammo, gameObject.transform.position, hero.transform.rotation); charg=false;}}
else {timer=0; charg=true;}
if (timer>=1) {timer=0; charg=true;}
}