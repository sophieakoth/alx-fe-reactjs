





import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile.jsx';
import Counter from './components/Counter.jsx';

function App() {
  return (
    <>
      <Header />
      <Counter/>
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </>
  );
}

export default App;
