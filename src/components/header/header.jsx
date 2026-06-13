import css from './header.module.css'

function Header() {
	return (
		<header className={css.header}>
			<h1>GC cheese</h1>
			<ul className={css.headerList}>
				<li>
					<h2>catalog</h2>
				</li>
				<li className={css.lastChild}>
					<h2>contact</h2>
				</li>
			</ul>
		</header>
	)
}
export default Header
