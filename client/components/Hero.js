import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="mt-0">
            <Image src="/hero.svg" alt="Laptop & Notepad" width={449} height={455} />
            <div>
                <h1 className="text-5xl">A simple note-taking app.</h1>
                <p className="text-xl p-10 pl-60 pr-60">- MCDA5510 -</p>
                <Link href="/notes">
                    <button className="rounded-lg px-4 py-2 bg-primary" >Go to my notes</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero