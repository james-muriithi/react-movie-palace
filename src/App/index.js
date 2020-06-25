import React from "react"

import Layout from "../containers/layout/Layout";
import Header from "../components/header/Header"
import Home from '../containers/home/Home';
import SEO from "../components/seo/Seo"
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'ionicons-npm/css/ionicons.min.css';
import '../styles/index.css';

const App = () => (
    <Layout>
        <SEO />
        <Header />
        <Home />
    </Layout>
)

export default App
