#pragma strict

function Start () {

}

function Update () {
transform.position+=transform.forward*Time.deltaTime*0.5;
Destroy(gameObject, 0.5);
}
function OnTriggerEnter (enemy: Collider) {
if (enemy.tag=="Enemy") enemy.GetComponent.<health>().hp-=1;}