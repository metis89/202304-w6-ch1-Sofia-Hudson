import { Keyboard } from "./keyboard";
import { Actions } from "./actions";
import { Info } from "./info";

function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}

export default App;
