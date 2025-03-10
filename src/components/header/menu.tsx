'use client';

import React, { useState } from 'react';
import { Dropdown, DropdownButton, Image } from 'react-bootstrap';
import styles from './header.module.scss';

interface SelectedItem {
    title: string;
    icon: string;
}

interface MenuProps {
    onSelect: (item: SelectedItem) => void;
}

function Menu({ onSelect }: MenuProps) {
    const [selectedItem, setSelectedItem] = useState<SelectedItem>({
        title: '',
        icon: '',
    });

    const handleSelect = (item: SelectedItem) => {
        setSelectedItem(item);
        onSelect(item);
    };

    const menuItems: SelectedItem[] = [
        { title: 'Dossiê Jurídico', icon: '/dossie_icone.svg' },
        { title: 'Monitoramento de Processos', icon: '/monitoramento_icone.svg' },
        { title: 'Buscador de Processos', icon: '/buscador_icone.svg' },
    ];


    const subMenuItems: SelectedItem[] = [
        { title: 'Gestão do plano', icon: '/plano-icone.svg' },
        { title: 'Gestão de Acessos', icon: '/acessos-icone.svg' },
        { title: 'Histórico de Buscas', icon: '/historico-icone.svg' },
    ];

    return (
        <DropdownButton
            id="dropdown-basic-button"
            title={<Image src='/menu.svg' alt='menu icon' />}
            variant='link'
            className={styles.menu}
        >
            {menuItems.map((item) => (
                <h4 key={item.title}>
                    <Dropdown.Item
                        onClick={() => handleSelect(item)}
                        active={selectedItem.title === item.title}
                    >
                        <Image src={item.icon} alt={item.title} style={{ marginRight: '16px' }} />
                        {item.title}
                    </Dropdown.Item>
                </h4>
            ))}
            <Dropdown.Divider />
            {subMenuItems.map((item) => (
                <Dropdown.Item
                    key={item.title}
                    className={styles.menuSubTitle}
                >
                    <Image src={item.icon} alt={item.title} style={{ marginRight: '16px' }} />
                    {item.title}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
}

export default Menu;
