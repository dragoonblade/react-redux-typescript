import { connect } from "react-redux";
import App from "./App";
import { DefaultState } from "./store";
import { getProduct } from "./store/actions";

const mapStateToProps = (state: DefaultState) => {
    const { product } = state;
    console.log(state)
    return { product };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getProduct: (id: string) => dispatch(getProduct(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
