
// import './App.css'
// import Header from './component/Header'
// import ProfileCard from './component/ProfileCard'
// import Stats from './component/Stats'
// import QRCode from './component/QRCode'
// import Tabs from './component/Tabs'
// import About from './component/About'
// import Actions from './component/Actions'
// import ContactOptions from './component/ContactOptions'
// import TabsSection from './component/Tabs'

// function App() {

//   return (
    
//     <div className="app">
//       <Header/>
//       <ProfileCard/>
//       <Stats/>
//       <Actions/>
//       <QRCode/>
//       <ContactOptions/>
//       <TabsSection/>
      
//   </div>
//   )
// }

// export default App

import './App.css'
import Header from './component/Header'
import ProfileCard from './component/ProfileCard'
import Stats from './component/Stats'
import QRCode from './component/QRCode'
import Tabs from './component/Tabs'
import About from './component/About'
import Actions from './component/Actions'
import ContactOptions from './component/ContactOptions'
import TabsSection from './component/Tabs'
import { useState } from 'react'
function App() {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    
    <div className="app">
      <Header/>
      <ProfileCard isFollowed={isFollowed} setIsFollowed={setIsFollowed} />   
      <Stats/>
      <Actions isFollowed={isFollowed} />
      <QRCode/>
      <ContactOptions/>
      <TabsSection/>
      
  </div>
  )
}

export default App