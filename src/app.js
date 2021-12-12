import { io } from "socket.io-client";
import axios from "axios"
class App extends React.Component
{
    state={
        list:[],
        list1:[]
    }
    constructor()
    {
        super();
        this.socket=io("http://localhost:3000");
        this.socket.on("SUCCESSFUL_CONNECTION",(data)=>{
            console.log(data)
        })
        this.socket.on("DATA_SEND",(data)=>{
            this.setState({
                list1:data
            })
            // data.map((item)=>(
            //     console.log(item.title)
            // ))
            // console.log(data)
        })
    }
    handleClick=()=>{
        this.socket.emit("MESSAGE",'Requesting to send data');
    }    
    
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            this.setState({
                list:res.data
            })
        })
        .catch((error)=>console.log(error))
        console.log("Fetching data")
    }
    render()
    {
        return(
            <>
                <h1>Webpack</h1>
                <ul>
                    {this.state.list1.map((item)=>(
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
                <button onClick={this.handleClick}>Click for new data</button>
            </>
        )
    }
}
export default App