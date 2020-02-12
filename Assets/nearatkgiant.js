#pragma strict
var t: float;
var a: GameObject;
var at: boolean;
var anim: Animator;
function Start () {
t=0;
anim=gameObject.GetComponent(Animator);
}
function Update () {
if (gameObject.GetComponent.<Giantmove>().RangEq<0.5) anim.SetBool("near", true); else anim.SetBool("near",false);
a=GameObject.FindWithTag("Crystal");
if (gameObject.GetComponent.<Giantmove>().RangEq<0.5) {t+=Time.deltaTime; if (t>1&&at==true) {cryshp.chp-=1;at=false;}} else {t=0; at=true;}
if (t>=2) {t=0; at=true;}
 if (gameObject.GetComponent.<health>().hp<=0) Destroy(this);
}