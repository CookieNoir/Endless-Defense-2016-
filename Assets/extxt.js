#pragma strict
function Update () {
	if (language.rus==true) gameObject.GetComponent.<UI.Text>().text="ВЫЙТИ"; else gameObject.GetComponent.<UI.Text>().text="QUIT";
}