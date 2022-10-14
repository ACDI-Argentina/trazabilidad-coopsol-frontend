import { useState } from "react";
import Loader from '../Loader';

const SearchPanel = ({ search, loading }) => {

  const [lotNumber, setLotNumber] = useState("2123");
  const [itemNumber, setItemNumber] = useState("20200812102834149");


  return (
    <div className="panel panel-default teal">
      <div className="panel-heading">
        Trace item
      </div>
      <div id="gepir-form-container" className="panel-body">
        <form id="trace" method="POST" action="">
          <div className="col-md-6">
            <div className="form-group">
              <label className="control-label" htmlFor="keyValue">Lot Number</label>
              <input
                className="form-control"
                placeholder="Lot Number" id="lotNumber"
                value={lotNumber}
                onChange={ev => setLotNumber(ev.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="control-label" htmlFor="keyValue">Item Number</label>
              <input
                className="form-control"
                placeholder="Item Number"
                type="text"
                value={itemNumber}
                onChange={ev => setItemNumber(ev.target.value)} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <button
                className="button-5"
                id="submit-button"
                onClick={(ev) => {
                  ev.preventDefault();
                  search(lotNumber, itemNumber);
                }}>
                Search
                <div className="loader"></div>

                <Loader active={loading} />

              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchPanel; 