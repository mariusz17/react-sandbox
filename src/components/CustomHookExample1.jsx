import useFetch from "../hooks/useFetch";

function CustomHookExample1() {
  const res = useFetch("https://jsonplaceholder.typicode.com/posts", {});

  if (res.loading) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <div>
        {res.data.map((post) => (
          <h3 key={post.id}>{post.title}</h3>
        ))}
      </div>
    );
  }
}

export default CustomHookExample1;
