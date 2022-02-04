function Header() {
  return (
    <header className="hero is-warning is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Cute animal pictures</h1>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={props.src} alt="CUTE !" />
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Gallery(props) {
  const { urls } = props;
  if (urls == null) {
    return <Loading />;
  }
  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
}

function Main() {
  const urls = [
    "https://thatcopy.github.io/catAPI/imgs/jpg/84f477e.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/568c863.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/aa4e7f9.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/b198aa3.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/b065166.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/f64da8b.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/54adb30.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/b8df2d1.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/32b998f.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/695c074.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/095ec43.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/9f12113.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/2ac57b8.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/aea9421.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/c67fbd1.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/2d7c152.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/60343c6.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/7f62f17.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/4ca6ff3.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/2869233.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/1206c62.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/41442c0.jpg",
    "https://thatcopy.github.io/catAPI/imgs/jpg/5e953c2.jpg",
  ];
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>高橋琉以 5420087 日本大学文理学部情報科学科 Webプログラミングの演習課題
        </p>
        <p>Pictures are retrieved from catAPI</p>
        <p>
          <a href="https://thatcopy.pw/catapi/"> catAPI</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;