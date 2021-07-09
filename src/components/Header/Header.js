import React, { useEffect } from 'react';
import './header.scss';
import { Form, Input, Cascader, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import logo from '../../img/logo-black.png';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function Header() {
  useEffect(() => {
    // console.log(refShowChild.current);
  }, []);
  return (
    <header>
      <div className="border">
        <ul className=" navbar__menu__list">
          <li>
            <a className="navbar__toggle">
              <PlusOutlined />
              {/* Свернуть */}
            </a>
          </li>
        </ul>
      </div>
      <div className="logotype">
        <img src={logo} />
      </div>
      <div className="border">
        <Button type="primary" shape="round" icon={<DownloadOutlined />}>
          Download
        </Button>
      </div>
    </header>
  );
}

export default Header;
