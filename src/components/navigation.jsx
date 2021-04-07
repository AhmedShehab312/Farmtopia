import i18n, { changeLang, getlang, setLang } from '../i18n';

const changeLangMode = (lang = null) => {
	if (lang) {
		changeLang(lang);
	} else {
		let currentLang = getlang();
		if (currentLang == 'en') {
			changeLang('ar');
		} else {
			changeLang('en');
		}
	}
	window.location.reload(true);
};

export const Navigation = (props) => {
	return (
		<nav id="menu" className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<button
						type="button"
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-target="#bs-example-navbar-collapse-1"
					>
						{' '}
						<span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span>{' '}
						<span className="icon-bar"></span> <span className="icon-bar"></span>{' '}
					</button>
					<a href="#page-top">
						<img
							src={'img/farmtopia.png'}
							style={{ width: '100px', position: 'absolute', left: '120', top: '7px' }}
						/>
					</a>
				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-right">
						<li>
							<a href="#features" className="page-scroll">
								Products
							</a>
						</li>
						<li>
							<a href="#about" className="page-scroll">
								About
							</a>
						</li>
						<li>
							<a href="#services" className="page-scroll">
								Services
							</a>
						</li>
						<li>
							<a href="#portfolio" className="page-scroll">
								Careers
							</a>
						</li>
						{/* <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li> */}
						<li>
							<a href="#contact" className="page-scroll">
								Contact
							</a>
						</li>
						{/* <li>
							<div class="dropdown specDropdown">
								<button
									class="btn btn-default dropdown-toggle"
									type="button"
									id="dropdownMenu1"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="true"
								> language: {getlang()} <span class="caret"></span>
								</button>
								<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
									<li>
										<a 	onClick={() => { changeLangMode('en')}}>English</a>
									</li>
									<li>
                  <a 	onClick={() => { changeLangMode('ar')}}>Arabic</a>
									</li>
								</ul>
							</div>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};
