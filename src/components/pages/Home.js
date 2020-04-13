import React from "react";

export default class Home extends React.Component {
  constructor() {
    super();
    document.title = "Home";
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    var url =
      "https://newsapi.org/v2/everything?q=nepal&apiKey=061f38e84570452a947e76eb2a1a26bb";
    fetch(url).then(resp => {
      resp.json().then(data => {
        this.setState({
          articles: data.articles
        });
      });
    });
  }
  render() {
    return (
      <div>
        <h1>This is home page</h1>
        <div className="panel panel-primary">
          <div className="panel panel-heading">Featured Products</div>
          <div className="panel panel-body">featured products will go here</div>
        </div>
        <div className="row">
          {this.state.articles.map((article, index) => {
            return (
              <div key={index} className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <img src={article.urlToImage} alt={article.title} />
                  <div className="caption">
                    <h3>{article.title.substring(0, 40)}...</h3>
                    <p>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        role="button"
                      >
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
