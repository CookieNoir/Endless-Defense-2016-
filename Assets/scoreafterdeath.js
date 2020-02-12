#pragma strict
var sc: int;
var ns: int;
function Update () {
if (gameObject.GetComponent.<health>().hp<=0) {score.score+=Random.Range(sc-5,sc+1); spawnenemies.n-=ns; Destroy(this);}
}