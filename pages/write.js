import Banner from "../components/banner";
import { useState } from 'react';
import QuillNoSSRWrapper from '../components/quillnossrwrapper';

const writers = ["Krrish", "Aahan", "Rohit", "Vaibhav", "Urmil"]; 

function fetcher(data) {
    fetch('/api/updateData', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        res.status === 200 ? console.log("success!") : null
      })
  }

function onSubmit(writer, song_link, book_link, work_link, title, body, onSubmitClicked) {
    console.log("onSubmitClicked: ", onSubmitClicked);
    onSubmitClicked(true)

    if (writer, song_link, body) {
        let time = new Date(); 
        time = time.getTime();
        let data = {
            writer : writer,
            song_link : song_link,
            book_link : book_link,
            work_link : work_link,
            title: title,
            body : body,
            "createdAt" : time
        };

        fetcher(data);
    }

    return null; 
  }

const Write = React.memo(() => {
    const [submitClicked, onSubmitClicked] = useState(undefined);
    const [body, setBody] = useState(undefined);
    const [song_link, setSongLink] = useState(undefined); 
    const [writer, setWriter] = useState(undefined); 
    const [book_link, setBookLink] = useState(undefined); 
    const [work_link, setWorkLink] = useState(undefined); 
    const [title, setTitle] = useState(undefined); 

    return (
        <div className="container">
            <Banner/>
            <div className="main-body">
                <div className="writer-name metadata">
                    <h3>Writer</h3>
                    <select className="inputs" id="selector" onChange={(event) => setWriter(event.target.value)}>
                        <option value="" disabled selected hidden>Who are you ?</option>
                        {writers.map(writer => 
                            <option value={writer}>{writer}</option>
                        )}
                    </select>
                    {submitClicked && writer === undefined ? <p id="error">Please enter who you are</p> : null}
                </div>
                <div className="metadata">
                    <p style={{'color' : '#B9BD07'}}>quarantine song of the day 🎧</p>
                    <input className="inputs" type="url" id="song_link" onChange={(event) => setSongLink(event.target.value)} placeholder="Spotify Song url.."/>
                    {submitClicked && song_link === undefined ? <p id="error">Please enter a song of the day</p> : null}
                </div>
                <div className="metadata">
                    <p style={{'color' : '#00D4C8'}}>what i’m reading right now 📚</p>
                    <input className="inputs" type="url" id="book_link" onChange={(event) => setBookLink(event.target.value)} placeholder="Goodreads Book link.."/>
                </div>
                <div className="metadata">
                    <p style={{'color' : '#21EE00'}}>what i’m building right now 💻</p>
                    <input className="inputs" type="url" id="work_link" onChange={(event) => setWorkLink(event.target.value)} placeholder="Project url.."/>
                </div>
                <div>
                    <h2 id="prompt">What do you feel like discussing today?</h2>
                    <div className="post-title-component">
                        <h3>Title</h3>
                        <input className="inputs" type="text" id="title" onChange={(event) => setTitle(event.target.value)} placeholder="Post Title"/>
                    </div>
                    {submitClicked && title === undefined ? <p id="error">Please enter the Post Title</p> : null}
                    <QuillNoSSRWrapper setValue={setBody}/>
                </div>
                {submitClicked && body === undefined ? <p id="error">Please enter the idea/thought of the day</p> : null}
                <h3 id="submit" onClick={() => onSubmit(writer, song_link, book_link, work_link, title, body, onSubmitClicked)}>Submit</h3>
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

            h1,h3 {
                font-weight: lighter;
            }

            .main-body {
                margin: 2%;
            }

            #selector {
                font-family: 'Source Code Pro', monospace;
                color: #424E86;
                background: none; 
                border: none; 
            }
            
            .metadata {
                display: flex; 
                align-items: baseline;
            }

            .inputs {
                margin-left: 5%;
                font-family: 'Source Code Pro',monospace;
                color: #424E86;
                background: none;
                border: none;
                border: 2px dashed;
                padding: 1%;
            }

            .quill div {
                font-family: 'Source Code Pro',monospace;
            }

            .ql-editor{
                min-height: 300px !important;
                // max-height: 300px;
                overflow: hidden;
                overflow-y: scroll;
                overflow-x: scroll;
              }

            .ql-container { 
                border: none !important;
            }

            .ql-toolbar {
                border: none !important;
                border-bottom: 2px dashed !important; 
            }

            #submit {
                width: fit-content; 
                color: #30AA1C;
                margin-left: 50%;
                margin-right: 50%;
            }

            #submit:hover,
            #submit:focus,
            #submit:active {
              border-bottom:3px dashed;
            }

            #error {
                margin-left: 5%; 
                color: red; 
                background: yellow;
                width: fit-content;
            }

            .post-title-component {
                display: flex;
                align-items: center;
                margin: 5%;
                justify-content: space-around;
            }

            .post-title-component input {
                width: 30%;
                border: none;
                border-bottom: 2px dashed;
            }

            #prompt {
                margin: 5%;
                font-size: xx-large;
                text-align: center;
            }
            `}</style>
        </div>
    )
}); 

export default Write; 