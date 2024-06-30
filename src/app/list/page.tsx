import BTN from "../components/btn";

const ListPage: React.FC = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-md items-center justify-between font-mono text-sm lg:flex">
                <h1>Hello List</h1>
                <BTN hrefParam="/">[Back to home]</BTN>
            </div>
        </div>
    )
}

export default ListPage;