#pragma strict
var t: float;
var a: GameObject;
var r: int;
var at: boolean;
function Start () {
t=0;
at=true;
}

function Update () {
a=GameObject.FindWithTag("Player");
if (gameObject.GetComponent.<EnemyMove>().RangEq<0.5) {t+=Time.deltaTime; if (t>0.4&&at==true) {r=Random.Range(1,3); if (r==1) a.GetComponent.<health>().hp-=1;at=false;}} else {t=0; at=true;}
if (t>=0.5) {t=0; at=true;}
 if (gameObject.GetComponent.<health>().hp<=0) Destroy(this);
}