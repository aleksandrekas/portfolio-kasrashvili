import { useState } from "react"
import "../contact/contact.css"
import Socials from "../headbar/Socials"

type InputsType = {
    name:string
    mail:string
    message:string
}
type ErrorType = {
    name:boolean
    mail:boolean
    message:boolean
}





export default function Contact(){
    const [inputs,setInputs] = useState<InputsType>({
        name:'',
        mail:'',
        message:''
    })
    const [errors,setErrors] = useState<ErrorType>({
        name:false,
        mail:false,
        message:false
    })

    const [status,setStatus] = useState<string>('not_sent')



    function validateMail(mail:string){
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(mail)
    }

    function handleInputsChange(e:React.ChangeEvent<HTMLInputElement>){
        const target = e.currentTarget
        const key = target.id as keyof InputsType
        setInputs((prev)=>({
            ...prev,
            [key]:target.value
        }))
    }


    async function submit(e:React.FormEvent){
        e.preventDefault()
        for(const key in inputs){
            const keyTyped = key as keyof InputsType
            if(inputs[keyTyped] === ''){
                setErrors((prev)=>({
                    ...prev,
                    [keyTyped]:true
                }))
            }else if(errors[keyTyped]){
                setErrors((prev)=>({
                    ...prev,
                    [keyTyped]:false
                }))
            }else{
                if(keyTyped === 'mail' && !validateMail(inputs[keyTyped])){
                    setErrors((prev)=>({
                        ...prev,
                        mail:true
                    }))
                }else{
                    try{
                        const response = await fetch('https://formspree.io/f/xykyzpqa',{
                            method:'POST',
                            headers:{
                                'Content-Type':'application/json',
                            },
                            body:JSON.stringify(inputs)
                        })

                        const res = await response.json()
                        if(res.ok){
                            setStatus('done')
                        }
                        
                    }catch(error){
                        setStatus('error')
                    }
                }                
            }
        }

    }


    return(
        <section className="contact">
            <div className="content">
                <div className="textSide">
                    <h1>Contact</h1>
                    <p>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
                </div>
                {
                    status === 'not_sent'? 
                        <form autoComplete="off" onSubmit={submit}>
                            <input onChange={handleInputsChange} type="text" id="name" placeholder="NAME" value={inputs.name}/>
                            <span className={errors.name? 'visible' : ''}>Sorry, enter your name here</span>
                            <input onChange={handleInputsChange} type="mail" id="mail"  placeholder="EMAIL" value={inputs.mail}/>
                            <span className={errors.mail? 'visible' : ''}>Sorry, invalid format here</span>
                            <input  onChange={handleInputsChange}  id="message"  placeholder="MESSAGE" value={inputs.message}/>
                            <span className={errors.message? 'visible' : ''}>Sorry, leave your message here</span>
                            <button className="contactBtn" type="submit">SEND MESSAGE</button>
                        </form>
                    :
                        <ResultElement status={status} />
                }
                <img className="patternImg" src="/images/pattern-rings.svg" alt="pattern" />
            </div>
            <Socials />
        </section>
    )
}




function ResultElement({status}:{status:string}){
    return (
        <div className="resultElement">
            {status === 'done'? 
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="#4ee1a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"/></svg>
                    <p>message was sent </p>
                </div>
            :
                <p>Sorry,something went wrong</p>    
        }
        </div>
    )
}