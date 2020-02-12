#pragma strict

function Restart () {
cryshp.chp=1; Time.timeScale=2; Application.LoadLevel(1);
}

function Leave () {
cryshp.chp=1; Time.timeScale=2; Application.LoadLevel(0);
}