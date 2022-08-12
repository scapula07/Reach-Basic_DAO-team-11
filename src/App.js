
import './index.css';
import {Routes,Route} from "react-router-dom"
import Polls from './pages/polls';
import GovernorPage from "./pages/governor"
import LayOut from './layout/layout';
import Voting from './pages/polls/voting';
import Passed from './pages/polls/passed';
import Rejected from './pages/polls/rejected';
import NewProposals from './pages/governor/newproposals';
import Proposal from './pages/proposal';
function App() {
  return (
    <div className="App">
        <LayOut>
         <Routes>
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
        </LayOut>
     
    </div>
  );
}

export default App;
