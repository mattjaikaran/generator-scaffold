import { useForm } from 'react-hook-form'
import Layout from '@/components/Layout'
import CustomButton from '@/components/CustomButton'
import { Form } from 'react-bootstrap'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <Layout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="registerFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            {...register('First name', { required: true, maxLength: 80 })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last name"
            {...register('Last name', { required: true, maxLength: 100 })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerPhone">
          <Form.Label>Phone #</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Mobile number"
            {...register('Mobile number', {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register('Password', { required: true })}
          />
        </Form.Group>

        <Button type="submit">Register</Button>
        {/* <CustomButton type="submit">Register</CustomButton> */}
      </Form>
    </Layout>
  )
}


export default Register