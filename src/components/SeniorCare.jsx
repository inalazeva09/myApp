import { useState } from 'react';

export default function SeniorCare() {
  const [fontSize, setFontSize] = useState(16);

  return (
    <section className="page-section" style={{ fontSize: `${fontSize}px` }}>
      <p className="eyebrow">SUPPORT FOR EVERY GENERATION</p>
      <h1 className="page-heading">Senior Immigrant Support</h1>
      <p className="page-description">
        Find starting points for older adults and families navigating
        healthcare, language access, transportation, and community life.
      </p>

      <div className="info-card" style={{ marginBottom: 20 }}>
        <h3>Adjust text size</h3>
        <p>Make the information easier to read on your screen.</p>
        <div className="button-row">
          <button
            className="button button-primary"
            onClick={() => setFontSize((size) => Math.min(size + 2, 28))}
            disabled={fontSize >= 28}
          >
            A+ Increase text
          </button>
          <button
            className="button button-secondary"
            onClick={() => setFontSize((size) => Math.max(size - 2, 12))}
            disabled={fontSize <= 12}
          >
            A− Decrease text
          </button>
          <button
            className="button button-secondary"
            onClick={() => setFontSize(16)}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="document-grid">
        <article className="info-card">
          <h3>Healthcare and language access</h3>
          <p>
            Ask healthcare providers about interpreters, translated
            materials, appointment assistance, and available insurance
            or benefits guidance.
          </p>
          <a
            href="https://www.medicare.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Medicare information →
          </a>
        </article>

        <article className="info-card">
          <h3>Community and social support</h3>
          <p>
            Look for local senior centers, accessible transportation,
            meal programs, social activities, and community organizations
            that serve older adults.
          </p>
          <a
            href="https://eldercare.acl.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find Eldercare resources →
          </a>
        </article>
      </div>
    </section>
  );
}