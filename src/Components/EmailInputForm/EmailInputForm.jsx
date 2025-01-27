import { Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "Components";
import { FaEnvelope } from "react-icons/fa";
import "./EmailInputForm.css";

const EmailInputForm = () => {
  return (
    <div className="email-form-container mb-4">
      <h1 className="email-form-title">Set job reminder</h1>
      <p className="email-form-description">
        Enter your email and get job notifacation.
      </p>
      <InputGroup className="mb-3">
        <InputGroup.Text className="bg-white py-3">
          <FaEnvelope size={30} style={{ color: "#cfcfcf" }} />
        </InputGroup.Text>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          aria-label="Email"
          className="email-input"
        />
      </InputGroup>
      <div className="d-flex">
        <Button variant="primary" label="Submit" />
      </div>
    </div>
  );
};

export default EmailInputForm;
