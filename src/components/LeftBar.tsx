import React from 'react'
import {Link} from 'react-router-dom'
import github from '../imgs/gh.png'
import linkedIn from '../imgs/linkedIn.png';
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { changeThema } from '../redux/slices/themaSlice';
import gmail from '../imgs/gmail.png'
import {hidePages} from '../redux/slices/getReposSlice'
import {changeLanguage} from '../redux/slices/languageSlice'

interface leftBarProps {
  page: string
}

const LeftBar: React.FC<leftBarProps> = ({ page }) => {
  const {thema} = useAppSelector((state) => state.thema)
  const {languageOb } = useAppSelector((state) => state.language)
  const dispatch = useAppDispatch()
  const chThema = () => {
    dispatch(changeThema(thema === 'dark' ? 'white': 'dark'));
  }
  const chLang = () => {
    dispatch(changeLanguage());
  }
  return (
    <div className="left_part">
      <div className="options">
        <Link
          to={page === 'profile' ? 'profile' : '/'}
          className="option"
          onClick={() => dispatch(hidePages())}
          style={{ textDecoration: 'none', color: thema === 'dark' ? '#D3D2D5' : 'black' }}>
          {page === 'profile' ? languageOb.leftBar[0] : languageOb.leftBar[1]}
        </Link>
        <div onClick={chLang} className="option">{languageOb.leftBar[2]}</div>
        <div onClick={chThema} className="option option-last">
          {thema === 'dark' ? languageOb.leftBar[3] : languageOb.leftBar[4]}
        </div>
      </div>
      <div className="messengers">
        <a href="https://github.com/Vas11a" target="_blanc" className="messengers">
          <img src={github} alt="githun" />
        </a>
        <a href="mailto:vasapanov721@gmail.com" target="_blanc" className="messengers">
          <img src={gmail} alt="gmail" />
        </a>
        <a
          href="https://www.linkedin.com/in/vasia-panov-34586b241"
          target="_blanc"
          className="messengers">
          <img src={linkedIn} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default LeftBar;