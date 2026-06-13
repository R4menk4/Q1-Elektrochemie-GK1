import { useState } from 'react';
import BackButton from '../components/BackButton.jsx';
import Header from '../components/Header.jsx';
import { chemistryAliases, klausurTaskMeta, klausurTasks } from '../data/klausurTasks.js';

const directTypes = new Set([
  'oxidationNumberReaction',
  'redoxEquationScaffold',
  'choiceGroup',
  'multiSelect',
  'calculation',
  'structuredFields',
]);

const superscriptMap = {
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9',
  '⁺': '+',
  '⁻': '-',
};

const subscriptMap = {
  '₀': '0',
  '₁': '1',
  '₂': '2',
  '₃': '3',
  '₄': '4',
  '₅': '5',
  '₆': '6',
  '₇': '7',
  '₈': '8',
  '₉': '9',
};

const romanNumbers = {
  I: '1',
  II: '2',
  III: '3',
  IV: '4',
  V: '5',
  VI: '6',
};

function fieldId(subtaskId, ...parts) {
  return [subtaskId, ...parts].join('__');
}

function getInput(inputs, id) {
  return inputs[id] ?? '';
}

function normalizeUnicode(value) {
  return String(value ?? '')
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/g, (char) => superscriptMap[char] ?? char)
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (char) => subscriptMap[char] ?? char)
    .replace(/[−–—]/g, '-')
    .replace(/→/g, '->');
}

function normalizePlain(value) {
  return normalizeUnicode(value)
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/\((\d?[+-])\)/g, '$1')
    .replace(/[-‐‑‒]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function containsTerm(text, term) {
  const normalizedText = normalizePlain(text);
  const aliasTerms = Object.values(chemistryAliases).find((aliases) =>
    aliases.some((alias) => normalizePlain(alias) === normalizePlain(term)),
  );
  const terms = aliasTerms ?? [term];

  return terms.some((candidate) => {
    const normalizedTerm = normalizePlain(candidate);
    if (!normalizedTerm) return false;

    return (
      normalizedText.includes(normalizedTerm) ||
      normalizedText.replace(/\s/g, '').includes(normalizedTerm.replace(/\s/g, ''))
    );
  });
}

function equalsNormalizedText(value, expected) {
  return (
    normalizePlain(value) === normalizePlain(expected) ||
    normalizePlain(value).replace(/\s/g, '') === normalizePlain(expected).replace(/\s/g, '')
  );
}

function normalizeElement(value) {
  return String(value ?? '').trim().toLowerCase();
}

function normalizeNumberLike(value) {
  return normalizeUnicode(value).trim().replace(/\s+/g, '');
}

function normalizeOxidationNumber(value) {
  let normalized = normalizeNumberLike(value).toUpperCase();
  const sign = normalized.startsWith('-') ? '-' : '';
  normalized = normalized.replace(/^[+]/, '').replace(/^[-]/, '');
  normalized = romanNumbers[normalized] ?? normalized;
  if (!normalized) return '';
  if (sign) return `-${normalized}`;
  return normalized;
}

function normalizeCharge(value) {
  let normalized = normalizeNumberLike(value).replace(/^\+(\d+)$/, '$1+');
  if (normalized === '' || normalized === '0') return '0';
  if (normalized === '1+' || normalized === '+1' || normalized === '+') return '+';
  if (normalized === '1-' || normalized === '-1' || normalized === '-') return '-';
  normalized = normalized.replace(/^(\d)([+-])$/, '$1$2').replace(/^([+-])(\d)$/, '$2$1');
  return normalized;
}

function normalizerFor(kind) {
  if (kind === 'element') return normalizeElement;
  if (kind === 'charge') return normalizeCharge;
  if (kind === 'oxidationNumber') return normalizeOxidationNumber;
  return normalizeNumberLike;
}

function isAccepted(value, answer, kind = 'text') {
  const normalize = normalizerFor(kind);
  const accepted = [answer?.correct, ...(answer?.accepted ?? []), ...(answer?.correctValues ?? [])].filter(
    (item) => item !== undefined,
  );
  return accepted.some((item) => normalize(value) === normalize(item));
}

function directClass(results, id) {
  if (!results || !(id in results)) return '';
  return results[id] ? 'is-correct' : 'is-wrong';
}

function renderIndex(index) {
  return index ? <sub>{index}</sub> : null;
}

function renderCharge(charge) {
  return charge ? <sup>{charge}</sup> : null;
}

function Material({ material }) {
  if (material.type === 'table') {
    return (
      <section className="klausur-material">
        <h3>{material.title}</h3>
        <div className="klausur-table-wrap">
          <table>
            <thead>
              <tr>{material.columns.map((column) => <th key={column}>{column}</th>)}</tr>
            </thead>
            <tbody>
              {material.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  const items = material.content ?? [];

  return (
    <section className="klausur-material">
      <h3>{material.title}</h3>
      {material.type === 'sequence' ? (
        <p className="formula formula--block">{material.content}</p>
      ) : (
        <ul>
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
    </section>
  );
}

function OxidationNumberReaction({ subtask, inputs, results, onInput }) {
  function renderParticle(particle, sideIndex, particleIndex) {
    return (
      <span className="oxidation-particle" key={`${sideIndex}-${particleIndex}`}>
        {particle.coefficient && <span className="chemical-coefficient">{particle.coefficient}</span>}
        {particle.formula.map((entry, entryIndex) => {
          const id = fieldId(subtask.id, 'ox', sideIndex, particleIndex, entryIndex);
          return (
            <span className="oxidation-element" key={id}>
              <input
                className={`oxidation-input ${directClass(results, id)}`}
                value={getInput(inputs, id)}
                onChange={(event) => onInput(id, event.target.value)}
                aria-label={`Oxidationszahl für ${entry.element}`}
              />
              <span className="oxidation-symbol-row">
                <span className="chemical-symbol">{entry.element}</span>
                {renderIndex(entry.index)}
              </span>
            </span>
          );
        })}
      </span>
    );
  }

  function renderSide(side, sideIndex) {
    return side.map((particle, particleIndex) => (
      <span className="reaction-chunk" key={`${sideIndex}-${particleIndex}`}>
        {particleIndex > 0 && <span className="fixed-operator">+</span>}
        {renderParticle(particle, sideIndex, particleIndex)}
      </span>
    ));
  }

  return (
    <div className="oxidation-reaction">
      <div className="chemical-equation">
        {renderSide(subtask.reaction.left, 'left')}
        <span className="fixed-operator">→</span>
        {renderSide(subtask.reaction.right, 'right')}
      </div>
    </div>
  );
}

function ScaffoldInput({ id, label, className, inputs, results, onInput }) {
  return (
    <input
      className={`${className} ${directClass(results, id)}`}
      value={getInput(inputs, id)}
      onChange={(event) => onInput(id, event.target.value)}
      aria-label={label}
    />
  );
}

function RedoxEquationScaffold({ subtask, inputs, results, onInput }) {
  function renderParticle(part, equationIndex, partIndex) {
    const coefficientId = fieldId(subtask.id, 'scaffold', equationIndex, partIndex, 'coefficient');
    return (
      <span className="scaffold-particle" key={coefficientId}>
        <ScaffoldInput
          id={coefficientId}
          label="Koeffizient"
          className="scaffold-input scaffold-input--coefficient"
          inputs={inputs}
          results={results}
          onInput={onInput}
        />
        <span className="scaffold-formula">
          {part.formula.map((entry, formulaIndex) => {
            const elementId = fieldId(subtask.id, 'scaffold', equationIndex, partIndex, formulaIndex, 'element');
            const indexId = fieldId(subtask.id, 'scaffold', equationIndex, partIndex, formulaIndex, 'index');
            const chargeId = fieldId(subtask.id, 'scaffold', equationIndex, partIndex, formulaIndex, 'charge');
            return (
              <span className="scaffold-formula-entry" key={elementId}>
                <ScaffoldInput
                  id={elementId}
                  label="Elementsymbol"
                  className="scaffold-input scaffold-input--element"
                  inputs={inputs}
                  results={results}
                  onInput={onInput}
                />
                <ScaffoldInput
                  id={indexId}
                  label="Index"
                  className="scaffold-input scaffold-input--index"
                  inputs={inputs}
                  results={results}
                  onInput={onInput}
                />
                <ScaffoldInput
                  id={chargeId}
                  label="Ladung"
                  className="scaffold-input scaffold-input--charge"
                  inputs={inputs}
                  results={results}
                  onInput={onInput}
                />
              </span>
            );
          })}
        </span>
      </span>
    );
  }

  function renderElectron(part, equationIndex, partIndex) {
    const coefficientId = fieldId(subtask.id, 'scaffold', equationIndex, partIndex, 'electronCoefficient');
    const chargeId = fieldId(subtask.id, 'scaffold', equationIndex, partIndex, 'electronCharge');
    return (
      <span className="scaffold-electron" key={coefficientId}>
        <ScaffoldInput
          id={coefficientId}
          label="Elektronenanzahl"
          className="scaffold-input scaffold-input--coefficient"
          inputs={inputs}
          results={results}
          onInput={onInput}
        />
        <span className="chemical-symbol">{part.symbol ?? 'e'}</span>
        {part.charge && (
          <ScaffoldInput
            id={chargeId}
            label="Elektronenladung"
            className="scaffold-input scaffold-input--charge"
            inputs={inputs}
            results={results}
            onInput={onInput}
          />
        )}
      </span>
    );
  }

  function renderPart(part, equationIndex, partIndex) {
    if (part.type === 'plus') return <span className="fixed-operator" key={partIndex}>+</span>;
    if (part.type === 'arrow') return <span className="fixed-operator" key={partIndex}>→</span>;
    if (part.type === 'electron') return renderElectron(part, equationIndex, partIndex);
    return renderParticle(part, equationIndex, partIndex);
  }

  return (
    <div className="scaffold-equations">
      {subtask.scaffold.instruction && <p className="klausur-instruction">{subtask.scaffold.instruction}</p>}
      {subtask.scaffold.equations.map((equation, equationIndex) => (
        <section className="scaffold-equation" key={`${subtask.id}-${equation.label}`}>
          <h4>{equation.label}</h4>
          <div className="chemical-equation">
            {equation.parts.map((part, partIndex) => renderPart(part, equationIndex, partIndex))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ChoiceGroup({ subtask, inputs, results, onInput }) {
  return (
    <div className="direct-fields">
      {Object.entries(subtask.choices).map(([group, choices]) => {
        const id = fieldId(subtask.id, group);
        return (
          <fieldset className={`klausur-choice-group ${directClass(results, id)}`} key={group}>
            <legend>{group}</legend>
            {choices.map((choice) => (
              <label className="klausur-option" key={choice}>
                <input
                  type="radio"
                  name={id}
                  checked={getInput(inputs, id) === choice}
                  onChange={() => onInput(id, choice)}
                />
                <span>{choice}</span>
              </label>
            ))}
          </fieldset>
        );
      })}
    </div>
  );
}

function MultiSelect({ subtask, inputs, results, onInput }) {
  return (
    <fieldset className="klausur-choice-group">
      <legend>Antwort auswählen</legend>
      {subtask.options.map((option) => {
        const id = fieldId(subtask.id, option);
        return (
          <label className={`klausur-option ${directClass(results, id)}`} key={option}>
            <input
              type="checkbox"
              checked={Boolean(inputs[id])}
              onChange={(event) => onInput(id, event.target.checked)}
            />
            <span>{option}</span>
          </label>
        );
      })}
    </fieldset>
  );
}

function Calculation({ subtask, inputs, results, onInput }) {
  return (
    <div className="direct-fields">
      {subtask.fields.map((field) => {
        const id = fieldId(subtask.id, field.id);
        return (
          <label className="klausur-field" key={field.id}>
            <span>{field.label}</span>
            <input
              className={directClass(results, id)}
              inputMode="decimal"
              value={getInput(inputs, id)}
              onChange={(event) => onInput(id, event.target.value)}
            />
          </label>
        );
      })}
    </div>
  );
}

function StructuredFields({ subtask, inputs, results, onInput }) {
  return (
    <div className="direct-fields">
      {subtask.fields.map((field) => {
        const id = fieldId(subtask.id, field.id);
        return (
          <label className="klausur-field" key={field.id}>
            <span>{field.label}</span>
            <input
              className={directClass(results, id)}
              value={getInput(inputs, id)}
              onChange={(event) => onInput(id, event.target.value)}
            />
          </label>
        );
      })}
    </div>
  );
}

function criterionMatches(criterion, answer) {
  if (criterion.matchMode === 'all') {
    return (criterion.keywords ?? []).every((keyword) => containsTerm(answer, keyword));
  }

  if (criterion.matchMode === 'allGroups') {
    return (criterion.keywordGroups ?? []).every((group) => group.some((keyword) => containsTerm(answer, keyword)));
  }

  if (criterion.matchMode === 'atLeastGroups') {
    const hits = (criterion.keywordGroups ?? []).filter((group) =>
      group.some((keyword) => containsTerm(answer, keyword)),
    ).length;
    return hits >= (criterion.requiredGroups ?? 1);
  }

  return (criterion.keywords ?? []).some((keyword) => containsTerm(answer, keyword));
}

function CriteriaChecker({ subtask, value, visible, results }) {
  if (!visible) return null;

  return (
    <section className="criteria-check">
      <h4>Deine Antwort enthält:</h4>
      <ul>
        {subtask.criteria.map((criterion, index) => (
          <li className={results?.[index] ? 'is-correct' : 'is-wrong'} key={criterion.label}>
            <span aria-hidden="true">{results?.[index] ? '✓' : '×'}</span>
            {criterion.label}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Subtask({
  subtask,
  inputs,
  directResults,
  criteriaVisible,
  criteriaResults,
  solutions,
  onInput,
  onCheckDirect,
  onCheckCriteria,
  onToggleSolution,
}) {
  const textId = fieldId(subtask.id, 'text');
  const isDirect = subtask.checking?.type === 'direct' || directTypes.has(subtask.type);
  const isCriteria = subtask.type === 'freeText' && subtask.checking?.type === 'criteria';

  return (
    <section className="klausur-subtask">
      <h3>{subtask.label} {subtask.prompt}</h3>
      {subtask.instruction && <p className="klausur-instruction">{subtask.instruction}</p>}
      {subtask.materials?.map((material) => <Material material={material} key={material.title} />)}

      {subtask.type === 'oxidationNumberReaction' && (
        <OxidationNumberReaction
          subtask={subtask}
          inputs={inputs}
          results={directResults[subtask.id]}
          onInput={onInput}
        />
      )}
      {subtask.type === 'redoxEquationScaffold' && (
        <RedoxEquationScaffold
          subtask={subtask}
          inputs={inputs}
          results={directResults[subtask.id]}
          onInput={onInput}
        />
      )}
      {subtask.type === 'choiceGroup' && (
        <ChoiceGroup subtask={subtask} inputs={inputs} results={directResults[subtask.id]} onInput={onInput} />
      )}
      {subtask.type === 'multiSelect' && (
        <MultiSelect subtask={subtask} inputs={inputs} results={directResults[subtask.id]} onInput={onInput} />
      )}
      {subtask.type === 'calculation' && (
        <Calculation subtask={subtask} inputs={inputs} results={directResults[subtask.id]} onInput={onInput} />
      )}
      {subtask.type === 'structuredFields' && (
        <StructuredFields subtask={subtask} inputs={inputs} results={directResults[subtask.id]} onInput={onInput} />
      )}

      {isCriteria && (
        <>
          <textarea
            className="klausur-textarea"
            value={getInput(inputs, textId)}
            onChange={(event) => onInput(textId, event.target.value)}
            aria-label={`Antwort zu ${subtask.label}`}
          />
          <CriteriaChecker
            subtask={subtask}
            value={getInput(inputs, textId)}
            visible={criteriaVisible[subtask.id]}
            results={criteriaResults[subtask.id]}
          />
        </>
      )}

      <div className="button-row klausur-button-row">
        {isDirect && (
          <button type="button" className="primary-button" onClick={() => onCheckDirect(subtask)}>
            Antwort prüfen
          </button>
        )}
        {isCriteria && (
          <button type="button" className="primary-button" onClick={() => onCheckCriteria(subtask)}>
            {criteriaVisible[subtask.id] ? 'Antwort erneut überprüfen' : 'Antwort überprüfen'}
          </button>
        )}
        <button type="button" className="secondary-button" onClick={() => onToggleSolution(subtask.id)}>
          Musterlösung {solutions[subtask.id] ? 'ausblenden' : 'anzeigen'}
        </button>
      </div>

      {solutions[subtask.id] && (
        <section className="solution-card solution-card--compact">
          <h4>Musterlösung</h4>
          <p>{subtask.modelAnswer}</p>
        </section>
      )}
    </section>
  );
}

export default function KlausurTasksPage({ navigate }) {
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [inputs, setInputs] = useState({});
  const [directResults, setDirectResults] = useState({});
  const [criteriaVisible, setCriteriaVisible] = useState({});
  const [criteriaResults, setCriteriaResults] = useState({});
  const [solutions, setSolutions] = useState({});
  const selectedTask = klausurTasks.find((task) => task.id === selectedTaskId);

  function updateInput(id, value) {
    const nextInputs = { ...inputs, [id]: value };
    setInputs(nextInputs);

    const visibleCriteriaSubtask = klausurTasks
      .flatMap((task) => task.subtasks)
      .find((subtask) => id === fieldId(subtask.id, 'text') && criteriaVisible[subtask.id]);

    if (visibleCriteriaSubtask) {
      setCriteriaResults((current) => ({
        ...current,
        [visibleCriteriaSubtask.id]: visibleCriteriaSubtask.criteria.map((criterion) =>
          criterionMatches(criterion, value),
        ),
      }));
    }
  }

  function checkOxidationNumbers(subtask) {
    const results = {};
    ['left', 'right'].forEach((side) => {
      subtask.reaction[side].forEach((particle, particleIndex) => {
        particle.formula.forEach((entry, entryIndex) => {
          const id = fieldId(subtask.id, 'ox', side, particleIndex, entryIndex);
          results[id] = isAccepted(getInput(inputs, id), entry.oxidationNumber, 'oxidationNumber');
        });
      });
    });
    return results;
  }

  function checkScaffold(subtask) {
    const results = {};
    subtask.scaffold.equations.forEach((equation, equationIndex) => {
      equation.parts.forEach((part, partIndex) => {
        if (part.type === 'particle') {
          const coefficientId = fieldId(subtask.id, 'scaffold', equationIndex, partIndex, 'coefficient');
          results[coefficientId] = isAccepted(getInput(inputs, coefficientId), part.coefficient, 'number');
          part.formula.forEach((entry, formulaIndex) => {
            const elementId = fieldId(subtask.id, 'scaffold', equationIndex, partIndex, formulaIndex, 'element');
            const indexId = fieldId(subtask.id, 'scaffold', equationIndex, partIndex, formulaIndex, 'index');
            const chargeId = fieldId(subtask.id, 'scaffold', equationIndex, partIndex, formulaIndex, 'charge');
            results[elementId] = isAccepted(getInput(inputs, elementId), entry.element, 'element');
            results[indexId] = isAccepted(getInput(inputs, indexId), entry.index, 'number');
            results[chargeId] = isAccepted(getInput(inputs, chargeId), entry.charge, 'charge');
          });
        }
        if (part.type === 'electron') {
          const coefficientId = fieldId(subtask.id, 'scaffold', equationIndex, partIndex, 'electronCoefficient');
          results[coefficientId] = isAccepted(getInput(inputs, coefficientId), part.coefficient, 'number');
          if (part.charge) {
            const chargeId = fieldId(subtask.id, 'scaffold', equationIndex, partIndex, 'electronCharge');
            results[chargeId] = isAccepted(getInput(inputs, chargeId), part.charge, 'charge');
          }
        }
      });
    });
    return results;
  }

  function checkDirect(subtask) {
    let results = {};

    if (subtask.type === 'oxidationNumberReaction') results = checkOxidationNumbers(subtask);
    if (subtask.type === 'redoxEquationScaffold') results = checkScaffold(subtask);

    if (subtask.type === 'choiceGroup') {
      Object.keys(subtask.choices).forEach((group) => {
        const id = fieldId(subtask.id, group);
        results[id] = getInput(inputs, id) === subtask.correctValues[group];
      });
    }

    if (subtask.type === 'multiSelect') {
      const correct = new Set(subtask.correctAnswers);
      subtask.options.forEach((option) => {
        const id = fieldId(subtask.id, option);
        results[id] = Boolean(inputs[id]) === correct.has(option);
      });
    }

    if (subtask.type === 'calculation') {
      subtask.fields.forEach((field) => {
        const id = fieldId(subtask.id, field.id);
        const value = Number(String(getInput(inputs, id)).replace(',', '.'));
        results[id] = Math.abs(value - field.correctValue) <= (subtask.tolerance ?? 0);
      });
    }

    if (subtask.type === 'structuredFields') {
      subtask.fields.forEach((field) => {
        const id = fieldId(subtask.id, field.id);
        results[id] = field.correctValues.some((correctValue) => equalsNormalizedText(getInput(inputs, id), correctValue));
      });
    }

    setDirectResults((current) => ({ ...current, [subtask.id]: results }));
  }

  function checkCriteria(subtask) {
    const answer = getInput(inputs, fieldId(subtask.id, 'text'));
    setCriteriaVisible((current) => ({ ...current, [subtask.id]: true }));
    setCriteriaResults((current) => ({
      ...current,
      [subtask.id]: subtask.criteria.map((criterion) => criterionMatches(criterion, answer)),
    }));
  }

  function toggleSolution(subtaskId) {
    setSolutions((current) => ({ ...current, [subtaskId]: !current[subtaskId] }));
  }

  if (!selectedTask) {
    return (
      <>
        <BackButton onClick={() => navigate('home')}>Zur Hauptübersicht</BackButton>
        <Header title={klausurTaskMeta.title} subtitle={klausurTaskMeta.subtitle} />

        <div className="klausur-overview-grid">
          {klausurTasks.map((task, index) => (
            <button
              type="button"
              className="klausur-overview-card"
              key={task.id}
              onClick={() => setSelectedTaskId(task.id)}
            >
              <span className="klausur-card__number">Aufgabe {index + 1}</span>
              <span className="klausur-card__title">{task.title}</span>
              <span className="klausur-card__description">
                {task.overview?.cardDescription ?? task.description}
              </span>
              <span className="klausur-card__operators" aria-label="Operatoren">
                {task.overview?.operators?.map((operator) => (
                  <span className={`afb-chip afb-chip--${operator.afb}`} key={`${operator.name}-${operator.afb}`}>
                    {operator.name} – AFB {operator.afb}
                  </span>
                ))}
              </span>
              <span className="klausur-card__action">Aufgabe öffnen</span>
            </button>
          ))}
        </div>
      </>
    );
  }

  const selectedTaskIndex = klausurTasks.findIndex((task) => task.id === selectedTask.id);

  return (
    <>
      <div className="self-check-actions no-print">
        <BackButton onClick={() => setSelectedTaskId(null)}>{klausurTaskMeta.overviewButtonLabel}</BackButton>
        <button type="button" className="primary-button" onClick={() => window.print()}>
          {klausurTaskMeta.printButtonLabel}
        </button>
      </div>

      <Header title={selectedTask.title} subtitle={selectedTask.description} />

      <div className="klausur-page">
        <article className="klausur-task" id={selectedTask.id}>
          <p className="eyebrow">Aufgabe {selectedTaskIndex + 1}</p>
          <h2>{selectedTask.title}</h2>
          <p className="klausur-context">{selectedTask.context}</p>
          {selectedTask.image && (
            <img
              className="klausur-image"
              src={`${import.meta.env.BASE_URL}${selectedTask.image}`}
              alt=""
              loading="lazy"
            />
          )}
          {selectedTask.materials?.map((material) => <Material material={material} key={material.title} />)}
          {selectedTask.subtasks.map((subtask) => (
            <Subtask
              key={subtask.id}
              subtask={subtask}
              inputs={inputs}
              directResults={directResults}
              criteriaVisible={criteriaVisible}
              criteriaResults={criteriaResults}
              solutions={solutions}
              onInput={updateInput}
              onCheckDirect={checkDirect}
              onCheckCriteria={checkCriteria}
              onToggleSolution={toggleSolution}
            />
          ))}
        </article>
      </div>
    </>
  );
}
