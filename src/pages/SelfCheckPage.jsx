import { useState } from 'react';
import BackButton from '../components/BackButton.jsx';
import Header from '../components/Header.jsx';
import selfCheckCompetencies from '../data/selfCheckCompetencies.js';

const STORAGE_KEY = 'electrochemistry-self-check';

function loadSavedChecks() {
  try {
    const savedChecks = window.localStorage.getItem(STORAGE_KEY);
    return savedChecks ? JSON.parse(savedChecks) : {};
  } catch {
    return {};
  }
}

function saveChecks(checks) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checks));
  } catch {
    // The self-check remains usable even if localStorage is unavailable.
  }
}

export default function SelfCheckPage({ navigate }) {
  const [checkedItems, setCheckedItems] = useState(loadSavedChecks);

  function handleToggle(itemId) {
    setCheckedItems((currentChecks) => {
      const nextChecks = {
        ...currentChecks,
        [itemId]: !currentChecks[itemId],
      };

      saveChecks(nextChecks);
      return nextChecks;
    });
  }

  return (
    <>
      <div className="self-check-actions no-print">
        <BackButton onClick={() => navigate('home')}>Zurück zur Startseite</BackButton>
        <button
          type="button"
          className="primary-button"
          onClick={() => window.print()}
        >
          Selbstcheck drucken / als PDF speichern
        </button>
      </div>

      <Header
        title="Selbstcheck"
        subtitle="Hake ab, welche Kompetenzen du schon sicher beherrschst."
      />

      <div className="self-check-list">
        {selfCheckCompetencies.map((category, categoryIndex) => (
          <section className="self-check-category" key={category.category}>
            <h2>{category.category}</h2>
            <div className="self-check-items">
              {category.items.map((item, itemIndex) => {
                const itemId = `${categoryIndex}-${itemIndex}`;

                return (
                  <label className="self-check-item" key={itemId}>
                    <input
                      type="checkbox"
                      checked={Boolean(checkedItems[itemId])}
                      onChange={() => handleToggle(itemId)}
                    />
                    <span>{item}</span>
                  </label>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
