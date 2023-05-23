import styled from 'styled-components';
import { useRef } from 'react';
const SignPageComponent = ()=>{
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const signHandler = (event)=>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password);
    }
    return <StyledSignPageComponent>
        <div className='formContainer'>
            <form onSubmit={signHandler}>
                <div className="inputContainer">
                    <label htmlFor="name">Enter your name: </label>
                    <input type="text" name="name" id="nmae" required ref={nameRef}/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="email">Enter your email: </label>
                    <input type="email" name="email" id="email" required ref={emailRef}/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="name">Enter your password: </label>
                    <input type="password" name="password" id="password" required ref={passwordRef}/>
                </div>
                <div className="submitButton">
                    <button type="submit">회원가입</button>
                </div>
            </form>
        </div>
    </StyledSignPageComponent>
};

export default SignPageComponent;

export const StyledSignPageComponent = styled.section`
width:100%;
display:flex;
justify-content:center;
align-items : center;
    .formContainer{
        width:50%;
        display:flex;
        justify-content:center;
        align-items : center;
    }
    .inputContainer{
        display:flex;
        justify-content:space-between;
        align-items : center;
        padding-bottom:1rem;
        input{
            padding:.2rem;
        }
    }
    .submitButton{
        button {
            padding:.5rem;
            width:100%;
        }
    }

`