import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #1d2228;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1000px) {
        height: 1200px;
    }

    @media screen and (max-width: 780px) {
        height: 1800px;
    }

    @media screen and (max-width: 480px) {
        height: 1800px;
    }
`;

const H1 = styled.h1`
    font-size: 2.5rem;
    color: #e1e2e2;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

const Wrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 780px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

const Card = styled.div`
    background: #646C79;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

const Icon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

const H2 = styled.h2`
    color: #e1e2e2;
    font-size: 1rem;
    margin-bottom: 10px;
`;

const P = styled.p`
    color: #e1e2e2;
    font-size: 1rem;
    text-align: center;
`;

const Projects = () => {
	return (
		<Container id='projects'>
			<H1>Projects</H1>
			<Wrapper>
				<Card>
					<Icon />
					<H2>Project Name</H2>
					<P>Description of the project, but it's brief for now.</P>
				</Card>
				<Card>
					<Icon />
					<H2>Project Name</H2>
					<P>Description of the project, but it's brief for now.</P>
				</Card>
				<Card>
					<Icon />
					<H2>Project Name</H2>
					<P>Description of the project, but it's brief for now.</P>
				</Card>
				<Card>
					<Icon />
					<H2>Project Name</H2>
					<P>Description of the project, but it's brief for now.</P>
				</Card>
				<Card>
					<Icon />
					<H2>Project Name</H2>
					<P>Description of the project, but it's brief for now.</P>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default Projects;
