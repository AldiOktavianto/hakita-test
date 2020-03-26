import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
    render() {
        return(
            <div>
                {this.banner}
                {this.product}
                {this.portofolio}
                {this.quote}
                {this.articles}
                {this.faq}
            </div>
        );
    }

    get banner() {
        return (
            <section className="full-width main-banner mt4 pb4 ph3">
                <div className="page-container pt6 pb6">
                    <div>
                        <div>
                            <h1 className="f48 lh-title white pa0 mb0 w-70 text-uppercase">Urusan Legal jadi lebih gampang dengan hakita</h1>
                        </div>
                    </div>
                    <div className="mt4">
                        <button className="pv3 ph4 bg-blue2 ba border-color-blue2 br3">
                            <Link className="no-underline" to="blog"><b className="white b">Baca artikel</b></Link>
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    get product() {
        return(
            <section className="full-width mt5">
                <div className="page-container pa3">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-30">
                            <div className="flex flex-row">
                                <div className="pa3">
                                    <img className="iconimg" src="./img/user_needs_icon_x2.png" alt="user needs icon" width="300"/>
                                </div>
                                <div>
                                    <h3>We Meet People’s Needs</h3>
                                    <p>Kami sadar bahwa hukum masih dianggap sebagai sesuatu yang menakutkan dan belum terjangkau untuk semua golongan. Inilah mengapa kami ada; untuk melawan stigma dan menjawab segala kebutuhan legal Anda.</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-30">
                            <div className="flex flex-row">
                                <div className="pa3">
                                    <img className="iconimg" src="./img/protect_icon_x2.png" alt="User protect icon" width="300"/>
                                </div>
                                <div>
                                    <h3>We Provide Protection </h3>
                                    <p>Dibantu oleh praktisi hukum dengan pengalaman lebih dari 10 tahun, HAKITA memastikan bahwa Anda mendapatkan perlindungan hukum yang sesuai dengan hak Anda sebagai warga negara.</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-30">
                            <div className="flex flex-row">
                                <div className="pa3">
                                    <img className="iconimg" src="./img/trust_icon_x2.png" alt="User trust icon" width="300"/>
                                </div>
                                <div>
                                    <h3>We Are Trustworthy</h3>
                                    <p>HAKITA hadir karena kami percaya bahwa hukum adalah hak semua orang. Semua yang kami lakukan di HAKITA selalu selaras dengan misi kami untuk menjadikan hukum sebagai sesuatu yang mudah dimengerti dan dapat diakses oleh semua orang.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    get portofolio() {
        return(
            <section className="full-width">
                <div className="page-container tc pa3">
                    <h3 className="f48 lh-title">Product and Services</h3>
                    <p className="w50">Apapun kebutuhan legal Anda, biar HAKITA yang urus.</p>
                </div>

                <div className="page-container tc pa3">
                    <div className="flex flex-row justify-between">
                        <div className="w-30 mb0">
                            <div className="h45 flex items-center justify-center shadow-2 br3">
                                <img src="./img/contract_icon.png" width="100" alt="Contract Icon"/>
                            </div>
                            <div>
                                <h3>Jasa Pembuatan PT</h3>
                                <p>Sekarang buat PT tidak harus mahal dan lama. Kami mengerti bahwa bisnis Anda perlu dilindungi hukum. Di HAKITA, kami membantu Anda membuat PT dengan proses yang cepat dan aman dengan harga terjangkau.</p>
                            </div>
                        </div>

                        <div className="w-30 mb0">
                            <div className="h45 flex items-center justify-center shadow-2 br3">
                                <img src="./img/permission_icon.png" width="100" alt="Permission Icon"/>
                            </div>
                            <div>
                                <h3>Otomasi Dokumen</h3>
                                <p>Buat dokumen sudah tidak perlu ribet lagi. Dokumen yang biasa butuh waktu berminggu-minggu sekarang bisa selesai dalam hitungan menit dengan template dari HAKITA.</p>
                            </div>
                        </div>

                        <div className="w-30 mb0">
                            <div className="h45 flex items-center justify-center shadow-2 br3">
                                <img src="./img/agreement_icon.png" width="100" alt="Agreement Icon"/>
                            </div>
                            <div>
                                <h3>Sistem Manajemen Dokumen</h3>
                                <p>Kerja lebih efisien dengan HAKITA! Tidak hanya memantau ribuan dokumen yang Anda miliki, teknologi kami juga dapat memberi tahu Anda jika ada dokumen yang membutuhkan perhatian khusus lewat fitur reminder kami.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    get quote() {
        return(
            <section className="full-width quote-banner mt5">
                <div className="page-container pv5 ph0 flex flex-column w-50">
                    <span className="white f48 lh-title mt0 b">APAKAH ANDA TAHU:</span>
                    <span className="white f36 lh-copy mt0">Kalau dari kasus tabrakan, Anda tidak perlu memberi SIM atau KTP kepada orang yang ditabrak</span>
                </div>
            </section>
        );
    }

    get articles() {
        return(
            <section className="full-width mt5 ph0 flex flex-column">
                <div className="center w-50">
                    <h3 className="b f36 mt0 mb2 tc">Love Reading, Keep Reading</h3>
                    <p className="lh-copy tc gray">Punya pertanyaan soal hukum? Temukan jawabannya di blog HAKITA.</p>
                </div>

                <div className="page-container w-100">
                    <div className="flex flex-row justify-between mt5">
                        <div className="shadow-4 w-30 pa4 br3 mb0">
                            <div>
                                <div>
                                    <span className="f14 ph2 pv1 bg-blue2 white">Hakita News</span>
                                </div>
                                <div className="mt2">
                                    <h3 className="mv2">Perlindungan Hukum Dalam Belanja Online</h3>
                                </div>
                                <div className="gray f14">
                                    <span>2 weeks ago</span>
                                </div>
                            </div>
                            <div className="mt4">
                                <a className="dark-blue2 no-underline b">Read more</a>
                            </div>
                        </div>

                        <div className="shadow-4 w-30 pa4 br3 mb0">
                            <div>
                                <div>
                                    <span className="f14 ph2 pv1 bg-blue2 white">Hakita News</span>
                                </div>
                                <div className="mt2">
                                    <h3 className="mv2">Aturan Razia Secara Hukum</h3>
                                </div>
                                <div className="gray f14">
                                    <span>2 weeks ago</span>
                                </div>
                            </div>
                            <div className="mt4">
                                <a className="dark-blue2 no-underline b">Read more</a>
                            </div>
                        </div>

                        <div className="shadow-4 w-30 pa4 br3 mb0">
                            <div>
                                <div>
                                    <span className="f14 ph2 pv1 bg-blue2 white">Hakita News</span>
                                </div>
                                <div className="mt2">
                                    <h3 className="mv2">Konvoi Mobil dan Motor di Indonesia, Apa Aturannya?</h3>
                                </div>
                                <div className="gray f14">
                                    <span>2 weeks ago</span>
                                </div>
                            </div>
                            <div className="mt4">
                                <a className="dark-blue2 no-underline b">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    get faq() {
        return(
            <section className="full-width mt5">
                <div className="center w-20 border-color-grey2 border-bottom mb4"></div>
                <div className="page-container pa3">
                    <div>
                        <h3 className="f48 mv2 tc">Have a question?</h3>
                    </div>
                    <div className="flex flex-wrap justify-center mt4">
                        <div className="ba border-color-grey2 w-30 flex flex-column tc pa3 mb0 mr4 br3">
                            <div className="mv3 center">
                                <div className="bg-dark-blue2 w3 h3 br-100 pa3">
                                    <img className="icon20" src="./img/mail-icon2.png" alt="email"/>
                                </div>
                            </div>
                            <span className="b">
                                <a className="no-underline">info@hakita.com</a>
                            </span>
                        </div>

                        <div className="ba border-color-grey2 w-30 flex flex-column tc pa3 mb0 mr4 br3">
                            <div className="mv3 center">
                                <div className="bg-dark-blue2 w3 h3 br-100 pa3">
                                    <img className="icon20" src="./img/map-icon.png" alt="email"/>
                                </div>
                            </div>
                            <span className="b">
                                Jl. Boulevard Barat Raya No. 27,
                                <br/>
                                Kelapa Gading Barat,
                                <br/>
                                Jakarta Utara
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
