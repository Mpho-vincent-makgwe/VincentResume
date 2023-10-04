import Repo from "@/app/components/components/Repo"
import Link from "next/link"

const Repository = ({params: {repo}}:any) => {
    return (
        <div>
            <Link legacyBehavior href={`/Projects`}className="rounded" >Back</Link>
            <Repo repo={repo}/>
        </div>
    )
}

export default Repository
