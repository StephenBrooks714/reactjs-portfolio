import './App.css'
import Cards from "./components/Cards.jsx";
import Carousel from "./components/Carousel.jsx";

function App() {

  return (
    <>
      <main className={"container my-5 py-5"}>
          <section className={"row text-center justify-content-center align-items-center mb-5 pb-2"}>
              <div className={"col-lg-8"}>
                  <p className={"mb-2 h3 fw-bold"}>Hi, I'm Stephen Brooks, and I'm a</p>
                  <h1 className={"display-1 text-shadow fw-bold"}>React Developer</h1>
              </div>
          </section>
          <section className={"row justify-content-center mb-5 pb-2 align-items-center"}>
              <div className={"col-lg-6 mb-4"}>
                  <h2 className={"h1 mb-2"}>Ask me about a project</h2>
                  <p className={"lead mb-2"}>
                      I am skilled in front end and backend development. Also experienced with Agile, Jira, and Scrum.
                  </p>
                  <a href="mailto:stephenbrooks714@gmail.com" className={"btn btn-outline-warning mb-2"}>Hire Me For A Project <i className={"bi bi-arrow-right"}/></a>
              </div>
              <div className={"col-lg-6 mb-4"}>
                  <img src={"https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww"}
                       className={"img-fluid rounded-circle"}
                       alt="Ask me about a project"/>
              </div>
          </section>
          <Cards />
          <section className={"row"}>
              <div className={"col-lg-6"}>
                  <h3 className={"display-5 mb-2 fw-bold"}>Recent Outcomes</h3>
                  <p className={"lead"}>
                      I am skilled in front end and backend development. Also experienced with Agile, Jira, and Scrum. I have
                      used React and Vite to build my most recent projects.
                  </p>
                  <a href="mailto:stephenbrooks714@gmail.com" className={"btn btn-outline-warning"}>Contact Me <i className={"bi bi-arrow-right"}/></a>
              </div>
              <div className={"col-lg-6"}>
                  <Carousel/>
              </div>
          </section>
      </main>
    </>
  )
}

export default App
