import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card2() {
  return (
    <Card className="text-center">
      <Card.Header>Contact Us</Card.Header>
      <Card.Body>
        <Card.Title>Contact the team</Card.Title>
        <Card.Text>
          {/* With supporting text below as a natural lead-in to additional content. */}
        </Card.Text>
        <Button variant="primary">Contact</Button>
      </Card.Body>
      <Card.Footer className="text-muted">student-attendance@gmail.com</Card.Footer>
    </Card>
  );
}

export default Card2;