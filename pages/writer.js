import Banner from '../components/banner';
import {useRouter} from 'next/router';
import Link from 'next/link'; 

const Writer = () => {
    const router = useRouter(); 
    const writer = router.query.writer; 

    let img_src = undefined; 
    let portfolio_link = undefined; 
    let song_link = undefined; 
    let book_link = undefined; 
    let work_link = undefined; 

    if (writer === "Krrish") {
        img_src = "/writer_images/Krrish.JPG";
        portfolio_link = "http://www.krishdholakia.com/";
        song_link = "https://open.spotify.com/track/1FWHYXyXrcXDhbyYFyf4Rp?si=1CP41oVzQJGb3HS7GvJL7Q";
        book_link = "https://www.goodreads.com/book/show/7126.The_Count_of_Monte_Cristo";
        work_link = "https://listcle.com/";
    } else if (writer === "Aahan") {
        song_link = "https://open.spotify.com/track/6ooluO7DiEhI1zmK94nRCM?si=cHwTzs3WSiyY9nmwbimJFw";
        book_link = "https://www.goodreads.com/book/show/12505.The_Idiot";
    } else if (writer === "Vaibhav") {
        img_src = "/writer_images/Vaibhav.jpeg"
    } else if (writer === "Urmil") {
        portfolio_link = "https://urmilshroff.tech/"; 
    } else if (writer === "Rohit") {
        img_src = "/writer_images/Rohit.jpeg";
        portfolio_link = "https://www.linkedin.com/mwlite/in/rohit-bansal127";
    }


    return (
        <div className="container">
            <Banner/>
            <div className="main-body">
                <h2>{writer}</h2>
                <div className="writer-meta-data">
                    {img_src ? <img src={img_src}/> : null}
                    <div className="writer-info">
                        {portfolio_link ? <a href={portfolio_link} target="_blank"><p style={{'color' : '#FF8080'}}>me</p></a> : null}
                        {song_link ? <a href={song_link} target="_blank"><p style={{'color' : '#B9BD07'}}>quarantine song of the day 🎧</p></a> : null}
                        {book_link ? <a href={book_link} target="_blank"><p style={{'color' : '#00D4C8'}}>what i’m reading right now 📚</p></a> : null}
                        {work_link ? <a href={work_link} target="_blank"><p style={{'color' : '#21EE00'}}>what i’m building right now ‍💻</p></a> : null}
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