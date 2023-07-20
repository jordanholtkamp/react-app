import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from 'react-icons/bs'
import Button from "./components/Button/Button";
import Like from './components/Like/Like';

function App() {
  let buttonText = "Silly button boy";

  let items = ['Paris', 'London', 'New York', 'Los Angeles', 'Tokyo'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  //const [alertVisible, setAlertVisibility] = useState(false);
  return (
    // <div>
    //   <Button onClick={() => {}}>My Button</Button>
    // </div>

    <div>
      <Like onClick={() => console.log('clicked like')}/>
    </div>

    //<div>
      //<BsFillCalendarFill size='40' color='aqua' />
    //</div>
  );
}

export default App;
