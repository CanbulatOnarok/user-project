import Navi from "./components/Navi"

import UsersList from "./components/UsersList"
import '../src/style/App.css';

// http://localhost:3005/data



function App() {
  return (
    <div className="app-container">
     <Navi />
     <UsersList/>
    </div>
  );
}

export default App;
