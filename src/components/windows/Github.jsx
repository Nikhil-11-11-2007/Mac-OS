import MacWindow from './MacWindow'
import GithubData from "../../assets/github.json"
import "./github.scss"

const GitCard = ({data={id:1,image:"",title:"",description:"",tags:[],repoLink:"",demoLink:""}}) => {
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>
        <div className="tags">
            {data.tags.map((tag,idx) => <p key={idx} className='tag'>{tag}</p>)}
        </div>
        <div className="urls">
            <a target='_blank' href={data.repoLink}>Repository</a>
            <a target='_blank' href={data.demoLink}>Demo Link</a>
        </div>
    </div>
}

const Github = () => {
  return (
    <MacWindow>
        <div className="cards">
            {GithubData.map((project,idx) => {
                return <GitCard key={idx} data={project} />
            })}
        </div>
    </MacWindow>
  )
}

export default Github