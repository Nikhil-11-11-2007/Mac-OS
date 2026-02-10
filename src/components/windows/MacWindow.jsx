import { Rnd } from "react-rnd"
import "./window.scss"
const MacWindow = ({ children, height = "50vh", width = "35vw" }) => {
    return (
        <Rnd default={{
            height: height,
            width: width,
            x: 300,
            y: 200
        }}>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title"><p>nikhilgupta - zsh</p></div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow