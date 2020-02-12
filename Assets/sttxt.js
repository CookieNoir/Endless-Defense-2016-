#pragma strict
function Update () {
	if (language.rus==true) gameObject.GetComponent.<UI.Text>().text="НАЧАТЬ"; else gameObject.GetComponent.<UI.Text>().text="START";
}