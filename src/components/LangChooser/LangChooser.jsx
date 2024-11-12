import React from 'react';
import './LangChooser.css';

const langs = [
    { name: 'English', flag: '/us.png' },
    { name: 'Arabic', flag: '/saudi.jpg' },
    { name: 'Egyptian dialect', flag: '/egypt.jpg' },
];

function LangChooser({ currentLang = langs[0].name, setLang }) {
    // Find the selected language object from the langs array
    const selectedLang = langs.find(lang => lang.name === currentLang);

    return (
        <div className='LangChooser-container'>
            <div className="dropdown">
                <button className="lang-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectedLang.name} <img className='ms-2 me-2 flag-icon' src={selectedLang.flag} alt={selectedLang.name} />
                </button>
                <ul className="dropdown-menu">
                    {langs.map((lang, i) => (
                        <li key={i} onClick={() => setLang(lang.name)}>
                            <a className="dropdown-item" href="#">
                                {lang.name} <img className='ms-2 flag-icon' src={lang.flag} alt={lang.name} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default LangChooser;
