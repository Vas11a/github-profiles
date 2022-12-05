import React from 'react';
import ReposBlock from './ReposBlock';
import { useAppSelector } from '../redux/hook';

const UserProfile: React.FC = () =>  {
  const { userOb } = useAppSelector((state) => state.find);
  const {thema} = useAppSelector((state) => state.thema)
  const {profile} = useAppSelector((state) => state.language.languageOb)
  return (
    <div className="profile">
      {userOb !== null && (
        <>
          <a
            href={userOb.html_url}
            target="_blanc"
            className="user_name"
            style={{ color: thema === 'dark' ? '#D3D2D5' : 'black' }}>
            {userOb.login}
          </a>
          <div className="main_block">
            <img src={userOb.avatar_url} alt="avatar" className="photo_prof" />
            <div className="description">{userOb.bio}</div>
          </div>
          <div className="other_info">
            <div className="punkt">
              <strong>{profile.name}: </strong>
              <span>{userOb.name === null ? 'unknown' : userOb.name}</span>
            </div>
            <div className="punkt">
              <strong>{profile.company}: </strong>
              <span>{userOb.company === null ? 'no company' : userOb.company}</span>
            </div>
            <div className="punkt">
              <strong>{profile.location}: </strong>
              <span>{userOb.location === null ? 'unknown' : userOb.location}</span>
            </div>
            <div className="punkt">
              <strong>{profile.email}: </strong>{' '}
              <span>{userOb.email === null ? 'unknown' : userOb.email}</span>
            </div>
            <div className="punkt">
              <strong>{profile.followers}: </strong> <span>{userOb.followers}</span>
            </div>
          </div>
          <div className="repo_block">
            <h2>
              {profile.repos}: {userOb.public_repos}
            </h2>
            <ReposBlock repos={userOb.repos_url} />
          </div>
        </>
      )}
    </div>
  );
}

export default UserProfile;