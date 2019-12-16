import React from 'react';
import {Link} from 'react-router-dom';
import styled  from 'styled-components';
import * as FontAwesome from 'react-icons/lib/fa'
import IconCart from '../icon-cart';

const HeaderBlock = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    background: rgba(0, 0, 0, 0.9);
    z-index: 10;
    a: {
        text-decoration: none;
    }
    a:-webkit-any-link {
        text-decoration: none;
    }
`

const Header = () =>  {
    return(
        <HeaderBlock>
            <Link to="/">
                <FontAwesome.FaHome color="white" size="36" />
            </Link>
            <Link to="/cart">
                <IconCart />
            </Link>
        </HeaderBlock>
    )
}

export default Header;