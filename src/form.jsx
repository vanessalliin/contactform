import 'bulma/css/bulma.min.css';
import { useState } from 'preact/hooks';
import { Form, Button, Notification } from 'react-bulma-components';

export function SubscriberForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);

    form.reset(); // clear the form
    setSubmitted(true); // show thank-you message
  };

  return (
    <>
      {submitted && (
        <Notification color="success">
          Thanks for your inquiry! We’ll get back to you soon.
        </Notification>
      )}

      <form onSubmit={handleSubmit}>
        <Form.Field>
          <Form.Label>Full Name</Form.Label>
          <Form.Control>
            <Form.Input name="fullName" required />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Email Address</Form.Label>
          <Form.Control>
            <Form.Input name="email" type="email" required />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control>
            <Form.Input name="phone" type="tel" required />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Type of Order</Form.Label>
          <Form.Control>
            <Form.Select name="orderType" required>
              <option value="">Please select</option>
              <option value="catering">Catering Inquiry</option>
              <option value="takeout">Large Takeout Order</option>
              <option value="question">General Question</option>
            </Form.Select>
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Menu Items You're Interested In</Form.Label>
          <Form.Control>
            <Form.Select multiple name="menuItems" required>
              <option value="pizza">Pizza</option>
              <option value="pasta">Pasta</option>
              <option value="salad">Salads</option>
              <option value="desserts">Desserts</option>
              <option value="drinks">Drinks</option>
            </Form.Select>
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>How Many People?</Form.Label>
          <Form.Control>
            <Form.Input name="guests" type="number" min="1" required />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Preferred Date & Time</Form.Label>
          <Form.Control>
            <Form.Input name="datetime" type="datetime-local" required />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Special Requests / Dietary Needs</Form.Label>
          <Form.Control>
            <Form.Textarea name="notes" placeholder="Tell us about allergies, delivery info, etc." />
          </Form.Control>
        </Form.Field>

        <Form.Field kind="group">
          <Form.Control>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Form.Control>
          <Form.Control>
            <Button color="link" colorVariant="light" type="reset">
              Cancel
            </Button>
          </Form.Control>
        </Form.Field>
      </form>
    </>
  );
}
