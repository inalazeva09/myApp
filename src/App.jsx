import { useState } from 'react';
import Header from './components/Header';
import LocalResources from './components/LocalResources';
import Documentation from './components/Documentation';
import Banking from './components/Banking';
import SeniorCare from './components/SeniorCare';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [language, setLanguage] = useState('en');

  const copy = {
    en: {
      eyebrow: 'YOUR NEXT CHAPTER STARTS HERE',
      title: 'A fresh start, with a little help.',
      intro:
        'Finding your way in a new country can feel overwhelming. Find trusted starting points for everyday needs, important paperwork, and community support.',
      explore: 'Explore local resources',
      learn: 'Find your next step',
      welcome: 'You do not have to figure everything out alone.',
      welcomeText:
        'Explore helpful information for work, housing, healthcare, education, documentation, finances, and community life.',
    },
    es: {
      eyebrow: 'TU NUEVA ETAPA COMIENZA AQUÍ',
      title: 'Un nuevo comienzo, con un poco de ayuda.',
      intro:
        'Orientarse en un país nuevo puede ser difícil. Encuentra recursos para las necesidades diarias, los documentos importantes y el apoyo comunitario.',
      explore: 'Explorar recursos locales',
      learn: 'Encuentra tu próximo paso',
      welcome: 'No tienes que resolverlo todo a solas.',
      welcomeText:
        'Encuentra información sobre empleo, vivienda, salud, educación, documentos, finanzas y comunidad.',
    },
  };

  const text = copy[language] || copy.en;

  return (
    <div className="app-container">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
      />

      <main>
        {activeTab === 'home' && (
          <>
            <section className="hero">
              <div className="hero-content">
                <p className="eyebrow">{text.eyebrow}</p>
                <h1>{text.title}</h1>
                <p className="hero-description">{text.intro}</p>

                <div className="hero-actions">
                  <button
                    className="button button-primary"
                    onClick={() => setActiveTab('resources')}
                  >
                    {text.explore} →
                  </button>

                  <button
                    className="button button-secondary"
                    onClick={() => setActiveTab('docs')}
                  >
                    {text.learn}
                  </button>
                </div>
              </div>

              <div className="hero-art" aria-hidden="true">
                <div className="art-circle">
                  <span className="art-sun">☀</span>
                  <span className="art-hill art-hill-one" />
                  <span className="art-hill art-hill-two" />
                  <span className="art-path" />
                </div>
                <p>A place to begin. A community to grow with.</p>
              </div>
            </section>

            <section className="welcome-section">
              <p className="eyebrow">WELCOME TO MIGRATE</p>
              <h2>{text.welcome}</h2>
              <p>{text.welcomeText}</p>
            </section>

            <section className="feature-grid">
              {[
                {
                  icon: '⌕',
                  title: 'Local resources',
                  description: 'Explore services by category and ZIP code.',
                  tab: 'resources',
                },
                {
                  icon: '▤',
                  title: 'Documents & guidance',
                  description: 'Start with official immigration resources.',
                  tab: 'docs',
                },
                {
                  icon: '$',
                  title: 'Banking & finances',
                  description: 'Learn about accounts, credit, and sending money.',
                  tab: 'banking',
                },
                {
                  icon: '♡',
                  title: 'Senior support',
                  description: 'Find information with accessibility in mind.',
                  tab: 'senior',
                },
              ].map((feature) => (
                <button
                  className="feature-card"
                  key={feature.tab}
                  onClick={() => setActiveTab(feature.tab)}
                >
                  <span className="feature-icon">{feature.icon}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <span className="feature-link">Explore →</span>
                </button>
              ))}
            </section>
          </>
        )}

        {activeTab === 'resources' && <LocalResources />}
        {activeTab === 'docs' && <Documentation />}
        {activeTab === 'banking' && <Banking />}
        {activeTab === 'senior' && <SeniorCare />}
      </main>

      <footer className="site-footer">
        <strong>Migrate</strong>
        <p>
          A starting point for a new chapter. Always verify service details
          with the organization providing them.
        </p>
      </footer>
    </div>
  );
}