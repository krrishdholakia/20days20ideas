const Banner = React.memo((props) => (
    <div>
        <h1 id="title">20 Days ⏳ 20 Ideas 💡</h1>
        {
            props.subtitle == 1 ?
                <p id="subtitle">Since we’re stuck in quarantine for the forseeable future, we thought it might
                be fun to do a 20 day challenge, where we come up with a new idea / discuss a new problem 
                every day, for 20 days.
                </p>
                :
                null
        }
        <style jsx>{`
            @font-face {
                font-family: 'Source Code Pro';
                src: url('/fonts/SourceCodePro-Regular.ttf');
                font-display: swap;
            }
            div {
                text-align: center;
            }
            #title {
                font-weight: normal;
                font-size: -webkit-xxx-large;
                font-family: Source Code Pro, monospace;
            }
            
            #subtitle {
                opacity: 0.5;
                text-align: center;
            }
        `}</style>
    </div>
));

export default Banner;