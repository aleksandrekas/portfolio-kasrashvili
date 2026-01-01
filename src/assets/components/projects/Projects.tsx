import './projects.css'



export default function Projects(){
    return(
        <div className="projectsContainer">
            <header className='projectsHeader'>
                <h1>Projects</h1>
                <button>CONTACT ME</button>
            </header>
            <div className="projects">
                <Project
                    img='/images/thumbnail-project-2-small.webp'
                    title='just a regular '
                    tools={['HTML','CSS']}
                />
                <Project
                    img='/images/thumbnail-project-2-small.webp'
                    title='just a regular everyday'
                    tools={['HTML','CSS']}
                />
            </div>
        </div>
    )
}






function Project({img,title,tools}:{img:string,title:string,tools:Array<string>}){
    return(
        <div className='project'>
            <div className='imgContainer'>
                <img className='projectImage' src={img} alt="project_screenshot" />
                <div className="buttons">
                    <a href="http://" target='_blank'>VIEW PROJECT</a>
                    <a href="http://" target='_blank'>VIEW CODE</a>
                </div>
            </div>
            <p className='projectTitle'>{title}</p>
            <div className='tools'>
                {
                    tools.map((item,index)=>(
                        <div key={index}>{item}</div>
                    ))
                }    
            </div>
        </div>
    )
}

