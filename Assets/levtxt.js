﻿#pragma strict

function Start () {

}

function Update () {
if (language.rus==true) gameObject.GetComponent.<UI.Text>().text="Выйти"; else gameObject.GetComponent.<UI.Text>().text="Leave";
}