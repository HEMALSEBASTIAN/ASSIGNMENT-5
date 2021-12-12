
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
class Technology extends React.Component
{
    render()
    {
        return(
            <>
                <div>
                    <div className="Tech_aside_top">
                        <button type="button" class="btn btn-outline-success mb-2 mt-3">Get Started</button>
                    </div>
                    <div className="mb-3" style={{ marginLeft:"14.5vw"}}>
                        <span className="the" style={{ fontSize:19}} >The</span>
                        <span className="siren" style={{ fontSize:44, display:'inline-block'}}>Siren</span>
                    </div>
                        
                    
                    <hr style={{ height:5, color:"grey"}}></hr>
                    
                    
                    <div className="Tech_head">
                        
                        <div className="Tech_head1">5 Ways to animate a React app.</div>
                        <div className="Tech_bar" >
                            <div className="card border-0 w-75">
                                <div className="row gx-1">
                                    <div className="col-md-3">
                                        <img src={'/../6.png'} className="img-fluid rounded-start"></img>
                                    </div>
                                    <div className="col-md-7 ">
                                        <div className="card-body">
                                            <div className="card-title">Dmitry Nozhenko</div>
                                            <small className="text-muted" style={{color: '#A2A2A2', opacity: 1}}>Jan 28, 2019 · 10 min read</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative" style={{ top:"6vh"}}>
                                <FontAwesomeIcon icon={faFacebook} style={{ color:"grey" ,marginRight:5}}/>
                                <FontAwesomeIcon icon={faTwitter} style={{ color:"grey" ,marginRight:5}}/>
                                <FontAwesomeIcon icon={faInstagram} style={{ color:"grey" ,marginRight:5}}/>
                                <FontAwesomeIcon icon={faYoutube} style={{ color:"grey" ,marginRight:5}}/>
                            </div>
                        </div>
                    </div>

                    <div className="Tech_aside " style={{ position:'sticky', top:350}}>
                            <img src={'/../9.png'} style={{ marginRight:20 }}></img>
                            <small className="text-muted" style={{color: '#A2A2A2', opacity: 1}}>9.3K</small>
                            <br></br>
                            <br></br>
                            <img src={'/../11.png'} style={{ marginRight:20 }}></img>
                            <small className="text-muted" style={{color: '#A2A2A2', opacity: 1}}>Share this article</small>
                            
                    </div>
                    <img src={'/../8.png'} style={{width:"34vw"}}></img>
                    <br></br>
                    <br></br>
                    <div className="Tech_head">
                        Animation in ReactJs app is a popular topic and there are many ways to 
                        create different types of animations.Many developers create animation exclusively 
                        using css and adding classes to HTML tags. This is a great way and you should use 
                        it. If you want to create complex animations you can pay attention to GreenSock. 
                        GreenSock is the most powerful animation platform. There are also a lot of libraries, 
                        components for creating animation in React. Let’s talk about them
                        <img src={'/../13.png'}></img>
                        <div style={{color: '#A2A2A2', opacity: 1, marginTop:30}}>
                            <button type="button" className="btn btn-light me-2">React</button>
                            <button type="button" className="btn btn-light me-2">Javascript</button>
                            <button type="button" className="btn btn-light me-2">Animation</button>
                        </div>
                        <div style={{ marginTop:30 }}>
                            <img src={'/../9.png'}></img>
                            <small className="text-muted" style={{color: '#A2A2A2', opacity: 1}}>9.3K</small>  
                            <hr></hr>
                            <div className="card border-0 w-75">
                                <div className="row gx-1">
                                    <div className="col-md-3">
                                        <img src={'/../6.png'} className="img-fluid rounded-start"></img>
                                    </div>
                                    <div className="col-md-7 ">
                                        <div className="card-body">
                                            <small className="text-muted" style={{color: '#A2A2A2', opacity: 1}}>WRITTEN BY</small>
                                            <div className="card-title">Dmitry Nozhenko</div>
                                            <small className="text-muted" style={{color: '#A2A2A2', opacity: 1}}>Jan 28, 2019 · 10 min read</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    </div>
                </div>  





            <div style={{ backgroundColor:'#FAFAFA' }}>
                <br></br>
                <div className="latest" style={{ fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>More From The Siren</div>
                <hr className="line1"></hr>
                <div className="nav_bar">
                    <a href="Bollywood" class="card my-card border-0" style={{ textDecoration:'none' ,backgroundColor:'#FAFAFA'}}>
                        <small className="card-header" style={{ backgroundColor:'#FAFAFA', color:'#A2A2A2'}}>Also tagged Reactjs</small>
                        <img src={'/../2.jpg'} className="card-img-top "></img>
                        <div className="card-body">
                            <div className="card border-0 w-75"  style={{ backgroundColor:'#FAFAFA' }}>
                                    <div className="row gx-1">
                                        <div className="col-md-3">
                                            <img src={'/../6.png'} className="img-fluid rounded-start"></img>
                                        </div>
                                        <div className="col-md-7 ">
                                            <div className="card-body">
                                                <div className="card-title">Dmitry Nozhenko</div>
                                                <small className="text-muted" style={{color: '#A2A2A2', opacity: 1}}>Aug 10 · 4 min read</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </a>


                    <a href="Bollywood" class="card my-card border-0" style={{ textDecoration:'none' ,backgroundColor:'#FAFAFA'}}>
                        <small className="card-header" style={{ backgroundColor:'#FAFAFA', color:'#A2A2A2'}}>Related reads</small>
                        <img src={'/../2.jpg'} className="card-img-top "></img>
                        <div className="card-body">
                            <div className="card border-0 w-75"  style={{ backgroundColor:'#FAFAFA' }}>
                                    <div className="row gx-1">
                                        <div className="col-md-3">
                                            <img src={'/../6.png'} className="img-fluid rounded-start"></img>
                                        </div>
                                        <div className="col-md-7 ">
                                            <div className="card-body">
                                                <div className="card-title">Dmitry Nozhenko</div>
                                                <small className="text-muted" style={{color: '#A2A2A2', opacity: 1}}>Aug 10 · 4 min read</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </a>


                    <a href="Bollywood" class="card my-card border-0" style={{ textDecoration:'none' ,backgroundColor:'#FAFAFA'}}>
                        <small className="card-header" style={{ backgroundColor:'#FAFAFA', color:'#A2A2A2'}}>Related reads</small>
                        <img src={'/../2.jpg'} className="card-img-top "></img>
                        <div className="card-body">
                            <div className="card border-0 w-75"  style={{ backgroundColor:'#FAFAFA' }}>
                                    <div className="row gx-1">
                                        <div className="col-md-3">
                                            <img src={'/../6.png'} className="img-fluid rounded-start"></img>
                                        </div>
                                        <div className="col-md-7 ">
                                            <div className="card-body">
                                                <div className="card-title">Dmitry Nozhenko</div>
                                                <small className="text-muted" style={{color: '#A2A2A2', opacity: 1}}>Aug 10 · 4 min read</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </a>









                    
                </div>
            </div> 
                
                
                
            </>
        )
    }
}
export default Technology;