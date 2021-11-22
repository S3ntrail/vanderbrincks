import Head from 'next/head'

const Header = (props) => {
  return (
    <div>
      <Head>
        <title>Van der Binckes bakfietsen - {props.title}</title>
        <meta property="og:title" content={props.title} key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
  
}

export default Header