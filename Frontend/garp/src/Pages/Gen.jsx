import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import './Gen.css';

const Gen = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Stack gap={3}>
              <div className="p-2 firstchild">
                <div>
                  <p>Enter the name :</p>
                  <input type="text" className="gen-input-1" />
                </div>
              </div>
              <div className="p-2 secondchild">
                <p>Enter the prompt :</p>
                <textarea
      className="gen-input-2"
      placeholder="Enter your text here"
          rows={4}  // Adjust the number of rows as needed
    />              </div>

<div className="p-2 thirdchild">
                <div>
                  <p>How This Works
The user types a thought or description e.g. futuristic city with flying cars
The app sends this text to OpenAI’s DALL·E API.
The API returns a generated image URL.
The app displays the AI-generated image.
</p>
                </div>
              </div>

            </Stack>
          </Col>
          <Col>
          <div>
            <p>AI-powered text-to-image generator</p>
            <div className='photo-cont'>            <div className='photo'></div>
            </div>
            </div></Col>
        </Row>
      </Container>
    </>
  );
};

export default Gen;
