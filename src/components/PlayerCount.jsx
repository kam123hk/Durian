import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const PlayerCount = ({setGameStarted, setNumberOfComputerPlayers}) => {

    const items = [
        {
          label: (
            <a onClick={(e) => {
                setGameStarted(true)
                setNumberOfComputerPlayers(1)
            }}>Uno</a>
          ),
          key: '0',
        },
        {
          label: (
            <a onClick={(e) => {
                setGameStarted(true)
                setNumberOfComputerPlayers(2)
            }}>Dos</a>
          ),
          key: '1',
        },
        {
            label: (
              <a onClick={(e) => {
                  setGameStarted(true)
                  setNumberOfComputerPlayers(3)
              }}>Tres</a>
            ),
            key: '2',
          },
        {
          type: 'divider',
        },
        {
          label: '3rd menu item（disabled）',
          key: '3',
          disabled: true,
        },
      ];

  return (<Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        How many Computer players?
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>)
};
export default PlayerCount;