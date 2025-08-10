import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div>Home</div>
            <ul>
                <li><Link to="/timeline">Timeline</Link></li>
                <li><Link to="/explore">Explore</Link></li>
            </ul>
        </div>
    )
}

export default Home