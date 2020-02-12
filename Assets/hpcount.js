#pragma strict
var a: GameObject;
function Start () {

}
function Update () {
a=GameObject.FindWithTag("Player");

gameObject.GetComponent.<UI.Text>().text="HP    "+a.GetComponent.<health>().hp.ToString();
}