import React from 'react';

var articles = [
    {
        img: './img/perlindungan-belanja-online-penipu-online-hakita-scaled-770x400.jpg',
        imgSmall: './img/perlindungan-belanja-online-penipu-online-hakita-scaled-160x160.jpg',
        title: 'Perlindungan Hukum Dalam Belanja Online',
        date: 'March 17, 2020',
        time: '1 week ago',
        content: 'Di zaman sekarang, belanja online sudah menjadi hal yang biasa dilakukan. Tetapi, kita harus tetap hati-hati dengan adanya penipuan online.'
    },
    {
        img: '',
        imgSmall: '',
        title: 'Aturan Razia Secara Hukum',
        date: 'March 17, 2020',
        time: '1 week ago',
        content: 'Razia sudah sering menjadi berita di Indonesia. Yang paling sering didengar adalah razia tempat hiburan seperti bar, hotel, dan restoran. Tetapi apakah razia memiliki dasar hukum?'
    },
    {
        img: './img/konvoi-mobil-motor-indonesia-hukum-hakita-scaled-770x400.jpg',
        imgSmall: './img/konvoi-mobil-motor-indonesia-hukum-hakita-scaled-160x160.jpg',
        title: 'Konvoi Mobil dan Motor di Indonesia, Apa Aturannya?',
        date: 'March 17, 2020',
        time: '1 week ago',
        content: 'Bagi para pengguna jalan, kita semua pasti sering melihat konvoi mobil atau motor di jalan. Iring-iringan kendaraan ini memang sering kita lihat tetapi apakah semua iring-iringan ini bisa dibilang sebagai konvoi?'
    },
    {
        img: './img/Penilangan-Tanpa-Surat-Tugas-Polisi-Hakita-770x400.png',
        imgSmall: './img/Penilangan-Tanpa-Surat-Tugas-Polisi-Hakita-160x160.png',
        title: 'Apakah Polisi Boleh Menilang Tanpa Surat Tugas?',
        date: 'March 17, 2020',
        time: '1 week ago',
        content: 'Bagi pengguna jalan sehari-hari, kita sudah tidak asing lagi dengan razia dan penilangan yang biasa dilakukan polisi. Di artikel kali ini, HAKITA akan membahas tentang prosedur penilangan dan apa hak Anda sebagai warga negara jika terjadi pemeriksaan di jalan.'
    }
];

class Blog extends React.Component {
    render() {
        return(
            <div className="mt4">

                <div className="titlebar">
                    <div className="pv4">
                        <div className="page-container">
                            <h1 className="white f60 ma0">Blog</h1>
                        </div>

                    </div>
                </div>
                
                <div className="pt5">
                    <div className="page-container flex flex-wrap ">
                        <div className="w-70">
                            <div className="flex flex-column">
                                {this.articleList}
                            </div>
                        </div>

                        <div className="w-30">
                            <form className="pl4 mb-3 flex relative">
                                <input className="w-100 search-field f14" placeholder="Search..."/>
                                <img className="search-icon" src="./img/search-icon.png" alt="search"/>
                            </form>
                            <ul className="list-style-none">
                                {this.articleListSmall}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    get articleList() {
        return Object.keys(articles).map(function(key, index) { 
            var article = articles[key];
            var figure = article.img !== '' ? <figure className="ma0 mb3"><img src={article.img} alt="blog"/></figure> : '';

            return (
                <div key={key} className="w-100">
                    <article className="flex flex-column mb4 near-black2"> 
                        {figure}
                        <div>
                            <header>
                                <h2 className="f30 ma0 mb3"><a className="no-underline">{article.title}</a></h2>
                                <span className="f14 gray">{article.time}</span>
                            </header>
                        </div>
                        <div>
                            <p className="f18">{article.content}</p>
                        </div>
                        <div className="f11">
                            <span className="btn-line near-black2"></span>
                            <span className="text-uppercase">Continue Reading</span>
                        </div>
                    </article>
                </div>
            );
        });
    }

    get articleListSmall() {
        return Object.keys(articles).map(function(key, index) { 
            var article = articles[key];
            var figure = article.imgSmall !== '' ? <figure className="ma0 mr2"><img src={article.imgSmall} alt="blog" width="80" height="80"/></figure> : '';

            return (
                <li key={key} className="w-100">
                    <article className="flex flex-row mb4 near-black2"> 
                        {figure}
                        <div>
                            <header>
                                <div className="f14 ma0 mb3">{article.title}</div>
                                <span className="f14 gray">{article.date}</span>
                            </header>
                        </div>
                    </article>
                </li>
            );
        });
    }
}

export default Blog;
