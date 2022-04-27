import React from "react";
import { Container, Card } from "react-bootstrap";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Sales } from "../../store";

interface Props {
    sales: Sales[];
}

const ProductSalesGraph = (props: Props) => {
    const { sales } = props;

    const options: Highcharts.Options = {
        chart: {
            type: "spline",
            height: 750,
            marginTop: 50,
            marginBottom: 50,
        },
        title: {
            text: "Retail Sales",
            align: "left",
        },
        xAxis: {
            type: "datetime",
            labels: {
                overflow: "justify",
            },
        },
        yAxis: {
            visible: false,
        },
        legend: {
            enabled: false,
        },
        plotOptions: {
            spline: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 5,
                    },
                },
                marker: {
                    enabled: false,
                },
                pointInterval: 3600000 * 24 * 7, // one week
                pointStart: Date.UTC(2017, 0, 1, 0, 0, 0),
            },
        },
        series: [
            {
                type: "spline",
                data: sales.map(
                    (sale) => sale.retailSales + sale.retailerMargin
                ),
            },
            {
                type: "spline",
                data: sales.map((sale) => sale.retailSales),
            },
        ],
    };
    return (
        <Container fluid className="no-padding">
            <Card className="graph">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </Card>
        </Container>
    );
};

export default ProductSalesGraph;
