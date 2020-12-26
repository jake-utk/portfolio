import React from 'react'
import Video from '../../videos/video.mp4'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
    align-items: center;
    background: #1d1228; // eerie black
    display: flex;
    height: 800px;
    justify-content: center;
    padding: 0 28px;
    position: relative;
    z-index: 1;

    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

const Background = styled.div`
    bottom: 0;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
`

const VideoImport = styled.video`
    --o-object-fit: cover;
    height: 100%;
    object-fit: cover;
    width: 100%;
    background: #1d2228; // eerie black
`

const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    padding: 8px 24px;
    position: absolute;
    z-index: 3;
`
const H1 = styled.h1`
	color: #E1E2E2; // platinum
	font-size: 92px;
    text-align: center;
    font-family: 'Teko';

	@media screen and (max-width: 780px) {
		font-size: 80px;
	}

	@media screen and (max-width: 480px) {
		font-size: 60px;
	}
`;

const P = styled.p`
	color: #E1E2E2; // platinum
	font-size: 40px;
	/* margin-top: 20px; */
	max-width: 600px;
	text-align: center;

	@media screen and (max-width: 780px) {
		font-size: 32px;
	}

	@media screen and (max-width: 480px) {
		font-size: 20px;
	}
`;

const Wrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin-top: 32px;
`;

const ReserveBtn = styled(Link)`
    background: #1d2228; // eerie black
    border-radius: 0px;
    border: 2.5px solid;
    color: #9B1D20; // ruby read
    cursor: pointer;
    font-size: 16px;
    outline: none;
    padding: 10px 22px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff; // WHITE CHANGE IT
        color: #646C79; // black coral
    }
`


const Hero = () => {
    return (
        <Container>
            <Background>
                <VideoImport autoPlay loop muted src={Video} type='video/mp4' />
            </Background>
            <Content>
                <H1>JAKE ADDIS</H1>
                <P>Software Engineer</P>
            </Content>
        </Container>
    )
}

export default Hero
