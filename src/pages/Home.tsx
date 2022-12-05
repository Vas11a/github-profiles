import React from 'react';
import LeftBar from '../components/LeftBar';
import UserProfile from '../components/UserProfile';
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { changeUserName, changeUser, changeLoading } from '../redux/slices/findSlice';
import { userObTypes } from '../types';
import loading from '../imgs/loading.gif'
import { hidePages } from '../redux/slices/getReposSlice';
import axios from 'axios'

type serverAns = {
  data: userObTypes;
};

const Home: React.FC = () =>  {
  const {userName, userOb, isLoading} = useAppSelector((state) => state.find)
  const { mainTitles, form, errors } = useAppSelector((state) => state.language.languageOb)
  const dispatch = useAppDispatch()

  const getUser = async () => {
    dispatch(changeLoading(true))
    dispatch(hidePages());
     try {
       const res: serverAns = await axios.get(`https://api.github.com/users/${userName}`);
       dispatch(
         changeUser({
           login: res.data.login,
           avatar_url: res.data.avatar_url,
           html_url: res.data.html_url,
           repos_url: res.data.repos_url,
           name: res.data.name,
           company: res.data.company,
           location: res.data.location,
           email: res.data.email,
           bio: res.data.bio,
           public_repos: res.data.public_repos,
           updated_at: res.data.updated_at,
           followers: res.data.followers,
         }),
       );
       dispatch(changeUserName(''));
       dispatch(changeLoading(false));
     } catch (error) {
        dispatch(changeUser(null))
        dispatch(changeLoading(false));
     }
  }
  return (
    <>
      <LeftBar page="profile" />
      <div className="right_part">
        <h1 className="title">{mainTitles[1]}</h1>
        <div className="form">
          <input
            type="text"
            value={userName}
            placeholder={form[1]}
            className="findUser"
            onChange={(e) => dispatch(changeUserName(e.target.value))}
          />
          <button className="find" onClick={getUser}>
            {form[2]}
          </button>
        </div>
        {isLoading && <img src={loading} alt="Loading..." className="loadingUser" />}
        {userOb === null ? (
          <div style={{ textAlign: 'center', fontWeight: 'bold' }}>{errors}</div>
        ) : (
          <UserProfile />
        )}
      </div>
    </>
  );
}
export default Home;