export default function Footer() {
    return (
        <footer className="bg-neutral p-10 text-neutral-content">
            <div className="footer m-auto max-w-7xl">
                <div>
                    <span className="footer-title">services</span>
                    <a className="link-hover link">branding</a>
                    <a className="link-hover link">design</a>
                    <a className="link-hover link">marketing</a>
                    <a className="link-hover link">advertisement</a>
                </div>
                <div>
                    <span className="footer-title">company</span>
                    <a className="link-hover link">about us</a>
                    <a className="link-hover link">contact</a>
                    <a className="link-hover link">jobs</a>
                    <a className="link-hover link">press kit</a>
                </div>
                <div>
                    <span className="footer-title">legal</span>
                    <a className="link-hover link">terms of use</a>
                    <a className="link-hover link">privacy policy</a>
                    <a className="link-hover link">cookie policy</a>
                </div>
            </div>
        </footer>
    )
}