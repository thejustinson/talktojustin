import {Route, Routes} from 'react-router-dom'

import Forms from "./components/routes/Forms/Forms";

const App = () => {
  return ( 
    <Routes>
        <Route path={'/login'} element={<Forms type="login"/>}/>
        <Route path={'/signup'} element={<Forms type="signup"/>}/>
    </Routes>
   );
}
 
export default App;