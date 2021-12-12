import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Bollywood from './tabs/bollywood';
import Hollywood from './tabs/hollywood'
import Technology from './tabs/technology'
import Food from './tabs/food'
import Fitness from './tabs/fitness'
import Home from './tabs/home'
class App1 extends React.Component
{
    render()
    {
        return(
            <>
                <BrowserRouter>
                <Routes>
                    <Route exact path="/Bollywood" element={<Bollywood />} />
                    <Route exact path="/Hollywood" element={<Hollywood />} />
                    <Route exact path="/Technology" element={<Technology />} />
                    <Route exact path="/Food" element={<Food />} />
                    <Route exact path="/Fitness" element={<Fitness />} />
                    <Route exact path="/" element={<Home />} />
                </Routes>
                </BrowserRouter>
                
            </>
        )

    }
}
export default App1;