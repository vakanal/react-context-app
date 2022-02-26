import { LinkContainer } from "react-router-bootstrap";
import Alert from "react-bootstrap/Alert";

function Home() {
  return (
    <Alert variant="primary" className="mt-3">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <LinkContainer to="/list">
        <Alert.Link>an example link</Alert.Link>
      </LinkContainer>
      . Give it a click if you like.
    </Alert>
  );
}

export default Home;
