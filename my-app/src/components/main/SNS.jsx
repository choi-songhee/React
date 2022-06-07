import React from 'react';
import { SiNotion } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { GiNotebook } from 'react-icons/gi'

const SNS = () => {
  return (
    <div className="sns">
      <a href="https://www.notion.so/ssonghee/Study-55937dae35364e8ab8ea3bfc26ae2dae" target="_blank" class="sns__link">
        <SiNotion />
      </a>
      <a href="https://github.com/choi-songhee" target="_blank" class="sns__link">
        <SiGithub />
      </a>
      <a href="https://velog.io/@songhee" target="_blank" class="sns__link">
        <GiNotebook />
      </a>
    </div>
  )
}


export default SNS;
