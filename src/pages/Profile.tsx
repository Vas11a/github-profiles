import React from 'react';
import LeftBar from '../components/LeftBar';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { changeProfile, changeyourNick, changeIsLoading } from '../redux/slices/myProfileSlice';
import { userObTypes } from '../types';
import MyProfile from '../components/MyProfile';
import axios from 'axios'
import loading from '../imgs/loading.gif';
import { hidePages } from '../redux/slices/getReposSlice'

type serverAns = {
  data: userObTypes;
};



export default function Profile() {
  const dispatch = useAppDispatch();
  const { mainTitles, form, errors } = useAppSelector((state) => state.language.languageOb);
  const { yourNick, isLoading, yourOb } = useAppSelector((state) => state.myslice)
  const changeUserProfile = async () => {
      try {
        dispatch(changeIsLoading(true))
        dispatch(hidePages());
        const res: serverAns = await axios.get(`https://api.github.com/users/${yourNick}`);
        dispatch(
          changeProfile({
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
        dispatch(changeIsLoading(false));
        dispatch(changeyourNick(''));
      } catch (error) {
        dispatch(changeProfile(null))
        dispatch(changeIsLoading(false));
        dispatch(changeyourNick(''));
      }
  }

  return (
    <>
      <LeftBar page="main" />
      <div className="right_part">
        <h1 className="title">{mainTitles[0]}</h1>
        <div className="form">
          <input
            type="text"
            placeholder={form[0]}
            className="findUser"
            value={yourNick}
            onChange={(e) => dispatch(changeyourNick(e.target.value))}
          />
          <button className="find" onClick={changeUserProfile}>
            {form[2]}
          </button>
        </div>
        {isLoading && <img src={loading} alt="Loading..." className="loadingUser" />}
        {yourOb === null ? (
          <div style={{ textAlign: 'center', fontWeight: 'bold' }}>{errors}</div>
        ) : (
          <MyProfile />
        )}
      </div>
    </>
  );
}
