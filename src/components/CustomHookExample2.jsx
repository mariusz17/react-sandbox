import useLocalStorage from "../hooks/useLocalStorage";

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, taskObj]);
  };

  return (
    <form onSubmit={onSubmit} className="w-50" action="">
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Task
        </label>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CustomHookExample2;
