import { useState, useEffect, useRef } from "react";

function UseRefExample2() {
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(0);

	const renders = useRef(1);
	const prevName = useRef("");

	useEffect(() => {
		setLoading(1);
		renders.current += 1;
		prevName.current = name;
		console.log("prevName from useEffect", prevName.current);
		setLoading(2);
	}, [name]);

	console.log("prevName after useEffect", prevName.current);

	// if (loading) {
	// 	return <h3>Loading...</h3>;
	// } else {
	// 	return (
	// 		<div>
	// 			<h1>Renders: {renders.current}</h1>
	// 			<h2>Prev name state: {prevName.current}</h2>
	// 			<input
	// 				type="text"
	// 				value={name}
	// 				onChange={(e) => setName(e.target.value)}
	// 				className="form-control mb-3"
	// 			/>
	// 		</div>
	// 	);
	// }

	return (
		<div>
			<h1>Renders: {renders.current}</h1>
			<h2>Prev name state: {prevName.current}</h2>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				className="form-control mb-3"
			/>
			<h2>Loading: {loading}</h2>
		</div>
	);
}

export default UseRefExample2;
