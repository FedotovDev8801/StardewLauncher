import fetch from 'node-fetch';

let currentLang = 'en';
let translations = {};

async function loadLanguage(lang) {
  const res = await fetch('locales.json');
  const data = await res.json();
  translations = data[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) el.textContent = translations[key];
  });
}

window.launch = async (platform) => {
  await window.api.launchGame(platform);
};

document.getElementById('lang-select').addEventListener('change', (e) => {
  currentLang = e.target.value;
  loadLanguage(currentLang);
});

loadLanguage(currentLang);

fetch('https://www.stardewvalley.net/blog')
  .then(r => r.text())
  .then(html => {
    document.getElementById('news').innerHTML = html.slice(0, 500) + '...';
  });