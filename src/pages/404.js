import React from "react"

import Layout from "../containers/layout/Layout"
import Header from "../components/header/Header"
import SEO from "../components/seo/Seo"
import NotFound from '../components/404/404';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header />
    <NotFound />
  </Layout>
)

export default NotFoundPage
