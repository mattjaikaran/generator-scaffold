import { Button } from 'react-bootstrap'

const CustomButton = (props) => {
  return (
    <div>
      <Button 
        className="mt-3"
        variant={props.variant} 
        onClick={props.onClick} 
        href={props.btnLink}>
        {props.btnText}
      </Button>
      <div className="d-grid mt-3">
        <Button onClick={props.onClick} href={props.btnLink} type={props.type}>
          {props.btnText}
        </Button>
      </div>
    </div>
  )
}

export default CustomButton