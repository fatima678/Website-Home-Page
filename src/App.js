import './App.css';
import Background from '../components/Background';

function App() {
  let heroData =[
    {text1:"Drive into", text2: "What you love"},
    {text1:"Indulge", text2: "Your Passion"},
    {text1:"Give in to", text2: " your  passions"},
  ]
  const [heroCount, setheroCount] = useState(2);
  const [playStatus, setplayStatus] = useState(false);
  return (
    <div>
     
     <Background playStatus={playStatus} heroCount={heroCount}/>
    </div>
  );
}

export default App;
