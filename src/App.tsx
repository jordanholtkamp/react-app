import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let buttonText = "Silly button boy";
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        {buttonText}
      </Button>
    </div>
  );
}

export default App;
