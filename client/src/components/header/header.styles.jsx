import styled, { css } from 'styled-components';
import { sizeDevices } from '../../GlobalStyledVariables';
import { Link } from 'react-router-dom'

// .header
export const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    -webkit-box-shadow: 0 0px 10px 0px rgba(0,0,0,0.2);
`
// .container
export const GeneralContainer = styled.div`
    max-width: 117rem;
    margin: 0 auto;
    padding: 0 1.6rem;
`

export const WrapHeaderMobile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 7rem;
    background-color: #fff;
    padding: 15px;
    

`

export const NavigationContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
    width: 100%;
    padding: 0 1rem;

    
`


export const WrapIconHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 15px;
    line-height: 1;
    flex-grow: unset;
    flex-wrap: wrap;

   
`


const OptionContanier = css`
    :hover {
        color:tomato;  
    }
`


export const LogoLink = styled(Link)`
    font-size: 25px;
    font-weight: bold;
    touch-action: manipulation;
    color: #333333;
    text-decoration: none;
    background-color: transparent;
`


export const LogoContainer = styled.div`
    display: flex;
    position: relative;
    padding-right: 25px;
    flex-grow: 1;
`


export const IconHeaderItem = styled.div`
    ${OptionContanier}
    display: flex;
    font-size: 26px;
    line-height: 1;
    cursor: pointer;
    padding-right: 11px;

    @media screen and (max-width: 790px) {
        display: none;
    }

`

export const IconHeaderItemMenu = styled.div`
    ${OptionContanier}
    ${'' /* display: none; */}
    font-size: 26px;
    line-height: 1;
    cursor: pointer;
    padding-right: 11px;
`


export const OptionLink = styled(Link)`
${OptionContanier}
 font-size: 14px;
 color: #333333;
 transition: .3s;
`

