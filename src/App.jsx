import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'
import Footer from './components/Footer'

const App = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient" />
            </div>
            <div className="app flex flex-col min-h-screen">
                <Hero/>
                <Demo/>
                <Footer className="mt-auto" />
            </div>
        </main>
    )
}

export default App