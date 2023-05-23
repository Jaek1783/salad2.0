import styled from 'styled-components';
import { useRef } from 'react';
const JoinPageComponent = ()=>{
    const dateRef = useRef('');

    const buttonHandler = (event)=>{
        event.preventDefault();
        console.log(dateRef.current.value);
    }
    return <StyledJoinPageComponent>
        <div className='formContainer'>
            <form onSubmit={buttonHandler}>
                <div className="inputContainer">
                    <label htmlFor="date">Enter your date: </label>
                    <input type="date" name="date" id="date" required ref={dateRef}/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="email">Enter your email: </label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="inputContainer">
                    <label htmlFor="name">Enter your password: </label>
                    <input type="password" name="password" id="password" required />
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