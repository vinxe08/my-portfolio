import { NavHashLink } from 'react-router-hash-link'

export const NavbarList = ({ location , name, Cname, click }) => {
  return(
    <NavHashLink
      smooth
      to={location}
      activeClassName=""
      className={Cname}
      onClick={click}
      >
      {name}
    </NavHashLink>
  )
}