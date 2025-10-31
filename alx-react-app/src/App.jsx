
import Header from './Header.jsx'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'
import UserProfile from './components/UserProfile.jsx'


function App() {
  

  return (
    <>
        <Header/>
        <WelcomeMessage /> 
       <MainContent/>
      
       <UserProfile   name="Alice" age="25" bio="Loves hiking and photography"/>
       <Footer/>
      
    </>
  )
}

export default App
