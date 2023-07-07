const { Button } = require('react-bootstrap');
const { useSelector, useDispatch } = require('react-redux');
const { selectUser } = require('redux/user/userSelect');
const { logoutThunk } = require('redux/user/userThunk');

const InfoUser = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(logoutThunk());
  };
  return (
    <div>
      {user && (
        <div className=" d-flex gap=10">
          {/* <h4 className="text-light ">Welcome, {user.name}</h4> */}
          <Button
            bg="black"
            variant="dark"
            className="d-flex "
            onClick={handleSubmit}
          >
            Log Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default InfoUser;
