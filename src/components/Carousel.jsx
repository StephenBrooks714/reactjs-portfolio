export default function Carousel() {

    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={"https://miro.medium.com/max/1400/1*SNUFXbMYSOArQbA-Iwi-jA.png"}
                             className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={"https://www.elinext.com/wp-content/uploads/2020/05/Web-Design-Development-Advanced-Based-scaled.jpg"}
                             className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={"https://www.theme-junkie.com/wp-content/uploads/sketch-web-design-templates-6.jpeg"}
                             className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}