#pragma strict
var anim: Animator;
function Start () {
anim=gameObject.GetComponent(Animator);
}
function Update () {
if (gameObject.GetComponent.<EnemyMove>().RangEq<0.5) anim.SetBool("near", true); else anim.SetBool("near",false);
 if (gameObject.GetComponent.<health>().hp<=0) Destroy(this);
}