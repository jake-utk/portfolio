import ImageOne from "../images/DSC01950.jpeg";
import ImageTwo from "../images/IMG_4485.JPG";

export const projects = [
	{
		id: 1,
		name: "Simon",
		description:
			"Simon Says game made exclusively in vanilla Javascript, HTML5, CSS3, and DOM manipulation.",
		image: require("../images/simon.png").default,
		url: "https://jake-utk.github.io/simon-guitar-project/",
		repo: "https://github.com/jake-utk/simon-guitar-project",
		skills: ["JavaScript", "HTML", "CSS"],
		created: "10/8/2020",
		updated: "11/27/2020",
	},
	{
		id: 2,
		name: "query(Tech)",
		description:
			"Search application using the popular Hacker News API built in React.",
		image: require("../images/query-tech.png").default,
		url: "http://querytech.herokuapp.com/",
		repo: "https://github.com/jake-utk/query-tech",
		skills: ["JavaScript", "React", "CSS", "HTML"],
		created: "10/27/2020",
		updated: "11/27/2020",
	},
	{
		id: 3,
		name: "Curatr",
		description: "A game list aggregator created by users, built in React.",
		image: require("../images/curatr.png").default,
		url: "https://curatrp3ga.herokuapp.com/",
		repo: "https://github.com/Davinki-Coders/Project-3-fe",
		skills: ["JavaScript", "React", "Node", "MongoDB", "Express"],
		created: "11/16/2020",
		updated: "11/29/2020",
	},
	{
		id: 4,
		name: "921steak",
		description:
			"A modern restaurant template full-stack website, built in React.",
		image: require("../images/921steak.png").default,
		url: "http://www.921steak.com",
		repo: "https://github.com/REST-a-site/project-4-fe",
		skills: ["JavaScript", "React", "Django", "Python", "PostgresQL"],
		created: "12/09/2020",
		updated: "12/18/2020",
	},
	{
		id: 5,
		name: "Portfolio",
		description: "A portfolio website built in React.",
		image: require("../images/portfolio.png").default,
		url: "https://www.jakeaddis.com/",
		repo: "https://github.com/jake-utk/portfolio-resume",
		skills: ["JavaScript", "React", "CSS", "HTML"],
		created: "11/25/2020",
		updated: "1/5/2021",
	},
];

export const infoOne = {
	id: "about",
	darkBackground: false,
	lightIntroText: false,
	lightH1Text: false,
	lightDescriptionText: false,
	introText: "thanks for checking out my portfolio.",
	h1Text: "I'm a software engineer",
	descText:
		"...who enjoys using logic to solve problems with code.  I design object-oriented, user-centric, and responsive applications that bring a business's idea to life.  I'm currently seeking full time employment!",
	buttonText: "Resume",
	imageStart: false,
	image: ImageOne,
	portraitOrient: false,
	altText: "Picture of Jake",
	lightButton: false,
	darkText: false,
	buttonHide: false,
};

export const infoTwo = {
	id: "personal",
	darkBackground: true,
	lightIntroText: true,
	lightH1Text: true,
	lightDescriptionText: true,
	introText: "leisure / R&R",
	h1Text: "When I'm not at work...",
	descText:
		"...I love to play guitar, watch sports, and cook breakfast food.  If I'm not doing one of those, I'm working on a coding challenge.",
	buttonText: "Resume",
	imageStart: true,
	image: ImageTwo,
	portraitOrient: true,
	altText: "Guitar",
	lightButton: true,
	darkText: true,
	buttonHide: true,
};
