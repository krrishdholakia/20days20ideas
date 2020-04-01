import Banner from '../components/banner';
import {useRouter} from 'next/router';
import Link from 'next/link'; 

const Writer = () => {
    const router = useRouter(); 
    const writer = router.query.writer; 
    const song_link = "https://open.spotify.com/track/1FWHYXyXrcXDhbyYFyf4Rp?si=1CP41oVzQJGb3HS7GvJL7Q";
    const book_link = "https://www.goodreads.com/book/show/7126.The_Count_of_Monte_Cristo";
    const work_link = "https://listcle.com/";
    return (
        <div className="container">
            <Banner/>
            <div className="main-body">
                <h2>{writer}</h2>
                <div className="writer-meta-data">
                    <img src="/writer_images/krrish.JPG"/>
                    <div className="writer-info">
                        <a href="http://www.krishdholakia.com/" target="_blank"><p style={{'color' : '#FF8080'}}>me</p></a>
                        <a href={song_link} target="_blank"><p style={{'color' : '#B9BD07'}}>quarantine song of the day 🎧</p></a>
                        <a href={book_link} target="_blank"><p style={{'color' : '#00D4C8'}}>what i’m reading right now 📚</p></a>
                        <a href={work_link} target="_blank"><p style={{'color' : '#21EE00'}}>what i’m building right now ‍💻</p></a>
                        <h3>Enjoy! 😊</h3>
                    </div>
                </div>
                <div className="list">
                    <div className="list-item">
                        <Link href={`/content?day=1&writer=${writer}`}><h3 className="day-count">Day 1</h3></Link>
                    </div>
                </div>
            </div>
            <style jsx global>{`
            
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

            h3 {
                font-weight: lighter;
            }

            a {
                text-decoration: none;
            }

            img {
                width: 20%;
            }

            .main-body {
                margin: 2%;
            }

            .main-body h3 {
                font-size: x-large;
            }

            .writer-meta-data {
                display: flex;
            }

            .writer-info {
                margin: 1%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            .writer-info p {
                width: fit-content;
            }

            .writer-info p:hover,
            .writer-info p:focus,
            .writer-info p:active {
              border-bottom:3px dashed;
            }

            .day-count {
                opacity: 0.5;
                width: fit-content;
                margin-right: 1%;
            }

            .list {
                margin-top: 2%;
            }

            .list-item {
                display: flex; 
            }

            .list-item h3:hover,
            .list-item h3:focus,
            .list-item h3:active {
              border-bottom:3px dashed;
            }
            `}</style>
        </div>
    )
}

export default Writer; 