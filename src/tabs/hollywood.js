import Nav_bar from '../nav_bar';
class Hollywood extends React.Component
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
                <div className='aside1'>
                    <div className="latest" style={{ marginLeft: 0, marginTop:0}}>Top Posts</div>
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
                    <div className="aside_top"><div style={{ position:'relative', top:240}}>Advertistement</div></div>
                </div>
                <div className="latest">Hollywood</div>
                <hr className="line2" style={{ height:2, marginTop:0 }}></hr>
                {/* aside of latest articles */}
                
                
                
                
                
                
                
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
                </div>
                
            </>
        )
    }
}
export default Hollywood;