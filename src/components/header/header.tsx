'use client';

import React, { useState } from 'react'
import styles from './header.module.scss';
import Image from 'react-bootstrap/Image';
import Menu from './menu';
import { Stack } from 'react-bootstrap';

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

  return (
    <div className={styles.header}>
      <div className={`d-none d-md-flex ${styles.desktop}`}>
        <Stack direction='horizontal'>
          <Menu onSelect={handleMenuSelect} />
          {selectedItem.title.length > 0 && <div className={styles.moduleTitle}>
            {
              <Stack direction='horizontal' gap={4}>
                <img src={selectedItem.icon} alt='módulo ícone' height="32px" />
                {selectedItem.title}
              </Stack>
            }
          </div>}
        </Stack>
        <Image src='/logo.svg' className={styles.image} />
        <div>
          <Stack direction='horizontal'>
            <div className={styles.notifications}>
              <img src='/bell.svg' alt='notificações' />
              <img src='/Badge.svg' alt='notificações' className={styles.badge}/>
            </div>
          </Stack>
        </div>
      </div>
      <div className={`d-flex d-md-none ${styles.desktop}`}>
        <Menu onSelect={handleMenuSelect} />
        <Image src='/logo.svg' className={styles.image} />
      </div>
    </div>
  )
}

export default Header