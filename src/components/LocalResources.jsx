import { useState } from 'react';
import resourcesData from '../data/resources.json';

const categories = [
  'All',
  'Jobs',
  'Housing',
  'Medical Clinics',
  'Schools',
];

export default function LocalResources() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchZip, setSearchZip] = useState('');
  const [searchText, setSearchText] = useState('');

  const filteredResources = resourcesData.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      item.category === selectedCategory;

    const matchesZip = item.zip.includes(searchZip.trim());

    const query = searchText.trim().toLowerCase();
    const matchesText =
      !query ||
      [item.name, item.address, item.notes, item.category]
        .some((value) => value.toLowerCase().includes(query));

    return matchesCategory && matchesZip && matchesText;
  });

  return (
    <section className="page-section">
      <p className="eyebrow">FIND SUPPORT NEAR YOU</p>
      <h1 className="page-heading">Local Resources</h1>
      <p className="page-description">
        Search for helpful starting points for work, housing, healthcare,
        and education. Use your ZIP code to narrow the results.
      </p>

      <div className="search-panel">
        <input
          type="search"
          placeholder="Search services or locations..."
          aria-label="Search services or locations"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <input
          type="text"
          inputMode="numeric"
          maxLength={5}
          placeholder="ZIP code"
          aria-label="Filter by ZIP code"
          value={searchZip}
          onChange={(event) =>
            setSearchZip(event.target.value.replace(/\D/g, '').slice(0, 5))
          }
        />

        <select
          aria-label="Filter by category"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === 'All' ? 'All categories' : category}
            </option>
          ))}
        </select>
      </div>

      <p className="page-description">
        {filteredResources.length}{' '}
        {filteredResources.length === 1 ? 'resource' : 'resources'} found
      </p>

      {filteredResources.length > 0 ? (
        <div className="resource-grid">
          {filteredResources.map((item) => (
            <article className="resource-card" key={item.id}>
              <span className="category-tag">{item.category}</span>
              <h3>{item.name}</h3>
              <p><strong>ZIP code:</strong> {item.zip}</p>
              <p><strong>Address:</strong> {item.address}</p>
              <p>{item.notes}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No matching resources found</h3>
          <p>Try another ZIP code, category, or search term.</p>
          <button
            className="button button-secondary"
            onClick={() => {
              setSelectedCategory('All');
              setSearchZip('');
              setSearchText('');
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}