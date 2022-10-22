import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';

const TextLinkExample = ({
    collapsed,
    handleCollapsedChange,
}) => {
    function signOut() {
        console.log("sign Out")
        localStorage.clear('token')
        window.location.href = "/login"
    }
    return (
        <div className='customNavbar'>
            <Navbar varient='dark '>
                <Container fluid>
                    <Switch
                        height={16}
                        width={30}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        onChange={handleCollapsedChange}
                        checked={collapsed}
                        onColor="#219de9"
                        offColor="#bbbbbb"
                    />
                    {/* <Button onClick={() => {
                        se
                    }}>Click</Button> */}
                    <Link to="/charts">
                        <div className='ms-5 me-4'
                        >
                            Chart
                        </div>
                    </Link>
                    <Link to="/dashboard">
                        <div className='me-4'
                        >
                            dashboard
                        </div>
                    </Link>
                    <Link to="/datatables">
                        <div className='me-4'
                        >
                            DataTables
                        </div>
                    </Link>
                    <Link to="/invoice">
                        <div className='me-4'
                        >
                            Invoice
                        </div>
                    </Link>
                    <Link to="/form">
                        <div className='me-4'
                        >
                            Form
                        </div>
                    </Link>
                    {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='text-light' >
                            <Button onClick={() => { signOut() }} className="signOut">Sign Out</Button>
                            {/* <a href="#login" className='text-light'> Rahul </a> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default TextLinkExample;