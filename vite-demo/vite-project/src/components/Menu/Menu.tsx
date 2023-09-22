import { Link } from 'react-router-dom';

export const Menu = () => (
    <ul>
        <li>
            <Link to="/">Hem</Link>
        </li>
        <li>
            <Link to="/login">Logga in</Link>
        </li>
        <li>
            <Link to="/companies">Företag</Link>
        </li>
    </ul>
)
