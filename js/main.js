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

document.getElementById('monedaOrigen').addEventListener('change', fillComboBox);