import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav_bar from '../nav_bar';
class Home extends React.Component
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
                {/* starting image grid */}
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
                









                {/* horizontal cards */}
                <div className="latest">The Latest</div>
                <hr className="line2" style={{ height:2, marginTop:0 }}></hr>
                <div className="nav_bar">
                    <a href="Bollywood" class="card my-card" style={{ textDecoration:'none'}}>
                        <img src={'/../2.jpg'} className="card-img-top "></img>
                        <div className="card-body" style={{ backgroundColor : '#F8F8FF'}}>
                            <h4 className="card-title my-card-title">Joshua Tree Overnight Adventure</h4>
                            <p className="card-text" style={{ color:'black'}}>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                        </div>
                        <div className="card-footer" style={{ backgroundColor : '#F8F8FF' ,borderTop:0}}>
                            <span style={{ color:'black'}}>Travel <span style={{color: '#404040', opacity: 0.24}}>/ August 21 2017</span></span>
                        </div>
                    </a>
                    <a href="Technology" class="card my-card" style={{ textDecoration:'none'}}>
                        <img src={'/../2.jpg'} className="card-img-top "></img>
                        <div className="card-body" style={{ backgroundColor : '#F8F8FF'}}>
                            <h4 className="card-title my-card-title">Joshua Tree Overnight Adventure</h4>
                            <p className="card-text" style={{ color:'black'}}>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                        </div>
                        <div className="card-footer" style={{ backgroundColor : '#F8F8FF' ,borderTop:0}}>
                            <span style={{ color:'black'}}>Travel <span style={{color: '#404040', opacity: 0.24}}>/ August 21 2017</span></span>
                        </div>
                    </a>
                    <a href="Hollywood" class="card my-card" style={{ textDecoration:'none'}}>
                        <img src={'/../2.jpg'} className="card-img-top "></img>
                        <div className="card-body" style={{ backgroundColor : '#F8F8FF'}}>
                            <h4 className="card-title my-card-title">Joshua Tree Overnight Adventure</h4>
                            <p className="card-text" style={{ color:'black'}}>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                        </div>
                        <div className="card-footer" style={{ backgroundColor : '#F8F8FF' ,borderTop:0}}>
                            <span style={{ color:'black'}}>Travel <span style={{color: '#404040', opacity: 0.24}}>/ August 21 2017</span></span>
                        </div>
                    </a>
                </div>



                
                
                
                
                <div className="latest">Latest Articles</div>
                <hr className="line2" style={{ height:2, marginTop:0 }}></hr>
                {/* aside of latest articles */}
                <div className="aside1">
                    <div className="aside_top"><div style={{ position:'relative', top:240}}>Advertistement</div></div>
                    <div className="latest" style={{ marginLeft: 0}}>Top Posts</div>
                    <hr className="line2" style={{ height:2, marginLeft: 0, marginTop:10 }}></hr>
                    <div className="card border-0" >
                        <img src={'/../5.jpg' } className="card-img-top"></img>
                        <div className="card-body" style={{ paddingLeft:0, paddingBottom:0 }}>
                            <div className="right1">1</div>
                            <div className="card-title my-card-title"> 
                                Catch waves with an adventure guide
                            </div>
                        </div>
                        <small className="text-muted">Travel <span style={{color: '#404040', opacity: 0.24}}>/ August 21 2017</span></small>
                    </div>
                    <hr></hr>
                    <div className="card mb-3 aside_card border-0"  >
                        <div className="row no-gutters">
                            
                            <div className="col-md-5">
                            <img src={'/../2.jpg'} className="img-fluid rounded-start" ></img>
                            </div>
                            <div className="col-md-5">
                                
                                <div className="card-body" style={{ padding:0}}>
                                    <div className="right2">2</div>
                                    <h5 className="card-title my-card-title1" style={{ fontSize:18}}>Catch waves with an adventure guide</h5>
                                </div>
                            </div>
                            
                            <small className="text-muted">Travel <span style={{color: '#404040', opacity: 0.24}}>/ August 21 2017</span></small>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="card mb-3 aside_card border-0"  >
                        
                        <div className="row no-gutters">
                            
                            <div className="col-md-5">
                            <img src={'/../2.jpg'} className="img-fluid rounded-start" ></img>
                            </div>
                            <div className="col-md-5">
                                
                                <div className="card-body" style={{ padding:0}}>
                                    <div className="right2">3</div>
                                    <h5 className="card-title my-card-title1" style={{ fontSize:18}}>Catch waves with an adventure guide</h5>
                                </div>
                            </div>
                            
                            <small className="text-muted">Travel <span style={{color: '#404040', opacity: 0.24}}>/ August 21 2017</span></small>
                        </div>
                    </div>
                </div>
                
                
                
                
                
                
                <div className="margin">
                    <hr style={{ width:900}}></hr>
                    <div className="card mb-3 border-0" style={{ width:900}} >
                        <div className="row no-gutters">
                            <div className="col-md-5">
                            <img src={'/../2.jpg'} className="img-fluid rounded-start" ></img>
                            </div>
                            <div className="col-md-5">
                                <div className="card-body">
                                    <h5 className="card-title my-card-title">Catch waves with an adventure guide</h5>
                                    <p className="card-text">Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-</p>
                                    <small className="text-muted">Travel <span style={{color: '#404040', opacity: 0.24}}>/ August 21 2017</span></small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr style={{ width:900}}></hr>
                    <div className="card mb-3 border-0" style={{ width:900}} >
                        <div className="row no-gutters">
                            <div className="col-md-5">
                            <img src={'/../2.jpg'} className="img-fluid rounded-start" ></img>
                            </div>
                            <div className="col-md-5">
                                <div className="card-body">
                                    <h5 className="card-title my-card-title">Catch waves with an adventure guide</h5>
                                    <p className="card-text">Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-</p>
                                    <small className="text-muted">Travel <span style={{color: '#404040', opacity: 0.24}}>/ August 21 2017</span></small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr style={{ width:900}}></hr>
                    <div className="card mb-3 border-0" style={{ width:900}} >
                        <div className="row no-gutters">
                            <div className="col-md-5">
                            <img src={'/../2.jpg'} className="img-fluid rounded-start" ></img>
                            </div>
                            <div className="col-md-5">
                                <div className="card-body">
                                    <h5 className="card-title my-card-title">Catch waves with an adventure guide</h5>
                                    <p className="card-text">Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-</p>
                                    <small className="text-muted">Travel <span style={{color: '#404040', opacity: 0.24}}>/ August 21 2017</span></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ color: '#A2A2A2' , marginLeft:'40%'}}><FontAwesomeIcon icon={faLongArrowAltDown} style={{ color:"black"}}/>LOAD MORE</div>

                    <div className="card" style={{ width : 900}}>
                        <img src={'./../4.jpg'} className="card-img" style={{ width: 900,padding:0}}></img>
                        <div className="card-img-overlay img11-title position-absolute top-50 start-50 translate-middle" style={{ height:'fit-content'}}>Title of vertical gallery</div>
                    </div>
                </div>
                
                
                
                
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="latest">Latest Stories </div>
                <hr className="line2" style={{ height:2, marginTop:0 }}></hr>
                <hr className="line1"></hr>
                
                
                {/* bottom flex-cards */}
                <div className="nav_bar">  
                    <div className="card my-card border-top-0 border-start-0 border-bottom-0">
                        <div className="card-body" >
                            <h4 className="card-title my-card-title">Catch waves with an adventure guide</h4>
                            <p className="card-text">Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                            <small className="text-muted">TECH <span style={{color: '#404040', opacity: 0.24}}>/ TODAY AT 11:54</span></small>
                        </div>
                    </div>

                    <div className="card my-card border-top-0 border-start-0 border-bottom-0">
                        <div className="card-body" >
                            <h4 className="card-title my-card-title">Catch waves with an adventure guide</h4>
                            <p className="card-text">Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                            <small className="text-muted">TECH <span style={{color: '#404040', opacity: 0.24}}>/ TODAY AT 11:54</span></small>
                        </div>
                    </div>

                    <div className="card my-card border-top-0 border-start-0 border-bottom-0">
                        <div className="card-body" >
                            <h4 className="card-title my-card-title">Catch waves with an adventure guide</h4>
                            <p className="card-text">Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                            <small className="text-muted">TECH <span style={{color: '#404040', opacity: 0.24}}>/ TODAY AT 11:54</span></small>
                        </div>
                    </div>
                </div>
                    
                <hr className="line1"></hr>
                
                <div style={{ color: '#A2A2A2' , marginLeft:'14.5vw'}}><FontAwesomeIcon icon={faLongArrowAltRight} style={{ color:"black"}}/>VIEW MORE</div>
                
                
            </>
        )
    }
}
export default Home