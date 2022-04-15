import React from 'react';
import { SiNotion } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'

const SNS = () => {
  return (
    <div className="sns">
      <a href="#notion" target="_blank" class="sns__link">
        <SiNotion />
      </a>
      <a href="#github" target="_blank" class="sns__link">
        <SiGithub />
      </a>
      <a href="#velog" target="_blank" class="sns__link">
        <SiNotion />
      </a>
    </div>
  )
}


export default SNS;
