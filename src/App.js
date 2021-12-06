import axios from "axios";
import { useEffect, useState } from "react";
import ContextProvider from "./contexts/GlobalContext";
import Home from "./pages/Home";

function App() {
  const [posts,setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(data);
        console.log(data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []);

  return (
    <ContextProvider value={{posts,setPosts}}>
      <Home />
    </ContextProvider>
  );
}

export default App;
