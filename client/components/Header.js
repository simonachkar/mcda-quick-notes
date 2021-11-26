import Head from 'next/head'
import Image from 'next/image'

const Header = () => {
    return (
        <>
            <Head>
                <title>Quick-Notes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="mt-10 grid grid-cols-4 gap-0 w-1/4">
                <div className="col-start-1 col-end-2">
                    <Image src="/pencil.png" alt="Pencile" width={80} height={80} />
                </div>
                <div className="col-start-2 col-end-4">
                    <h1 className="text-5xl font-bold">QUICKNOTES</h1>
                    <p className="text-xl mt-2">No BS. Just notes.</p>
                </div>
            </header>
        </>
    )
}

export default Header