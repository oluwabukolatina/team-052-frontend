import React, { Fragment, useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import Navigation from '../layouts/Navigation';
import { AppContext } from '../../context/AppState';
import PropTypes from 'prop-types';
const CreateReport = ({ history }) => {
  const { report, createReport, onReportChange, onFileChange, file, loadingReport } = useContext(AppContext);
  // const { onChange } = useReports();
  const { location, name } = report;
  const isEnabled = () => location.length > 0 && file !== null;
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('visual_image', file);
    data.append('location', location);
    data.append('title', name);
    // data.append('note', description);

    createReport(data, history);
  };

  return (
    <Fragment>
      <Navigation />
      {/* <Navigation backgroundColor={'rgb(1, 136, 73)'} variantColor={'light'} /> */}
      {/*<Banner />*/}
      <div className="container mt-3 pt-3 pb-3 shadow form-container">
        <form onSubmit={submit}>
          <div className="row">
            <div className="col-12 mb-5">
              <input
                name="name"
                value={name}
                onChange={onReportChange}
                type="text"
                className="form-control"
                placeholder="Title example; severe accident at ojota"
              />
            </div>

            {/*<div className="col-12 mb-5">*/}
            {/*  <textarea*/}
            {/*    className="form-control"*/}
            {/*    name="description"*/}
            {/*    value={description}*/}
            {/*    onChange={onReportChange}*/}
            {/*    id="exampleFormControlTextarea1"*/}
            {/*    rows={3}*/}
            {/*    placeholder="Short description of the incident"*/}
            {/*  />*/}
            {/*</div>*/}
            <div className="col-12 mb-5">
              <input type="file" name="file" onChange={onFileChange} className="form-control" />
            </div>
            <div className="col-12 mb-5">
              <input
                name="location"
                value={location}
                onChange={onReportChange}
                type="text"
                className="form-control"
                placeholder="Location e.g Lekki Epe"
              />
            </div>
          </div>

          <div className="text-center">
            {loadingReport ? (
              <button disabled={loadingReport} type="submit" className="btn btn-success btn-lg">
                Reporting...
              </button>
            ) : (
              <button disabled={!isEnabled()} type="submit" className="btn btn-success btn-lg">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>

      {/* <div className="container">
        <AppFooter />
      </div> */}
      <ToastContainer />
    </Fragment>
  );
};
CreateReport.propTypes = {
  history: PropTypes.shape(),
};

export default CreateReport;
