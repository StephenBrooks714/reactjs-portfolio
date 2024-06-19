import data from "../data/cardData.cjs";
import {Card} from "react-bootstrap";

export default function Cards() {

    return (
            <section className={"row justify-content-center mb-5 pb-5 align-items-center"}>
                    {data.map((item, index) => {
                            return (
                                <div className={"col-lg-3 col-md-6 mb-3"} key={index}>
                                    <Card >
                                        <Card.Body>
                                            <Card.Title className={"h3"}>{item.title}</Card.Title>
                                            <Card.Text className={"lead"}>{item.desc}</Card.Text>
                                            <a href={item.url} target={"_blank"} className={"btn btn-outline-warning"}>View Project <i className={"bi bi-arrow-right"}/></a>
                                            <a href={item.repo} target={"_blank"} className={"btn btn-outline-warning"}>View Repo <i className={"bi bi-arrow-right"}/></a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    )}
            </section>
    )
}