import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function ContainerFluidExample() {
  return (
    <Container className='bg-dark pt-5' fluid>
      <Row>
        <Col>
          <ListGroup className='bg-dark' as="ul" style={{ color: 'white' }}>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              🔗 Quick Links
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              Home
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              Features
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              Pricing
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              Templates
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              Blog
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              Contact Us
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup className='bg-dark' as="ul" style={{ color: 'white' }}>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              🔒 Legal
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              Features
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              Pricing
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              Templates
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              Blog
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              Contact Us
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup className='bg-dark' as="ul" style={{ color: 'white' }}>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              📩 Stay Connected
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              Subscribe to our newsletter for the latest updates.
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              📱 Follow Us
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              [Facebook] | [Twitter] | [LinkedIn] | [Instagram]
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              💡 Need Help?
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
              Contact our support team at [support@email.com]
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
                        </ListGroup.Item>
                        <ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
                        </ListGroup.Item><ListGroup.Item className='bg-dark' style={{ color: 'white', border: 'none' }} as="li">
                        </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;
