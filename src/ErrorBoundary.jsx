import React from 'react'
import {Link} from 'react-router-dom'


class ErrorBoundary extends React.Component {
    state = {hasError: false};


    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, info) {
        console.log("Error, error")
        console.log("Error Info:", info)
    }

    render() {
        if (this.state.hasError) {
            return <div>
             <Link to="/">
                <p className="link-homer">Already at home</p>
            </Link>,{
                this.state.hasError ?
                ( 
                <video className="error"
                        controls
                        autoPlay
                        loop
                        preload 
                        width ='100%'>
                    <source src='./src/assets/error.mp4'
                    type='video/mp4'
                /></video>) :
                (<div></div>)
                } 
            </div>
        }
        return this.props.children
    }
}

export default ErrorBoundary