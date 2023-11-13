
//import styles from "./App.module.css";
import TextInput from "src/component/ui/text-input/TextInput";
import Button from "src/component/ui/button/Button";
import TopMenu from "src/component/top-menu/TopMenu";

function App() {

  return (
    <div>
      <TopMenu/>
      <TextInput showError={true} fullWidth={false} fontawesomeIcon="as" errorMessage="error"/>
      <Button>CLick me</Button>
    </div>
  )
}

export default App;
