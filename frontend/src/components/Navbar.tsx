import { FC } from "react";

export const Navbar: FC = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid mx-5">
				<a className="navbar-brand" href="#">
					L O G O
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" href="/subscriptions">
								Subscriptions
							</a>
						</li>
					</ul>
					<ul className="navbar-nav  mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" href="/upload">
								Upload
							</a>
						</li>
            <li className="nav-item">
							<a className="nav-link active" href="#">
								Logout
							</a>
						</li>

					</ul>
				</div>
			</div>
		</nav>
	);
};
