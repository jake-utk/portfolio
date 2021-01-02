import styled, { keyframes } from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 0px;
    background: #e1e2e2; // platinum / conditional
    white-space: nowrap;
    padding: 16px 50px; // conditional
    color: #1d2228; // eerie black /  conditional
    font-size: 28px; // conditional
    outline: 5px solid #646C79; // black coral / conditional
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #646C79; // black coral / conditional
        color: #e1e2e2; // platinum / conditional
        outline: 5px solid #e1e2e2; // platinum / conditional
    }
`

export const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }

`