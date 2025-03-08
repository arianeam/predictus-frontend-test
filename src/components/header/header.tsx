'use client';

import React, { useState } from 'react'
import styles from './header.module.scss';
import Image from 'react-bootstrap/Image';
import Menu from './menu';
import { Stack } from 'react-bootstrap';
import UserMenu from './user-menu';

interface SelectedItem {
  title: string;
  icon: string;
}

function Header() {

  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    title: '',
    icon: '',
  });

  const handleMenuSelect = (item: SelectedItem) => {
    setSelectedItem(item);
  };

  const handleUserMenuSelect = (item: string) => {
    console.log(item);
  };

  return (
    <div className={styles.header}>
      <div className={`d-none d-md-flex ${styles.desktop}`}>
        <Stack direction='horizontal'>
          <Menu onSelect={handleMenuSelect} />
          {selectedItem.title.length > 0 && <div className={styles.moduleTitle}>
            {
              <Stack direction='horizontal' gap={4}>
                <Image src={selectedItem.icon} alt='módulo ícone' height="32px" />
                {selectedItem.title}
              </Stack>
            }
          </div>}
        </Stack>
        <Image src='/logo.svg' className={styles.image} />
        <Stack direction='horizontal'>
          <div className={styles.notifications}>
            <Image src='/badge_bell.svg' alt='notificações' className={styles.notifications} />
          </div>
          <UserMenu onSelect={handleUserMenuSelect} />
        </Stack>
      </div>
      <div className={`d-flex d-md-none ${styles.desktop}`}>
        <Menu onSelect={handleMenuSelect} />
        <Image src='/logo.svg' className={styles.image} alt='logo'/>
        <UserMenu onSelect={handleUserMenuSelect} />
      </div>
    </div>
  )
}

export default Header