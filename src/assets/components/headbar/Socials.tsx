import '../headbar/socials.css'


export default function Socials(){
    return(
        <header className="headbar">
            <h1>Aleksandre K.</h1>
            <div className="socials">
                <a href="https://github.com/aleksandrekas"><img src="/images/icon-github.svg" alt="github_logo" /></a>
                <a href="https://www.frontendmentor.io/profile/aleksandrekas"><img src="/images/icon-frontend-mentor.svg" alt="fr_mentor_logo" /></a>
                <a href="https://www.linkedin.com/in/aleksandre-kasrashvili-1552562a5/"><img src="/images/icon-linkedin.svg" alt="linkedin_logo" /></a>
            </div>
        </header>
    )
}