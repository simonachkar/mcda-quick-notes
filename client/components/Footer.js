import Head from 'next/head'
import Image from 'next/image'
const Footer = () => {
    return (
        <footer className="flex items-center justify-center w-full h-24 border-t mt-10">
            <p>A project by{' '}
                <span className="text-yellow-600">
                    Simon Achkar
                </span>
            </p>
        </footer>
    )
}

export default Footer