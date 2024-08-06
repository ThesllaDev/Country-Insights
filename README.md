# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - REST Countries API with color theme switcher solution](#frontend-mentor---rest-countries-api-with-color-theme-switcher-solution)
	- [Table of contents](#table-of-contents)
	- [Overview](#overview)
		- [The challenge](#the-challenge)
		- [Video preview](#video-preview)
		- [Links](#links)
	- [My process](#my-process)
		- [Built with](#built-with)
		- [What I learned](#what-i-learned)
		- [👷 Autor](#-autor)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page

### Video preview

https://github.com/user-attachments/assets/8c221fe8-41bd-4c9a-b0b9-de7d697f5fcb

### Links

- Live Site URL: [Website Country Insights](https://country-insights-nu.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Axios](https://axios-http.com/docs/intro) - JS library
- [React Router Dom](https://reactrouter.com/en/main) - React library

### What I learned

During the development of this project, I gained knowledge in several fundamental areas of front-end development with React:

- Consuming APIs with Axios: I learned how to make HTTP requests to external APIs using the Axios library, enabling dynamic interaction with external data.
  
	```js
	const getDatas = async () => {
		try {
			const response = await axios.get("https://restcountries.com/v3.1/all");
			setData(response.data);
		} catch (error) {
			console.log(error);
		}
	};

  useEffect(() => {
    getDatas();
  }, []);
	```
- Working with routes using React Router DOM: I understood how to configure and manage routes in React, facilitating navigation between different components and pages of the application.
  ```jsx
	const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="countrie/:id" element={<Countrie />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  )

	<button onClick={() => navigate(-1)}>Back</button>
	```
- Utilizing specific React hooks: I explored the use of hooks such as useCallback and useEffect to optimize performance and control side effects, improving the organization and functionality of the code.
	```js
	const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleRegionChange = useCallback((e) => {
    setRegion(e.target.value);
  }, []);

### 👷 Autor

Development

<a href="https://github.com/ThesllaDev">
 <img style="border-radius:50%;" src="https://avatars2.githubusercontent.com/u/61105850?v=4" width="100px;" alt="Imagem de perfil"/>
 <br />
 <sub><b>Thalles Augusto</b></sub></a>


Make with ❤️ by Thalles Augusto 👋🏽 Contact me! <br/>
 [![Linkedin Badge](https://img.shields.io/badge/-Thalles-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thalles-augusto/)](https://www.linkedin.com/in/thalles-augusto/) 
[![Gmail Badge](https://img.shields.io/badge/-ThesllaDev@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:ThesllaDev@gmail.com)](mailto:ThesllaDev@gmail.com)
