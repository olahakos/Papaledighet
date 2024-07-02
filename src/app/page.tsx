import BTN from "../components/btn";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-md items-center justify-between font-mono text-sm lg:flex">
                <p>List page: </p>
                <BTN hrefParam="/list">[List]</BTN>
            </div>
        </main>
    );
}
