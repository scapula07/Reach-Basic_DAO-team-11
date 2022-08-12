import { Link,Outlet } from "react-router-dom"
const Polls=()=>{
    return(
        <div className="polls text-white">
            <div className="filters flex pt-10 px-20">
                <div className="flex  w-full justify-between items-center">
                  <h5 className="w-1/4 text-4xl">Governance</h5>
              <main className="flex w-3/4 justify-end space-x-10 items-center">
                <Link to="voting"><h5 className="text-sm ">Voting</h5></Link>
               <Link to="passed"> <h5 className="text-sm">Passed</h5></Link>
              <Link to="rejected"><h5 className="text-sm">Rejected</h5></Link>  
              </main>
              </div>
           
            </div>

            <div className="outlet-section px-20 pt-10 ">
               <Outlet />
                
            </div>
            

        </div>
    )
}

export default Polls