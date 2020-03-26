import React from 'react';
import { Link } from 'react-router';

export default class Public extends React.Component {
    render() {
        return(
            <div>
				{this.header}
				{this.props.children}
				{this.footer}
			</div>
        );
    }

    get header() {
        return (
            <header>
                <div className="border-color-grey border-bottom">
                    <div className="page-container pa3 pt2">
                        <div className="flex flex-row justify-between">
                            <div>
                                <div className="flex flex-wrap">
                                    <img className="icon17 mr2" src="./img/mail-icon.png" alt="email"/>
                                    <span className="f14">Email: info@hakita-test.com</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-wrap">
                                    <img className="icon17 mr2" src="./img/fb-icon.png" alt="email"/>
                                    <img className="icon17 mr2" src="./img/ig-icon.png" alt="email"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-container pb1 pa3 pt4">
                    <div className="flex justify-between">
                        <div>
                            <img src="./img/hakita-logo.png" alt="logo" width="120"/>
                        </div>
                        <div className="flex flex-row">
                            <div>
                                <nav>
                                    <Link className="pr4 no-underline near-black" to="/">Home</Link>
                                    <Link className="pr4 no-underline near-black" to="blog">Blog</Link>
                                    <Link className="no-underline near-black" to="signin">Sign In</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

    get footer() {
        return (
            <footer className="full-width mt5">
                <div className="full-width border-bottom border-color-footer-light text-footer footer-top">
                    <div className="page-container ph3 pv5">
                        <div className="flex flex-wrap justify-between">
                            <div className="w-60">
                                <h2 className="f20 normal near-white">About Us</h2>
                                <div>
                                    <p className="f14 lh-footer">HAKITA adalah sebuah platform yang menjawab kebutuhan masyarakat Indonesia dalam membuat dan memproses dokumen legal yang aman dan terpercaya. Kami menggunakan teknologi otomasi untuk mempermudah proses pembuatan dokumen.</p>
                                </div>
                            </div>
                            <div className="w-30">
                                <h2 className="f20 normal near-white">Contact Us</h2>
                                <div className="f14 lh-footer">
                                    <span>Mail: <span className="gray">info@hakita.com</span> Alamat: Jl. Boulevard Barat</span>
                                    <span>Raya No.27, RW. 9, Kelapa Gading Barat - Jakarta Utara 14240</span>
                                </div>
                                <div className="mt4">
                                    <div className="flex flex-wrap">
                                        <img className="icon20 mr3" src="./img/fb-icon-gray.png" alt="email"/>
                                        <img className="icon20 mr3" src="./img/ig-icon-gray.png" alt="email"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="full-width text-footer footer-bottom">
                    <div className="page-container f14 lh-copy tc ph3 pv4">
                        <span>Hakita Test, 2020</span>
                    </div>
                </div>
                
            </footer>
        );
    }
}