import { useAccount } from 'wagmi';

const About = () => {
    const { address, isConnected } = useAccount();
    return (
      <div>
        <h1>About Page</h1>
        <p>This is the about page content</p>
        <p>Address: {address}</p>
        <p>Connected: {isConnected ? 'Yes' : 'No'}</p>
      </div>
    );
  }

export default About;   

