import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
    return (
        <Layout pageTitle="ここがホームなんだよね">
          <p>私がこのホームページを作ったのだ！つまりこの世界の創造主なのだ！</p>
          <StaticImage
            alt="clifford, a reddish-brown pitbutt, posing on a couch and looking stoically at the camera"
            src="../images/pic.jpeg"
          />
        </Layout>
    )
}

export const Head = () => <Seo title="Home Page"/>
export default IndexPage