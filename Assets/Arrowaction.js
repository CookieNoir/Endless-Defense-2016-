﻿#pragma strict

function Start () {

}

function Update () {
transform.position+=transform.forward*Time.deltaTime*4;
Destroy(gameObject, 3);
}
function OnTriggerEnter (enemy: Collider) {
if (enemy.tag=="Enemy") {enemy.GetComponent.<health>().hp-=1; Destroy(gameObject);}}