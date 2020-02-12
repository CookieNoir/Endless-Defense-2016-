#pragma strict
public var a: GameObject;
public var b: GameObject;
public var hero: GameObject;
function Start () {
}

function Update () {
hero=GameObject.FindWithTag("Player");
if (hero.GetComponent.<health>().hp<=0) {a.SetActive(false); Arrowlaunch.launch=false; ella.launch=false; gabella.launch=false; b.SetActive(false);}
 else {a.SetActive(true); Atkbutton.pressed=true; b.SetActive(true);}
}