#pragma strict
function Update () {
	if (language.rus==true) gameObject.GetComponent.<UI.Text>().text="Игра приостановлена"; else gameObject.GetComponent.<UI.Text>().text="Game paused";
}