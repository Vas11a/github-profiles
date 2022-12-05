import React from 'react'
import Repo from './Repo'
import axios from 'axios'
import {useAppSelector, useAppDispatch} from '../redux/hook'
import { loadRepos, addPage, hidePages, changeLoading } from '../redux/slices/getReposSlice';
import {RepoType} from '../types'
import loading from '../imgs/loading.gif'

type ReposBlockProps =  {
    repos: string;
}

type serverAns = {
    data: RepoType[]
}

const ReposBlock: React.FC<ReposBlockProps> = ({repos}) => {
    const dispatch = useAppDispatch();
    const {getReposs, hideRepos} = useAppSelector((state) => state.language.languageOb.profile)
    const { page, reposArr, isLoading } = useAppSelector((state) => state.getRepos);

    const getRepos = async () => {
        dispatch(changeLoading(true));
        const res: serverAns = await axios.get(`${repos}?page=1&per_page=${page}`);
        dispatch(loadRepos(res.data))
        dispatch(addPage());   
        dispatch(changeLoading(false));
    }
    return (
      <>
        <div className="repos">
          {isLoading && <img src={loading} alt="Loading..." className="loadingRepo" />}

          {reposArr !== null &&
            reposArr.map((elem) => (
              <Repo
                key={elem.id}
                description={elem.description}
                name={elem.name}
                html_url={elem.html_url}
                updated_at={elem.updated_at}
                id={elem.id}
              />
            ))}
        </div>
        <div className="get_repo_block" style={{ gap: '10px' }}>
          <button onClick={getRepos} className="get_repo">
            {getReposs}
          </button>
          <button onClick={() => dispatch(hidePages())} className="get_repo">
            {hideRepos}
          </button>
        </div>
      </>
    );
}

export default ReposBlock