import React from 'react';

import { Container, Link } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  path: string;
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  path,
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link to="/" active={path === '/'}>
          Listagem
        </Link>
        <Link to="/import" active={path === '/import'}>
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
