#pragma strict
var anim: Animator;
function Start () {
anim=GetComponent(Animator);
}

function Update () {
	if (Input.GetKey(KeyCode.Mouse0)&&SetWeapon.role!=3) anim.SetBool("atk",true); else anim.SetBool("atk",false);
	if (Input.GetKey(KeyCode.Mouse0)&&SetWeapon.role==3) anim.SetBool("rangeatk",true); else anim.SetBool("rangeatk",false);
}