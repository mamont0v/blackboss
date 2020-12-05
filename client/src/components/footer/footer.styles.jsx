import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { sizeDevices } from '../../GlobalStyledVariables';

export const FooterContainer = styled.footer`
    background-color: #222;
    color: #b2b2b2;
    background-repeat: no-repeat;
    -webkit-box-shadow: 0 0px 10px 0px rgba(0,0,0,0.2);
`

export const FooterWrapper = styled.div `
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;

    
`

export const FooterRow = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    font-size: 12px;
    margin-right: -15px;
    margin-left: -15px;
`

export const FooterColumn = styled.div `
   max-width: 50%;
   flex: 0 0 50%;
`

export const FooterCopyright = styled.div`
    background: linear-gradient(135deg, #ff7b26, #fc98b4, #f3cbd4);
    color: #fff;
    text-align: center;
    font-size: 10px;
    p {
        color:#fff;
    }
`

const ListContainer = css`
    margin: 5px;
    font-weight: bold;
    color: #fff;
    transition: 0.3s;
    cursor: pointer;
    
    &:hover {
                 
            }
`

export const ListLink = styled(Link)`
${ListContainer}
`