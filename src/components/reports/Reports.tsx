/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, FC } from 'react';
import Navigation from '../layouts/Navigation';
import { ReportsContainer } from '../../styles/ReportsStyle';
import AppFooter from '../layouts/AppFooter';
import useReports from '../../hooks/reports/useReports';

const Reports: FC = () => {
  const { reports, loading } = useReports();

  // {
  //   "note": "Alice to herself, 'I don't see how the game began. Alice gave a little timidly, for she was to.",
  //   "location": "2903 Pansy Radial Suite 926",
  //   "time_of_report": "2020-05-13T16:16:16.000000Z",
  //   "status_updated_at": "2020-05-13T16:16:16.000000Z"
  //   },

  const displayReports = () =>
    reports && reports.length
      ? reports.map(
          (report: { id: string | number; visual_image: string; title: string; status: string; location: string }) => (
            <div key={report.id} className="col-md-6 mb-4" style={{ width: '18rem' }}>
              <div className="card shadow">
                <div className="reports-image m-4">
                  <img src={report.visual_image} className="card-img-top" />
                </div>
                <div className="card-body pt-2">
                  {/* <div style={{ display: 'flex' }}> */}
                  <p className="card-title text-center">
                    <strong>{report.title}</strong>
                  </p>
                  <hr />

                  <div style={{ display: 'flex' }}>
                    <p>STATUS</p>: <span className="text-info">{report.status}</span>
                    {/* <p className="te/zxt-right ml-auto">Location: </p> */}
                    <span className="text-right ml-auto">{report.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        )
      : 'no reports';

  return (
    <Fragment>
      <Navigation backgroundColor={'rgb(1, 136, 73)'} variantColor={'light'} />
      {/* <Banner /> */}
      <div className="container">
        <ReportsContainer>
          <div className="row">
            {loading ? (
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
            ) : (
              displayReports()
            )}
          </div>
        </ReportsContainer>
        <AppFooter />
      </div>
    </Fragment>
  );
};

export default Reports;
