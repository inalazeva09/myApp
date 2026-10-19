export default function Documentation() {
  const docs = [
    {
      title: 'USCIS Official Portal',
      url: 'https://www.uscis.gov/',
      desc: 'Find official immigration information, application forms, and instructions.',
    },
    {
      title: 'myUSCIS Account',
      url: 'https://my.uscis.gov/',
      desc: 'Access online immigration services and check case information when available.',
    },
    {
      title: 'USCIS FIRST FOIA System',
      url: 'https://first.uscis.gov/',
      desc: 'Learn how to request eligible immigration records through USCIS.',
    },
    {
      title: 'CBP I-94 Service',
      url: 'https://i94.cbp.dhs.gov/',
      desc: 'Access applicable arrival and departure records.',
    },
  ];

  return (
    <section className="page-section">
      <p className="eyebrow">START WITH TRUSTED INFORMATION</p>
      <h1 className="page-heading">Documentation & Legal Resources</h1>
      <p className="page-description">
        Immigration paperwork can feel complicated. These official
        government resources are a starting point for finding forms,
        records, and case information.
      </p>

      <div className="document-grid">
        {docs.map((doc) => (
          <article className="document-card" key={doc.title}>
            <span className="category-tag">Official resource</span>
            <h3>{doc.title}</h3>
            <p>{doc.desc}</p>
            <a href={doc.url} target="_blank" rel="noopener noreferrer">
              Visit official website →
            </a>
          </article>
        ))}
      </div>

      <div className="info-card" style={{ marginTop: 20 }}>
        <h3>Need help understanding a document?</h3>
        <p>
          Consider contacting a qualified immigration attorney or an
          accredited representative. Not every organization offering
          immigration assistance is authorized to provide legal advice.
          Migrate provides information, not legal representation.
        </p>
        <a
          href="https://www.justice.gov/eoir/recognized-organizations-and-accredited-representatives-roster-state-and-city"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find recognized legal assistance →
        </a>
      </div>
    </section>
  );
}