#pragma strict
function Update () {
if (gameObject.GetComponent.<EnemyMove>().player.GetComponent.<health>().hp<=0) gameObject.GetComponent.<atkmush>().enabled=false;
 else gameObject.GetComponent.<atkmush>().enabled=true;
if (gameObject.GetComponent.<EnemyMove>().player.GetComponent.<health>().hp<=0) gameObject.GetComponent.<EnemyMove>().enabled=false;
 else gameObject.GetComponent.<EnemyMove>().enabled=true;
if (gameObject.GetComponent.<EnemyMove>().player.GetComponent.<health>().hp<=0) gameObject.GetComponent.<nearattack>().enabled=false;
 else gameObject.GetComponent.<nearattack>().enabled=true;
if (gameObject.GetComponent.<health>().hp<=0) {Destroy(gameObject.GetComponent.<BoxCollider>());Destroy(gameObject.GetComponent.<Rigidbody>());Destroy(this);}
}