import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link href="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/link">Link</Link>
            </Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Nav.Link>
                  <Link href="/action/1">Action1</Link>
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link>
                  <Link href="/action/2">Action2</Link>
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link>
                  <Link href="/action/3">Action3</Link>
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link>
                  <Link href="/action/4">Action4</Link>
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header