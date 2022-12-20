import repositories from "../public/data/repositories";

export default function Repositories(){
    return (
        <div className="repositories">
            {repositories.map((repo,i)=><div key={i} className="repo">
                {repo.name}
            </div>)}
        </div>
    )
}