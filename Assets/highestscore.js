#pragma strict
function Start () {

}
function Update () {
if (language.rus==true) gameObject.GetComponent.<UI.Text>().text="Лучший результат     "+PlayerPrefs.GetInt("highest"); else gameObject.GetComponent.<UI.Text>().text="Highest score        "+PlayerPrefs.GetInt("highest");
}