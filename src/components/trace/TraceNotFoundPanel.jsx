
const TraceNotFoundPanel = ({ search, loading }) => {
  return (
    <div className="panel panel-default tomato">
      <div className="panel-heading not-found">
        Trace not found
      </div>
      <div className="panel-body not-found-body">
        <p>We cannot find a trace with the provided values. Please check the values and try again</p>

      </div>
    </div>
  )
}

export default TraceNotFoundPanel; 