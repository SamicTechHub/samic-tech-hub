import React from 'react'
import style from "../styles/component.module.css"
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function SubmitBtn({actionText, action, clicked}) {

  
  const antIcon = (
    <LoadingOutlined style={{ fontSize: "24px", color: "white" }} spin />
  );
  return (
    <div className={style.inputGroup}>
      <button onClick={action} className={style.submitBtn}> {clicked ? <Spin indicator={antIcon} /> : actionText } </button>
    </div>
  )
}

export default SubmitBtn
