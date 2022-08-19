import "./index.css"
import ConnectAccount from '../../components/connectAccount'
import reachImg from "../../assests/logo.png"
import voteImg from "../../assests/vote1.jpg"
import team1 from  "../../assests/team1.jpg"
import team2 from  "../../assests/team2.jpeg"
import team3 from  "../../assests/team3.jpg"
import {MdEmail} from "react-icons/md"
import {AiFillGithub} from "react-icons/ai"
import {FaDiscord} from "react-icons/fa"
import { Link } from "react-router-dom"
const Home=()=>{
    return(
        <div className="home h-full text-white">
            <header className="home fixed flex px-20 justify-center w-full items-center justify-between py-4 ">
                <main>
                   <img src={reachImg} alt="" className="inline w-8 h-8" />
                </main>
                <main className="flex items-center space-x-8">
               <Link to="/"> <h5 className=""><span className="text-white text-sm">Home</span></h5></Link> 
               <Link to="/polls/voting"> <h5 className=""><span className="text-white text-sm">Polls</span></h5></Link> 
               <Link to="/governor/newproposal"> <h5 className=""><span className="text-white text-sm">Governor</span></h5></Link> 
               <Link to="/periods"> <h5 className=""><span className="text-white text-sm">Periods</span></h5></Link>  
                </main>
                
            </header>
            <main className="hero-main py-20 flex px-48 justify-center">
              <div className="w-3/4 flex justify-center items-center space-x-10">
                  <main className="w-1/2 flex justify-center">
                    <img src={voteImg} alt="" className="rounded-lg  h-96 w-full"/>

                  </main>

                  <main className="w-3/4 flex flex-col   h-96 px-8 py-28 space-y-3">
                      <h5 className="text-rose-700 text-sm font-bold flex ">RE<span><img src={reachImg} alt="" className="inline w-4 h-4" /></span>CH </h5>
                      <h5 className="text-6xl flex font-bold">Basic DAO</h5>
                      <p className="text-xs text-slate-600">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."}</p>

                      <main className="flex space-x-8">
                         <ConnectAccount />
                         <button className="px-3 py-0.5 bg-rose-900 rounded-full shadow text-sm hover:bg-black ">
                            <Link to="/governor/newproposal">Get Started</Link>
                         </button>
                      </main>
                  </main>

              </div>

            </main>
                 
                 <div className="about flex justify-center">
                    <main className="flex flex-col justify-center items-center">
                    <h5 className="font-bold text-lg text-rose-700">ABOUT</h5>
                    <p className="px-10 py-4 text-sm">
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    </p>
                    </main>
                 </div>

                  <div className="py-20 flex flex-col justify-center items-center">
                     <h5 className="font-bold text-lg text-rose-700">TEAM 11</h5>
                     <main className="flex w-full justify-center space-x-6 py-6 ">
                         <div className="h-72 w-1/4 team-color flex flex-col items-center py-4 rounded-md shadow-md gap-y-4">
                             <img src={team1}  alt="" className="h-24 w-24 rounded-full shadow-lg"/>
                             <h5 className="text-lg font-extrabold">{"Lorem ipsum"}</h5> 
                             <p className="text-sm font-light px-4 ">Stack:{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>

                             <main className="flex justify-center items-center space-x-4 ">
                                <MdEmail className="text-white text-lg" />
                                <AiFillGithub className="text-white text-lg"/>
                                <FaDiscord className="text-white text-lg"/>
                             </main>

                         </div>

                         <div className="h-72 w-1/4 bg-rose-900 flex flex-col items-center py-4 rounded-md shadow-md gap-y-4">
                         <img src={team2}  alt="" className="h-24 w-24 rounded-full shadow-lg"/>
                         <h5 className="text-lg font-extrabold">{"Lorem ipsum"}</h5> 
                         <p className="text-sm font-light px-4">Stack:{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>

                         <main className="flex justify-center items-center space-x-4 ">
                                <MdEmail className="text-white text-lg" />
                                <AiFillGithub className="text-white text-lg"/>
                                <FaDiscord className="text-white text-lg"/>
                             </main>
                         </div>

                         <div className="h-72 w-1/4 team-color flex flex-col items-center py-4 rounded-md shadow-md gap-y-4">
                         <img src={team3}  alt="" className="h-24 w-24 rounded-full shadow-lg"/>
                           <h5 className="text-lg font-extrabold">{"Lorem ipsum"}</h5> 

                           <p className="text-sm font-light px-4  ">Stack:{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>

                           <main className="flex justify-center items-center space-x-4 ">
                                <MdEmail className="text-white text-lg" />
                                <AiFillGithub className="text-white text-lg"/>
                                <FaDiscord className="text-white text-lg"/>
                             </main>
                         </div>
                     </main>
                  </div>

                 <div className="h-32 team-color">

                 </div>
       
                   
                
        </div>
    )
}
export default Home