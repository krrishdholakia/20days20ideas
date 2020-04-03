import Banner from '../components/banner';
import {useRouter} from 'next/router';
import Link from 'next/link'; 
import useSWR from 'swr'; 

function fetcher(url) {
    return fetch(url).then(r => r.json());
  }
  

const Days = React.memo(({articles, writer}) => {
    let days = []; 

    console.log("Articles: ", articles); 

    if (!articles) return null; 

    Object.keys(articles).forEach(day => {
        let renderedComponent = <div className="list-item">
        <Link href={`/content?day=1&writer=${writer}&articleID=${articles[day]["unique_id"]}`}><h3 className="day-count">Day {day}</h3></Link>
        </div>; 
        
        days.push(renderedComponent); 
    })

    return days;  
}); 

const Writer = () => {
    const {query} = useRouter(); 

    const { data, error } = useSWR(
        `api/getWriterInfo${query.writer ? '?writer=' + query.writer : ''}`,
        fetcher
      );
    console.log("data: ", data);

    const writer = query.writer; 

    let img_src = undefined; 
    let portfolio_link = undefined; 
    let song_link = undefined; 
    let book_link = undefined; 
    let work_link = undefined; 
    let articles = undefined; 

    if (data) {
        portfolio_link = data["portfolio_link"];
        song_link = data["song_link"];
        book_link = data["book_link"];
        work_link = data["work_link"];
        img_src = data["img_src"];
        articles = data["articles"]
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
                    {/* <div className="list-item">
                        <Link href={`/content?day=1&writer=${writer}`}><h3 className="day-count">Day 1</h3></Link>
                    </div> */}
                    <Days articles={articles} writer={writer}/>
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