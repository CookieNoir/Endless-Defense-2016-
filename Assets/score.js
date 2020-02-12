#pragma strict
public static var score: int;
function Start () {
score=0;
}
function Update () {
gameObject.GetComponent.<UI.Text>().text=score.ToString();
if (cryshp.chp<=0&&score>PlayerPrefs.GetInt("highest")) PlayerPrefs.SetInt("highest",score);
}