#pragma strict
var freeze: int;
function Start () {
freeze=Random.Range(1,4);
}

function Update () {
transform.position+=transform.forward*Time.deltaTime*0.5;
Destroy(gameObject, 1);
}
function OnTriggerEnter (enemy: Collider) {
if (enemy.tag=="Enemy") {enemy.GetComponent.<health>().hp-=1;
 if (freeze==1) {
	Destroy(enemy.GetComponent.<Animator>());
	Destroy(enemy.GetComponent.<EnemyMove>());
	Destroy(enemy.GetComponent.<nearattack>());
	Destroy(enemy.GetComponent.<atkmush>());
	Destroy(enemy.GetComponent.<controllermush>());
	Destroy(enemy.GetComponent.<Giantmove>());
	Destroy(enemy.GetComponent.<nearatkgiant>());
	enemy.GetComponent.<health>().hp=0;
	Destroy(enemy,1); Destroy(enemy.gameObject,3);
	}
}
}