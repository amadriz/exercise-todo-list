import React, { useState } from "react";
import List from "./tasks";

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
	//contador
	let countItems = itemList.length;

	return (
		<div className="container">
			<div className="centered">
				<div className="secondBG">
					<div
						className="row mt-5"
						style={{ display: "inline-block" }}>
						<h1 className="text-center text-capitalize">
							to do list
						</h1>
						<div className="col-sm-12">
							<div className="input-group mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Ingrese tarea"
									value={currentItem}
									onChange={onChangeHandler}
								/>
								<div className="input-group-append">
									<button
										className="btn btn-outline-success"
										type="button"
										onClick={addItemToList}>
										Agregar tarea
									</button>
								</div>
							</div>
							<ul className="list-group mt-5">
								<li className="list-group-item">
									<List
										itemList={itemList}
										updateItemList={updateItemList}
									/>
								</li>
							</ul>
							<div>{countItems} of items</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
