import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
          <p>私はホームページを作ったのだ！つまりこの世界の創造主であり唯一神なのだ！</p>
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>
export default IndexPage