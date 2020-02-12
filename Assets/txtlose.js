#pragma strict

function Start () {

}

function Update () {
if (language.rus==true) gameObject.GetComponent.<UI.Text>().text="Вы проиграли! Нажмите Заново, чтобы попробовать ещё раз, или Выйти, чтобы покинуть арену.";
 else gameObject.GetComponent.<UI.Text>().text="You lost! Press Restart if you want to try again or Leave for leaving from the arena.";
}