import { UserButton } from '@clerk/nextjs';

const DashboardPage = () => {
    return (
        <div>
            <p>This is dashboard instead</p>
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}

export default DashboardPage;
