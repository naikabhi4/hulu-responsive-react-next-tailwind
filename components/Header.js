import Image from 'next/image'
import {BadgeCheckIcon,
        CollectionIcon,
        HomeIcon,
        LightningBoltIcon,
        SearchIcon,UsersIcon
} from "@heroicons/react/outline"
import HeaderItem from './HeaderItem'
function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className=" flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title="Home" Icon={HomeIcon}/>
            <HeaderItem title="Trending" Icon={LightningBoltIcon}/>
            <HeaderItem title="Verified" Icon={BadgeCheckIcon}/> 
            <HeaderItem title="Collection" Icon={CollectionIcon}/>
            <HeaderItem title="Search" Icon={SearchIcon}/>
            <HeaderItem title="User" Icon={UsersIcon}/>
        </div>
        <Image src="https://www.logo.wine/a/logo/Hulu/Hulu-Logo.wine.svg" width={200} height={100}/>
        </header>
    )
}

export default Header
