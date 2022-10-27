const fillComboBox = () => {
	const origen = document.getElementById('monedaOrigen');
	const destino = document.getElementById('monedaDestino');
	let contenido = "";
	switch (origen.value) {
		case "1":
			contenido = `<option value="0" disabled selected>Moneda Destino</option>
			<option value="2">Dólar Canadiense</option>
			<option value="3">Euro</option>
			<option value="4">Peso Mexicano</option>`;
			break;

		case "2":
			contenido = `<option value="0" disabled selected>Moneda Destino</option>
			<option value="1">Dólar Estadounidense</option>
			<option value="3">Euro</option>
			<option value="4">Peso Mexicano</option>`
			break;

		case "3":
			contenido = `<option value="0" disabled selected>Moneda Destino</option>
			<option value="1">Dólar Estadounidense</option>
			<option value="2">Dólar Canadiense</option>
			<option value="4">Peso Mexicano</option>`
			break;

		case "4":
			contenido = `<option value="0" disabled selected>Moneda Destino</option>
			<option value="1">Dólar Estadounidense</option>
			<option value="2">Dólar Canadiense</option>
			<option value="3">Euro</option>`
			break;

		default:
			return alert("Introduzca un valor valido");
	}

	destino.innerHTML = contenido;
}

const calcular = () => {
	const origen = document.getElementById('monedaOrigen');
	const destino = document.getElementById('monedaDestino');
	const cantidad = parseFloat(document.getElementById('cantidad').value);

	if (isNaN(cantidad) || cantidad < 0) {
		document.getElementById('cantidad').value = "";
		return alert("Introduzca una cantidad valida");
	}

	let resultado = 0;

	if (origen.value === "1") { // Dolar Estadounidense
		switch (destino.value) {
			case "2":
				resultado = cantidad * 1.35;
				break;

			case "3":
				resultado = cantidad * 0.99;
				break;

			case "4":
				resultado = cantidad * 19.85;
				break;

			default:
				return alert("Introduzca una opcion valida");
		}
	} else if (origen.value === "2") { // Dolar Canadiense
		switch (destino.value) {
			case "1":
				resultado = (cantidad / 1.35);
				break;

			case "3":
				resultado = (cantidad / 1.35) * 0.99;
				break;

			case "4":
				resultado = (cantidad / 1.35) * 19.85;
				break;

			default:
				return alert("Introduzca una opcion valida");
		}
	} else if (origen.value === "3") { // Euro
		switch (destino.value) {
			case "1":
				resultado = (cantidad / 0.99);
				break;

			case "2":
				resultado = (cantidad / 0.99) * 1.35;
				break;

			case "4":
				resultado = (cantidad / 0.99) * 19.85;
				break;

			default:
				return alert("Introduzca una opcion valida");
		}
	} else if (origen.value === "4") { // Peso Mexicano
		switch (destino.value) {
			case "1":
				resultado = (cantidad / 19.85);
				break;

			case "2":
				resultado = (cantidad / 19.85) * 1.35;
				break;

			case "3":
				resultado = (cantidad / 19.85) * 0.99;
				break;

			default:
				return alert("Introduzca una opcion valida");
		}
	} else {
		return alert("Seleccione una opcion valida");
	}

	document.getElementById("subtotal").value = (resultado).toFixed(2);
	document.getElementById("totalComision").value = (resultado * 0.03).toFixed(2);
	document.getElementById("totalPagar").value = (resultado + (resultado * 0.03)).toFixed(2);
}

const registrar = () => {
	if (document.getElementById('subtotal').value === "") {
		calcular();
	}

	const informacion = {
		'cantidad': document.getElementById('cantidad').value,
		'origen': document.getElementById('monedaOrigen').value,
		'destino': document.getElementById('monedaDestino').value,
		'subtotal': document.getElementById('subtotal').value,
		'comision': document.getElementById('totalComision').value,
		'pagar': document.getElementById('totalPagar').value,
		'totalSub': document.getElementById('totalSub').innerText,
		'totalComi': document.getElementById('totalComi').innerText,
		'totalPago': document.getElementById('totalPago').innerText,
	};

	const getMoneda = (id) => {
		switch (id) {
			case "1":
				return "Dólar Estadounidense";

			case "2":
				return "Dólar Canadiense";

			case "3":
				return "Euro";

			case "4":
				return "Peso Mexicano";

			default:
				return null;
		}
	}

	informacion.origen = getMoneda(informacion.origen);
	informacion.destino = getMoneda(informacion.destino);

	informacion.totalSub = parseFloat(informacion.totalSub) + parseFloat(informacion.subtotal).toFixed(2);
	informacion.totalComi = parseFloat(informacion.totalComi) + parseFloat(informacion.comision).toFixed(2);
	informacion.totalPago = parseFloat(informacion.totalPago) + parseFloat(informacion.pagar).toFixed(2);

	document.getElementById('contenido').innerHTML += `<p>${informacion.cantidad}</p><p>${informacion.origen}</p><p>${informacion.destino}</p><p>${informacion.subtotal}</p><p>${informacion.comision}</p><p>${informacion.pagar}</p>`;

	document.getElementById('totalSub').innerText = `${informacion.totalSub}`;
	document.getElementById('totalComi').innerText = `${informacion.totalComi}`;
	document.getElementById('totalPago').innerText = `${informacion.totalPago}`;
}

document.getElementById('monedaOrigen').addEventListener('change', fillComboBox);
document.getElementById('calcular').addEventListener('click', calcular);
document.getElementById('registrar').addEventListener('click', registrar);