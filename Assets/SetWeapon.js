#pragma strict
public static var role: int;
var barb: GameObject;
var knight: GameObject;
var ranger: GameObject;
var mage: GameObject;
var point: GameObject;
function Start () {
	role=Random.Range(1,5);
 if (role==1) Instantiate(barb, point.transform.position, point.transform.rotation);
 if (role==2) Instantiate(knight, point.transform.position, point.transform.rotation);
 if (role==3) Instantiate(ranger, point.transform.position, point.transform.rotation);
 if (role==4) Instantiate(mage, point.transform.position, point.transform.rotation); 
}