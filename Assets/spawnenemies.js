#pragma strict
var a: GameObject;
var b: GameObject;
var c: GameObject;
var e1: GameObject;
var e2: GameObject;
var t: float;
public static var n: int;
var k1: int;
var k2: int;
function Start () {
t=3; n=0; k1=0; k2=0;
}
function Update () {
t-=Time.deltaTime;
if (t<=0&&n<10) 
	{k2=Random.Range(1,10);
	if (k2==1) {Instantiate(e1, a.transform.position, a.transform.rotation);n+=3;t=6;} else {Instantiate(e2, a.transform.position, a.transform.rotation);t=3;n+=1;}
	if (n<10) k2=Random.Range(1,10);
	if (k2==1) {Instantiate(e1, b.transform.position, b.transform.rotation);n+=3;t=6;} else {Instantiate(e2, b.transform.position, b.transform.rotation);t=3;n+=1;}
	if (n<10) k2=Random.Range(1,10);
	if (k2==1) {Instantiate(e1, c.transform.position, c.transform.rotation);n+=3;t=6;} else {Instantiate(e2, c.transform.position, c.transform.rotation);t=3;n+=1;}
}
}