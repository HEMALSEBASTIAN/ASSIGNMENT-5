import Nav_bar from '../nav_bar';
class Food extends React.Component
{
    render()
    {
        return(
            <>
                <div className="main-heading">
                    <span className="the">The</span>
                    <span className="siren">Siren</span>
                </div>
                <br></br>
                <Nav_bar />
                <div className="grid1">
                    {/* 1st image occupies two rows */}
                    <div style={{ backgroundImage: `url("https://lh3.googleusercontent.com/EXKW3K22jeGyTtIpCffKi-1I-qM62qX_hIbJFDHBu-8gNEUbIgdCrlibjAolqx7O6VrOfVXr1ZAaK2DFdGov151Qzg=w640-h400-e365-rj-sc0x00ffffff")` }} className="img11">
                        <div className="img11-adjust">
                            <p className="img11-title">Title of vertical gallery</p>
                            <p className="img11-sub">Travel/August 21 2017</p>
                        </div>
                        
                    </div>
                    <div style={{ backgroundImage: `url("https://eskipaper.com/images/mountain-lake-hd-1.jpg")` }} className="img12">
                        <div className="img12-adjust">
                            <p className="img12-title">Title of vertical gallery</p>
                            <p className="img12-sub">Travel/August 21 2017</p>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url("https://i.pinimg.com/originals/70/22/51/702251abed80340d3f4b7b9e99de9702.jpg")` }} className="img12">
                        <div className="img12-adjust">
                            <p className="img12-title">Title of vertical gallery</p>
                            <p className="img12-sub">Travel/August 21 2017</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Food;