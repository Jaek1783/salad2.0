import styled from 'styled-components';
const SignPageComponent = ()=>{
    return <StyledSignPageComponent>
        <div className='formContainer'>
            <form action="" method="get">
                <div className="inputContainer">
                    <label htmlFor="name">Enter your name: </label>
                    <input type="text" name="name" id="nmae" required />
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
                    <input type="submit" value="회원가입" />
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
    }

`