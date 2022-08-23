import { useState } from 'react';
import styled, { css } from 'styled-components';

const EditTask = ({ tasks }) => {
  // eslint-disable-next-line no-unused-vars
  const [completed, setCompleted] = useState(tasks.completed.toString());
  return (
    <EditTasks completed={completed}>
      <p>{tasks.title}</p>
      {completed === 'true' ? (
        <div>
          <p>
            Completed <i className="fa-solid fa-circle-check"></i>
          </p>
        </div>
      ) : (
        <div>
          <p>
            Not Completed <i className="fa-solid fa-circle-xmark"></i>
          </p>
        </div>
      )}
    </EditTasks>
  );
};

const EditTasks = styled.div`
  ${({ completed }) =>
    completed === 'true'
      ? css`
          div {
            display: flex;
            align-items: center;
          }
          i {
            color: #008000;
          }
        `
      : css`
          i {
            color: #800000;
          }
        `}
`;

export default EditTask;
