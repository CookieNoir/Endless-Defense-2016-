#pragma strict

function Start () {

}

function Update () {
Destroy(gameObject, 0.5);
}
function OnTriggerEnter (enemy: Collider) {
if (enemy.tag=="Enemy") enemy.GetComponent.<health>().hp-=1;}