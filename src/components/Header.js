import React from 'react';
import { Link } from 'wouter';

function Header() {
	return (
		<header className="header">
			<nav className="header-nav">
				<ul>
					<li>
							<Link to="/">Inicio</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;