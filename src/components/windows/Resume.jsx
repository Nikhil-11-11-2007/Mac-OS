import MacWindow from './MacWindow'
import "./fakeResume.scss"

const Resume = () => {
  return (
    <MacWindow>
        <div className="resume-window">
            <iframe src="/fakeResume.pdf" frameBorder="0"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume