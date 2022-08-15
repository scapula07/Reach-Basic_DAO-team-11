import SideBar from "../components/sidebar"
import "./layout.css"
import Header from "../components/header"
const LayOut=({children})=>{
  return(
    <div className="flex flex-row layout">
        <div className="w-1/6 h-full bg-rose-500" >
          <SideBar />
        </div>
        <div className="page w-10/12 overflow-hidden">
         <Header />
        {children}
        </div>
       
    </div>
  )
}

export default LayOut