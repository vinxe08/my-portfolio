import { NavHashLink } from 'react-router-hash-link'

export const NavbarList = ({ location , name, Cname }) => {  
  
  return(
    <NavHashLink
      smooth
      to={location}
      activeClassName={false}
      className={Cname}
      >
      {name}
    </NavHashLink>
  )
}