export default function Banking() {
  const topics = [
    {
      title: 'Opening a bank account',
      desc: 'Learn what identification and other documents a financial institution may request. Requirements vary by institution.',
    },
    {
      title: 'Building credit',
      desc: 'Explore credit reports, secured credit cards, responsible borrowing, and ways to build a financial history.',
    },
    {
      title: 'Sending money abroad',
      desc: 'Compare transfer fees, exchange rates, delivery times, and recipient options before choosing a provider.',
    },
    {
      title: 'Budgeting and saving',
      desc: 'Learn basic budgeting, emergency savings, banking fees, and ways to protect your money from scams.',
    },
  ];

  return (
    <section className="page-section">
      <p className="eyebrow">BUILD FINANCIAL CONFIDENCE</p>
      <h1 className="page-heading">Banking & Financial Guidance</h1>
      <p className="page-description">
        Start learning about everyday finances in the United States,
        from opening an account to understanding credit and sending
        money to family abroad.
      </p>

      <div className="document-grid">
        {topics.map((topic) => (
          <article className="info-card" key={topic.title}>
            <span className="category-tag">Financial education</span>
            <h3>{topic.title}</h3>
            <p>{topic.desc}</p>
          </article>
        ))}
      </div>

      <div className="info-card" style={{ marginTop: 20 }}>
        <h3>Before choosing a financial service</h3>
        <p>
          Confirm eligibility, accepted identification, account fees,
          transfer costs, and consumer protections directly with the
          provider. Never share passwords or account details through
          an unverified service.
        </p>
        <a
          href="https://www.consumerfinance.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the Consumer Financial Protection Bureau →
        </a>
      </div>
    </section>
  );
}