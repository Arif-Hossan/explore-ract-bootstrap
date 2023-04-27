import Alert from 'react-bootstrap/Alert';

function AlertLink() {
  return (
    <>
      {[
        'primary',
        'secondary',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      ))}
    </>
  );
}

export default AlertLink;