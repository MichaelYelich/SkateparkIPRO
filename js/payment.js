window.onload = function() {
  var c = document.getElementById('Skateboard')
  var d = document.getElementById('Gear')
  var e = document.getElementById('Scooter')
  var params = new URLSearchParams(location.search);
  var name = params.get("type")
  console.log(name);
  if (name=="skateboard"){
	document.getElementById('Skateboard').checked=true;
  }
  if (name=="gear"){
	document.getElementById('Gear').checked=true;
  }
  if (name=="scooter"){
	document.getElementById('Scooter').checked=true;
  }
  if (c.checked == true) {
		document.getElementById('SkateboardColapse').style.display = 'inline';
		document.getElementById('skateboard-price').style.display = 'inline';}
    else {
		document.getElementById('SkateboardColapse').style.display = 'none';
		document.getElementById('skateboard-price').style.display = 'none';
    }
  if (d.checked == true) {document.getElementById('GearColapse').style.display = 'inline';
	document.getElementById('gear-price').style.display = 'inline';}
    else {
		document.getElementById('GearColapse').style.display = '';
		document.getElementById('gear-price').style.display = 'none';
    }
	if (e.checked == true) {document.getElementById('ScooterColapse').style.display = 'inline';
	document.getElementById('scooter-price').style.display = 'inline';}
    else {
		document.getElementById('ScooterColapse').style.display = '';
		document.getElementById('scooter-price').style.display = 'none';
    }
  c.onchange = function() {
    if (c.checked == true) {
		document.getElementById('SkateboardColapse').style.display = 'inline';
		document.getElementById('skateboard-price').style.display = 'inline';}
    else {
		document.getElementById('SkateboardColapse').style.display = 'none';
		document.getElementById('skateboard-price').style.display = 'none';
    }
  }
  d.onchange = function() {
    if (d.checked == true) {document.getElementById('GearColapse').style.display = 'inline';
	document.getElementById('gear-price').style.display = 'inline';}
    else {
		document.getElementById('GearColapse').style.display = '';
		document.getElementById('gear-price').style.display = 'none';
    }
  }
  e.onchange = function() {
    if (e.checked == true) {document.getElementById('ScooterColapse').style.display = 'inline';
	document.getElementById('scooter-price').style.display = 'inline';}
    else {
		document.getElementById('ScooterColapse').style.display = '';
		document.getElementById('scooter-price').style.display = 'none';
    }
  }
}