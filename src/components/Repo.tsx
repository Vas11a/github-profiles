import React from 'react'
import { RepoType } from '../types';
import { useAppSelector } from '../redux/hook';


const Repo: React.FC<RepoType> = ({name, description, updated_at, html_url}) => {
  const {thema} = useAppSelector((state) => state.thema)
  const {repo} = useAppSelector((state) => state.language.languageOb)
  return (
    <div className="repo">
      <a
        target="_blanc"
        href={html_url}
        className="repo_title"
        style={{ color: thema === 'dark' ? '#D3D2D5' : 'black' }}>
        {name}
      </a>
      <div className="repo_desc">{description}</div>
      <div className="repo_punkt">
        <strong>{repo}: </strong>
        {updated_at}
      </div>
    </div>
  );
}

export default Repo