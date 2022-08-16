import { Link,Outlet } from "react-router-dom"
import LayOut from "../../layout/layout"
const GovernorPage=()=>{
    return(
        <LayOut>
        <div className="polls text-white">
            <div className="filters flex pt-10 px-20">
                <div className="flex  w-full justify-between items-center">
                  <h5 className="w-1/4 text-4xl">Governance</h5>
              <main className="flex w-3/4 justify-end space-x-10 items-center">
                <Link to="newproposal"><h5 className="text-sm text-black bg-white hover:text-white hover:bg-rose-900 rounded-full py-0.5 px-3">New proposal</h5></Link>
                <Link to="yourproposal"> <h5 className="text-sm">Your proposal</h5></Link>
               <Link to="passed"> <h5 className="text-sm">Passed</h5></Link>
              <Link to="rejected"><h5 className="text-sm">Rejected</h5></Link>  
              </main>
              </div>
           
            </div>

            <div className="outlet-section px-20 pt-10 ">
               <Outlet />
                
            </div>
            

        </div>
        </LayOut>
    )
}

export default GovernorPage