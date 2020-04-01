import Link from 'next/link'; 
import Banner from '../components/banner';

const Writers = React.memo(() => (
  <div className="writers-container">
    <Link href="/writer?writer=Krrish"><h3>Krrish</h3></Link>
    <Link href="/writer?writer=Aahan"><h3>Aahan</h3></Link>
    <Link href="/writer?writer=Vaibhav"><h3>Vaibhav</h3></Link>
    <Link href="/writer?writer=Rohit"><h3>Rohit</h3></Link>
    <Link href="/writer?writer=Urmil"><h3>Urmil</h3></Link>
</div>
)); 

const Home = () => (
  <div className="container">
        <Banner subtitle={1}/>
        <Writers/>
        <style jsx global>{`
        @font-face {
          font-family: 'Source Code Pro';
          src: url('/fonts/SourceCodePro-Regular.ttf');
          font-display: swap;
        }

        html {
          background: snow;
        }

        .container {
          font-family: 'Source Code Pro', monospace;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .writers-container {
          width: 100%;
          display: flex;
          justify-content: space-around;
          height: 50vh;
          align-items: center;
          font-size: x-large;
        }

        .writers-container h3:hover,
        .writers-container h3:focus,
        .writers-container h3:active {
          border-bottom:3px dashed #03fc17;
        }

        `}</style>
  </div>
)

export default Home
