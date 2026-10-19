const tabs = [
  { id: 'home', en: 'Home', es: 'Inicio' },
  { id: 'resources', en: 'Local Resources', es: 'Recursos locales' },
  { id: 'docs', en: 'Documentation', es: 'Documentación' },
  { id: 'banking', en: 'Banking', es: 'Finanzas' },
  { id: 'senior', en: 'Senior Support', es: 'Apoyo para mayores' },
];

export default function Header({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
}) {
  return (
    <header className="site-header">
      <button
        className="brand"
        onClick={() => setActiveTab('home')}
        aria-label="Go to home page"
      >
        <span className="brand-mark">✳</span>
        <span>
          <strong>Migrate</strong>
          <small>FIND YOUR WAY FORWARD</small>
        </span>
      </button>

      <nav className="main-nav" aria-label="Main navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-link ${
              activeTab === tab.id ? 'nav-link-active' : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {language === 'es' ? tab.es : tab.en}
          </button>
        ))}
      </nav>

      <label className="language-picker">
        <span aria-hidden="true">◎</span>
        <select
          aria-label="Choose language"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </label>
    </header>
  );
}