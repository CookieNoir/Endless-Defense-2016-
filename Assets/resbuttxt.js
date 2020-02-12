#pragma strict

function Start () {

}

function Update () {
if (language.rus==true) gameObject.GetComponent.<UI.Text>().text="Заново"; else gameObject.GetComponent.<UI.Text>().text="Restart";
}