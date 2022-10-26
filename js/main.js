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

document.getElementById('monedaOrigen').addEventListener('change', fillComboBox);
document.getElementById('calcular').addEventListener("click", calcular);