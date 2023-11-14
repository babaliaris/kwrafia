
//import styles from "./App.module.css";
import TopMenu from "src/component/top-menu/TopMenu";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div>
      <TopMenu/>
      <Outlet/>
    </div>
  )
}

export default App;
