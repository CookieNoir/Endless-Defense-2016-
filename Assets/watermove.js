#pragma strict
var t: float;
function Update () {
t+=Time.deltaTime;
if (t<2) transform.position +=transform.right*0.1*Time.deltaTime; else if (t<4&&t>=2) transform.position -=transform.right*0.1*Time.deltaTime; else t=0;
}