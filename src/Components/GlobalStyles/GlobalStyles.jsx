import { createGlobalStyle } from "styled-components";

// Typography
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

const GlobalStyles = createGlobalStyle`

:root {
    --bodyBg: #1B2230;
    --white: #fff;
    --btnColor: #8BDAE3;
    --textColor: #9a9b9d;
    --footerBg: #0C1524;
    --box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    --font-poppins: 'Poppins', sans-serif;
    --transition: all .3s ease;
}

*,
*::after,
*::before {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
    background: var(--bodyBg);
    font-family: var(--font-poppins);
	overflow-x: hidden;
	scroll-behavior: smooth;
}

a {
    text-decoration: none;
}

h1, h2, h3, h4, h5{
    color: var()--footerBg;
    font-family: var(--font-poppins);
    font-weight: 600;
}

ul,
ol,
li {
    list-style: none;
}

p {
    color: var(--textColor);
}

button {
    font-weight: 600;
    color: var(--white);
    border: none;
    border-radius: 20px;
    background: rgb(0,212,255);
    background: linear-gradient(90deg, rgba(0,212,255,1) 7%, rgba(1,181,234,1) 71%, rgba(13,170,228,1) 92%);
    padding: .8rem 3rem;
    transition-property: background;
    transition: var(--transition);
    cursor: pointer;
}

button:hover {
    background: rgb(0,212,255);
    background: linear-gradient(90deg, rgba(0,212,255,1) 7%, rgba(1,181,234,1) 30%, rgba(28,121,156,1) 78%);
    transition: var(--transition);
}

.container {
    width: 80%;
    margin: auto;
    flex-wrap: wrap;
}

.logo {
    width: 140px;
}

@media only screen and (max-width:1280px) {
container {
    width: 90%;
}
}

@media only screen and (max-width:500px) {
.logo {
    width: 120px;
}

button {
    padding: .6rem 1.8rem;
}
}

`
export default GlobalStyles;
