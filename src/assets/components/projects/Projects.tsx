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
                    link='https://aleksandrekas.github.io/blog-preview-card/'
                    code='https://github.com/aleksandrekas/blog-preview-card'
                />
                <Project
                    img='/images/thumbnail-project-2-small.webp'
                    title='just a regular everyday'
                    tools={['HTML','CSS']}
                    link='https://aleksandrekas.github.io/blog-preview-card/'
                    code='https://github.com/aleksandrekas/blog-preview-card'
                />
                <Project
                    img='/images/thumbnail-project-2-small.webp'
                    title='just a regular everyday'
                    tools={['HTML','CSS']}
                    link='https://aleksandrekas.github.io/blog-preview-card/'
                    code='https://github.com/aleksandrekas/blog-preview-card'
                />
                <Project
                    img='/images/thumbnail-project-2-small.webp'
                    title='just a regular everyday'
                    tools={['HTML','CSS']}
                    link='https://aleksandrekas.github.io/blog-preview-card/'
                    code='https://github.com/aleksandrekas/blog-preview-card'
                />
            </div>
        </div>
    )
}






function Project({img,title,tools,link,code}:{img:string,title:string,tools:Array<string>,link:string,code:string}){
    return(
        <div className='project'>
            <div className='imgContainer'>
                <img className='projectImage' src={img} alt="project_screenshot" />
                <div className="buttons">
                    <a href={link} target='_blank'>VIEW PROJECT</a>
                    <a href={code} target='_blank'>VIEW CODE</a>
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

