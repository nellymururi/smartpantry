import Background from './components/Background';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Background />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <main>
          <Home />
        </main>
         <Footer />
      </div>
    </>
  );
}

export default App;