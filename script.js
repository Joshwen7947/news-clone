const baseUrl = `https://gnews.io/api/v4/top-headlines`;
// const API_KEY = `d114a2d7c35a03c0ccc106279ac3d110`;
// const API_KEY = `43a10ab40fcfc029e166509385dee017`;
const API_KEY = `dee7392479543b333ea7f2aff85832ce`;
const query = `?token=${API_KEY}`;
const listItem = document.createElement(`li`);

//
const fetchAsync = async () => {
	const url = baseUrl + query;
	let response = await fetch(url);
	let data = await response.json();
	console.log(`data object`, data);
	const articles = data.articles;
	const htmlTitleArea = document.getElementById(`titleArea`);
	//
	const htmlOutput = articles.map((singleArticle) => {
		return renderArticle(singleArticle);
	});

	htmlTitleArea.innerHTML = htmlOutput.join('');

	return;
};

function renderArticle(title, description, image, author) {
	// console.log(source.author);
	return ` <li id=${title} class="news_box">
    <div class="image_box">
     <h1>${title}</h1>
     <image src="${image}" width="400px">
     <p>${description}</p>
     <h4>By: ${author}</h4>
     </div>
     </li>`;
}
fetchAsync();

// renderArticle();
// async function getArticles() {
// 	const response = await fetch(baseUrl + query);
// 	const json = await response.json();
// 	const { articles } = json;
// 	console.log({ json });
// 	document.getElementById(
// 		'titleArea'
// 	).innerHTML = `EpicNews (${articles.length})`;
// 	const articlesHTML = articles.map(renderArticle);
// 	document.getElementById('newsList').innerHTML = articlesHTML.join('');
// }

// getArticles();
// //
// function renderArticle(article) {
// 	return `
//       <li id="newsList" class="mb-3 align-self-center article">
//           ${article.title}
//           <img src="${article.urlToImage}" alt="Snow" />
//         </div>
//           <i class="fa fa-edit fa-xs"></i><h4 class="mb-0">${article.author}</h4>
//           <h6 class="mb-0"><a href="${article.url}">${article.source.name}</a></h6>
//         <p><i class="fa fa-envelope"></i>${article.content}</p>
//       </li>
//     `;
// }
// renderArticle();
// OLD WAY
// const getNews = () => {
// 	const url = baseUrl + query;
// 	console.log(url);

// 	const fromFetch = fetch(url);
// 	fromFetch
// 		.then((success) => {
// 			console.log(`success`);
// 			return success.json();
// 		})
// 		.then((x) => {
// 			console.log(`success`);
// 			console.log(x);
// 		});
// };
// getNews();
//NEW WAY
// const fetchAsync = async () => {
// 	const url = baseUrl + query;
// 	console.log(url);
// 	let response = await fetch(url);
// 	console.log(response);
// 	let data = await response.json();
// 	console.log(`data object:`, data);
// 	const articles = data.articles;
// 	const htmlTitleArea = document.getElementById(`titleArea`);
// 	const htmlOutput = articles.map((e) => {
// 		console.log(e.title);
// 		const listItem = document.createElement(`li`);
// 		htmlTitleArea.innerHTML = articles.title;
// 		htmlTitleArea.appendChild(listItem);
// 	});
// 	htmlTitleArea.innerHTML = htmlOutput;
// 	return;
// 	// console.log(articles);
// 	// console.log(totalArticles);
// 	// console.log(`title is ${articles[7].title}`); //Gets the 7th article from top 10
// 	// console.log(Object.keys(articles[7])); //Gets object keys from array
// };
// // console.log(fetchAsync());
// fetchAsync();

// function renderArticle({ title, image }) {
// 	return ` <li> ${title}
//     <image src ='${image}'>
//     </li>`;
// }
// renderArticle(articles);
//
