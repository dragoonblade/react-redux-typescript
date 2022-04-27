import React from "react";
import { Card, Container } from "react-bootstrap";
import { Review } from "../../store";

interface Props {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: Review[];
    retailer: string;
    details: string[];
    tags: string[];
}

const ProductDetail = (props: Props) => {
    const {
        title,
        image,
        subtitle,
        brand,
        details,
        tags,
    } = props;

    return (
        <Container fluid className="no-padding full-height">
            <Card className="long-card full-height">
                <Card.Img variant="top" src={image} />
                <Card.Title>
                    {brand} {title}
                </Card.Title>
                <Card.Subtitle>{subtitle}</Card.Subtitle>
                <Card.Body>
                    <div className="tags">
                        {tags.map((tag) => (
                            <div key={tag} className="tag">
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div className="tags">
                        <h5 className="h5">Product Details</h5>
                        <ul>
                            {details.map((detail) => (
                                <li key={detail}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ProductDetail;
