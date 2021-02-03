import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreens from './screens/HomeScreens';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <main>
          <h1>welcome to proshop</h1>
          <HomeScreens />
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
