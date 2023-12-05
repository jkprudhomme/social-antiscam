import "./App.css"


function SocialButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}



function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <SocialButton title = "Facebook"/>
    </div>
  );
}

export default App;