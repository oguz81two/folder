const translations = {
    en: {
        headerTitle: 'OGUZHAN CAN',
        navHome: 'Home', navContact: 'Contact', navSettings: 'Settings',
        homeTitle: 'Welcome',
        homeDesc1: 'I\'m OguzHan Can — 16 years old, from Norway.',
        homeDesc2: 'I build fast, modern, pixel-perfect, and 100% halal websites using clean code.',
        homeDesc3: 'Every project is made with sincerity, precision, and love for the craft — bi-idhnillah.',
        homePrice: 'Professional websites from only $40 · Quality guaranteed, bi-idhnillah',
        hireButton: 'Hire Me Now',
        contactTitle: 'Let\'s Work Together',
        contactSub: 'Get in Touch',
        contactDesc: 'Available for freelance front-end work · Fast delivery · Halal design only',
        copyEmail: 'Copy Email', copyPhone: 'Copy Phone',
        limitationsSub: 'My Focus (Currently)',
        focus1: 'Clean, responsive front-end development',
        focus2: 'Modern UI/UX with perfect details',
        focus3: 'Fast, lightweight, SEO-friendly code',
        focus4: 'Only halal projects — no haram content',
        blessing: 'Getting better every day, bi-idhnillah',
        settingsTitle: 'Settings', languageLabel: 'Language', closeButton: 'Close'
    },
    ar: {
        headerTitle: 'أوغوزهان جان',
        navHome: 'الرئيسية', navContact: 'تواصل', navSettings: 'الإعدادات',
        homeTitle: 'أهلاً وسهلاً',
        homeDesc1: 'أنا أوغوزهان جان، عمري 16 سنة، من النرويج.',
        homeDesc2: 'أصمم مواقع ويب سريعة، عصرية، مثالية بكسل، وحلال 100% بكود نظيف.',
        homeDesc3: 'كل مشروع يُصنع بإخلاص ودقة وحب للعمل — بإذن الله.',
        homePrice: 'مواقع احترافية من 40$ فقط · جودة مضمونة بإذن الله',
        hireButton: 'تواصل معي الآن',
        contactTitle: 'لنعمل معًا',
        contactSub: 'تواصلوا معي',
        contactDesc: 'متاح للعمل الحر في تطوير الواجهة الأمامية · تسليم سريع · تصميم حلال فقط',
        copyEmail: 'نسخ الإيميل', copyPhone: 'نسخ رقم الهاتف',
        limitationsSub: 'تركيزي الحالي',
        focus1: 'تطوير واجهة أمامية نظيفة ومتجاوبة',
        focus2: 'تصميم واجهة/تجربة مستخدم عصرية بدقة عالية',
        focus3: 'كود سريع، خفيف، متوافق مع محركات البحث',
        focus4: 'مشاريع حلال فقط — لا محتوى حرام',
        blessing: 'أتحسن كل يوم بإذن الله',
        settingsTitle: 'الإعدادات', languageLabel: 'اللغة', closeButton: 'إغلاق'
    },
    tr: {
        headerTitle: 'OGUZHAN CAN',
        navHome: 'Ana Sayfa', navContact: 'İletişim', navSettings: 'Ayarlar',
        homeTitle: 'Hoş Geldiniz',
        homeDesc1: 'Ben OguzHan Can — 16 yaşında, Norveç\'ten.',
        homeDesc2: 'Temiz kodla hızlı, modern, piksel mükemmel ve %100 helal web siteleri yapıyorum.',
        homeDesc3: 'Her proje samimiyet, titizlik ve işe sevgiyle yapılır — bi-iznillah.',
        homePrice: 'Sadece 40$’dan profesyonel siteler · Kalite garantili, bi-iznillah',
        hireButton: 'Hemen İşe Al',
        contactTitle: 'Birlikte Çalışalım',
        contactSub: 'İletişime Geç',
        contactDesc: 'Serbest ön yüz geliştirme için müsaitim · Hızlı teslim · Sadece helal tasarım',
        copyEmail: 'E-postayı Kopyala', copyPhone: 'Telefonu Kopyala',
        limitationsSub: 'Şu Anki Odak Noktam',
        focus1: 'Temiz ve responsive ön yüz geliştirme',
        focus2: 'Mükemmel detaylarla modern UI/UX',
        focus3: 'Hızlı, hafif, SEO dostu kod',
        focus4: 'Sadece helal projeler — haram içerik yok',
        blessing: 'Her gün daha iyi oluyorum bi-iznillah',
        settingsTitle: 'Ayarlar', languageLabel: 'Dil', closeButton: 'Kapat'
    },
    no: {
        headerTitle: 'OGUZHAN CAN',
        navHome: 'Hjem', navContact: 'Kontakt', navSettings: 'Innstillinger',
        homeTitle: 'Velkommen',
        homeDesc1: 'Jeg er OguzHan Can — 16 år, fra Norge.',
        homeDesc2: 'Jeg lager raske, moderne, pikselperfekte og 100% halal nettsider med ren kode.',
        homeDesc3: 'Hvert prosjekt lages med oppriktighet, presisjon og kjærlighet til faget — bi-idnillah.',
        homePrice: 'Profesjonelle nettsider fra kun $40 · Kvalitet garantert, bi-idnillah',
        hireButton: 'Ansett Meg Nå',
        contactTitle: 'La Oss Samarbeide',
        contactSub: 'Ta Kontakt',
        contactDesc: 'Tilgjengelig for frilans frontend-arbeid · Rask levering · Kun halal design',
        copyEmail: 'Kopier E-post', copyPhone: 'Kopier Telefon',
        limitationsSub: 'Mitt Fokus (Nå)',
        focus1: 'Ren og responsiv frontend-utvikling',
        focus2: 'Moderne UI/UX med perfekte detaljer',
        focus3: 'Rask, lett og SEO-vennlig kode',
        focus4: 'Kun halal prosjekter — ingen haram innhold',
        blessing: 'Blir bedre hver dag, bi-idnillah',
        settingsTitle: 'Innstillinger', languageLabel: 'Språk', closeButton: 'Lukk'
    }
};

let language = localStorage.getItem('language') || 'en';
let savedScroll = 0;

function updateTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[language]?.[key]) el.textContent = translations[language][key];
  });
  document.getElementById('languageSelect').value = language;
}

function changeLanguage() {
  language = document.getElementById('languageSelect').value;
  localStorage.setItem('language', language);
  updateTranslations();
}

function openSettings() {
  savedScroll = window.pageYOffset;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${savedScroll}px`;
  document.body.style.width = '100%';
  document.getElementById('settingsModal').classList.add('active');
}

function closeSettings() {
  document.getElementById('settingsModal').classList.remove('active');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, savedScroll);
}

function scrollToTop() { window.scrollTo({top:0, behavior:'smooth'}); }
function scrollToSection(id) { document.getElementById(id).scrollIntoView({behavior:'smooth'}); }

function copyText(text) {
  navigator.clipboard.writeText(text);
  const toast = document.getElementById('toast');
  document.getElementById('toast-text').textContent = `Copied: ${text}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  updateTranslations();
  const p = document.getElementById('particles');
  for(let i = 0; i < 100; i++) {
    const el = document.createElement('div');
    el.className = 'particle';
    el.style.left = Math.random() * 100 + '%';
    el.style.animationDelay = Math.random() * 18 + 's';
    el.style.width = el.style.height = Math.random() * 5 + 2 + 'px';
    p.appendChild(el);
  }
});
