import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="私について">
            <p>我はこの世界を統べるものである．</p>
            <p>\int_0^\infty x^2 dx</p>
        </Layout>
    )
}

export const Head = () => (
    <>
    <Seo title="About Me"/>
    </>
)

export default AboutPage