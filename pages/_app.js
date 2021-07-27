import App from 'next/app';
import React from 'react';
import '../styles/main.scss'

import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper'
import withRedux from "next-redux-wrapper";
import store from '../store/store'

import {fetchPosts} from '../store/actions/postsActions'

class MyApp extends App {

static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be access by the client
    return {pageProps: pageProps};
}




render() {
const {Component, pageProps } = this.props;   
return (
    <>
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
    </>
)
}


}

const makeStore = () => store;
export default withRedux(makeStore)(MyApp); 