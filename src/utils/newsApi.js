class NewsApi {
  _handleOriginalRes = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  };

  searchArticles(keyword) {
    return fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=ad8e10b507924fe4b51a9bd7540931b7`, {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(this._handleOriginalRes)
      .then((res) => res);
  }
}

const newsApi = new NewsApi();

export { newsApi };