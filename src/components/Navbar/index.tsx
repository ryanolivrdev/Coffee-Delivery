import { Counter, LocationContainer, MenuWrapper, NavbarContainer } from "./styles";

import Logo from "../../assets/logo-coffee-delivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarContainer>
      <NavLink to='/' title="Home">
        <img src={Logo} alt="" />
      </NavLink>

      <MenuWrapper>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </LocationContainer>

        <NavLink to='/cart' title="Carrinho">
          <Counter><strong>3</strong></Counter>
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </MenuWrapper>
    </NavbarContainer>
  );
}
