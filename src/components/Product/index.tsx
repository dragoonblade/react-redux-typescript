import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StateProps } from "../../App";
import ProductDetail from "./ProductDetail";
import ProductSalesGraph from "./ProductSalesGraph";
import ProductSalesTable from "./ProductSalesTable";

const Product: React.FC<StateProps> = (props: StateProps) => {
    const {
        getProduct,
        product: {
            id,
            title,
            image,
            subtitle,
            brand,
            reviews,
            retailer,
            details,
            tags,
            sales,
        },
    } = props;

    useEffect(() => {
        getProduct("B007TIE0GQ")
    }, [getProduct])

    console.log(props)

    const productDetailProps = {
        id,
        title,
        image,
        subtitle,
        brand,
        reviews,
        retailer,
        details,
        tags,
    }

    return (
        <Container fluid className="app">
            <Row>
                <Col xs={2}>
                    <ProductDetail {...productDetailProps}/>
                </Col>
                <Col xs={10}>
                    <ProductSalesGraph sales={sales}/>
                    <ProductSalesTable sales={sales}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Product;
