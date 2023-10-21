import {Link} from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundary'
import ErrorTester from "../ErrorTester";


export default function Root() {

    return (
      < div className='root'>
        <h1 className='top'>Your World of Numeric values Awaits</h1>
        <h3 className='bunch'>
            We're so glad you're here!.
            We are thrilled to have you here.

            Whether you are a first time visitor or a returning friend, <br/>we are excited to share our world with you. Our website is a treasure trove of interesting count content.<br/>
            Explore at your leisure and see what we have to offer.<br/> Everyone can find something here. We've always got something for you because you're the goal.<br/>
            PLease let us know if you have any recommendations,<br/> remarks, or thoughts for how we may do better. Your advice is very important to us.<br/>
            Thanks for visiting!<br/>

            Happy Browsing! 
        </h3>
        
        
        <h3  className='tag'>Let's go!</h3><Link  className='link-homes' to='counter'>counter app</Link>
        
        <ErrorBoundary>
           <ErrorTester />
      </ErrorBoundary>
     
     </div>
    )
}