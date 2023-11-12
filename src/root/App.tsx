
//import styles from "./App.module.css";
import TextInput from "src/component/ui/text-input/TextInput";
import Button from "src/component/ui/button/Button";

function App() {

  return (
    <div>
      <TextInput showError={true} fullWidth={false} fontawesomeIcon="as" errorMessage="error"/>
      <Button>CLick me</Button>
    </div>
  )
}

export default App;
