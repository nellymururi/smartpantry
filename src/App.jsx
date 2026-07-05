import Background from './components/Background';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Background />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <main>
          <Home />
        </main>
      </div>
    </>
  );
}

export default App;