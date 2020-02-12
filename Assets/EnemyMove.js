#pragma strict
public var enemy : Transform;
public var Speed : float;
public var RotSpeed : int;
public var RangEq : float;
public var player: GameObject;
var Your: float;
function Start () {
Your=Speed;
enemy=gameObject.transform;
}

function Update () {
player=GameObject.FindWithTag("Player");
var look_dir=player.transform.position - enemy.position;
 look_dir.y=0; RangEq=look_dir.sqrMagnitude;
 if (look_dir.sqrMagnitude<0.5) Speed=0; else Speed=Your;
 enemy.rotation = Quaternion.Slerp(enemy.rotation, Quaternion.LookRotation(look_dir),RotSpeed*Time.deltaTime);
 enemy.position+=enemy.forward*Speed*Time.deltaTime;
 if (gameObject.GetComponent.<health>().hp<=0) Destroy(this);
}