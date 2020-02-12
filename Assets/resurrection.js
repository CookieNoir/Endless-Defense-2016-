#pragma strict
var t: float;
function Start () {
t=0;
}

function Update () {
if (gameObject.GetComponent.<health>().hp<=0) t+=Time.deltaTime; else t=0;
if (t>=10) {gameObject.GetComponent.<health>().hp=gameObject.GetComponent.<health>().maxhp; gameObject.transform.position=Vector3(0,1,0);}
}