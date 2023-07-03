import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="body-wrapper">

      <body class="text-center">
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header class="masthead mb-auto">
            <div class="inner">
              <h3 class="masthead-brand">🧠️ ZenState AI</h3>
              <nav class="nav nav-masthead justify-content-center">
              </nav>
            </div>
          </header>

          <main role="main" class="inner cover" className="main-wrapper">
            <h1 class="cover-heading">Visualize and Build Interactive LLM Apps</h1>
            <p class="lead"></p>
            <p class="lead">
              Unlock the power of your imagination with DeployFlow. This innovative software empowers you to transform your ideas into captivating interactive applications effortlessly. Create stunning visualizations, harness the capabilities of Language Models, and build engaging user experiences without the need for extensive coding knowledge. With seamless integration, real-time collaboration, and easy deployment, DeployFlow is the ultimate tool for turning your concepts into reality.
            </p>

            <h1 class="cover-heading">Demo of Software</h1>
            <img src='/' alt='demo' />
            <p class="lead"></p>

          </main>


        </div>
      </body >

      <nav>
        <stripe-buy-button className="stripe-buy-btn"
          buy-button-id="buy_btn_1NPZvoEY3i8ApdV8QG92koHS"
          publishable-key="pk_live_51NOCqbEY3i8ApdV8212I7D642htTgNyqyd7Qo6xGBYKH3cHgC5sF53CUOgY365Qb6XHa0fQ1fAXMIB4496nyFlfN009rf19vXS"
        >
        </stripe-buy-button>

      </nav>

    </div >
  );
}

export default App;
