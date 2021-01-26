class Api {
  constructor(options) {
    this._options = options;
  }

  _handleOriginalRes = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  };

  getToken() {
    return localStorage.getItem('jwt');
  }

  getSavedArticles() {
    return fetch(`${this._options.baseUrl}/articles`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.getToken()}`,
      },
    })
      .then(this._handleOriginalRes)
      .then((res) => res);
  }

  addArticle({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  }) {
    return fetch(`${this._options.baseUrl}/articles`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.getToken()}`,
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    })
      .then(this._handleOriginalRes)
      .then((res) => res);
  }

  removeArticle({ id }) {
    return fetch(`${this._options.baseUrl}/articles/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.getToken()}`,
      },
    })
      .then(this._handleOriginalRes)
      .then((res) => res);
  }

  getUserInfo() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.getToken()}`,
      },
    })
      .then(this._handleOriginalRes)
      .then((res) => res);
  }

  signUp({ name, password, email }) {
    return fetch(`${this._options.baseUrl}/signup`, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    })
      .then(this._handleOriginalRes)
      .then((res) => res);
  }

  signIn({ email, password }) {
    return fetch(`${this._options.baseUrl}/signin`, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then(this._handleOriginalRes)
      .then((res) => res);
  }

  checkToken(jwt) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then(this._handleOriginalRes)
      .then((res) => res);
  }
}

const api = new Api({
  // baseUrl: `${window.location.protocol}//api.whatsthenews.students.nomoredomains.work`,
  baseUrl: '',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export { api };