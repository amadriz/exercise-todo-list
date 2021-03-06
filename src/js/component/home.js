import React, { useState } from "react";
import Task from "./tasks";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	// UseState Hook el currentItem es la var con el valor default y el setCurrentiterm es la funcion que alimenta es useState
	const [currentItem, setCurrentItem] = useState("");

	// Alimenta un array
	const [itemList, updateItemList] = useState([]);
	// Funcion para que alimente el useState desde el input
	const onChangeHandler = e => {
		setCurrentItem(e.target.value);
	};
	//Funcion agregar tarea con btn
	const addItemToList = () => {
		// ...itemList muestra o jala items individuales y currentItem es el que se está agregando a la lista.
		updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
		setCurrentItem("");
	};
	return (
		<div className="container mt-5">
			<div className="row mt-5" style={{ display: "inline-block" }}>
				<h2 className="text-center">todos</h2>
				<div className="col-sm-12">
					<input
						value={currentItem}
						onChange={onChangeHandler}></input>
					<button onClick={addItemToList}>+</button>
					<ul className="list-group mt-5">
						<li className="list-grout-item">
							<Task />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
