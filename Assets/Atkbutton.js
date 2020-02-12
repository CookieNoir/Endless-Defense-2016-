#pragma strict
public static var pressed: boolean;
public function OnPointerEnter () {
	pressed=true;
	var bob: GameObject=GameObject.FindWithTag("Player"); var anim: Animator=bob.GetComponent(Animator); Arrowlaunch.launch=true; ella.launch=true; gabella.launch=true;
	if (SetWeapon.role!=3) anim.SetBool("atk",true);
	if (SetWeapon.role==3) anim.SetBool("rangeatk",true);
}
public function OnPointerExit () {
	pressed=false;
	var bob: GameObject=GameObject.FindWithTag("Player"); var anim: Animator=bob.GetComponent(Animator); Arrowlaunch.launch=false; ella.launch=false; gabella.launch=false;
	if (SetWeapon.role!=3) anim.SetBool("atk",false);
	if (SetWeapon.role==3) anim.SetBool("rangeatk",false);
}