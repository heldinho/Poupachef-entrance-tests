export function FormatDate(_campo, _tecla){
	var tam;
	var tecla = _tecla.keyCode;
	// var vr = new String(_campo.value);
	var vr = _campo.value;
	vr = vr.replace("/", "");
	vr = vr.replace("/", "");
	vr = vr.replace("/", "");
	tam = vr.length + 1;
	if (tecla !== 8 && tecla !== 8) {
		if (tam > 0 && tam < 2)
			_campo.value = vr.substr(0, 2) ;
			if (tam > 2 && tam < 4)
				_campo.value = vr.substr(0, 2) + '/' + vr.substr(2, 2);
				if (tam > 4 && tam < 7)
					_campo.value = vr.substr(0, 2) + '/' + vr.substr(2, 2) + '/' + vr.substr(4, 7);
	}
}

export function onlyNumber(event) {
	var key = event.which || event.keyCode;
	if (key !== 8 && isNaN(String.fromCharCode(key))) {
		event.preventDefault();
	}
}