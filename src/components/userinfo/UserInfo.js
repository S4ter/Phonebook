import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/actions';
import './UserInfo.styles.css';
export const UserInfo = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };
  const user = useSelector(state => {
    return state.auth.user;
  });

  if (user.name === null) {
    return;
  } else {
    return (
      <div className="user_container">
        <div className="user_info">
          <div className="user_email">
            <p>{user.email} </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M8.50008 8.50002C10.8022 8.50002 12.6667 6.63544 12.6667 4.33335C12.6667 2.03127 10.8022 0.166687 8.50008 0.166687C6.198 0.166687 4.33341 2.03127 4.33341 4.33335C4.33341 6.63544 6.198 8.50002 8.50008 8.50002ZM8.50008 10.5834C5.71883 10.5834 0.166748 11.9792 0.166748 14.75V15.7917C0.166748 16.3646 0.635498 16.8334 1.20841 16.8334H15.7917C16.3647 16.8334 16.8334 16.3646 16.8334 15.7917V14.75C16.8334 11.9792 11.2813 10.5834 8.50008 10.5834Z"
                fill="#e0e1dd"
              />
            </svg>
          </div>

          <button onClick={handleLogout} className="logout_button">
            Logout
          </button>
        </div>
      </div>
    );
  }
};
