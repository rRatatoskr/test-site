import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="私について">
            <p>我はこの世界を統べるものである．</p>
        </Layout>
    )
}

export const Head = () => (
    <>
    <title>私について</title>
    <meta name="description" content="Your description"/>
    </>
)

export default AboutPage