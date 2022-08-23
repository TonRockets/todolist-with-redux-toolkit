import { useEffect, useState } from 'react';
import { getUsers, getTasks } from '../services';
import { useDispatch } from 'react-redux';
import { addUsers } from '../features/counter/userSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState();

  useEffect(() => {
    const showUsers = async () => {
      const { data } = await getUsers();
      setUsers(data);

      const response = await getTasks();
      dispatch(addUsers(response.data));
    };
    showUsers();
  }, [dispatch]);

  return (
    <SContainer>
      {users
        ? users.map((item, index) => (
            <GridItems
              key={index}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/tasks', { state: item.id })}>
              <div>
                <h2>{item.username}</h2>
                <p className="username">{item.name}</p>
                <p>{item.email}</p>
                <p>{item.address.city}</p>
                <p>{item.website}</p>
              </div>
            </GridItems>
          ))
        : ''}
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 75vw;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  margin: auto;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
`;

const GridItems = styled.div`
  display: grid;
  align-items: flex-start;
  min-width: 225px;
  padding: 10px;
  border-radius: ${({ title }) => (title ? '5px' : '15px')};
  background-color: #fff;
  box-shadow: 0px 5px 10px #181f0e;
  word-wrap: break-word;

  div {
    word-wrap: break-word;
  }

  h2 {
    margin: auto;
  }

  p {
    margin: 0;
  }

  .username {
    color: #003333;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    font-family: 'Roboto', sans-serif;
  }
`;

export default Users;
