import styled from 'styled-components';
import { useRef } from 'react';
const JoinPageComponent = ()=>{
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const joinHandler = (event)=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    return <StyledJoinPageComponent>
        <div className='formContainer'>
            <form onSubmit={joinHandler}>
                <div className="inputContainer">
                    <label htmlFor="email">Enter your email: </label>
                    <input type="email" name="email" id="email" required ref={emailRef}/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="name">Enter your password: </label>
                    <input type="password" name="password" id="password" required ref={passwordRef}/>
                </div>
                <div className="">
                    <button type='submit'>로그인</button>
                </div>
            </form>
        </div>
    </StyledJoinPageComponent>
};

export default JoinPageComponent;

export const StyledJoinPageComponent = styled.section`
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
    }

`