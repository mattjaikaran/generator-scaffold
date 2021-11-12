import { useForm } from 'react-hook-form'
import CustomButton from '@/components/CustomButton'
import { Card, Form } from 'react-bootstrap'
import styles from './ContactFormCard.module.scss'

const ContactFormCard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)
  return (
    <Card>
      <Card.Title className="text-center mt-5">
        <h3>Contact Us</h3>
      </Card.Title>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="contactFormEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              {...register('Name', { required: true})}
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="contactFormEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="textarea"
              placeholder="Your Message"
              {...register('Message', { required: true })}
            />
          </Form.Group>
          <CustomButton type="submit" btnText="Submit" />
        </Form>
      </Card.Body>
    </Card>
  )
}

export default ContactFormCard
