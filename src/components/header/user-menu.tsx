'use client';

import React from 'react';
import { Dropdown, DropdownButton, Stack, Image } from 'react-bootstrap';
import styles from './header.module.scss';

interface SelectedItem {
    title: string;
    icon: string;
}

interface MenuProps {
    onSelect: (item: string) => void;
}

function UserMenu({ onSelect }: MenuProps) {

    const handleSelect = (item: string) => {
        onSelect(item);
    };

    const menuItems: SelectedItem[] = [
        { title: 'Minha Conta', icon: '/avatar.svg' },
        { title: 'Sair', icon: '/logout.svg' },
    ];

    const title = () => {
        return (
            <Stack gap={2} direction='horizontal'>
                <div className={styles.userPhoto}>
                    <Image src='/photo.png' alt='foto' />
                </div>
                <div className={styles.userName}>Carla Souza</div>
                <Image src='/chevron-down.svg' alt='chevron' />
            </Stack>
        )
    }

    return (
        <>
            <DropdownButton
                id="dropdown-basic-button"
                title={title()}
                variant='link'
                className={`d-none d-md-block ${styles.menu}`}
            >

                {menuItems.map((item) => (
                    <Dropdown.Item
                        key={item.title}
                        className={styles.menuSubTitle}
                        onClick={() => handleSelect(item.title)}
                    >
                        <Image src={item.icon} alt={item.title} style={{ marginRight: '16px' }} />
                        {item.title}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
            <DropdownButton
                id="dropdown-basic-button"
                title={<img src='/Left.svg' alt='mobile menu' />}
                variant='link'
                className={`d-block d-md-none ${styles.menu}`}
            >
                <Dropdown.Item
                    key='notificacoes'
                    className={styles.menuSubTitle}
                    onClick={() => handleSelect('Notificações')}
                >
                    <Stack direction='horizontal'>
                        <div style={{ marginRight: "16px" }}>
                            <Image src='/badge_bell_green.svg' alt='notificações' />
                        </div>
                        Notificações
                    </Stack>
                </Dropdown.Item >
                {
                    menuItems.map((item) => (
                        <Dropdown.Item
                            key={item.title}
                            className={styles.menuSubTitle}
                            onClick={() => handleSelect(item.title)}
                        >
                            < img src={item.icon} alt={item.title} style={{ marginRight: '16px' }} />
                            {item.title}
                        </Dropdown.Item>
                    ))
                }
            </DropdownButton >
        </>
    );
}

export default UserMenu;
