'use strict';

const httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11&api-key=hpnwUDadEEqSHjUOOhrWYE72ozaG6aYA', true);
  httpRequest.send();
  httpRequest.onload = data => {
    let articles = JSON.parse(data.target.response).response.docs;
    let stuff = getArticleDetails(articles);
    createGroups(stuff);
  };

const getArticleDetails = (articles) => {
  let article =  [];
  for (let i = 0; i < articles.length; i++) {
    article.push({
      headline: articles[i].headline.main,
      snippet: articles[i].snippet,
      pub_date: articles[i].pub_date,
      web_url: articles[i].web_url
    });
  }
  return article;
}

let createGroups = (article) => {
  for (let i = 0; i < article.length; i++) {
    let cikk = document.getElementsByTagName("DIV")[0].appendChild(document.createElement("UL"));
    cikk.appendChild(document.createElement("LI")).appendChild(document.createElement("A")).innerText = article[i].headline;
    cikk.appendChild(document.createElement("LI")).innerText = article[i].snippet;
    cikk.appendChild(document.createElement("LI")).innerText = article[i].pub_date.slice(0, 10);
    document.getElementsByTagName("A")[i].href = article[i].web_url
  }
}
