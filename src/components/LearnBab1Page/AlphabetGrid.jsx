import { AlphabetCard } from "./AlphabetCard";
import styles from "./AlphabetGrid.module.css";
import img from "../../assets/lesson1/1.png";

const ALPHABET = [
	{
		letter: "A",
		image: "/src/assets/lesson1/1.png",
		alt: "Sign language A",
	},
	{
		letter: "B",
		image: "/src/assets/lesson1/2.png",
		alt: "Sign language B",
	},
	{
		letter: "C",
		image: "/src/assets/lesson1/3.png",
		alt: "Sign language C",
	},
	{
		letter: "D",
		image: "/src/assets/lesson1/4.png",
		alt: "Sign language D",
	},
	{
		letter: "E",
		image: "/src/assets/lesson1/5.png",
		alt: "Sign language E",
	},
	{
		letter: "F",
		image: "/src/assets/lesson1/6.png",
		alt: "Sign language F",
	},
	{
		letter: "G",
		image: "/src/assets/lesson1/7.png",
		alt: "Sign language G",
	},
	{
		letter: "H",
		image: "/src/assets/lesson1/8.png",
		alt: "Sign language H",
	},
	{
		letter: "I",
		image: "/src/assets/lesson1/9.png",
		alt: "Sign language I",
	},
	{
		letter: "J",
		image: "/src/assets/lesson1/10.png",
		alt: "Sign language J",
	},
	{
		letter: "K",
		image: "/src/assets/lesson1/11.png",
		alt: "Sign language K",
	},
	{
		letter: "L",
		image: "/src/assets/lesson1/12.png",
		alt: "Sign language L",
	},
	{
		letter: "M",
		image: "/src/assets/lesson1/13.png",
		alt: "Sign language M",
	},
	{
		letter: "N",
		image: "/src/assets/lesson1/14.png",
		alt: "Sign language N",
	},
	{
		letter: "O",
		image: "/src/assets/lesson1/15.png",
		alt: "Sign language O",
	},
	{
		letter: "P",
		image: "/src/assets/lesson1/16.png",
		alt: "Sign language P",
	},
	{
		letter: "Q",
		image: "/src/assets/lesson1/17.png",
		alt: "Sign language Q",
	},
	{
		letter: "R",
		image: "/src/assets/lesson1/18.png",
		alt: "Sign language R",
	},
	{
		letter: "S",
		image: "/src/assets/lesson1/19.png",
		alt: "Sign language S",
	},
	{
		letter: "T",
		image: "/src/assets/lesson1/20.png",
		alt: "Sign language T",
	},
	{
		letter: "U",
		image: "/src/assets/lesson1/21.png",
		alt: "Sign language U",
	},
	{
		letter: "V",
		image: "/src/assets/lesson1/22.png",
		alt: "Sign language V",
	},
	{
		letter: "W",
		image: "/src/assets/lesson1/23.png",
		alt: "Sign language W",
	},
	{
		letter: "X",
		image: "/src/assets/lesson1/24.png",
		alt: "Sign language X",
	},
	{
		letter: "Y",
		image: "/src/assets/lesson1/25.png",
		alt: "Sign language Y",
	},
	{
		letter: "Z",
		image: "/src/assets/lesson1/26.png",
		alt: "Sign language Z",
	},
];

export const AlphabetGrid = () => {
	return (
		<section className={styles.grid}>
			{ALPHABET.map(({ letter, image, alt }) => (
				<AlphabetCard
					key={letter}
					letter={letter}
					imageSrc={image}
					altText={alt}
				/>
			))}
		</section>
	);
};
