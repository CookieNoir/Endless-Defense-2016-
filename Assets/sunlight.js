#pragma strict
function Update () {
transform.Rotate(Vector3.forward*2*Time.deltaTime);
}