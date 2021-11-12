import Link from 'next/link'
import { useRouter } from 'next/router'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import styles from './Header.module.scss'


const navItems = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
  },
  {
    id: 3,
    title: 'Contact',
    link: '/contact',
  },
  {
    id: 4,
    title: 'Login',
    link: '/login',
  },
  {
    id: 5,
    title: 'Register',
    link: '/register',
  },
]

const Header = () => {
  const router = useRouter()
  const renderNavItems = () => (
    navItems.map(({ id, title, link }) => (
      <Nav.Link key={id} onClick={() => router.push(link)}>
        {title}
      </Nav.Link>
    ))
  )
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => router.push('/')}>
          Next-Bootstrap Starter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="header-nav" />
        <Navbar.Collapse id="header-nav">
          <Nav className="me-auto">
            {renderNavItems()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header