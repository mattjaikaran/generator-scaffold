import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Container } from 'react-bootstrap'

const Layout = ({ children }) => {
  return (
    <Container fluid="xl">
      <Head>
        <title>Next Bootstrap Boilerplate</title>
        <meta name="description" content="Yeoman generated Next Bootstrap SCSS starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout
