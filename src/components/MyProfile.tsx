import React from 'react';
import ReposBlock from './ReposBlock';
import { useAppSelector } from '../redux/hook';


export default function MyProfile() {
  const { yourOb } = useAppSelector((state) => state.myslice);
  const { thema } = useAppSelector((state) => state.thema);
  const { profile } = useAppSelector((state) => state.language.languageOb);
  return (
    <div className="profile my_profile">
      {yourOb !== null && (
        <>
          <a
            href={yourOb.html_url}
            target="_blanc"
            className="user_name"
            style={{ color: thema === 'dark' ? '#D3D2D5' : 'black' }}>
            {yourOb.login}
          </a>
          <div className="main_block">
            <img src={yourOb.avatar_url} alt="avatar" className="photo_prof" />
            <div className="description">{yourOb.bio}</div>
          </div>
          <div className="other_info">
            <div className="punkt">
              <strong>{profile.name}: </strong>
              <span>{yourOb.name === null ? 'unknown' : yourOb.name}</span>
            </div>
            <div className="punkt">
              <strong>{profile.company}: </strong>
              <span>{yourOb.company === null ? 'no company' : yourOb.company}</span>
            </div>
            <div className="punkt">
              <strong>{profile.location}: </strong>
              <span>{yourOb.location === null ? 'unknown' : yourOb.location}</span>
            </div>
            <div className="punkt">
              <strong>{profile.email}: </strong>
              <span>{yourOb.email === null ? 'unknown' : yourOb.email}</span>
            </div>
            <div className="punkt">
              <strong>{profile.followers}: </strong> <span>{yourOb.followers}</span>
            </div>
          </div>
          <div className="repo_block">
            <h2>
              {profile.repos}: {yourOb.public_repos}
            </h2>
            <ReposBlock repos={yourOb.repos_url} />
          </div>
        </>
      )}
    </div>
  );
}
