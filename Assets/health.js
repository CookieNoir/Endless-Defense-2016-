#pragma strict
public var hp: int;
public var maxhp: int;
var anim: Animator;
function Start () {
anim=GetComponent(Animator);
}

function Update () {
if (hp<0) hp=0;
if (hp<=0) anim.SetBool("dead",true);
if (hp<=0&&gameObject.tag!="Player") Destroy(gameObject, 3);
if (hp>0) anim.SetBool("dead", false);
}