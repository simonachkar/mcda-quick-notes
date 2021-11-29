import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center ustify-center min-h-screen py-2">
      <Header />
      <main className="items-center justify-center w-full flex-1 mt-10 text-center">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
