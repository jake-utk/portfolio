import styled, { keyframes } from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 0px;
    background: white; // conditional
    white-space: nowrap;
    padding: 16px 50px; // conditional
    color: black; // conditional
    font-size: 28px; // conditional
    outline: 5px solid grey;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: blue; // conditional
        color: red; // conditional
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