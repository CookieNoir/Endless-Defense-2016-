#pragma strict
var a: GameObject;
var b: GameObject;
function OnClick () {
Time.timeScale=2; a.SetActive(true); b.SetActive(false);
}