import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar/Sidebar';

const PageContainer = styled.div`
  max-width: 90%;
  display: flex;
  margin: 3rem auto 8rem auto;
`;

const MyAccountPage = ({ children }) => {
  return (
    <PageContainer>
      <Sidebar />
      <div>{children}</div>
    </PageContainer>
  );
};

export default MyAccountPage;

MyAccountPage.defaultProps = {
  children: null,
};

MyAccountPage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};
