import { useCounterStore } from "./store/couter";
import usePostStore from "./store/postStore";


function App() {
  const { count, increment, decrement, plus5, minus5, reset } = useCounterStore();


  const { posts, loading, error, fetchPosts, clearPosts } = usePostStore();

  return (
    <>
     <div>
       
      <h3>Zustand </h3>

      <div className="card ">
        <button onClick={increment}>
          <h1>count is {count}</h1>
        </button>
      </div>

      <div className="flex gap-4 mt-10 p-5">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={plus5}>Plus 5</button>
        <button onClick={minus5}>Minus 5</button>
        <button onClick={reset}>Reset</button>
      </div>
     </div>

     <div>
       <div style={{ padding: 20 }}>
      <h1>Posts</h1>

      <button onClick={fetchPosts}>Fetch Posts</button>
      <button onClick={clearPosts} style={{ marginLeft: 10 }}>
        Clear
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
     </div>
    </>
  );
}

export default App;

