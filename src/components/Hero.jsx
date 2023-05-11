import { logo } from '../assets'

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-5 pt-3'>
                <div className='flex items-center'>
                    <img src="/favicon.png" alt="AISum_logo" className='w-28 object-contain' />
                    <p className='font-satoshi font-bold'>AISum</p>
                </div>
                <button
                    type='button'
                    onClick={() => { window.open('https://github.com/codecrypttechnologies?tab=repositories') }}
                    className='black_btn'
                >
                    GitHub
                </button>
            </nav>
            <h1 className='head_text'>
                Summarize Articles with <br className='max-md:hidden' />
                <span className='purple_gradient'>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                Simplify your reading with Summerize, an open-source article summarizer that transforms lengthy articles into clear and concise sumaries
            </h2>
            <div className="relative w-48 text-center mt-3">
                <span className="inline-block bg-purple-950 px-3 py-2 rounded hover:bg-blue-700 text-white font-bold hover:cursor-pointer">
                    Need a Guide?
                </span>
                <div className="absolute top-0 left-0 bg-gray-100 p-2 rounded-md text-sm opacity-0 transition-opacity duration-150 ease-in-out hover:opacity-100">
                    Copy link of any article/link of page containing article, Paste below, and you are good to go after hitting enter
                </div>
            </div>

        </header>
    )
}

export default Hero