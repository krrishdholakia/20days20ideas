import Banner from '../components/banner';
import {useRouter} from 'next/router';

const Content = () => {
    const router = useRouter(); 
    const day = router.query.day; 
    const writer = router.query.writer; 
    return (
        <div className="container">
            <Banner/>
            <div className="main-body">
                <h3>Day {day}</h3>
                <h1>💡 Government Announcement Aggregation Tool</h1>
                <p>By {writer}</p>
            </div>
            <style jsx>{`
                @font-face {
                    font-family: 'Source Code Pro';
                    src: url('/fonts/SourceCodePro-Regular.ttf');
                    font-display: swap;
                }
    
                html {
                    background: snow;
                }
    
                h1,h2,h3,p {
                    font-family: 'Source Code Pro', monospace;
                }

                h1,h3 {
                    font-weight: lighter;
                }

                .main-body {
                    margin: 2%;
                }
            `}</style>
        </div>
    )
}

export default Content; 