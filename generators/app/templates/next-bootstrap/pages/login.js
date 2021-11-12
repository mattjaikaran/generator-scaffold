import { useForm } from 'react-hook-form'
import Layout from '@/components/Layout'
import CustomButton from '@/components/CustomButton'
import { Form } from 'react-bootstrap'

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  console.log(watch('example'))
  return (
    <Layout>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <Button variant="primary" type="submit">
          Login
        </Button>
        {/* <CustomButton type="submit">Login</CustomButton> */}
      </Form>
    </Layout>
  )
}


export default Login