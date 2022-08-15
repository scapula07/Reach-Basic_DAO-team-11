
import './index.css';
import {Routes,Route} from "react-router-dom"
import Polls from './pages/polls';
import GovernorPage from "./pages/governor"
import Voting from './pages/polls/voting';
import Passed from './pages/polls/passed';
import Rejected from './pages/polls/rejected';
import NewProposals from './pages/governor/newproposals';
import Proposal from './pages/proposal';
import Home from './pages/home';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './reach-app/build/index.main.mjs'


const reach = loadStdlib('ALGO');
function App() {
  return (
    <div className="App">
        
        
         <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route  exact path="/polls"  element={< Polls />} >
            <Route  exact path="voting"  element={< Voting />} />
            <Route  exact path="passed"  element={< Passed />} />
            <Route  exact path="rejected"  element={< Rejected/>} />
            </Route>
            <Route  exact path="/governor"  element={< GovernorPage />} >
            <Route  exact path="newproposal"  element={< NewProposals/>} />
            <Route  exact path="passed"  element={< Passed />} />
            <Route  exact path="rejected"  element={< Rejected/>} />
            </Route>
            <Route  exact path="proposal/:id"  element={< Proposal/>} />
           
         </Routes>
       
     
    </div>
  );
}

export default App;
