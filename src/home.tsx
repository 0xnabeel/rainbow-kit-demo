import { ConnectButton } from "@rainbow-me/rainbowkit"

const Home = () => {
    return (
        <>
          <ConnectButton />
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <button onClick={() => window.location.href = '/about'}>About</button>
        </>
      )
}

export default Home;
