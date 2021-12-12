import { NavLink } from "react-router-dom";

class Nav_bar extends React.Component
{
    render()
    {
        return(
            <>
                <div className="nav_bar">
                    <div >
                        <NavLink className="nav_bar_items" style={({ isActive })=>({ color : isActive ? 'grey' : 'black'})} to="/">Home</NavLink>
                    </div>
                    <div >
                        <NavLink className="nav_bar_items" style={({ isActive })=>({ color : isActive ? 'grey' : 'black'})} to="/Bollywood">Bollywood</NavLink>
                    </div>
                    <div >
                        <NavLink className="nav_bar_items" style={({ isActive })=>({ color : isActive ? 'grey' : 'black'})} to="/Technology">Technology</NavLink>
                    </div>
                    <div >
                        <NavLink className="nav_bar_items" style={({ isActive })=>({ color : isActive ? 'grey' : 'black'})} to="/Hollywood">Hollywood</NavLink>
                    </div>
                    <div >
                        <NavLink className="nav_bar_items" style={({ isActive })=>({ color : isActive ? 'grey' : 'black'})} to="/Fitness">Fitness</NavLink>
                    </div>
                    <div >
                        <NavLink className="nav_bar_items" style={({ isActive })=>({ color : isActive ? 'grey' : 'black'})} to="/Food">Food</NavLink>
                    </div>
                </div>
                <hr className="line1"></hr>
            </>
        )
    }
}
export default Nav_bar;