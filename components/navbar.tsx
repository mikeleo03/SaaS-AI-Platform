import MobileSidebar from "@/components/mobile-sidebar";
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <MobileSidebar />
            <div className="w-full flex justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
}

export default Navbar;