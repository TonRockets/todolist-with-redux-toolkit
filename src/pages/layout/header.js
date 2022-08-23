import { PageHeader, Image } from 'antd';
import logo from '../../assets/img/logo.jpg';
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
      <SHeader>
        <PageHeader
          className="site-page-header"
          title="ToDo List"
          extra={
            <a href="/">
              <Image preview={false} src={logo} />{' '}
            </a>
          }
        />
      </SHeader>
    </div>
  );
};

const SHeader = styled.div`
  box-shadow: 0px 5px 10px #181f0e;
  margin-bottom: 30px;
  font-family: 'Roboto', sans-serif;

  .site-page-header {
    width: 90%;
    color: white;
    margin: auto;
    height: 100px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      .ant-page-header-heading-title {
        font-size: 20px;
        font-weight: 600;
        width: 120px;
        height: 40px;
        border-radius: 20px;
        background-color: #668c8a;
        box-shadow: 0px 5px 10px #181f0e;
        text-align: center;
        line-height: 40px;
        text-shadow: 0px 5px 10px #181f0e;
      }

      button {
        width: 80px;
        height: 35px;
        border: none;
        color: #003333;
        font-weight: 600;
        border-radius: 4px;
        cursor: pointer;
        box-shadow: 0px 3px 10px #181f0e;
      }

      img {
        width: 75px;
        border-radius: 40px;
      }
    }
  }
`;

export default Header;
