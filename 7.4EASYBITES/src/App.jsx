import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atom'

function App() {
  return <RecoilRoot>
    <MainApp>
      
    </MainApp>
  </RecoilRoot>
}

function MainApp(){
  const networkNotificationCount=useRecoilValue(networkAtom)
  const jobNotificationCount=useRecoilValue(jobsAtom)
  const messaginNotificationCount=useRecoilValue(messagingAtom) 
  const NotificationCount=useRecoilValue(notificationAtom) 

  return (
    <>
      <div>
        <button>Home</button>
        <button>My network({networkNotificationCount>=100 ? "99+":networkNotificationCount})</button>
        <button>Jobs({jobNotificationCount})</button>
        <button>Messaging({messaginNotificationCount})</button>
        <button>Notificatoin({NotificationCount})</button>
        <ButtonUpdater></ButtonUpdater>
        
      </div>
    </>
  )
}

function ButtonUpdater(){
  const setmessaginNotificationCount=useSetRecoilState(messagingAtom) 
  return <button onClick={()=>{
    setmessaginNotificationCount(c=>c+1)
  }}>Me</button>
}

export default App
