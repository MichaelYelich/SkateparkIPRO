window.onload = function() {
  var c = document.getElementById('Skateboard')
  c.onchange = function() {
    if (c.checked == true) {
		document.getElementById('SkateboardColapse').style.display = 'inline';
		document.getElementById('skateboard-price').style.display = 'inline';}
    else {
		document.getElementById('SkateboardColapse').style.display = 'none';
		document.getElementById('skateboard-price').style.display = 'none';
    }
  }
    var d = document.getElementById('Gear')
  d.onchange = function() {
    if (d.checked == true) {document.getElementById('GearColapse').style.display = 'inline';
	document.getElementById('gear-price').style.display = 'inline';}
    else {
		document.getElementById('GearColapse').style.display = '';
		document.getElementById('gear-price').style.display = 'none';
    }
  }
    var e = document.getElementById('Scooter')
  e.onchange = function() {
    if (e.checked == true) {document.getElementById('ScooterColapse').style.display = 'inline';
	document.getElementById('scooter-price').style.display = 'inline';}
    else {
		document.getElementById('ScooterColapse').style.display = '';
		document.getElementById('scooter-price').style.display = 'none';
    }
  }
}