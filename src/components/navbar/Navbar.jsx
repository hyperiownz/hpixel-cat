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
function Navbar(props) {
	const menulist=menus.map(menu=><Menu  key={menu.url}  {...menu}/>)
	
    return (
		<header className='w-full bg-red flex justify-between bg-red-500'>
			<div image-src="https://i.ibb.co/6W4zc2n/logo-hpixel-1-1.png" className='flex items-center justify-center'>
				<img src="https://i.ibb.co/6W4zc2n/logo-hpixel-1-1.png" alt='HPixel Logo'/>
			</div>
			<div className='flex gap-8'>{menulist}</div>
			<SearchBar/>
			<div>others</div>
		</header>
    )
}

export default Navbar;


/*
	<img
					    src="https://i.ibb.co/B4pPL0M/logo-hpixel-1.png"
						alt='HPixel Logo'
					/>*/