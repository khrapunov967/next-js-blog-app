import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full max-w-[1600px] flex justify-between py-2 px-7 items-center">
            <div>
                <Link href="/" className="text-white font-thin text-2xl">
                    RUNO
                </Link>
            </div>

            <nav className="flex gap-5 text-white">
                <Link href="/" className="transition-all duration-300 hover:text-orange-200">
                    Home
                </Link>

                <Link href="/contacts" className="transition-all duration-300 hover:text-orange-200">
                    Contacts
                </Link>

                <Link href="/about" className="transition-all duration-300 hover:text-orange-200">
                    About
                </Link>
            </nav>
        </header>
    );
};

export default Header;