import Router from "./components/router/router";
import Header from "./components/header/header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
};

export default App;
