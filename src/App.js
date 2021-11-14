import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_USER } from "./components/GetUser";
import UserInfo from "./components/UserInfo";
import UserStats from "./components/UserStats";

function App() {
  const { loading, error } = useQuery(GET_USER);
  if (error) return <h1>{error}</h1>;
  if (loading)
    return (
      <div className="App">
        <h2>Chargement des donneés</h2> <br />
        <div className="lds-heart">
          <div></div>
        </div>{" "}
      </div>
    );

  return (
    <div>
      <UserInfo />
      <UserStats />
    </div>
  );
}

export default App;
