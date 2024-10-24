import "./App.css";
import Main from "./pages/Main";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </>
  );
}

export default App;
