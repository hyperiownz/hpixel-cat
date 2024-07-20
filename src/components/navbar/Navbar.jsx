import Link from 'next/link';
import { 
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
} from '@/ui/navigation-menu';
import { menus } from '@/constants';
import { Menu } from './Menu';
import { Search } from 'lucide-react';
import SearchBar from '@/components/searchbar';
import './styles.css';
import LogoHpixel from '../../../public/images/hpixel_logo_blue.png'

function Navbar(props) {
	const menulist=menus.map(menu=><Menu  key={menu.url}  {...menu}/>)
    return (
		<header className='bg-blue-700'>
			<img src={LogoHpixel.src} alt='HPixel Logo'/>
			<div className='menu-items-container'>
				{menulist}
			</div>
		</header>
    )
}

export default Navbar;