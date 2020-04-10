import Banner from '../components/banner';
import {useRouter} from 'next/router';
import useSWR from 'swr'; 

function fetcher(url) {
    return fetch(url).then(r => r.json());
}

const Content = () => {
    const {query} = useRouter(); 
    const articleID = query.articleID; 
    const day = query.day; 
    const writer = query.writer; 

    const { data, error } = useSWR(
        `api/getPage${query.articleID ? '?articleID=' + articleID : ''}`,
        fetcher
    );

    let title = data? data.title : "Loading..."; 
    let body = data? data.body : "Loading..."; 

    console.log("data: ", data);
    return (
        <div className="container">
            <Banner/>
            <div className="main-body">
                <h3>Day {day}</h3>
                <h1>💡 {title}</h1>
                <p id="author">By {writer}</p>
                <div id="body"
                dangerouslySetInnerHTML={{ __html: body }}/>
            </div>
            <style jsx>{`
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

                #author {
                    font-size: small;
                    opacity: 0.5; 
                }

                #body {
                    margin-top: 2%; 
                }
            `}</style>
        </div>
    )
}

export default Content; 