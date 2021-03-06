import React, { ReactNode } from 'react';
import useReports from '../hooks/reports/useReports';
import AppContext from './AppContext';
import useAuthentication from '../hooks/auth/useAuthentication';
import useAdmin from '../hooks/admin/useAdmin';

interface AppProps {
  children: ReactNode;
}

// eslint-disable-next-line react/prop-types
export const AppState = ({ children }: AppProps) => {
  const { Provider } = AppContext;
  const { reports, loading, report, createReport, onReportChange, onFileChange, file, loadingReport } = useReports();
  const { onChange, login, loginUser, loadingLogin, logoutUser } = useAuthentication();
  const { admin, createAdminChange, createAdmin, creatingAdmin } = useAdmin();
  return (
    <Provider
      value={{
        reports,
        loading,
        report,
        onChange,
        login,
        loginUser,
        loadingLogin,
        admin,
        createAdminChange,
        createAdmin,
        creatingAdmin,
        logoutUser,
        createReport,
        onReportChange,
        onFileChange,
        file,
        loadingReport
      }}
    >
      {children}
    </Provider>
  );
};

// export default AppState;
