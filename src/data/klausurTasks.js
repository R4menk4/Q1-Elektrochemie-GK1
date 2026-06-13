// src/data/klausurTasks.js
// Klausurähnliche Aufgaben für den weniger weit fortgeschrittenen Chemie-GK
// Inhalte: Oxidationszahlen/Redoxreaktionen, Redoxreihe, galvanische Zelle, Elektrodenpotenziale
// Nicht enthalten: Lithium-Ionen-Akku, Elektrolyse

export const chemistryAliases = {
  cu2: [
    "cu2+",
    "cu²⁺",
    "cu(2+)",
    "kupfer-ion",
    "kupfer-ionen",
    "kupferion",
    "kupferionen",
    "kupfer ion",
    "kupfer ionen",
    "kupfer(ii)-ion",
    "kupfer(ii)-ionen",
    "kupfer ii ion",
    "kupfer ii ionen"
  ],
  fe2: [
    "fe2+",
    "fe²⁺",
    "fe(2+)",
    "eisen-ion",
    "eisen-ionen",
    "eisenion",
    "eisenionen",
    "eisen ion",
    "eisen ionen",
    "eisen(ii)-ion",
    "eisen(ii)-ionen",
    "eisen ii ion",
    "eisen ii ionen"
  ],
  zn2: [
    "zn2+",
    "zn²⁺",
    "zn(2+)",
    "zink-ion",
    "zink-ionen",
    "zinkion",
    "zinkionen",
    "zink ion",
    "zink ionen"
  ],
  agPlus: [
    "ag+",
    "ag⁺",
    "ag(1+)",
    "silber-ion",
    "silber-ionen",
    "silberion",
    "silberionen",
    "silber ion",
    "silber ionen"
  ],
  mg2: [
    "mg2+",
    "mg²⁺",
    "mg(2+)",
    "magnesium-ion",
    "magnesium-ionen",
    "magnesiumion",
    "magnesiumionen",
    "magnesium ion",
    "magnesium ionen"
  ],
  electronLoss: [
    "elektronen abgeben",
    "gibt elektronen ab",
    "geben elektronen ab",
    "elektronenabgabe",
    "wird oxidiert",
    "werden oxidiert",
    "oxidiert",
    "oxidation"
  ],
  electronGain: [
    "elektronen aufnehmen",
    "nimmt elektronen auf",
    "nehmen elektronen auf",
    "elektronenaufnahme",
    "wird reduziert",
    "werden reduziert",
    "reduziert",
    "reduktion"
  ],
  consumedOrRemoved: [
    "verbraucht",
    "entfernt",
    "aus der lösung entfernt",
    "aus loesung entfernt",
    "weniger",
    "wird weniger",
    "werden weniger",
    "nimmt ab",
    "nehmen ab",
    "verschwindet",
    "verschwinden"
  ],
  solutionGetsLighter: [
    "lösung wird heller",
    "loesung wird heller",
    "heller",
    "deutlich heller",
    "entfärbt",
    "entfaerbt",
    "entfärbung",
    "entfaerbung",
    "farbe wird schwächer",
    "farbe wird schwaecher",
    "blaue farbe wird schwächer",
    "blaue farbe wird schwaecher",
    "blau wird schwächer",
    "blau wird schwaecher"
  ]
};

const neutralCharge = { correct: "", accepted: ["", "0"] };
const emptyIndex = { correct: "", accepted: ["", "1"] };
const emptyCoefficient = { correct: "", accepted: ["", "1"] };
const oneCoefficient = { correct: "", accepted: ["", "1"] };
const twoCoefficient = { correct: "2", accepted: ["2"] };
const electronCharge = { correct: "-", accepted: ["-", "−", "⁻"] };

export const klausurTasks = [
  {
    id: "kupferdach-patina-basis",
    title: "Warum wird ein Kupferdach grün?",
    shortTitle: "Kupferdach",
    description:
      "Oxidationszahlen, Oxidation, Reduktion, Oxidationsmittel und Reduktionsmittel an einem Alltagsphänomen üben.",
    overview: {
      cardDescription:
        "Übe Oxidationszahlen, Oxidation, Reduktion sowie Oxidations- und Reduktionsmittel am Beispiel eines Kupferdachs.",
      operators: [
        { name: "bestimmen", afb: "I" },
        { name: "erklären", afb: "II" },
        { name: "angeben", afb: "I" }
      ]
    },
    image: "assets/images/Grünspan.png",
    context:
      "Viele ältere Gebäude besitzen Dächer oder Regenrinnen aus Kupfer. Frisches Kupfer glänzt rötlich. Nach längerer Zeit bildet sich eine dunkle bis grünliche Schicht.",
    materials: [
      {
        title: "Material 1: Vereinfachte Reaktionen bei der Patinabildung",
        type: "reaction-list",
        content: [
          "1. Kupfer reagiert mit Sauerstoff zu einem Kupferoxid:",
          "4 Cu + O₂ → 2 Cu₂O",
          "2. Dieses Kupferoxid kann weiter zu einem anderen Kupferoxid reagieren:",
          "2 Cu₂O + O₂ → 4 CuO",
          "3. In feuchter Luft mit Kohlenstoffdioxid entstehen grünliche Kupfercarbonate."
        ]
      }
    ],
    subtasks: [
      {
        id: "kupferdach-a",
        label: "a)",
        type: "oxidationNumberReaction",
        checking: { type: "direct", feedback: "color" },
        prompt:
          "Bestimme die Oxidationszahlen von Kupfer und Sauerstoff in Reaktion 1.",
        instruction:
          "Trage die Oxidationszahlen in die kleinen Kästchen oberhalb der Elementsymbole ein.",
        reaction: {
          left: [
            {
              coefficient: "4",
              formula: [
                {
                  element: "Cu",
                  index: "",
                  oxidationNumber: {
                    correct: "0",
                    accepted: ["0"]
                  }
                }
              ]
            },
            {
              coefficient: "",
              formula: [
                {
                  element: "O",
                  index: "2",
                  oxidationNumber: {
                    correct: "0",
                    accepted: ["0"]
                  }
                }
              ]
            }
          ],
          right: [
            {
              coefficient: "2",
              formula: [
                {
                  element: "Cu",
                  index: "2",
                  oxidationNumber: {
                    correct: "+I",
                    accepted: ["+I", "+1", "1"]
                  }
                },
                {
                  element: "O",
                  index: "",
                  oxidationNumber: {
                    correct: "−II",
                    accepted: ["−II", "-II", "−2", "-2"]
                  }
                }
              ]
            }
          ]
        },
        modelAnswer:
          "Cu: 0; O₂: 0; in Cu₂O: Cu +I und O −II."
      },
      {
        id: "kupferdach-b",
        label: "b)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt:
          "Erkläre mithilfe der Oxidationszahlen, welches Teilchen oxidiert und welches reduziert wird.",
        modelAnswer:
          "Kupfer wird oxidiert, weil die Oxidationszahl von 0 auf +I steigt. Sauerstoff wird reduziert, weil die Oxidationszahl von 0 auf −II sinkt.",
        criteria: [
          {
            label: "Kupfer wird als oxidiertes Teilchen genannt.",
            matchMode: "allGroups",
            keywordGroups: [["kupfer", "cu"], chemistryAliases.electronLoss]
          },
          {
            label: "Sauerstoff wird als reduziertes Teilchen genannt.",
            matchMode: "allGroups",
            keywordGroups: [["sauerstoff", "o2", "o₂"], chemistryAliases.electronGain]
          },
          {
            label: "Die Erhöhung der Oxidationszahl bei Kupfer wird beschrieben.",
            matchMode: "allGroups",
            keywordGroups: [
              ["kupfer", "cu"],
              ["0 auf +i", "0 auf +1", "steigt", "erhöht", "erhoeht", "erhöhung", "erhoeung"]
            ]
          },
          {
            label: "Die Erniedrigung der Oxidationszahl bei Sauerstoff wird beschrieben.",
            matchMode: "allGroups",
            keywordGroups: [
              ["sauerstoff", "o2", "o₂"],
              ["0 auf -ii", "0 auf −ii", "0 auf -2", "0 auf −2", "sinkt", "erniedrigung", "verringert"]
            ]
          }
        ]
      },
      {
        id: "kupferdach-c",
        label: "c)",
        type: "choiceGroup",
        checking: { type: "direct", feedback: "color" },
        prompt: "Gib Oxidationsmittel und Reduktionsmittel der Reaktion 1 an.",
        choices: {
          oxidationsmittel: ["Kupfer", "Sauerstoff", "Kupferoxid"],
          reduktionsmittel: ["Kupfer", "Sauerstoff", "Kupferoxid"]
        },
        correctValues: {
          oxidationsmittel: "Sauerstoff",
          reduktionsmittel: "Kupfer"
        },
        modelAnswer:
          "Sauerstoff ist das Oxidationsmittel, da Sauerstoff reduziert wird. Kupfer ist das Reduktionsmittel, da Kupfer oxidiert wird."
      },
      {
        id: "kupferdach-d",
        label: "d)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt:
          "Erkläre, warum die Patinabildung chemisch als Redoxvorgang beschrieben werden kann.",
        modelAnswer:
          "Bei der Patinabildung laufen Redoxreaktionen ab. Kupfer gibt Elektronen ab und wird oxidiert. Sauerstoff nimmt Elektronen auf und wird reduziert. Oxidation und Reduktion laufen gekoppelt ab.",
        criteria: [
          {
            label: "Der Begriff Redoxreaktion wird verwendet.",
            matchMode: "any",
            keywords: ["redoxreaktion", "redoxvorgang", "redox"]
          },
          {
            label: "Elektronenübertragung wird genannt.",
            matchMode: "any",
            keywords: [
              "elektronenübertragung",
              "elektronenuebertragung",
              "elektronen werden übertragen",
              "elektronen werden uebertragen",
              "elektronen übertragen",
              "elektronen uebertragen"
            ]
          },
          {
            label: "Oxidation wird genannt.",
            matchMode: "any",
            keywords: chemistryAliases.electronLoss
          },
          {
            label: "Reduktion wird genannt.",
            matchMode: "any",
            keywords: chemistryAliases.electronGain
          },
          {
            label: "Oxidation und Reduktion werden als gekoppelte Vorgänge beschrieben.",
            matchMode: "any",
            keywords: ["gekoppelt", "gleichzeitig", "zusammen", "beide vorgänge", "beide vorgaenge"]
          }
        ]
      }
    ]
  },

  {
    id: "metalle-kupfersalzloesung",
    title: "Welches Metall reagiert mit Kupfersalzlösung?",
    shortTitle: "Metalle und Kupfersalzlösung",
    description:
      "Redoxreihe, edel/unedel, Metallabscheidung und Reaktionsvorhersage materialgestützt anwenden.",
    overview: {
      cardDescription:
        "Werte Versuche mit Metallen und Metallsalzlösungen aus und nutze die Redoxreihe zur Vorhersage von Reaktionen.",
      operators: [
        { name: "beschreiben", afb: "I" },
        { name: "erklären", afb: "II" },
        { name: "begründen", afb: "II" },
        { name: "formulieren", afb: "II" },
        { name: "beurteilen", afb: "III" }
      ]
    },
    image: "assets/images/Eisennagel_Kupfersulfat.png",
    context:
      "Im Labor werden verschiedene Metallbleche in Metallsalzlösungen gelegt. Beobachtet wird, ob sich ein neuer metallischer Belag bildet.",
    materials: [
      {
        title: "Material 1: Beobachtungen",
        type: "table",
        columns: ["Versuch", "Metall", "Lösung", "Beobachtung"],
        rows: [
          ["A", "Eisen", "Kupfer(II)-sulfat-Lösung", "rötlicher Belag, blaue Lösung wird heller"],
          ["B", "Kupfer", "Eisen(II)-sulfat-Lösung", "keine sichtbare Veränderung"],
          ["C", "Zink", "Kupfer(II)-sulfat-Lösung", "deutlicher rötlicher/dunkler Belag, Lösung wird deutlich heller"],
          ["D", "Silber", "Kupfer(II)-sulfat-Lösung", "keine sichtbare Veränderung"]
        ]
      },
      {
        title: "Material 2: Ausschnitt aus der Redoxreihe",
        type: "sequence",
        content: "Unedler → edler: Zn | Fe | Cu | Ag"
      }
    ],
    subtasks: [
      {
        id: "metalle-a",
        label: "a)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt:
          "Beschreibe die Beobachtungen in Versuch A und C fachsprachlich.",
        modelAnswer:
          "In Versuch A wird Kupfer aus der Lösung abgeschieden. Kupfer-Ionen werden zu metallischem Kupfer reduziert. In Versuch C geschieht dies ebenfalls, aber deutlicher bzw. schneller. Die blaue Lösung wird heller, weil Kupfer-Ionen aus der Lösung entfernt bzw. verbraucht werden.",
        criteria: [
          {
            label: "Versuch A wird als Kupferabscheidung oder Kupferbildung beschrieben.",
            matchMode: "allGroups",
            keywordGroups: [
              ["versuch a", "eisen"],
              [
                "kupferabscheidung",
                "kupfer abgeschieden",
                "kupfer scheidet sich ab",
                "kupfer bildet sich",
                "rötlicher belag",
                "roetlicher belag",
                "kupfer"
              ]
            ]
          },
          {
            label: "Versuch C wird als Kupferabscheidung oder Kupferbildung beschrieben.",
            matchMode: "allGroups",
            keywordGroups: [
              ["versuch c", "zink"],
              [
                "kupferabscheidung",
                "kupfer abgeschieden",
                "kupfer scheidet sich ab",
                "kupfer bildet sich",
                "rötlicher belag",
                "roetlicher belag",
                "kupfer"
              ]
            ]
          },
          {
            label: "Kupfer-Ionen werden als Teilchen der Lösung genannt.",
            matchMode: "any",
            keywords: chemistryAliases.cu2
          },
          {
            label:
              "Die Aufhellung der Lösung wird mit dem Verbrauch bzw. der Entfernung von Kupfer-Ionen erklärt.",
            matchMode: "allGroups",
            keywordGroups: [
              chemistryAliases.cu2,
              chemistryAliases.consumedOrRemoved,
              chemistryAliases.solutionGetsLighter
            ]
          },
          {
            label: "Der stärkere bzw. schnellere Effekt bei Zink wird aufgegriffen.",
            matchMode: "allGroups",
            keywordGroups: [
              ["zink", "zn"],
              ["stärker", "staerker", "schneller", "deutlicher", "deutlich heller", "heftiger"]
            ]
          }
        ]
      },
      {
        id: "metalle-b",
        label: "b)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt:
          "Erkläre mithilfe der Redoxreihe, warum Eisen und Zink mit Kupfer-Ionen reagieren.",
        modelAnswer:
          "Eisen und Zink sind unedler als Kupfer. Sie stehen in der Redoxreihe links von Kupfer und geben leichter Elektronen ab. Dadurch können sie Kupfer-Ionen zu Kupfer reduzieren. Eisen wird zu Eisen-Ionen oxidiert, Zink zu Zink-Ionen.",
        criteria: [
          {
            label: "Eisen wird als unedler als Kupfer beschrieben.",
            matchMode: "allGroups",
            keywordGroups: [["eisen", "fe"], ["unedler", "steht links", "links von kupfer"]]
          },
          {
            label: "Zink wird als unedler als Kupfer beschrieben.",
            matchMode: "allGroups",
            keywordGroups: [["zink", "zn"], ["unedler", "steht links", "links von kupfer"]]
          },
          {
            label: "Die Redoxreihe wird zur Begründung genutzt.",
            matchMode: "any",
            keywords: ["redoxreihe", "unedler", "edler", "steht links", "links von kupfer"]
          },
          {
            label: "Elektronenabgabe durch Eisen bzw. Zink wird genannt.",
            matchMode: "allGroups",
            keywordGroups: [["eisen", "fe", "zink", "zn"], chemistryAliases.electronLoss]
          },
          {
            label: "Kupfer-Ionen werden als reduzierte Teilchen erkannt.",
            matchMode: "allGroups",
            keywordGroups: [chemistryAliases.cu2, chemistryAliases.electronGain]
          }
        ]
      },
      {
        id: "metalle-c",
        label: "c)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt:
          "Begründe, warum Zink stärker bzw. schneller mit Kupfer-Ionen reagiert als Eisen.",
        modelAnswer:
          "Zink steht in der Redoxreihe weiter links als Eisen und ist daher unedler. Zink gibt leichter Elektronen ab als Eisen. Deshalb reagiert Zink mit Kupfer-Ionen stärker bzw. schneller.",
        criteria: [
          {
            label: "Zink wird als unedler als Eisen beschrieben.",
            matchMode: "allGroups",
            keywordGroups: [["zink", "zn"], ["eisen", "fe"], ["unedler", "weiter links"]]
          },
          {
            label: "Die Position in der Redoxreihe wird als Begründung genutzt.",
            matchMode: "any",
            keywords: ["redoxreihe", "weiter links", "steht links", "position"]
          },
          {
            label: "Eine größere Bereitschaft zur Elektronenabgabe wird genannt.",
            matchMode: "any",
            keywords: [
              "gibt leichter elektronen ab",
              "elektronenabgabe",
              "größere bereitschaft",
              "groessere bereitschaft",
              "unedler"
            ]
          },
          {
            label: "Der stärkere bzw. schnellere Reaktionsverlauf wird erklärt.",
            matchMode: "allGroups",
            keywordGroups: [
              ["stärker", "staerker", "schneller", "deutlicher", "heftiger"],
              chemistryAliases.cu2
            ]
          }
        ]
      },
      {
        id: "metalle-d",
        label: "d)",
        type: "redoxEquationScaffold",
        checking: { type: "direct", feedback: "color" },
        prompt:
          "Formuliere die Teilgleichungen und die Gesamtgleichung für Versuch A.",
        scaffold: {
          instruction:
            "Fülle die Kästchen für Koeffizienten, Elementsymbole, Indizes, Ladungen und Elektronen aus. Plus-Zeichen und Reaktionspfeile sind vorgegeben.",
          equations: [
            {
              label: "Oxidation",
              expectedDisplay: "Fe → Fe²⁺ + 2 e⁻",
              parts: [
                {
                  type: "particle",
                  coefficient: emptyCoefficient,
                  formula: [
                    {
                      element: { correct: "Fe", accepted: ["Fe", "fe"] },
                      index: emptyIndex,
                      charge: neutralCharge
                    }
                  ]
                },
                { type: "arrow" },
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Fe", accepted: ["Fe", "fe"] },
                      index: emptyIndex,
                      charge: { correct: "2+", accepted: ["2+", "+2", "²⁺"] }
                    }
                  ]
                },
                { type: "plus" },
                {
                  type: "electron",
                  coefficient: { correct: "2", accepted: ["2"] },
                  symbol: "e",
                  charge: electronCharge
                }
              ]
            },
            {
              label: "Reduktion",
              expectedDisplay: "Cu²⁺ + 2 e⁻ → Cu",
              parts: [
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Cu", accepted: ["Cu", "cu"] },
                      index: emptyIndex,
                      charge: { correct: "2+", accepted: ["2+", "+2", "²⁺"] }
                    }
                  ]
                },
                { type: "plus" },
                {
                  type: "electron",
                  coefficient: { correct: "2", accepted: ["2"] },
                  symbol: "e",
                  charge: electronCharge
                },
                { type: "arrow" },
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Cu", accepted: ["Cu", "cu"] },
                      index: emptyIndex,
                      charge: neutralCharge
                    }
                  ]
                }
              ]
            },
            {
              label: "Gesamtgleichung",
              expectedDisplay: "Fe + Cu²⁺ → Fe²⁺ + Cu",
              parts: [
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Fe", accepted: ["Fe", "fe"] },
                      index: emptyIndex,
                      charge: neutralCharge
                    }
                  ]
                },
                { type: "plus" },
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Cu", accepted: ["Cu", "cu"] },
                      index: emptyIndex,
                      charge: { correct: "2+", accepted: ["2+", "+2", "²⁺"] }
                    }
                  ]
                },
                { type: "arrow" },
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Fe", accepted: ["Fe", "fe"] },
                      index: emptyIndex,
                      charge: { correct: "2+", accepted: ["2+", "+2", "²⁺"] }
                    }
                  ]
                },
                { type: "plus" },
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Cu", accepted: ["Cu", "cu"] },
                      index: emptyIndex,
                      charge: neutralCharge
                    }
                  ]
                }
              ]
            }
          ]
        },
        modelAnswer:
          "Oxidation: Fe → Fe²⁺ + 2 e⁻. Reduktion: Cu²⁺ + 2 e⁻ → Cu. Gesamt: Fe + Cu²⁺ → Fe²⁺ + Cu."
      },
      {
        id: "metalle-e",
        label: "e)",
        type: "redoxEquationScaffold",
        checking: { type: "direct", feedback: "color" },
        prompt:
          "Formuliere die Gesamtgleichung für Versuch C.",
        scaffold: {
          instruction:
            "Fülle die Kästchen für Koeffizienten, Elementsymbole, Indizes und Ladungen aus. Plus-Zeichen und Reaktionspfeil sind vorgegeben.",
          equations: [
            {
              label: "Gesamtgleichung",
              expectedDisplay: "Zn + Cu²⁺ → Zn²⁺ + Cu",
              parts: [
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Zn", accepted: ["Zn", "zn"] },
                      index: emptyIndex,
                      charge: neutralCharge
                    }
                  ]
                },
                { type: "plus" },
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Cu", accepted: ["Cu", "cu"] },
                      index: emptyIndex,
                      charge: { correct: "2+", accepted: ["2+", "+2", "²⁺"] }
                    }
                  ]
                },
                { type: "arrow" },
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Zn", accepted: ["Zn", "zn"] },
                      index: emptyIndex,
                      charge: { correct: "2+", accepted: ["2+", "+2", "²⁺"] }
                    }
                  ]
                },
                { type: "plus" },
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Cu", accepted: ["Cu", "cu"] },
                      index: emptyIndex,
                      charge: neutralCharge
                    }
                  ]
                }
              ]
            }
          ]
        },
        modelAnswer:
          "Zn + Cu²⁺ → Zn²⁺ + Cu."
      },
      {
        id: "metalle-f",
        label: "f)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt:
          "Eine Schülerin sagt: „Kupfer ist reaktiver, weil es als Belag sichtbar wird.“ Beurteile diese Aussage.",
        modelAnswer:
          "Die Aussage ist falsch. Das sichtbare Kupfer entsteht, weil Kupfer-Ionen reduziert werden. Reaktiver bzw. unedler sind die Metalle, die Elektronen abgeben, also Zink und Eisen. Zink ist dabei unedler als Eisen.",
        criteria: [
          {
            label: "Die Aussage wird als falsch oder nicht fachgerecht beurteilt.",
            matchMode: "any",
            keywords: ["falsch", "nicht richtig", "nicht fachgerecht", "stimmt nicht", "nicht korrekt"]
          },
          {
            label: "Die Kupferabscheidung wird als Reduktion von Kupfer-Ionen erklärt.",
            matchMode: "allGroups",
            keywordGroups: [chemistryAliases.cu2, chemistryAliases.electronGain]
          },
          {
            label: "Eisen und Zink werden als Elektronendonatoren beschrieben.",
            matchMode: "allGroups",
            keywordGroups: [
              ["eisen", "fe"],
              ["zink", "zn"],
              ["elektronendonator", "geben elektronen ab", "elektronenabgabe", "werden oxidiert"]
            ]
          },
          {
            label: "Zink wird als unedler bzw. reaktiver als Eisen eingeordnet.",
            matchMode: "allGroups",
            keywordGroups: [["zink", "zn"], ["eisen", "fe"], ["unedler", "reaktiver", "weiter links"]]
          },
          {
            label: "Sichtbare Abscheidung wird nicht mit Reaktivität des Kupfers verwechselt.",
            matchMode: "any",
            keywords: [
              "abscheidung bedeutet nicht reaktiver",
              "sichtbar heißt nicht reaktiver",
              "sichtbar heisst nicht reaktiver",
              "kupferionen werden reduziert",
              "kupfer wird abgeschieden"
            ]
          }
        ]
      }
    ]
  },

  {
    id: "daniell-element-grundlagen",
    title: "Wie funktioniert das Daniell-Element?",
    shortTitle: "Daniell-Element",
    description:
      "Aufbau und Funktion einer galvanischen Zelle mit Halbzellen, Salzbrücke, Elektronenfluss und Ionenfluss erklären.",
    overview: {
      cardDescription:
        "Beschreibe Aufbau und Funktion des Daniell-Elements mit Halbzellen, Salzbrücke, Elektronenfluss und Ionenfluss.",
      operators: [
        { name: "beschreiben", afb: "I" },
        { name: "zuordnen", afb: "I" },
        { name: "erklären", afb: "II" },
        { name: "formulieren", afb: "II" }
      ]
    },
    image: "assets/images/Metallbleche.png",
    simulationPath: "Simulationen/Galvanische_Zelle/index.html",
    context:
      "Eine Schülerin baut eine galvanische Zelle aus einer Zink-Halbzelle und einer Kupfer-Halbzelle auf. Ein Voltmeter zeigt eine Spannung an.",
    materials: [
      {
        title: "Material 1: Aufbau",
        type: "text-list",
        content: [
          "Linke Halbzelle: Zinkblech in Zinksulfat-Lösung.",
          "Rechte Halbzelle: Kupferblech in Kupfer(II)-sulfat-Lösung.",
          "Beide Halbzellen sind durch eine Salzbrücke verbunden.",
          "Die Metallbleche sind außen über ein Kabel und ein Voltmeter verbunden."
        ]
      },
      {
        title: "Material 2: Beobachtungen nach einiger Zeit",
        type: "text-list",
        content: [
          "Die Zinkelektrode wird dünner.",
          "An der Kupferelektrode bildet sich ein rötlicher Belag.",
          "Die blaue Farbe der Kupfer(II)-sulfat-Lösung wird schwächer."
        ]
      }
    ],
    subtasks: [
      {
        id: "daniell-a",
        label: "a)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt: "Beschreibe den Aufbau der galvanischen Zelle.",
        modelAnswer:
          "Die galvanische Zelle besteht aus zwei Halbzellen. In der Zink-Halbzelle befindet sich ein Zinkblech in Zinksulfat-Lösung. In der Kupfer-Halbzelle befindet sich ein Kupferblech in Kupfer(II)-sulfat-Lösung. Die Halbzellen sind über eine Salzbrücke verbunden. Außen sind die Elektroden über ein Kabel bzw. Voltmeter verbunden.",
        criteria: [
          {
            label: "Zwei Halbzellen werden genannt.",
            matchMode: "any",
            keywords: ["zwei halbzellen", "2 halbzellen", "halbzellen"]
          },
          {
            label: "Zink-Halbzelle wird beschrieben.",
            matchMode: "allGroups",
            keywordGroups: [["zink", "zn"], ["zinksulfat", "zinksalzlösung", "zinksalzloesung", "halbzelle"]]
          },
          {
            label: "Kupfer-Halbzelle wird beschrieben.",
            matchMode: "allGroups",
            keywordGroups: [["kupfer", "cu"], ["kupfer(ii)-sulfat", "kupfersulfat", "halbzelle"]]
          },
          {
            label: "Salzbrücke wird genannt.",
            matchMode: "any",
            keywords: ["salzbrücke", "salzbruecke", "ionenbrücke", "ionenbruecke", "diaphragma"]
          },
          {
            label: "Äußerer Stromkreis wird genannt.",
            matchMode: "any",
            keywords: ["äußerer stromkreis", "aeusserer stromkreis", "kabel", "voltmeter", "leiter"]
          }
        ]
      },
      {
        id: "daniell-b",
        label: "b)",
        type: "choiceGroup",
        checking: { type: "direct", feedback: "color" },
        prompt: "Ordne Anode und Kathode zu.",
        choices: {
          anode: ["Zinkelektrode", "Kupferelektrode"],
          kathode: ["Zinkelektrode", "Kupferelektrode"]
        },
        correctValues: {
          anode: "Zinkelektrode",
          kathode: "Kupferelektrode"
        },
        modelAnswer:
          "Anode: Zinkelektrode. Kathode: Kupferelektrode."
      },
      {
        id: "daniell-c",
        label: "c)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt: "Beschreibe, was an der Zinkelektrode passiert.",
        modelAnswer:
          "An der Zinkelektrode werden Zinkatome oxidiert. Sie geben Elektronen ab und gehen als Zink-Ionen in Lösung. Deshalb wird die Zinkelektrode dünner.",
        criteria: [
          {
            label: "Zink wird als reagierender Stoff genannt.",
            matchMode: "any",
            keywords: ["zink", "zn", "zinkatome"]
          },
          {
            label: "Oxidation wird genannt.",
            matchMode: "any",
            keywords: chemistryAliases.electronLoss
          },
          {
            label: "Elektronenabgabe wird beschrieben.",
            matchMode: "any",
            keywords: ["elektronen ab", "elektronenabgabe", "gibt elektronen ab", "geben elektronen ab"]
          },
          {
            label: "Zink-Ionen entstehen.",
            matchMode: "any",
            keywords: chemistryAliases.zn2
          },
          {
            label: "Die dünner werdende Elektrode wird erklärt.",
            matchMode: "any",
            keywords: ["wird dünner", "wird duenner", "löst sich", "loest sich", "geht in lösung", "geht in loesung"]
          }
        ]
      },
      {
        id: "daniell-d",
        label: "d)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt: "Beschreibe, was an der Kupferelektrode passiert.",
        modelAnswer:
          "An der Kupferelektrode werden Kupfer-Ionen aus der Lösung reduziert. Sie nehmen Elektronen auf und werden zu metallischem Kupfer. Deshalb bildet sich ein rötlicher Kupferbelag und die blaue Lösung wird heller.",
        criteria: [
          {
            label: "Kupfer-Ionen werden genannt.",
            matchMode: "any",
            keywords: chemistryAliases.cu2
          },
          {
            label: "Reduktion wird genannt.",
            matchMode: "any",
            keywords: chemistryAliases.electronGain
          },
          {
            label: "Elektronenaufnahme wird beschrieben.",
            matchMode: "any",
            keywords: ["elektronen aufnehmen", "nimmt elektronen auf", "elektronenaufnahme"]
          },
          {
            label: "Metallisches Kupfer entsteht.",
            matchMode: "any",
            keywords: ["metallisches kupfer", "kupfer entsteht", "kupferbelag", "rötlicher belag", "roetlicher belag"]
          },
          {
            label: "Die Aufhellung der Lösung wird erklärt.",
            matchMode: "allGroups",
            keywordGroups: [chemistryAliases.cu2, chemistryAliases.solutionGetsLighter]
          }
        ]
      },
      {
        id: "daniell-e",
        label: "e)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt: "Erkläre die Funktion der Salzbrücke.",
        modelAnswer:
          "Die Salzbrücke ermöglicht den Ionenfluss zwischen den Halbzellen. Dadurch wird ein Ladungsausgleich hergestellt. Ohne Salzbrücke würde sich Ladung aufbauen und der Elektronenfluss käme zum Erliegen.",
        criteria: [
          {
            label: "Salzbrücke ermöglicht Ionenfluss.",
            matchMode: "allGroups",
            keywordGroups: [
              ["salzbrücke", "salzbruecke", "ionenbrücke", "ionenbruecke"],
              ["ionenfluss", "ionen wandern", "ionenbewegung"]
            ]
          },
          {
            label: "Ladungsausgleich wird genannt.",
            matchMode: "any",
            keywords: ["ladungsausgleich", "ladungen ausgleichen", "ausgleich der ladung"]
          },
          {
            label: "Sie schließt den Stromkreis auf Ionenebene.",
            matchMode: "any",
            keywords: ["stromkreis", "ionenebene", "schließt", "schliesst"]
          },
          {
            label: "Ohne Salzbrücke würde der Elektronenfluss stoppen oder die Zelle nicht dauerhaft funktionieren.",
            matchMode: "any",
            keywords: ["ohne salzbrücke", "ohne salzbruecke", "elektronenfluss stoppt", "kommt zum erliegen", "funktioniert nicht dauerhaft"]
          }
        ]
      },
      {
        id: "daniell-f",
        label: "f)",
        type: "redoxEquationScaffold",
        checking: { type: "direct", feedback: "color" },
        prompt: "Formuliere Teilgleichungen und Gesamtgleichung.",
        scaffold: {
          instruction:
            "Fülle die Kästchen für Koeffizienten, Elementsymbole, Indizes, Ladungen und Elektronen aus. Plus-Zeichen und Reaktionspfeile sind vorgegeben.",
          equations: [
            {
              label: "Oxidation",
              expectedDisplay: "Zn → Zn²⁺ + 2 e⁻",
              parts: [
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Zn", accepted: ["Zn", "zn"] },
                      index: emptyIndex,
                      charge: neutralCharge
                    }
                  ]
                },
                { type: "arrow" },
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Zn", accepted: ["Zn", "zn"] },
                      index: emptyIndex,
                      charge: { correct: "2+", accepted: ["2+", "+2", "²⁺"] }
                    }
                  ]
                },
                { type: "plus" },
                {
                  type: "electron",
                  coefficient: { correct: "2", accepted: ["2"] },
                  symbol: "e",
                  charge: electronCharge
                }
              ]
            },
            {
              label: "Reduktion",
              expectedDisplay: "Cu²⁺ + 2 e⁻ → Cu",
              parts: [
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Cu", accepted: ["Cu", "cu"] },
                      index: emptyIndex,
                      charge: { correct: "2+", accepted: ["2+", "+2", "²⁺"] }
                    }
                  ]
                },
                { type: "plus" },
                {
                  type: "electron",
                  coefficient: { correct: "2", accepted: ["2"] },
                  symbol: "e",
                  charge: electronCharge
                },
                { type: "arrow" },
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Cu", accepted: ["Cu", "cu"] },
                      index: emptyIndex,
                      charge: neutralCharge
                    }
                  ]
                }
              ]
            },
            {
              label: "Gesamtgleichung",
              expectedDisplay: "Zn + Cu²⁺ → Zn²⁺ + Cu",
              parts: [
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Zn", accepted: ["Zn", "zn"] },
                      index: emptyIndex,
                      charge: neutralCharge
                    }
                  ]
                },
                { type: "plus" },
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Cu", accepted: ["Cu", "cu"] },
                      index: emptyIndex,
                      charge: { correct: "2+", accepted: ["2+", "+2", "²⁺"] }
                    }
                  ]
                },
                { type: "arrow" },
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Zn", accepted: ["Zn", "zn"] },
                      index: emptyIndex,
                      charge: { correct: "2+", accepted: ["2+", "+2", "²⁺"] }
                    }
                  ]
                },
                { type: "plus" },
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Cu", accepted: ["Cu", "cu"] },
                      index: emptyIndex,
                      charge: neutralCharge
                    }
                  ]
                }
              ]
            }
          ]
        },
        modelAnswer:
          "Oxidation: Zn → Zn²⁺ + 2 e⁻. Reduktion: Cu²⁺ + 2 e⁻ → Cu. Gesamt: Zn + Cu²⁺ → Zn²⁺ + Cu."
      }
    ]
  },

  {
    id: "groesste-zellspannung-basis",
    title: "Welche galvanische Zelle liefert die größte Zellspannung?",
    shortTitle: "Größte Zellspannung",
    description:
      "Standardelektrodenpotenziale nutzen, Donator- und Akzeptorhalbzelle bestimmen und Zellspannung berechnen.",
    overview: {
      cardDescription:
        "Nutze Standardelektrodenpotenziale, bestimme Anode und Kathode und berechne die Zellspannung galvanischer Zellen.",
      operators: [
        { name: "erklären", afb: "II" },
        { name: "wählen", afb: "I" },
        { name: "berechnen", afb: "II" },
        { name: "bestimmen", afb: "I" },
        { name: "vergleichen", afb: "III" }
      ]
    },
    image: "assets/images/Metallbleche.png",
    context:
      "Eine Lerngruppe möchte aus verschiedenen Halbzellen eine galvanische Zelle mit möglichst großer Zellspannung bauen.",
    materials: [
      {
        title: "Material 1: Standardelektrodenpotenziale",
        type: "table",
        columns: ["Redoxpaar", "E° in V"],
        rows: [
          ["Mg²⁺/Mg", "−2,37"],
          ["Zn²⁺/Zn", "−0,76"],
          ["Fe²⁺/Fe", "−0,44"],
          ["Cu²⁺/Cu", "+0,34"],
          ["Ag⁺/Ag", "+0,80"]
        ]
      }
    ],
    subtasks: [
      {
        id: "zellspannung-a",
        label: "a)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt: "Erkläre, was ein Standardelektrodenpotenzial aussagt.",
        modelAnswer:
          "Das Standardelektrodenpotenzial beschreibt, wie stark die oxidierte Form eines Redoxpaares zur Elektronenaufnahme bzw. Reduktion neigt. Je positiver der Wert ist, desto eher wird das Teilchen reduziert.",
        criteria: [
          {
            label: "Redoxpaar wird genannt.",
            matchMode: "any",
            keywords: ["redoxpaar", "halbzelle"]
          },
          {
            label: "Elektronenaufnahme bzw. Reduktion wird beschrieben.",
            matchMode: "any",
            keywords: ["elektronenaufnahme", "elektronen aufnehmen", "nimmt elektronen auf", "reduktion", "reduziert"]
          },
          {
            label: "Positiveres Potenzial wird mit stärkerer Reduktionsneigung verbunden.",
            matchMode: "any",
            keywords: [
              "je positiver",
              "positiver",
              "höheres potenzial",
              "hoeheres potenzial",
              "eher reduziert",
              "stärkere reduktionsneigung",
              "staerkere reduktionsneigung"
            ]
          },
          {
            label: "Der Bezug zur Tabelle wird hergestellt.",
            matchMode: "any",
            keywords: ["tabelle", "standardelektrodenpotenzial", "e°", "potential", "potenzial"]
          }
        ]
      },
      {
        id: "zellspannung-b",
        label: "b)",
        type: "multiSelect",
        checking: { type: "direct", feedback: "color" },
        prompt: "Wähle die Kombination mit der größten Zellspannung.",
        options: ["Mg/Zn", "Mg/Fe", "Mg/Cu", "Mg/Ag", "Zn/Cu", "Cu/Ag"],
        correctAnswers: ["Mg/Ag"],
        modelAnswer:
          "Mg/Ag liefert die größte Zellspannung, weil Mg²⁺/Mg das niedrigste und Ag⁺/Ag das höchste Elektrodenpotenzial besitzt."
      },
      {
        id: "zellspannung-c",
        label: "c)",
        type: "calculation",
        checking: { type: "direct", feedback: "color" },
        prompt: "Berechne die Zellspannung.",
        fields: [
          { id: "eKathode", label: "E(Kathode) in V", correctValue: 0.8 },
          { id: "eAnode", label: "E(Anode) in V", correctValue: -2.37 },
          { id: "spannung", label: "U in V", correctValue: 3.17 }
        ],
        tolerance: 0.01,
        modelAnswer:
          "U = E(Kathode) − E(Anode) = 0,80 V − (−2,37 V) = 3,17 V."
      },
      {
        id: "zellspannung-d",
        label: "d)",
        type: "structuredFields",
        checking: { type: "direct", feedback: "color" },
        prompt: "Bestimme Anode, Kathode, Elektronenflussrichtung und Gesamtreaktion.",
        fields: [
          { id: "anode", label: "Anode", correctValues: ["Magnesium", "Mg"] },
          { id: "kathode", label: "Kathode", correctValues: ["Silber", "Ag"] },
          {
            id: "electronFlow",
            label: "Elektronenfluss",
            correctValues: ["von Magnesium zu Silber", "von Mg zu Ag", "Magnesiumelektrode zur Silberelektrode"]
          },
          {
            id: "overallReaction",
            label: "Gesamtreaktion",
            correctValues: ["Mg + 2 Ag+ -> Mg2+ + 2 Ag", "Mg + 2 Ag⁺ → Mg²⁺ + 2 Ag"]
          }
        ],
        modelAnswer:
          "Anode: Magnesium. Kathode: Silber. Elektronenfluss: von Magnesium zu Silber. Gesamtreaktion: Mg + 2 Ag⁺ → Mg²⁺ + 2 Ag."
      },
      {
        id: "zellspannung-e",
        label: "e)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt: "Vergleiche die Mg/Ag-Zelle mit einer Zn/Cu-Zelle.",
        materials: [
          {
            title: "Material 2: Vergleichszelle",
            type: "text-list",
            content: ["Zn²⁺/Zn: −0,76 V", "Cu²⁺/Cu: +0,34 V"]
          }
        ],
        modelAnswer:
          "Die Zn/Cu-Zelle hat eine Zellspannung von 1,10 V. Die Mg/Ag-Zelle hat mit 3,17 V eine deutlich größere Zellspannung. Daher ist die Mg/Ag-Zelle für eine möglichst hohe Zellspannung besser geeignet. Allerdings können praktische Aspekte wie Sicherheit, Kosten oder Verfügbarkeit ebenfalls eine Rolle spielen.",
        criteria: [
          {
            label: "Zellspannung der Zn/Cu-Zelle wird berechnet oder genannt.",
            matchMode: "any",
            keywords: ["1,10", "1.10", "zn/cu", "zink-kupfer", "zink kupfer"]
          },
          {
            label: "Zellspannung der Mg/Ag-Zelle wird genannt.",
            matchMode: "any",
            keywords: ["3,17", "3.17", "mg/ag", "magnesium-silber", "magnesium silber"]
          },
          {
            label: "Mg/Ag wird als spannungsstärker beschrieben.",
            matchMode: "allGroups",
            keywordGroups: [
              ["mg/ag", "magnesium-silber", "magnesium silber"],
              ["größer", "groesser", "höher", "hoeher", "spannungsstärker", "spannungsstaerker"]
            ]
          },
          {
            label: "Die Beurteilung erfolgt anhand der Zellspannung.",
            matchMode: "any",
            keywords: ["zellspannung", "spannung", "potenzialdifferenz"]
          },
          {
            label: "Ein praktischer Zusatzaspekt wird genannt.",
            matchMode: "any",
            keywords: ["sicherheit", "kosten", "verfügbarkeit", "verfuegbarkeit", "praktisch", "reaktivität", "reaktivitaet"]
          }
        ]
      }
    ]
  },

  {
    id: "freiwilligkeit-redoxreaktion",
    title: "Kann diese Redoxreaktion freiwillig ablaufen?",
    shortTitle: "Freiwilligkeit prüfen",
    description:
      "Elektrodenpotenziale nutzen, Zellspannung berechnen und die freiwillige Reaktionsrichtung beurteilen.",
    overview: {
      cardDescription:
        "Prüfe mithilfe von Elektrodenpotenzialen und Zellspannung, ob eine Redoxreaktion freiwillig abläuft.",
      operators: [
        { name: "zuordnen", afb: "I" },
        { name: "berechnen", afb: "II" },
        { name: "beurteilen", afb: "III" },
        { name: "erklären", afb: "II" }
      ]
    },
    image: "assets/images/Metallbleche.png",
    context:
      "Eine Schülerin möchte wissen, ob eine Reaktion zwischen Kupfer und Silber-Ionen freiwillig abläuft. Eine andere Schülerin schlägt vor, stattdessen Silber mit Kupfer-Ionen reagieren zu lassen.",
    materials: [
      {
        title: "Material 1: Zwei mögliche Reaktionen",
        type: "reaction-list",
        content: [
          "Reaktion A: Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag",
          "Reaktion B: 2 Ag + Cu²⁺ → 2 Ag⁺ + Cu"
        ]
      },
      {
        title: "Material 2: Standardelektrodenpotenziale",
        type: "table",
        columns: ["Redoxpaar", "E° in V"],
        rows: [
          ["Cu²⁺/Cu", "+0,34"],
          ["Ag⁺/Ag", "+0,80"]
        ]
      }
    ],
    subtasks: [
      {
        id: "freiwilligkeit-a",
        label: "a)",
        type: "redoxEquationScaffold",
        checking: { type: "direct", feedback: "color" },
        prompt: "Ordne bei Reaktion A Oxidation und Reduktion zu.",
        scaffold: {
          instruction:
            "Fülle die Kästchen für Koeffizienten, Elementsymbole, Indizes, Ladungen und Elektronen aus. Plus-Zeichen und Reaktionspfeile sind vorgegeben.",
          equations: [
            {
              label: "Oxidation",
              expectedDisplay: "Cu → Cu²⁺ + 2 e⁻",
              parts: [
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Cu", accepted: ["Cu", "cu"] },
                      index: emptyIndex,
                      charge: neutralCharge
                    }
                  ]
                },
                { type: "arrow" },
                {
                  type: "particle",
                  coefficient: oneCoefficient,
                  formula: [
                    {
                      element: { correct: "Cu", accepted: ["Cu", "cu"] },
                      index: emptyIndex,
                      charge: { correct: "2+", accepted: ["2+", "+2", "²⁺"] }
                    }
                  ]
                },
                { type: "plus" },
                {
                  type: "electron",
                  coefficient: { correct: "2", accepted: ["2"] },
                  symbol: "e",
                  charge: electronCharge
                }
              ]
            },
            {
              label: "Reduktion",
              expectedDisplay: "2 Ag⁺ + 2 e⁻ → 2 Ag",
              parts: [
                {
                  type: "particle",
                  coefficient: { correct: "2", accepted: ["2"] },
                  formula: [
                    {
                      element: { correct: "Ag", accepted: ["Ag", "ag"] },
                      index: emptyIndex,
                      charge: { correct: "+", accepted: ["+", "1+", "+1", "⁺"] }
                    }
                  ]
                },
                { type: "plus" },
                {
                  type: "electron",
                  coefficient: { correct: "2", accepted: ["2"] },
                  symbol: "e",
                  charge: electronCharge
                },
                { type: "arrow" },
                {
                  type: "particle",
                  coefficient: { correct: "2", accepted: ["2"] },
                  formula: [
                    {
                      element: { correct: "Ag", accepted: ["Ag", "ag"] },
                      index: emptyIndex,
                      charge: neutralCharge
                    }
                  ]
                }
              ]
            }
          ]
        },
        modelAnswer:
          "Kupfer wird oxidiert: Cu → Cu²⁺ + 2 e⁻. Silber-Ionen werden reduziert: 2 Ag⁺ + 2 e⁻ → 2 Ag."
      },
      {
        id: "freiwilligkeit-b",
        label: "b)",
        type: "calculation",
        checking: { type: "direct", feedback: "color" },
        prompt: "Berechne die Zellspannung für Reaktion A.",
        fields: [
          { id: "eKathode", label: "E(Kathode) in V", correctValue: 0.8 },
          { id: "eAnode", label: "E(Anode) in V", correctValue: 0.34 },
          { id: "spannung", label: "U in V", correctValue: 0.46 }
        ],
        tolerance: 0.01,
        modelAnswer:
          "U = E(Kathode) − E(Anode) = 0,80 V − 0,34 V = 0,46 V."
      },
      {
        id: "freiwilligkeit-c",
        label: "c)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt: "Beurteile, ob Reaktion A freiwillig abläuft.",
        modelAnswer:
          "Reaktion A läuft freiwillig ab, weil die Zellspannung positiv ist. Silber-Ionen nehmen Elektronen auf und Kupfer gibt Elektronen ab.",
        criteria: [
          {
            label: "Reaktion A wird als freiwillig beurteilt.",
            matchMode: "allGroups",
            keywordGroups: [["reaktion a", "a"], ["freiwillig", "läuft ab", "laeuft ab", "spontan"]]
          },
          {
            label: "Positive Zellspannung wird als Begründung genannt.",
            matchMode: "allGroups",
            keywordGroups: [["positiv", "positive"], ["zellspannung", "spannung", "0,46", "0.46"]]
          },
          {
            label: "Silber-Ionen werden reduziert.",
            matchMode: "allGroups",
            keywordGroups: [chemistryAliases.agPlus, chemistryAliases.electronGain]
          },
          {
            label: "Kupfer wird oxidiert.",
            matchMode: "allGroups",
            keywordGroups: [["kupfer", "cu"], chemistryAliases.electronLoss]
          },
          {
            label: "Elektronenübertragung wird beschrieben.",
            matchMode: "any",
            keywords: [
              "elektronenübertragung",
              "elektronenuebertragung",
              "elektronen",
              "elektronen werden übertragen",
              "elektronen werden uebertragen"
            ]
          }
        ]
      },
      {
        id: "freiwilligkeit-d",
        label: "d)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt: "Beurteile, ob Reaktion B freiwillig abläuft.",
        modelAnswer:
          "Reaktion B läuft nicht freiwillig ab, weil sie die Umkehrung von Reaktion A ist. Für diese Richtung wäre die Zellspannung negativ. Silber gibt nicht freiwillig Elektronen an Kupfer-Ionen ab.",
        criteria: [
          {
            label: "Reaktion B wird als nicht freiwillig beurteilt.",
            matchMode: "allGroups",
            keywordGroups: [["reaktion b", "b"], ["nicht freiwillig", "läuft nicht", "laeuft nicht", "nicht spontan"]]
          },
          {
            label: "Negative Zellspannung oder Umkehrreaktion wird genannt.",
            matchMode: "any",
            keywords: ["negative zellspannung", "negative spannung", "-0,46", "-0.46", "umkehrreaktion", "umkehrung"]
          },
          {
            label: "Silber wird als edler als Kupfer erkannt.",
            matchMode: "allGroups",
            keywordGroups: [["silber", "ag"], ["kupfer", "cu"], ["edler", "höheres potenzial", "hoeheres potenzial"]]
          },
          {
            label: "Fehlende freiwillige Elektronenabgabe wird beschrieben.",
            matchMode: "any",
            keywords: ["gibt nicht freiwillig elektronen ab", "keine freiwillige elektronenabgabe", "nicht oxidiert", "silber gibt nicht"]
          }
        ]
      },
      {
        id: "freiwilligkeit-e",
        label: "e)",
        type: "freeText",
        checking: { type: "criteria" },
        prompt: "Erkläre den Zusammenhang zwischen Elektrodenpotenzialen und Reaktionsrichtung.",
        modelAnswer:
          "Die Teilreaktion mit dem höheren Elektrodenpotenzial läuft als Reduktion ab. Die Teilreaktion mit dem niedrigeren Elektrodenpotenzial läuft als Oxidation ab. Eine Redoxreaktion läuft freiwillig ab, wenn sich daraus eine positive Zellspannung ergibt.",
        criteria: [
          {
            label: "Höheres Elektrodenpotenzial wird mit Reduktion verbunden.",
            matchMode: "allGroups",
            keywordGroups: [
              ["höheres elektrodenpotenzial", "hoeheres elektrodenpotenzial", "höheres potenzial", "hoeheres potenzial", "positiver"],
              ["reduktion", "reduziert", "elektronenaufnahme"]
            ]
          },
          {
            label: "Niedrigeres Elektrodenpotenzial wird mit Oxidation verbunden.",
            matchMode: "allGroups",
            keywordGroups: [
              ["niedrigeres elektrodenpotenzial", "niedrigeres potenzial", "negativer", "kleineres potenzial"],
              ["oxidation", "oxidiert", "elektronenabgabe"]
            ]
          },
          {
            label: "Positive Zellspannung wird als Bedingung für freiwilligen Ablauf genannt.",
            matchMode: "allGroups",
            keywordGroups: [
              ["positive zellspannung", "positive spannung", "u > 0", "größer 0", "groesser 0"],
              ["freiwillig", "läuft ab", "laeuft ab", "spontan"]
            ]
          },
          {
            label: "Reaktionsrichtung wird aus den Potenzialen begründet.",
            matchMode: "any",
            keywords: ["reaktionsrichtung", "richtung", "potenziale", "elektrodenpotenziale", "zellspannung"]
          }
        ]
      }
    ]
  }
];

export const klausurTaskMeta = {
  title: "Klausurähnliche Aufgaben – Grundlagen",
  subtitle:
    "Übungsaufgaben zu Redoxreaktionen, Redoxreihe, galvanischen Zellen und Elektrodenpotenzialen. Ohne Lithium-Ionen-Akku und ohne Elektrolyse.",
  note:
    "Der Kriteriencheck prüft, ob bestimmte Fachbegriffe, Synonyme oder zentrale Aussagen in deiner Antwort vorkommen. Er ersetzt keine fachliche Korrektur durch eine Lehrkraft.",
  printButtonLabel: "Aufgabe drucken / als PDF speichern",
  overviewButtonLabel: "Zurück zur Aufgabenübersicht"
};
