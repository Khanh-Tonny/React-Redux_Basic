import VideoHomepage from '../../assets/video-HomePage.mp4'
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    src={VideoHomepage}
                    type="video/mp4"
                />
            </video>
            <div className='homepage-conten'>
                <div className='title_1'> There's a better way to ask</div>
                <div className='title_2'>to ask
                    You don't want to make a boring form. And your audience won't answer one.
                    Create a typeform instead—and make everyone happy.</div>
                <div> <button className='title_3'> Get started - it's free</button> </div>
            </div>
        </div>
    )
}
export default HomePage;