import { Link, useLocation } from 'react-router-dom'

interface Props {
  path: string;
  text: string
}
export const NavItem = ({ path, text }: Props) => {
  const location = useLocation()
  console.log('location: ', location);

  return (
    <Link className={`${location.pathname == path ? 'header_sticky_nav_list_item--active' : 'header_sticky_nav_list_item'}`} to={path}>{text}</Link>
  )
}