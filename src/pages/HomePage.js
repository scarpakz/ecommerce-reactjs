import { NavBar } from "../components/NavBar"
import { Header } from "../components/Header"
import { HotDeals } from "../components/HotDeals"
import { Trending } from "../components/Trending"

export const HomePage = () => {
    return (
        <>
            <NavBar />
            <Header />
            <HotDeals />
            <Trending />
        </>
    ) 
}