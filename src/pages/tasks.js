import { useEffect, useState } from 'react';
import { getUsersTasks } from '../services';
import { useLocation } from 'react-router-dom';
import EditTask from './editTask';
import styled from 'styled-components';

const Tasks = () => {
  const location = useLocation();
  const [stateUserTasks, setStateUserTasks] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [idEdit, setIdEdit] = useState();
  const [valueInputTask, setvalueInputTask] = useState({});

  useEffect(() => {
    const getTasks = async () => {
      const { data } = await getUsersTasks(location.state);
      setStateUserTasks(data);
    };
    getTasks();
  }, [location.state]);

  const editTask = (user) => {
    setIdEdit(user.id);
    setIsEdit(!isEdit);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setvalueInputTask({
      ...valueInputTask,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const newArr = stateUserTasks.map((item) => {
      if (item.id === idEdit) {
        return {
          ...Object.values(item).toString(),
          title: valueInputTask.title,
          completed: valueInputTask.completed
        };
      }
      return item;
    });
    setIsEdit(!isEdit);
    setStateUserTasks(newArr);
  };

  return (
    <SContainer>
      {stateUserTasks
        ? stateUserTasks.map((item, index) => (
            <GridItems title={item.title} completed={item.completed} key={index}>
              <div>
                <i
                  onClick={() => editTask(item)}
                  id="edit"
                  className="fa-regular fa-pen-to-square"></i>
              </div>

              {idEdit === item.id && isEdit === true ? (
                <>
                  <input
                    name="title"
                    onChange={handleChange}
                    defaultValue={item.title}
                    value={valueInputTask.title}
                  />
                  <input
                    name="completed"
                    onChange={handleChange}
                    defaultValue={item.completed}
                    value={valueInputTask.completed}
                  />
                  <button onClick={handleSubmit} type="submit">
                    Salvar
                  </button>
                </>
              ) : (
                <EditTask tasks={item} />
              )}
            </GridItems>
          ))
        : ''}
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 75vw;
  height: 100vh;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 15px;
  margin: auto;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
`;

const GridItems = styled.div`
  display: grid;
  align-items: flex-start;
  min-width: ${({ title }) => (title ? '200px' : '250px')};
  padding: 10px;
  border-radius: ${({ title }) => (title ? '5px' : '15px')};
  background-color: #fff;
  box-shadow: 0px 5px 10px #181f0e;
  word-wrap: break-word;

  h2 {
    margin: 10px auto;
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

  #edit {
    color: #000;
    margin-left: 97%;
    cursor: pointer;
  }

  button {
    border: none;
    background-color: #329932;
    border-radius: 2px;
    height: 25px;
    margin-top: 5px;
    color: white;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
  }

  input {
    border: none;
    border-bottom: 1px solid #b2b2b2;
    outline: none;
    width: 50%;
    height: 40px;
    text-align: center;
  }
`;

export default Tasks;
