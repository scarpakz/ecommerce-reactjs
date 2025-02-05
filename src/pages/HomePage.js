import { Header } from "../components/Header"
import { HotDeals } from "../components/HotDeals"
import { Trending } from "../components/Trending"
import { EveryoneList } from "../components/EveryoneList"
import { DownloadApp } from "../components/DownloadApp"
import { Footer } from "../components/Footer"

export const HomePage = () => {
    return (
        <>
            <Header />
            <HotDeals />
            <Trending />
            <EveryoneList />
            <DownloadApp />
            <Footer />
        </>
    ) 
}