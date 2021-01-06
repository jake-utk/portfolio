import ImageOne from "../images/simon.png";
import ImageTwo from "../images/query-tech.png";
import ImageThree from "../images/curatr.png";
import ImageFour from "../images/921steak.png";
import ImageFive from "../images/portfolio.png";

export const projects = [
	{
		id: 1,
		name: "Simon Guitar Hero",
		description:
			"Simon Says game made exclusively in vanilla Javascript, HTML5, CSS3, and DOM manipulation.",
		image: require("../images/simon.png").default,
		url: "https://jake-utk.github.io/simon-guitar-project/",
		repo: "https://github.com/jake-utk/simon-guitar-project",
		language: "JavaScript",
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
		language: "JavaScript",
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
		language: "JavaScript",
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
		language: "JavaScript",
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
		language: "JavaScript",
		created: "11/25/2020",
		updated: "1/5/2021",
	},
];
