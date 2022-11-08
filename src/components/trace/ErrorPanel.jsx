const ErrorPanel = ({ error}) => {
  const { title, msg } = error;
  return (
    <div className="panel panel-default tomato">
      <div className="panel-heading not-found">
        {title}
      </div>
      <div className="panel-body not-found-body">
        <p>{msg}</p>
      </div>
    </div>
  )
}

export default ErrorPanel; 