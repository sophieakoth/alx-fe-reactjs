





import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import { UserContext } from './components/UserContext.jsx';

function App() {

  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <>
      <Header />
      <MainContent />

      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    <UserContext.Provider value={userData}>
    <ProfilePage userData={userData}/>

    </UserContext.Provider>
      
      
      
      
      <Footer />
    </>
  );
}

export default App;
