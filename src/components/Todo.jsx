import { useState, useEffect, useRef } from "react";

function Todo() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  // This seems to be fixed in new version of React so the trick with
  // useRef to avoid memory leak error when component unmounts during
  // async fetch is not needed

  // const isMounted = useRef(true);

  // useEffect(() => {
  // 	fetch("https://jsonplaceholder.typicode.com/todos/1")
  // 		.then((res) => res.json())
  // 		.then((data) => {
  // 			setTimeout(() => {
  // 				if (isMounted.current) {
  // 					setTodo(data);
  // 					setLoading(false);
  // 				}
  // 			}, 3000);
  // 		});
  // 	// Runs when component is unmounted
  // 	return () => {
  // 		isMounted.current = false;
  // 	};
  // }, [isMounted]);

  // Below code runs normal, with no errors and no useRef trick
  // when user unmounts this component

  useEffect(() => {
    console.log("robiem siem");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setTodo(data);
          setLoading(false);
        }, 3000);
      });
  });

  return loading ? <h3>Loading...</h3> : <h3>{todo.title}</h3>;
}

export default Todo;
