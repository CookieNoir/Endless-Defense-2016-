#pragma strict

function Update () {
	if (language.rus==true) gameObject.GetComponent.<UI.Text>().text="РУ"; else gameObject.GetComponent.<UI.Text>().text="EN";
}