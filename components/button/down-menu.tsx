import { Menu, Transition } from '@headlessui/react'
import { Fragment, ReactNode, SVGProps, useEffect, useRef, useState } from 'react'
import EditIcon from "public/icon/edit-icon.svg"
import UserIcon from "public/icon/user-icon.svg"
import LogoutIcon from "public/icon/log-out.svg"
import GoodIcon from "public/icon/good-icon.svg"
import SettingIcon from "public/icon/setting-icon.svg"
import { logout } from '../../lib/auth'
import Avatar from '../profile/avater'
import { useAuth } from '../../context/auth'
import { classNames } from '../../lib/class-names'
import MenuLink from '../profile/menu-link'

const Links = [
{
  label: '編集',
  icon:  <EditIcon/>,
  path: '/edit-profile',
},
{
  label: '『推しリスト』を表示』',
  icon:  <UserIcon/>,
  path: '/box/#follow',
},
{
  label: 'いいねした回答',
  icon:  <GoodIcon/>,
  path: '/box/#good',
},
{
  label: '設定・課金',
  icon:  <SettingIcon/>,
  path: '/setting',
},
];


const ListItem = ({
  active,
  icon,
  label,
}: {
  active: boolean;
  icon: ReactNode;
  label: string;
}) => {
  return (
    <span
      className={classNames(
        'flex items-center space-x-2 p-2 rounded text-sm text-left',
        active && 'text-white bg-indigo-400'
      )}
    >
      <span
        className={classNames(
          'w-5 h-5',
          active ? 'text-white' : 'text-indigo-400'
        )}
      >
        {icon}
      </span>
      <span className="flex-1">{label}</span>
    </span>
  );
};

const DownMenu = () => {
  const user = useAuth();

  if (!user) {
    return null;
  }

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="inline-flex w-full justify-center rounded-full bg-indigo-300 
      bg-opacity-70 px-7 py-7 hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        {/* from block changed */}

      {/* Fix avater error later */}
      
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-slate-200 
        rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  text-indigo-400">
          <div className="p-1 border-b">
            {Links.map((link) => (
              <Menu.Item key={link.path}>
                {({ active }) => (
                  <MenuLink href={link.path}>
                    <ListItem
                      icon={link.icon}
                      label={link.label}
                      active={active}
                    />
                  </MenuLink>
                )}
              </Menu.Item>
            ))}
          </div>
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button className="w-full" onClick={logout}>
                  <ListItem
                    icon={<LogoutIcon />}
                    label="ログアウト"
                    active={active}
                  />
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DownMenu;

