import Header from './header';

const Layout = ({ children }) => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
