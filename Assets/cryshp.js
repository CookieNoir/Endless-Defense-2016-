#pragma strict
var b: GameObject;
public static var chp: int;
function Start () {
chp=10;
}

function Update () {
gameObject.GetComponent.<UI.Text>().text="CP  "+chp.ToString();
if (chp<0) chp=0;
if (chp<=0) {Time.timeScale=0f; b.SetActive(true);}
}