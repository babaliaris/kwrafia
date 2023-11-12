
//import styles from "./App.module.css";
import TextInput from "src/component/ui/text-input/TextInput"

function App() {

  return (
    <div>
      <TextInput showError={true} fullWidth={false} fontawesomeIcon="as" errorMessage="error"/>
    </div>
  )
}

export default App
