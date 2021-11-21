import React from 'react';
import './Card.css';

// Card: 그것은 div 또는 다른 종류의 컨테이너 HTML 요소를 반환할 수 있습니다
// 래퍼 컴포넌트
const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
