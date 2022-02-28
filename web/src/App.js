
import './App.css';

let num = 1

const callInfoAPI = async () => {
  let result = num++
  console.log(result.data)
}


function App() {
  return (
    <div>
      <h1>num</h1>
      <button onClick={callInfoAPI}>int</button>
    </div>
  );
}

export default App;
