#pragma strict
function OnTriggerStay (enemy: Collider) {
if (enemy.tag=="Enemy"&&gameObject.GetComponent.<axesystem>().charged==true) {enemy.GetComponent.<health>().hp-=1; gameObject.GetComponent.<axesystem>().charged=false;}
}