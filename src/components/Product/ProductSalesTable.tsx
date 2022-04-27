import React from "react";
import { Container, Card } from "react-bootstrap";
import {
    Table,
    Header,
    HeaderRow,
    Body,
    Row,
    Cell,
} from "@table-library/react-table-library/table";
import {
    useSort,
    HeaderCellSort,
} from "@table-library/react-table-library/sort";
import { Sales } from "../../store";

interface Props {
    sales: Sales[];
}

const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

const ProductSalesTable = (props: Props) => {
    const { sales } = props;
    const data = {
        nodes: sales.map((sale, index) => ({ ...sale, id: `${index}` })),
    };
    const sort = useSort(
        data,
        {},
        {
            sortFns: {
                weekEnding: (array) =>
                    array.sort(
                        (a, b) =>
                            new Date(a.weekEnding).getTime() -
                            new Date(b.weekEnding).getTime()
                    ),
                retailSales: (array) =>
                    array.sort((a, b) => a.retailSales - b.retailSales),
                wholesaleSales: (array) =>
                    array.sort((a, b) => a.wholesaleSales - b.wholesaleSales),
                unitsSold: (array) =>
                    array.sort((a, b) => a.unitsSold - b.unitsSold),
                retailerMargin: (array) =>
                    array.sort((a, b) => a.retailerMargin - b.retailerMargin),
            },
        }
    );
    return (
        <Container fluid className="no-padding">
            <Card>
                <Table data={data} sort={sort}>
                    {(tableList) => (
                        <>
                            <Header>
                                <HeaderRow>
                                    <HeaderCellSort sortKey="weekEnding">
                                        WEEK ENDING
                                    </HeaderCellSort>
                                    <HeaderCellSort sortKey="retailSales">
                                        RETAIL SALES
                                    </HeaderCellSort>
                                    <HeaderCellSort sortKey="wholesaleSales">
                                        WHOLESALE SALES
                                    </HeaderCellSort>
                                    <HeaderCellSort sortKey="unitsSold">
                                        UNITS SOLD
                                    </HeaderCellSort>
                                    <HeaderCellSort sortKey="retailerMargin">
                                        RETAILER MARGIN
                                    </HeaderCellSort>
                                </HeaderRow>
                            </Header>
                            <Body>
                                {tableList.map((item) => (
                                    <Row key={item.id} item={item}>
                                        <Cell>{item.weekEnding}</Cell>
                                        <Cell>
                                            {currency.format(item.retailSales)}
                                        </Cell>
                                        <Cell>
                                            {currency.format(
                                                item.wholesaleSales
                                            )}
                                        </Cell>
                                        <Cell>{item.unitsSold}</Cell>
                                        <Cell>
                                            {currency.format(
                                                item.retailerMargin
                                            )}
                                        </Cell>
                                    </Row>
                                ))}
                            </Body>
                        </>
                    )}
                </Table>
            </Card>
        </Container>
    );
};

export default ProductSalesTable;
