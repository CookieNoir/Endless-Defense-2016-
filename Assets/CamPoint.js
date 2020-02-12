#pragma strict
var a: GameObject;
function Update () {
a=GameObject.FindWithTag("Player");
gameObject.transform.position=a.transform.position;
}