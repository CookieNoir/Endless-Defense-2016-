#pragma strict
var ammo: GameObject;
var timer: float;
var hero: GameObject;
public static var launch: boolean;
function Start () {
launch=false;
hero=GameObject.FindWithTag("Player");
}

function Update () {
if (launch==true){
timer+=Time.deltaTime; if (timer>=0.6) {Instantiate(ammo, gameObject.transform.position, hero.transform.rotation); timer=0;}}
else timer=0;
}