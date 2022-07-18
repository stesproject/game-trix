import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feeds from "./components/Feeds/Feeds";
import Create from "./components/Create/Create";
import Header from "./components/Header/Header";
// import { t } from "i18next";
// import Modal from "./components/Modal/Modal";
// import Login from "./routes/Login/Login";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  // selectShouldLogin,
  selectUserDetails,
  setAllUsers,
  setShouldLogin,
} from "./app/slices/userSlice";
import { useEffect } from "react";
import { usersCol } from "./hooks/useDb";
import { getDocs } from "firebase/firestore";
import { User, Users } from "./types/user.type";

function App() {
  const userDetails = useAppSelector(selectUserDetails);
  // const shouldLogin = useAppSelector(selectShouldLogin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userDetails) {
      dispatch(setShouldLogin(false));
      getAllUsers();
    }
  }, [userDetails]);

  const getAllUsers = async () => {
    const docSnapshots = await getDocs(usersCol);
    let _users: Users = {};
    docSnapshots.docs.forEach((userDoc) => {
      _users[userDoc.id] = userDoc.data() as User;
    });

    dispatch(setAllUsers(_users));
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="page mt-14">
          <Routes>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/" element={<Feeds />}></Route>
          </Routes>
        </div>
      </Router>
      {/* <Modal open={shouldLogin} onClose={() => dispatch(setShouldLogin(false))} title={t("login")}>
        <Login />
      </Modal> */}
    </div>
  );
}

export default App;
