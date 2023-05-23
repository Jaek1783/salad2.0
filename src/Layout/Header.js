import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Header = ()=>{
    return<StyledHeader>
        <h1><Link to='/'>Logo</Link></h1>
        <nav>
            <ul>
                <li><Link to ='/sign'>회원가입</Link></li>
                <li><Link to='/join'>로그인</Link></li>
            </ul>
        </nav>
    </StyledHeader>
};

export default Header;

export const StyledHeader = styled.header`
display:flex;
justify-content:space-around;
padding:1rem;
    ul{
        display:flex;
        li{
            padding-right:1rem;
        }
    }
`