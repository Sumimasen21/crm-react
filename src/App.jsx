import { AppProvider } from "./providers/AppProvider";

function App({ children }) {
  return <AppProvider>{children}</AppProvider>;
}

export default App;
