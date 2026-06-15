(function () {
const chemistryAliases = {
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

const klausurTasks = [
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

const klausurTaskMeta = {
  title: "Klausurähnliche Aufgaben – Grundlagen",
  subtitle:
    "Übungsaufgaben zu Redoxreaktionen, Redoxreihe, galvanischen Zellen und Elektrodenpotenzialen. Ohne Lithium-Ionen-Akku und ohne Elektrolyse.",
  note:
    "Der Kriteriencheck prüft, ob bestimmte Fachbegriffe, Synonyme oder zentrale Aussagen in deiner Antwort vorkommen. Er ersetzt keine fachliche Korrektur durch eine Lehrkraft.",
  printButtonLabel: "Aufgabe drucken / als PDF speichern",
  overviewButtonLabel: "Zurück zur Aufgabenübersicht"
};

  const modules = [
    { id: 'redox', title: 'Redoxreaktionen aufstellen', description: 'Oxidation, Reduktion, Elektronenanzahl und Gesamtreaktion üben.', status: 'active', target: 'redoxOverview' },
    { id: 'galvanische-zellen', title: 'Galvanische Zelle – Daniell-Element Simulation', description: 'Erkunde den Elektronenfluss, die Oxidation an der Zink-Elektrode, die Reduktion an der Kupfer-Elektrode und den Ladungsausgleich durch die Ionenbrücke.', status: 'active', href: window.location.protocol === 'file:' ? './public/Simulationen/Galvanische_Zelle/index.html' : './Simulationen/Galvanische_Zelle/index.html' },
    { id: 'electrode-potentials', title: 'Elektrodenpotenziale', description: 'Verstehe, wie Elektrodenpotenziale entstehen, warum man die Standardwasserstoffelektrode braucht und wie Zellspannungen berechnet werden.', status: 'active', target: 'electrodePotentials' },
    { id: 'elektrolyse', title: 'Elektrolyse', description: 'Kommt später', status: 'coming-soon' },
    { id: 'spannungsreihe', title: 'Spannungsreihe', description: 'Kommt später', status: 'coming-soon' },
    { id: 'korrosion', title: 'Korrosion', description: 'Kommt später', status: 'coming-soon' },
    { id: 'batterien', title: 'Batterien und Akkumulatoren', description: 'Kommt später', status: 'coming-soon' },
  ];

  const selfCheckCompetencies = [
    { category: 'Oxidationszahlen und Redoxreaktionen', items: ['Ich kann Oxidationszahlen bestimmen.', 'Ich kann Oxidation und Reduktion erklären.', 'Ich kann bei einer Redoxreaktion erkennen, welches Teilchen oxidiert und welches reduziert wird.', 'Ich kann Oxidationsmittel und Reduktionsmittel unterscheiden.', 'Ich kann einfache Redoxreaktionen mithilfe von Teilgleichungen beschreiben.', 'Ich kann anhand von Teilgleichungen die Gesamtreaktion einer Redoxreaktion herleiten.'] },
    { category: 'Redoxreihe der Metalle', items: ['Ich kann die Begriffe „edel“ und „unedel“ erklären.', 'Ich kann die Redoxreihe der Metalle zur Vorhersage von Reaktionen nutzen.', 'Ich kann Versuchsergebnisse zur Redoxreihe fachlich auswerten.'] },
    { category: 'Galvanische Zelle', items: ['Ich kann den Aufbau einer galvanischen Zelle beschreiben.', 'Ich kann die Funktion der Halbzellen erklären.', 'Ich kann Anode und Kathode einer galvanischen Zelle zuordnen.', 'Ich kann den Elektronenfluss und den Ionenfluss in einer galvanischen Zelle beschreiben.', 'Ich kann die Funktion einer Salzbrücke oder eines Diaphragmas erklären.', 'Ich kann die Vorgänge in der Daniell-Zelle beschreiben.', 'Ich kann die Teilgleichungen und die Gesamtreaktion einer galvanischen Zelle aufstellen.'] },
    { category: 'Elektrodenpotenziale', items: ['Ich kann erklären, was ein Elektrodenpotenzial ist.', 'Ich kann Standardelektrodenpotenziale aus einer Tabelle nutzen.', 'Ich kann mithilfe von Elektrodenpotenzialen Donator- und Akzeptorhalbzelle bestimmen.', 'Ich kann die Zellspannung einer galvanischen Zelle berechnen.', 'Ich kann mithilfe der Zellspannung beurteilen, ob eine Redoxreaktion freiwillig abläuft.'] },
  ];

  const electrodePotentialData = {
  "meta": {
    "id": "electrode-potentials",
    "title": "Elektrodenpotenziale",
    "subtitle": "Verstehe, wie Elektrodenpotenziale entstehen, warum man die Standardwasserstoffelektrode braucht und wie Zellspannungen berechnet werden.",
    "overviewButtonLabel": "Zurück zur Übersicht",
    "modulePath": "electrode-potentials"
  },
  "overviewCards": [
    {
      "id": "electrode-potential-intro",
      "title": "Elektrodenpotenziale und Zellspannungen",
      "shortTitle": "Grundlagen",
      "description": "Lerne, was ein Elektrodenpotenzial aussagt, wie Anode und Kathode bestimmt werden und wie man Zellspannungen berechnet.",
      "icon": "⚡",
      "targetView": "electrodePotentialIntro",
      "operators": [
        {
          "name": "beschreiben",
          "afb": "I"
        },
        {
          "name": "erklären",
          "afb": "II"
        },
        {
          "name": "berechnen",
          "afb": "II"
        }
      ]
    },
    {
      "id": "standard-hydrogen-electrode",
      "title": "Standardwasserstoffelektrode",
      "shortTitle": "SHE",
      "description": "Verstehe, warum man eine Bezugselektrode braucht und warum das Standardpotenzial der Wasserstoffelektrode auf 0,00 V festgelegt ist.",
      "icon": "H₂",
      "targetView": "standardHydrogenElectrode",
      "operators": [
        {
          "name": "beschreiben",
          "afb": "I"
        },
        {
          "name": "erklären",
          "afb": "II"
        },
        {
          "name": "deuten",
          "afb": "II"
        }
      ]
    },
    {
      "id": "electrode-potential-practice-overview",
      "title": "Übungen",
      "shortTitle": "Üben",
      "description": "Übe gezielt Begriffe, Halbzellen, Zellspannungen, Gesamtreaktionen und die Beurteilung freiwilliger Redoxreaktionen.",
      "icon": "✓",
      "targetView": "electrodePotentialPracticeOverview",
      "operators": [
        {
          "name": "zuordnen",
          "afb": "I"
        },
        {
          "name": "berechnen",
          "afb": "II"
        },
        {
          "name": "beurteilen",
          "afb": "III"
        }
      ]
    }
  ],
  "introPage": {
    "id": "electrode-potential-intro",
    "title": "Elektrodenpotenziale und Zellspannungen",
    "subtitle": "Elektrodenpotenziale helfen dabei vorherzusagen, welche Halbzelle Elektronen aufnimmt und wie groß die Spannung einer galvanischen Zelle ist.",
    "sections": [
      {
        "id": "what-is-potential",
        "title": "Was ist ein Elektrodenpotenzial?",
        "content": [
          "Ein Elektrodenpotenzial beschreibt die Neigung eines Redoxpaares zur Elektronenaufnahme.",
          "Je positiver das Standardelektrodenpotenzial ist, desto eher wird die oxidierte Form reduziert.",
          "Je negativer das Standardelektrodenpotenzial ist, desto eher gibt die reduzierte Form Elektronen ab."
        ],
        "keyIdea": "Ein Elektrodenpotenzial beschreibt keine einzelne sichtbare Spannung, sondern eine Reduktionsneigung im Vergleich zu einer Bezugselektrode."
      },
      {
        "id": "why-two-half-cells",
        "title": "Warum braucht man zwei Halbzellen?",
        "content": [
          "Eine Spannung kann man nur als Potenzialdifferenz zwischen zwei Elektroden messen.",
          "Deshalb besteht eine galvanische Zelle immer aus zwei Halbzellen.",
          "Die Halbzelle mit dem höheren Elektrodenpotenzial wirkt als Kathode. Dort findet die Reduktion statt.",
          "Die Halbzelle mit dem niedrigeren Elektrodenpotenzial wirkt als Anode. Dort findet die Oxidation statt."
        ],
        "keyIdea": "Höheres Potenzial: Kathode und Reduktion. Niedrigeres Potenzial: Anode und Oxidation."
      },
      {
        "id": "cell-voltage",
        "title": "Wie berechnet man die Zellspannung?",
        "content": [
          "Die Zellspannung ergibt sich aus der Differenz der Elektrodenpotenziale.",
          "Dabei wird das Potenzial der Anode vom Potenzial der Kathode abgezogen.",
          "Ist die Zellspannung positiv, kann die Reaktion freiwillig als galvanische Zelle ablaufen."
        ],
        "formula": "U = E(Kathode) − E(Anode)",
        "example": {
          "title": "Beispiel Daniell-Element",
          "given": [
            "Zn²⁺/Zn: −0,76 V",
            "Cu²⁺/Cu: +0,34 V"
          ],
          "solution": [
            "Kathode: Cu²⁺/Cu, weil +0,34 V höher ist.",
            "Anode: Zn²⁺/Zn, weil −0,76 V niedriger ist.",
            "U = 0,34 V − (−0,76 V) = 1,10 V."
          ]
        }
      }
    ],
    "interactiveElement": {
      "type": "halfCellSelector",
      "title": "Halbzellen vergleichen",
      "instruction": "Wähle zwei Halbzellen aus. Das Programm bestimmt automatisch Anode, Kathode, Elektronenflussrichtung und Zellspannung.",
      "potentials": [
        {
          "id": "mg",
          "redoxPair": "Mg²⁺/Mg",
          "oxidizedForm": "Mg²⁺",
          "reducedForm": "Mg",
          "metal": "Magnesium",
          "symbol": "Mg",
          "potential": -2.37
        },
        {
          "id": "zn",
          "redoxPair": "Zn²⁺/Zn",
          "oxidizedForm": "Zn²⁺",
          "reducedForm": "Zn",
          "metal": "Zink",
          "symbol": "Zn",
          "potential": -0.76
        },
        {
          "id": "fe",
          "redoxPair": "Fe²⁺/Fe",
          "oxidizedForm": "Fe²⁺",
          "reducedForm": "Fe",
          "metal": "Eisen",
          "symbol": "Fe",
          "potential": -0.44
        },
        {
          "id": "h2",
          "redoxPair": "2 H⁺/H₂",
          "oxidizedForm": "H⁺",
          "reducedForm": "H₂",
          "metal": "Standardwasserstoffelektrode",
          "symbol": "H₂",
          "potential": 0
        },
        {
          "id": "cu",
          "redoxPair": "Cu²⁺/Cu",
          "oxidizedForm": "Cu²⁺",
          "reducedForm": "Cu",
          "metal": "Kupfer",
          "symbol": "Cu",
          "potential": 0.34
        },
        {
          "id": "ag",
          "redoxPair": "Ag⁺/Ag",
          "oxidizedForm": "Ag⁺",
          "reducedForm": "Ag",
          "metal": "Silber",
          "symbol": "Ag",
          "potential": 0.8
        }
      ],
      "defaultSelection": {
        "halfCellA": "zn",
        "halfCellB": "cu"
      },
      "resultRules": {
        "cathode": "higherPotential",
        "anode": "lowerPotential",
        "voltageFormula": "U = E(Kathode) − E(Anode)",
        "electronFlow": "fromAnodeToCathode"
      }
    }
  },
  "shePage": {
    "id": "standard-hydrogen-electrode",
    "title": "Standardwasserstoffelektrode",
    "subtitle": "Die Standardwasserstoffelektrode ist die Bezugselektrode für Standardelektrodenpotenziale.",
    "sections": [
      {
        "id": "problem",
        "title": "Das Problem",
        "content": [
          "Ein einzelnes Elektrodenpotenzial kann nicht direkt gemessen werden.",
          "Messbar ist immer nur eine Spannung zwischen zwei Elektroden.",
          "Damit man Elektrodenpotenziale vergleichen kann, braucht man eine festgelegte Bezugselektrode."
        ]
      },
      {
        "id": "solution",
        "title": "Die Lösung: eine Bezugselektrode",
        "content": [
          "Als Bezugselektrode nutzt man die Standardwasserstoffelektrode.",
          "Ihr Standardelektrodenpotenzial wurde per Definition auf 0,00 V festgelegt.",
          "Alle anderen Standardelektrodenpotenziale werden im Vergleich zu dieser Elektrode angegeben."
        ]
      },
      {
        "id": "setup",
        "title": "Aufbau der Standardwasserstoffelektrode",
        "content": [
          "Eine Platinelektrode taucht in eine saure Lösung.",
          "Wasserstoffgas H₂ wird an der Platinelektrode vorbeigeleitet.",
          "In der Lösung befinden sich Wasserstoff-Ionen H⁺ bzw. Oxonium-Ionen H₃O⁺.",
          "Die Platinelektrode dient als leitende Oberfläche, weil Wasserstoff selbst kein Metall ist."
        ],
        "labels": [
          "Platinelektrode",
          "Wasserstoffgas H₂",
          "saure Lösung mit H⁺/H₃O⁺",
          "Standardpotenzial E° = 0,00 V"
        ]
      },
      {
        "id": "half-reaction",
        "title": "Halbreaktion",
        "content": [
          "Die Standardwasserstoffelektrode kann je nach Partnerhalbzelle als Anode oder Kathode wirken.",
          "Die zugehörige Halbreaktion ist umkehrbar."
        ],
        "formula": "2 H⁺ + 2 e⁻ ⇌ H₂"
      },
      {
        "id": "meaning",
        "title": "Bedeutung",
        "content": [
          "Wird eine Metallhalbzelle gegen die Standardwasserstoffelektrode gemessen, erhält man ihr Standardelektrodenpotenzial.",
          "Ein negatives Standardpotenzial bedeutet: Die Metallhalbzelle gibt im Vergleich zur Wasserstoffelektrode leichter Elektronen ab.",
          "Ein positives Standardpotenzial bedeutet: Die oxidierte Form der Metallhalbzelle nimmt im Vergleich zu H⁺ leichter Elektronen auf."
        ]
      }
    ],
    "simulation": {
      "type": "standardHydrogenElectrodeSimulation",
      "title": "Simulation: Metallhalbzelle gegen Standardwasserstoffelektrode",
      "instruction": "Wähle eine Metallhalbzelle aus und beobachte, welche Elektrode Anode bzw. Kathode ist.",
      "referenceElectrode": {
        "id": "h2",
        "title": "Standardwasserstoffelektrode",
        "potential": 0,
        "halfReaction": "2 H⁺ + 2 e⁻ ⇌ H₂",
        "labels": [
          "Pt",
          "H₂",
          "H⁺/H₃O⁺",
          "E° = 0,00 V"
        ]
      },
      "selectableHalfCells": [
        {
          "id": "zn",
          "title": "Zink-Halbzelle",
          "redoxPair": "Zn²⁺/Zn",
          "potential": -0.76,
          "explanation": [
            "Zink besitzt ein negativeres Standardelektrodenpotenzial als die Wasserstoffelektrode.",
            "Zink wird oxidiert.",
            "Elektronen fließen von der Zinkelektrode zur Standardwasserstoffelektrode.",
            "Daraus folgt: E°(Zn²⁺/Zn) = −0,76 V."
          ],
          "oxidation": "Zn → Zn²⁺ + 2 e⁻",
          "reduction": "2 H⁺ + 2 e⁻ → H₂"
        },
        {
          "id": "cu",
          "title": "Kupfer-Halbzelle",
          "redoxPair": "Cu²⁺/Cu",
          "potential": 0.34,
          "explanation": [
            "Kupfer besitzt ein positiveres Standardelektrodenpotenzial als die Wasserstoffelektrode.",
            "Kupfer-Ionen werden reduziert.",
            "Elektronen fließen von der Standardwasserstoffelektrode zur Kupferhalbzelle.",
            "Daraus folgt: E°(Cu²⁺/Cu) = +0,34 V."
          ],
          "oxidation": "H₂ → 2 H⁺ + 2 e⁻",
          "reduction": "Cu²⁺ + 2 e⁻ → Cu"
        },
        {
          "id": "ag",
          "title": "Silber-Halbzelle",
          "redoxPair": "Ag⁺/Ag",
          "potential": 0.8,
          "explanation": [
            "Silber besitzt ein deutlich positiveres Standardelektrodenpotenzial als die Wasserstoffelektrode.",
            "Silber-Ionen werden reduziert.",
            "Elektronen fließen von der Standardwasserstoffelektrode zur Silberhalbzelle.",
            "Daraus folgt: E°(Ag⁺/Ag) = +0,80 V."
          ],
          "oxidation": "H₂ → 2 H⁺ + 2 e⁻",
          "reduction": "2 Ag⁺ + 2 e⁻ → 2 Ag"
        }
      ],
      "visualElements": {
        "showGasBubbles": true,
        "showElectronFlow": true,
        "showIonMovement": true,
        "showVoltmeter": true,
        "showHalfReactions": true
      }
    }
  },
  "practiceOverview": {
    "id": "electrode-potential-practice-overview",
    "title": "Übungen zu Elektrodenpotenzialen und Zellspannungen",
    "subtitle": "Wähle gezielt aus, was du üben möchtest: Begriffe, Halbzellen, Zellspannungen, Reaktionsgleichungen oder Freiwilligkeit.",
    "cards": [
      {
        "id": "practice-terms",
        "title": "Übung 1: Begriffe zuordnen",
        "description": "Ordne zentrale Begriffe wie Anode, Kathode, Oxidation, Reduktion und Elektronenfluss richtig zu.",
        "operators": [
          {
            "name": "zuordnen",
            "afb": "I"
          },
          {
            "name": "erklären",
            "afb": "II"
          }
        ],
        "targetExerciseId": "practice-terms"
      },
      {
        "id": "practice-half-cells",
        "title": "Übung 2: Halbzellen auswählen",
        "description": "Bestimme mithilfe einer Potenzialtabelle, welche Halbzelle als Kathode und welche als Anode wirkt.",
        "operators": [
          {
            "name": "bestimmen",
            "afb": "I"
          },
          {
            "name": "begründen",
            "afb": "II"
          }
        ],
        "targetExerciseId": "practice-half-cells"
      },
      {
        "id": "practice-cell-voltage",
        "title": "Übung 3: Zellspannung berechnen",
        "description": "Berechne Zellspannungen aus Standardelektrodenpotenzialen und überprüfe deinen Rechenweg.",
        "operators": [
          {
            "name": "berechnen",
            "afb": "II"
          },
          {
            "name": "erläutern",
            "afb": "II"
          }
        ],
        "targetExerciseId": "practice-cell-voltage"
      },
      {
        "id": "practice-overall-reaction",
        "title": "Übung 4: Gesamtreaktion formulieren",
        "description": "Formuliere Oxidation, Reduktion und Gesamtreaktion mit beschreibbaren Reaktionsgleichungs-Kästchen.",
        "operators": [
          {
            "name": "formulieren",
            "afb": "II"
          },
          {
            "name": "aufstellen",
            "afb": "II"
          }
        ],
        "targetExerciseId": "practice-overall-reaction"
      },
      {
        "id": "practice-spontaneity",
        "title": "Übung 5: Freiwilligkeit beurteilen",
        "description": "Entscheide mithilfe der Zellspannung, ob eine Redoxreaktion freiwillig abläuft.",
        "operators": [
          {
            "name": "berechnen",
            "afb": "II"
          },
          {
            "name": "beurteilen",
            "afb": "III"
          }
        ],
        "targetExerciseId": "practice-spontaneity"
      }
    ]
  },
  "practiceExercises": [
    {
      "id": "practice-terms",
      "title": "Übung 1: Begriffe zuordnen",
      "shortTitle": "Begriffe",
      "description": "Ordne zentrale Begriffe rund um Elektrodenpotenziale, Anode, Kathode und Elektronenfluss zu.",
      "type": "matchingExercise",
      "checking": {
        "type": "direct",
        "feedback": "color"
      },
      "materials": [
        {
          "title": "Merksatz",
          "type": "text",
          "content": "In einer freiwillig ablaufenden galvanischen Zelle findet an der Anode die Oxidation und an der Kathode die Reduktion statt. Elektronen fließen außen von der Anode zur Kathode."
        }
      ],
      "tasks": [
        {
          "id": "terms-a",
          "title": "Aufgabe A: Grundbegriffe",
          "prompt": "Ordne die Grundbegriffe richtig zu.",
          "pairs": [
            {
              "left": "Anode",
              "correctRight": "Ort der Oxidation"
            },
            {
              "left": "Kathode",
              "correctRight": "Ort der Reduktion"
            },
            {
              "left": "Oxidation",
              "correctRight": "Elektronenabgabe"
            },
            {
              "left": "Reduktion",
              "correctRight": "Elektronenaufnahme"
            }
          ],
          "rightOptions": [
            "Ort der Oxidation",
            "Ort der Reduktion",
            "Elektronenabgabe",
            "Elektronenaufnahme"
          ]
        },
        {
          "id": "terms-b",
          "title": "Aufgabe B: Elektrodenpotenziale",
          "prompt": "Ordne die Aussagen zu Elektrodenpotenzialen richtig zu.",
          "pairs": [
            {
              "left": "höheres Elektrodenpotenzial",
              "correctRight": "Kathode"
            },
            {
              "left": "niedrigeres Elektrodenpotenzial",
              "correctRight": "Anode"
            },
            {
              "left": "positiveres Standardpotenzial",
              "correctRight": "stärkere Reduktionsneigung"
            },
            {
              "left": "negativeres Standardpotenzial",
              "correctRight": "stärkere Bereitschaft zur Elektronenabgabe"
            }
          ],
          "rightOptions": [
            "Kathode",
            "Anode",
            "stärkere Reduktionsneigung",
            "stärkere Bereitschaft zur Elektronenabgabe"
          ]
        },
        {
          "id": "terms-c",
          "title": "Aufgabe C: Stromkreis der galvanischen Zelle",
          "prompt": "Ordne die Bestandteile und Flussrichtungen richtig zu.",
          "pairs": [
            {
              "left": "Elektronenfluss außen",
              "correctRight": "von der Anode zur Kathode"
            },
            {
              "left": "Ionenfluss innen",
              "correctRight": "über Salzbrücke oder Diaphragma"
            },
            {
              "left": "Salzbrücke",
              "correctRight": "ermöglicht den Ladungsausgleich"
            },
            {
              "left": "Voltmeter",
              "correctRight": "misst die Zellspannung"
            }
          ],
          "rightOptions": [
            "von der Anode zur Kathode",
            "über Salzbrücke oder Diaphragma",
            "ermöglicht den Ladungsausgleich",
            "misst die Zellspannung"
          ]
        }
      ],
      "modelAnswer": "Anode: Ort der Oxidation. Kathode: Ort der Reduktion. Oxidation: Elektronenabgabe. Reduktion: Elektronenaufnahme. Die Halbzelle mit dem höheren Elektrodenpotenzial ist die Kathode, die mit dem niedrigeren Elektrodenpotenzial die Anode. Elektronen fließen außen von der Anode zur Kathode."
    },
    {
      "id": "practice-half-cells",
      "title": "Übung 2: Halbzellen auswählen",
      "shortTitle": "Halbzellen",
      "description": "Bestimme Anode und Kathode anhand von Standardelektrodenpotenzialen.",
      "type": "halfCellChoiceExercise",
      "checking": {
        "type": "direct",
        "feedback": "color"
      },
      "materials": [
        {
          "title": "Material 1: Standardelektrodenpotenziale",
          "type": "table",
          "columns": [
            "Redoxpaar",
            "E° in V"
          ],
          "rows": [
            [
              "Mg²⁺/Mg",
              "−2,37"
            ],
            [
              "Zn²⁺/Zn",
              "−0,76"
            ],
            [
              "Fe²⁺/Fe",
              "−0,44"
            ],
            [
              "Cu²⁺/Cu",
              "+0,34"
            ],
            [
              "Ag⁺/Ag",
              "+0,80"
            ]
          ]
        }
      ],
      "tasks": [
        {
          "id": "half-cells-a",
          "title": "Aufgabe A: Zink/Kupfer",
          "prompt": "Gegeben sind die Halbzellen Zn²⁺/Zn und Cu²⁺/Cu. Bestimme Anode und Kathode.",
          "fields": [
            {
              "id": "anode",
              "label": "Anode",
              "correctValues": [
                "Zn²⁺/Zn",
                "Zn/Zn²⁺",
                "Zink",
                "Zn"
              ]
            },
            {
              "id": "kathode",
              "label": "Kathode",
              "correctValues": [
                "Cu²⁺/Cu",
                "Cu/Cu²⁺",
                "Kupfer",
                "Cu"
              ]
            },
            {
              "id": "reason",
              "label": "Begründung",
              "correctValues": [
                "Cu hat das höhere Potenzial",
                "Cu²⁺/Cu hat das höhere Potenzial",
                "Kupfer hat das höhere Potenzial",
                "Zink hat das niedrigere Potenzial",
                "Zn²⁺/Zn hat das niedrigere Potenzial"
              ]
            }
          ],
          "modelAnswer": "Anode: Zn²⁺/Zn. Kathode: Cu²⁺/Cu. Kupfer besitzt das höhere Elektrodenpotenzial und wird daher reduziert."
        },
        {
          "id": "half-cells-b",
          "title": "Aufgabe B: Kupfer/Silber",
          "prompt": "Gegeben sind die Halbzellen Cu²⁺/Cu und Ag⁺/Ag. Bestimme Anode und Kathode.",
          "fields": [
            {
              "id": "anode",
              "label": "Anode",
              "correctValues": [
                "Cu²⁺/Cu",
                "Cu/Cu²⁺",
                "Kupfer",
                "Cu"
              ]
            },
            {
              "id": "kathode",
              "label": "Kathode",
              "correctValues": [
                "Ag⁺/Ag",
                "Ag/Ag⁺",
                "Silber",
                "Ag"
              ]
            },
            {
              "id": "reason",
              "label": "Begründung",
              "correctValues": [
                "Ag hat das höhere Potenzial",
                "Ag⁺/Ag hat das höhere Potenzial",
                "Silber hat das höhere Potenzial",
                "Kupfer hat das niedrigere Potenzial",
                "Cu²⁺/Cu hat das niedrigere Potenzial"
              ]
            }
          ],
          "modelAnswer": "Anode: Cu²⁺/Cu. Kathode: Ag⁺/Ag. Silber besitzt das höhere Elektrodenpotenzial und wird daher reduziert."
        },
        {
          "id": "half-cells-c",
          "title": "Aufgabe C: Eisen/Kupfer",
          "prompt": "Gegeben sind die Halbzellen Fe²⁺/Fe und Cu²⁺/Cu. Bestimme Anode und Kathode.",
          "fields": [
            {
              "id": "anode",
              "label": "Anode",
              "correctValues": [
                "Fe²⁺/Fe",
                "Fe/Fe²⁺",
                "Eisen",
                "Fe"
              ]
            },
            {
              "id": "kathode",
              "label": "Kathode",
              "correctValues": [
                "Cu²⁺/Cu",
                "Cu/Cu²⁺",
                "Kupfer",
                "Cu"
              ]
            },
            {
              "id": "reason",
              "label": "Begründung",
              "correctValues": [
                "Cu hat das höhere Potenzial",
                "Cu²⁺/Cu hat das höhere Potenzial",
                "Kupfer hat das höhere Potenzial",
                "Eisen hat das niedrigere Potenzial",
                "Fe²⁺/Fe hat das niedrigere Potenzial"
              ]
            }
          ],
          "modelAnswer": "Anode: Fe²⁺/Fe. Kathode: Cu²⁺/Cu. Kupfer besitzt das höhere Elektrodenpotenzial."
        },
        {
          "id": "half-cells-d",
          "title": "Aufgabe D: Magnesium/Zink",
          "prompt": "Gegeben sind die Halbzellen Mg²⁺/Mg und Zn²⁺/Zn. Bestimme Anode und Kathode.",
          "fields": [
            {
              "id": "anode",
              "label": "Anode",
              "correctValues": [
                "Mg²⁺/Mg",
                "Mg/Mg²⁺",
                "Magnesium",
                "Mg"
              ]
            },
            {
              "id": "kathode",
              "label": "Kathode",
              "correctValues": [
                "Zn²⁺/Zn",
                "Zn/Zn²⁺",
                "Zink",
                "Zn"
              ]
            },
            {
              "id": "reason",
              "label": "Begründung",
              "correctValues": [
                "Zn hat das höhere Potenzial",
                "Zn²⁺/Zn hat das höhere Potenzial",
                "Zink hat das höhere Potenzial",
                "Magnesium hat das niedrigere Potenzial",
                "Mg²⁺/Mg hat das niedrigere Potenzial"
              ]
            }
          ],
          "modelAnswer": "Anode: Mg²⁺/Mg. Kathode: Zn²⁺/Zn. Zink besitzt im Vergleich zu Magnesium das höhere Elektrodenpotenzial."
        },
        {
          "id": "half-cells-e",
          "title": "Aufgabe E: Magnesium/Silber",
          "prompt": "Gegeben sind die Halbzellen Mg²⁺/Mg und Ag⁺/Ag. Bestimme Anode und Kathode.",
          "fields": [
            {
              "id": "anode",
              "label": "Anode",
              "correctValues": [
                "Mg²⁺/Mg",
                "Mg/Mg²⁺",
                "Magnesium",
                "Mg"
              ]
            },
            {
              "id": "kathode",
              "label": "Kathode",
              "correctValues": [
                "Ag⁺/Ag",
                "Ag/Ag⁺",
                "Silber",
                "Ag"
              ]
            },
            {
              "id": "reason",
              "label": "Begründung",
              "correctValues": [
                "Ag hat das höhere Potenzial",
                "Ag⁺/Ag hat das höhere Potenzial",
                "Silber hat das höhere Potenzial",
                "Magnesium hat das niedrigere Potenzial",
                "Mg²⁺/Mg hat das niedrigere Potenzial"
              ]
            }
          ],
          "modelAnswer": "Anode: Mg²⁺/Mg. Kathode: Ag⁺/Ag. Silber besitzt das höhere Elektrodenpotenzial, Magnesium das niedrigere."
        }
      ],
      "modelAnswer": "Die Halbzelle mit dem höheren Standardelektrodenpotenzial ist die Kathode. Die Halbzelle mit dem niedrigeren Standardelektrodenpotenzial ist die Anode."
    },
    {
      "id": "practice-cell-voltage",
      "title": "Übung 3: Zellspannung berechnen",
      "shortTitle": "Zellspannung",
      "description": "Berechne die Zellspannung galvanischer Zellen mithilfe von Standardelektrodenpotenzialen.",
      "type": "calculationExercise",
      "checking": {
        "type": "direct",
        "feedback": "color"
      },
      "formula": "U = E(Kathode) − E(Anode)",
      "materials": [
        {
          "title": "Material 1: Standardelektrodenpotenziale",
          "type": "table",
          "columns": [
            "Redoxpaar",
            "E° in V"
          ],
          "rows": [
            [
              "Mg²⁺/Mg",
              "−2,37"
            ],
            [
              "Zn²⁺/Zn",
              "−0,76"
            ],
            [
              "Fe²⁺/Fe",
              "−0,44"
            ],
            [
              "Cu²⁺/Cu",
              "+0,34"
            ],
            [
              "Ag⁺/Ag",
              "+0,80"
            ]
          ]
        }
      ],
      "tasks": [
        {
          "id": "voltage-a",
          "title": "Aufgabe A: Zink/Kupfer",
          "prompt": "Berechne die Zellspannung der galvanischen Zelle Zn/Zn²⁺ || Cu²⁺/Cu.",
          "fields": [
            {
              "id": "eKathode",
              "label": "E(Kathode) in V",
              "correctValue": 0.34
            },
            {
              "id": "eAnode",
              "label": "E(Anode) in V",
              "correctValue": -0.76
            },
            {
              "id": "voltage",
              "label": "U in V",
              "correctValue": 1.1
            }
          ],
          "tolerance": 0.01,
          "modelAnswer": "U = 0,34 V − (−0,76 V) = 1,10 V."
        },
        {
          "id": "voltage-b",
          "title": "Aufgabe B: Magnesium/Silber",
          "prompt": "Berechne die Zellspannung der galvanischen Zelle Mg/Mg²⁺ || Ag⁺/Ag.",
          "fields": [
            {
              "id": "eKathode",
              "label": "E(Kathode) in V",
              "correctValue": 0.8
            },
            {
              "id": "eAnode",
              "label": "E(Anode) in V",
              "correctValue": -2.37
            },
            {
              "id": "voltage",
              "label": "U in V",
              "correctValue": 3.17
            }
          ],
          "tolerance": 0.01,
          "modelAnswer": "U = 0,80 V − (−2,37 V) = 3,17 V."
        },
        {
          "id": "voltage-c",
          "title": "Aufgabe C: Eisen/Kupfer",
          "prompt": "Berechne die Zellspannung der galvanischen Zelle Fe/Fe²⁺ || Cu²⁺/Cu.",
          "fields": [
            {
              "id": "eKathode",
              "label": "E(Kathode) in V",
              "correctValue": 0.34
            },
            {
              "id": "eAnode",
              "label": "E(Anode) in V",
              "correctValue": -0.44
            },
            {
              "id": "voltage",
              "label": "U in V",
              "correctValue": 0.78
            }
          ],
          "tolerance": 0.01,
          "modelAnswer": "U = 0,34 V − (−0,44 V) = 0,78 V."
        },
        {
          "id": "voltage-d",
          "title": "Aufgabe D: Zink/Silber",
          "prompt": "Berechne die Zellspannung der galvanischen Zelle Zn/Zn²⁺ || Ag⁺/Ag.",
          "fields": [
            {
              "id": "eKathode",
              "label": "E(Kathode) in V",
              "correctValue": 0.8
            },
            {
              "id": "eAnode",
              "label": "E(Anode) in V",
              "correctValue": -0.76
            },
            {
              "id": "voltage",
              "label": "U in V",
              "correctValue": 1.56
            }
          ],
          "tolerance": 0.01,
          "modelAnswer": "U = 0,80 V − (−0,76 V) = 1,56 V."
        },
        {
          "id": "voltage-e",
          "title": "Aufgabe E: Magnesium/Kupfer",
          "prompt": "Berechne die Zellspannung der galvanischen Zelle Mg/Mg²⁺ || Cu²⁺/Cu.",
          "fields": [
            {
              "id": "eKathode",
              "label": "E(Kathode) in V",
              "correctValue": 0.34
            },
            {
              "id": "eAnode",
              "label": "E(Anode) in V",
              "correctValue": -2.37
            },
            {
              "id": "voltage",
              "label": "U in V",
              "correctValue": 2.71
            }
          ],
          "tolerance": 0.01,
          "modelAnswer": "U = 0,34 V − (−2,37 V) = 2,71 V."
        }
      ]
    },
    {
      "id": "practice-overall-reaction",
      "title": "Übung 4: Gesamtreaktion formulieren",
      "shortTitle": "Gesamtreaktion",
      "description": "Formuliere Oxidation, Reduktion und Gesamtreaktion mit Reaktionsgleichungs-Kästchen.",
      "type": "redoxEquationScaffold",
      "checking": {
        "type": "direct",
        "feedback": "color"
      },
      "materials": [
        {
          "title": "Hinweis",
          "type": "text-list",
          "content": [
            "Die Halbzelle mit dem niedrigeren Elektrodenpotenzial ist die Anode. Dort findet die Oxidation statt.",
            "Die Halbzelle mit dem höheren Elektrodenpotenzial ist die Kathode. Dort findet die Reduktion statt.",
            "Plus-Zeichen und Reaktionspfeile sind vorgegeben."
          ]
        }
      ],
      "tasks": [
        {
          "id": "reaction-a",
          "title": "Aufgabe A: Zn/Cu-Zelle",
          "prompt": "Formuliere die Oxidation, die Reduktion und die Gesamtreaktion für die Zn/Cu-Zelle.",
          "materials": [
            {
              "title": "Material",
              "type": "text-list",
              "content": [
                "Zink-Halbzelle: Zn²⁺/Zn, E° = −0,76 V",
                "Kupfer-Halbzelle: Cu²⁺/Cu, E° = +0,34 V"
              ]
            }
          ],
          "scaffold": {
            "instruction": "Fülle die Kästchen für Koeffizienten, Elementsymbole, Indizes, Ladungen und Elektronen aus.",
            "equations": [
              {
                "label": "Oxidation",
                "expectedDisplay": "Zn → Zn²⁺ + 2 e⁻",
                "parts": [
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Zn",
                          "accepted": [
                            "Zn",
                            "zn"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "",
                          "accepted": [
                            "",
                            "0"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "arrow"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Zn",
                          "accepted": [
                            "Zn",
                            "zn"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "2+",
                          "accepted": [
                            "2+",
                            "+2",
                            "²⁺"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "plus"
                  },
                  {
                    "type": "electron",
                    "coefficient": {
                      "correct": "2",
                      "accepted": [
                        "2"
                      ]
                    },
                    "symbol": "e",
                    "charge": {
                      "correct": "-",
                      "accepted": [
                        "-",
                        "−",
                        "⁻"
                      ]
                    }
                  }
                ]
              },
              {
                "label": "Reduktion",
                "expectedDisplay": "Cu²⁺ + 2 e⁻ → Cu",
                "parts": [
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Cu",
                          "accepted": [
                            "Cu",
                            "cu"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "2+",
                          "accepted": [
                            "2+",
                            "+2",
                            "²⁺"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "plus"
                  },
                  {
                    "type": "electron",
                    "coefficient": {
                      "correct": "2",
                      "accepted": [
                        "2"
                      ]
                    },
                    "symbol": "e",
                    "charge": {
                      "correct": "-",
                      "accepted": [
                        "-",
                        "−",
                        "⁻"
                      ]
                    }
                  },
                  {
                    "type": "arrow"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Cu",
                          "accepted": [
                            "Cu",
                            "cu"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "",
                          "accepted": [
                            "",
                            "0"
                          ]
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "label": "Gesamtgleichung",
                "expectedDisplay": "Zn + Cu²⁺ → Zn²⁺ + Cu",
                "parts": [
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Zn",
                          "accepted": [
                            "Zn",
                            "zn"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "",
                          "accepted": [
                            "",
                            "0"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "plus"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Cu",
                          "accepted": [
                            "Cu",
                            "cu"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "2+",
                          "accepted": [
                            "2+",
                            "+2",
                            "²⁺"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "arrow"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Zn",
                          "accepted": [
                            "Zn",
                            "zn"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "2+",
                          "accepted": [
                            "2+",
                            "+2",
                            "²⁺"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "plus"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Cu",
                          "accepted": [
                            "Cu",
                            "cu"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "",
                          "accepted": [
                            "",
                            "0"
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "modelAnswer": "Oxidation: Zn → Zn²⁺ + 2 e⁻. Reduktion: Cu²⁺ + 2 e⁻ → Cu. Gesamtreaktion: Zn + Cu²⁺ → Zn²⁺ + Cu."
        },
        {
          "id": "reaction-b",
          "title": "Aufgabe B: Fe/Cu-Zelle",
          "prompt": "Formuliere die Oxidation, die Reduktion und die Gesamtreaktion für die Fe/Cu-Zelle.",
          "materials": [
            {
              "title": "Material",
              "type": "text-list",
              "content": [
                "Eisen-Halbzelle: Fe²⁺/Fe, E° = −0,44 V",
                "Kupfer-Halbzelle: Cu²⁺/Cu, E° = +0,34 V"
              ]
            }
          ],
          "scaffold": {
            "instruction": "Fülle die Kästchen für Koeffizienten, Elementsymbole, Indizes, Ladungen und Elektronen aus.",
            "equations": [
              {
                "label": "Oxidation",
                "expectedDisplay": "Fe → Fe²⁺ + 2 e⁻",
                "parts": [
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Fe",
                          "accepted": [
                            "Fe",
                            "fe"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "",
                          "accepted": [
                            "",
                            "0"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "arrow"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Fe",
                          "accepted": [
                            "Fe",
                            "fe"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "2+",
                          "accepted": [
                            "2+",
                            "+2",
                            "²⁺"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "plus"
                  },
                  {
                    "type": "electron",
                    "coefficient": {
                      "correct": "2",
                      "accepted": [
                        "2"
                      ]
                    },
                    "symbol": "e",
                    "charge": {
                      "correct": "-",
                      "accepted": [
                        "-",
                        "−",
                        "⁻"
                      ]
                    }
                  }
                ]
              },
              {
                "label": "Reduktion",
                "expectedDisplay": "Cu²⁺ + 2 e⁻ → Cu",
                "parts": [
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Cu",
                          "accepted": [
                            "Cu",
                            "cu"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "2+",
                          "accepted": [
                            "2+",
                            "+2",
                            "²⁺"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "plus"
                  },
                  {
                    "type": "electron",
                    "coefficient": {
                      "correct": "2",
                      "accepted": [
                        "2"
                      ]
                    },
                    "symbol": "e",
                    "charge": {
                      "correct": "-",
                      "accepted": [
                        "-",
                        "−",
                        "⁻"
                      ]
                    }
                  },
                  {
                    "type": "arrow"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Cu",
                          "accepted": [
                            "Cu",
                            "cu"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "",
                          "accepted": [
                            "",
                            "0"
                          ]
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "label": "Gesamtgleichung",
                "expectedDisplay": "Fe + Cu²⁺ → Fe²⁺ + Cu",
                "parts": [
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Fe",
                          "accepted": [
                            "Fe",
                            "fe"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "",
                          "accepted": [
                            "",
                            "0"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "plus"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Cu",
                          "accepted": [
                            "Cu",
                            "cu"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "2+",
                          "accepted": [
                            "2+",
                            "+2",
                            "²⁺"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "arrow"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Fe",
                          "accepted": [
                            "Fe",
                            "fe"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "2+",
                          "accepted": [
                            "2+",
                            "+2",
                            "²⁺"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "plus"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Cu",
                          "accepted": [
                            "Cu",
                            "cu"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "",
                          "accepted": [
                            "",
                            "0"
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "modelAnswer": "Oxidation: Fe → Fe²⁺ + 2 e⁻. Reduktion: Cu²⁺ + 2 e⁻ → Cu. Gesamtreaktion: Fe + Cu²⁺ → Fe²⁺ + Cu."
        },
        {
          "id": "reaction-c",
          "title": "Aufgabe C: Mg/Ag-Zelle",
          "prompt": "Formuliere die Oxidation, die Reduktion und die Gesamtreaktion für die Mg/Ag-Zelle.",
          "materials": [
            {
              "title": "Material",
              "type": "text-list",
              "content": [
                "Magnesium-Halbzelle: Mg²⁺/Mg, E° = −2,37 V",
                "Silber-Halbzelle: Ag⁺/Ag, E° = +0,80 V"
              ]
            }
          ],
          "scaffold": {
            "instruction": "Fülle die Kästchen für Koeffizienten, Elementsymbole, Indizes, Ladungen und Elektronen aus.",
            "equations": [
              {
                "label": "Oxidation",
                "expectedDisplay": "Mg → Mg²⁺ + 2 e⁻",
                "parts": [
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Mg",
                          "accepted": [
                            "Mg",
                            "mg"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "",
                          "accepted": [
                            "",
                            "0"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "arrow"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Mg",
                          "accepted": [
                            "Mg",
                            "mg"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "2+",
                          "accepted": [
                            "2+",
                            "+2",
                            "²⁺"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "plus"
                  },
                  {
                    "type": "electron",
                    "coefficient": {
                      "correct": "2",
                      "accepted": [
                        "2"
                      ]
                    },
                    "symbol": "e",
                    "charge": {
                      "correct": "-",
                      "accepted": [
                        "-",
                        "−",
                        "⁻"
                      ]
                    }
                  }
                ]
              },
              {
                "label": "Reduktion",
                "expectedDisplay": "2 Ag⁺ + 2 e⁻ → 2 Ag",
                "parts": [
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "2",
                      "accepted": [
                        "2"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Ag",
                          "accepted": [
                            "Ag",
                            "ag"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "+",
                          "accepted": [
                            "+",
                            "1+",
                            "+1",
                            "⁺"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "plus"
                  },
                  {
                    "type": "electron",
                    "coefficient": {
                      "correct": "2",
                      "accepted": [
                        "2"
                      ]
                    },
                    "symbol": "e",
                    "charge": {
                      "correct": "-",
                      "accepted": [
                        "-",
                        "−",
                        "⁻"
                      ]
                    }
                  },
                  {
                    "type": "arrow"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "2",
                      "accepted": [
                        "2"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Ag",
                          "accepted": [
                            "Ag",
                            "ag"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "",
                          "accepted": [
                            "",
                            "0"
                          ]
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "label": "Gesamtgleichung",
                "expectedDisplay": "Mg + 2 Ag⁺ → Mg²⁺ + 2 Ag",
                "parts": [
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Mg",
                          "accepted": [
                            "Mg",
                            "mg"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "",
                          "accepted": [
                            "",
                            "0"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "plus"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "2",
                      "accepted": [
                        "2"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Ag",
                          "accepted": [
                            "Ag",
                            "ag"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "+",
                          "accepted": [
                            "+",
                            "1+",
                            "+1",
                            "⁺"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "arrow"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Mg",
                          "accepted": [
                            "Mg",
                            "mg"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "2+",
                          "accepted": [
                            "2+",
                            "+2",
                            "²⁺"
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "plus"
                  },
                  {
                    "type": "particle",
                    "coefficient": {
                      "correct": "2",
                      "accepted": [
                        "2"
                      ]
                    },
                    "formula": [
                      {
                        "element": {
                          "correct": "Ag",
                          "accepted": [
                            "Ag",
                            "ag"
                          ]
                        },
                        "index": {
                          "correct": "",
                          "accepted": [
                            "",
                            "1"
                          ]
                        },
                        "charge": {
                          "correct": "",
                          "accepted": [
                            "",
                            "0"
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "modelAnswer": "Oxidation: Mg → Mg²⁺ + 2 e⁻. Reduktion: 2 Ag⁺ + 2 e⁻ → 2 Ag. Gesamtreaktion: Mg + 2 Ag⁺ → Mg²⁺ + 2 Ag."
        }
      ]
    },
    {
      "id": "practice-spontaneity",
      "title": "Übung 5: Freiwilligkeit beurteilen",
      "shortTitle": "Freiwilligkeit",
      "description": "Beurteile mithilfe der Zellspannung, ob eine Redoxreaktion freiwillig ablaufen kann.",
      "type": "mixedExercise",
      "checking": {
        "type": "criteria"
      },
      "cases": [
        {
          "id": "spontaneity-a",
          "title": "Aufgabe A: Kupfer reagiert mit Silber-Ionen",
          "materials": [
            {
              "title": "Material 1: Mögliche Reaktion",
              "type": "reaction-list",
              "content": [
                "Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag"
              ]
            },
            {
              "title": "Material 2: Standardelektrodenpotenziale",
              "type": "table",
              "columns": [
                "Redoxpaar",
                "E° in V"
              ],
              "rows": [
                [
                  "Cu²⁺/Cu",
                  "+0,34"
                ],
                [
                  "Ag⁺/Ag",
                  "+0,80"
                ]
              ]
            }
          ],
          "calculationPart": {
            "type": "calculation",
            "checking": {
              "type": "direct",
              "feedback": "color"
            },
            "prompt": "Berechne zunächst die Zellspannung.",
            "fields": [
              {
                "id": "eKathode",
                "label": "E(Kathode) in V",
                "correctValue": 0.8
              },
              {
                "id": "eAnode",
                "label": "E(Anode) in V",
                "correctValue": 0.34
              },
              {
                "id": "voltage",
                "label": "U in V",
                "correctValue": 0.46
              }
            ],
            "tolerance": 0.01,
            "modelAnswer": "U = E(Kathode) − E(Anode) = 0,80 V − 0,34 V = 0,46 V."
          },
          "freeTextPart": {
            "type": "freeText",
            "checking": {
              "type": "criteria"
            },
            "prompt": "Beurteile, ob die Reaktion freiwillig abläuft. Begründe mithilfe der Zellspannung und der beteiligten Teilreaktionen.",
            "modelAnswer": "Die Reaktion läuft freiwillig ab, weil die Zellspannung mit 0,46 V positiv ist. Kupfer wird oxidiert und gibt Elektronen ab. Silber-Ionen werden reduziert und nehmen Elektronen auf.",
            "criteria": [
              {
                "label": "Die Reaktion wird als freiwillig beurteilt.",
                "matchMode": "any",
                "keywords": [
                  "freiwillig",
                  "läuft ab",
                  "laeuft ab",
                  "spontan"
                ]
              },
              {
                "label": "Die positive Zellspannung wird als Begründung genannt.",
                "matchMode": "allGroups",
                "keywordGroups": [
                  [
                    "positive zellspannung",
                    "positive spannung",
                    "zellspannung ist positiv",
                    "spannung ist positiv",
                    "u ist positiv",
                    "u > 0",
                    "größer 0",
                    "groesser 0",
                    "0,46",
                    "0.46"
                  ],
                  [
                    "zellspannung",
                    "spannung",
                    "u"
                  ]
                ]
              },
              {
                "label": "Silber-Ionen werden als reduzierte Teilchen erkannt.",
                "matchMode": "allGroups",
                "keywordGroups": [
                  [
                    "ag+",
                    "ag⁺",
                    "ag(1+)",
                    "silber-ionen",
                    "silberionen",
                    "silber-ion",
                    "silberion"
                  ],
                  [
                    "elektronenaufnahme",
                    "elektronen aufnehmen",
                    "nimmt elektronen auf",
                    "nehmen elektronen auf",
                    "reduktion",
                    "reduziert",
                    "wird reduziert"
                  ]
                ]
              },
              {
                "label": "Kupfer wird als oxidiertes Teilchen erkannt.",
                "matchMode": "allGroups",
                "keywordGroups": [
                  [
                    "kupfer",
                    "cu"
                  ],
                  [
                    "elektronenabgabe",
                    "elektronen abgeben",
                    "gibt elektronen ab",
                    "geben elektronen ab",
                    "oxidation",
                    "oxidiert",
                    "wird oxidiert"
                  ]
                ]
              }
            ]
          }
        },
        {
          "id": "spontaneity-b",
          "title": "Aufgabe B: Silber reagiert mit Kupfer-Ionen",
          "materials": [
            {
              "title": "Material 1: Mögliche Reaktion",
              "type": "reaction-list",
              "content": [
                "2 Ag + Cu²⁺ → 2 Ag⁺ + Cu"
              ]
            },
            {
              "title": "Material 2: Standardelektrodenpotenziale",
              "type": "table",
              "columns": [
                "Redoxpaar",
                "E° in V"
              ],
              "rows": [
                [
                  "Cu²⁺/Cu",
                  "+0,34"
                ],
                [
                  "Ag⁺/Ag",
                  "+0,80"
                ]
              ]
            }
          ],
          "calculationPart": {
            "type": "calculation",
            "checking": {
              "type": "direct",
              "feedback": "color"
            },
            "prompt": "Berechne die Zellspannung für die angegebene Reaktionsrichtung.",
            "fields": [
              {
                "id": "eKathode",
                "label": "E(Kathode) in V",
                "correctValue": 0.34
              },
              {
                "id": "eAnode",
                "label": "E(Anode) in V",
                "correctValue": 0.8
              },
              {
                "id": "voltage",
                "label": "U in V",
                "correctValue": -0.46
              }
            ],
            "tolerance": 0.01,
            "modelAnswer": "Für die angegebene Richtung gilt: U = 0,34 V − 0,80 V = −0,46 V."
          },
          "freeTextPart": {
            "type": "freeText",
            "checking": {
              "type": "criteria"
            },
            "prompt": "Beurteile, ob die angegebene Reaktion freiwillig abläuft.",
            "modelAnswer": "Die Reaktion läuft nicht freiwillig ab, weil die Zellspannung mit −0,46 V negativ ist. Die freiwillige Richtung wäre die Umkehrreaktion: Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag.",
            "criteria": [
              {
                "label": "Die Reaktion wird als nicht freiwillig beurteilt.",
                "matchMode": "any",
                "keywords": [
                  "nicht freiwillig",
                  "läuft nicht",
                  "laeuft nicht",
                  "nicht spontan"
                ]
              },
              {
                "label": "Die negative Zellspannung wird als Begründung genannt.",
                "matchMode": "allGroups",
                "keywordGroups": [
                  [
                    "negative zellspannung",
                    "negative spannung",
                    "zellspannung ist negativ",
                    "spannung ist negativ",
                    "u ist negativ",
                    "u < 0",
                    "kleiner 0",
                    "-0,46",
                    "-0.46"
                  ],
                  [
                    "zellspannung",
                    "spannung",
                    "u"
                  ]
                ]
              },
              {
                "label": "Die Umkehrreaktion wird als freiwillige Richtung erkannt.",
                "matchMode": "any",
                "keywords": [
                  "umkehrreaktion",
                  "umkehrung",
                  "andere richtung",
                  "gegenteilige richtung"
                ]
              },
              {
                "label": "Silber wird als zu edel für die Elektronenabgabe an Kupfer-Ionen erkannt.",
                "matchMode": "allGroups",
                "keywordGroups": [
                  [
                    "silber",
                    "ag"
                  ],
                  [
                    "edler",
                    "höheres potenzial",
                    "hoeheres potenzial"
                  ]
                ]
              }
            ]
          }
        },
        {
          "id": "spontaneity-c",
          "title": "Aufgabe C: Zink reagiert mit Kupfer-Ionen",
          "materials": [
            {
              "title": "Material 1: Mögliche Reaktion",
              "type": "reaction-list",
              "content": [
                "Zn + Cu²⁺ → Zn²⁺ + Cu"
              ]
            },
            {
              "title": "Material 2: Standardelektrodenpotenziale",
              "type": "table",
              "columns": [
                "Redoxpaar",
                "E° in V"
              ],
              "rows": [
                [
                  "Zn²⁺/Zn",
                  "−0,76"
                ],
                [
                  "Cu²⁺/Cu",
                  "+0,34"
                ]
              ]
            }
          ],
          "calculationPart": {
            "type": "calculation",
            "checking": {
              "type": "direct",
              "feedback": "color"
            },
            "prompt": "Berechne zunächst die Zellspannung.",
            "fields": [
              {
                "id": "eKathode",
                "label": "E(Kathode) in V",
                "correctValue": 0.34
              },
              {
                "id": "eAnode",
                "label": "E(Anode) in V",
                "correctValue": -0.76
              },
              {
                "id": "voltage",
                "label": "U in V",
                "correctValue": 1.1
              }
            ],
            "tolerance": 0.01,
            "modelAnswer": "U = E(Kathode) − E(Anode) = 0,34 V − (−0,76 V) = 1,10 V."
          },
          "freeTextPart": {
            "type": "freeText",
            "checking": {
              "type": "criteria"
            },
            "prompt": "Beurteile, ob die Reaktion freiwillig abläuft.",
            "modelAnswer": "Die Reaktion läuft freiwillig ab, weil die Zellspannung mit 1,10 V positiv ist. Zink wird oxidiert und gibt Elektronen ab. Kupfer-Ionen werden reduziert.",
            "criteria": [
              {
                "label": "Die Reaktion wird als freiwillig beurteilt.",
                "matchMode": "any",
                "keywords": [
                  "freiwillig",
                  "läuft ab",
                  "laeuft ab",
                  "spontan"
                ]
              },
              {
                "label": "Die positive Zellspannung wird genannt.",
                "matchMode": "allGroups",
                "keywordGroups": [
                  [
                    "positive zellspannung",
                    "positive spannung",
                    "zellspannung ist positiv",
                    "spannung ist positiv",
                    "u ist positiv",
                    "u > 0",
                    "größer 0",
                    "groesser 0",
                    "1,10",
                    "1.10"
                  ],
                  [
                    "zellspannung",
                    "spannung",
                    "u"
                  ]
                ]
              },
              {
                "label": "Zink wird oxidiert.",
                "matchMode": "allGroups",
                "keywordGroups": [
                  [
                    "zink",
                    "zn"
                  ],
                  [
                    "elektronenabgabe",
                    "elektronen abgeben",
                    "gibt elektronen ab",
                    "geben elektronen ab",
                    "oxidation",
                    "oxidiert",
                    "wird oxidiert"
                  ]
                ]
              },
              {
                "label": "Kupfer-Ionen werden reduziert.",
                "matchMode": "allGroups",
                "keywordGroups": [
                  [
                    "cu2+",
                    "cu²⁺",
                    "cu(2+)",
                    "kupfer-ionen",
                    "kupferionen",
                    "kupfer-ion",
                    "kupferion"
                  ],
                  [
                    "elektronenaufnahme",
                    "elektronen aufnehmen",
                    "nimmt elektronen auf",
                    "nehmen elektronen auf",
                    "reduktion",
                    "reduziert",
                    "wird reduziert"
                  ]
                ]
              }
            ]
          }
        },
        {
          "id": "spontaneity-d",
          "title": "Aufgabe D: Kupfer reagiert mit Zink-Ionen",
          "materials": [
            {
              "title": "Material 1: Mögliche Reaktion",
              "type": "reaction-list",
              "content": [
                "Cu + Zn²⁺ → Cu²⁺ + Zn"
              ]
            },
            {
              "title": "Material 2: Standardelektrodenpotenziale",
              "type": "table",
              "columns": [
                "Redoxpaar",
                "E° in V"
              ],
              "rows": [
                [
                  "Zn²⁺/Zn",
                  "−0,76"
                ],
                [
                  "Cu²⁺/Cu",
                  "+0,34"
                ]
              ]
            }
          ],
          "calculationPart": {
            "type": "calculation",
            "checking": {
              "type": "direct",
              "feedback": "color"
            },
            "prompt": "Berechne die Zellspannung für die angegebene Reaktionsrichtung.",
            "fields": [
              {
                "id": "eKathode",
                "label": "E(Kathode) in V",
                "correctValue": -0.76
              },
              {
                "id": "eAnode",
                "label": "E(Anode) in V",
                "correctValue": 0.34
              },
              {
                "id": "voltage",
                "label": "U in V",
                "correctValue": -1.1
              }
            ],
            "tolerance": 0.01,
            "modelAnswer": "Für die angegebene Richtung gilt: U = −0,76 V − 0,34 V = −1,10 V."
          },
          "freeTextPart": {
            "type": "freeText",
            "checking": {
              "type": "criteria"
            },
            "prompt": "Beurteile, ob die angegebene Reaktion freiwillig abläuft.",
            "modelAnswer": "Die Reaktion läuft nicht freiwillig ab, weil die Zellspannung mit −1,10 V negativ ist. Zink ist unedler als Kupfer; freiwillig läuft daher die Reaktion Zn + Cu²⁺ → Zn²⁺ + Cu ab.",
            "criteria": [
              {
                "label": "Die Reaktion wird als nicht freiwillig beurteilt.",
                "matchMode": "any",
                "keywords": [
                  "nicht freiwillig",
                  "läuft nicht",
                  "laeuft nicht",
                  "nicht spontan"
                ]
              },
              {
                "label": "Die negative Zellspannung wird genannt.",
                "matchMode": "allGroups",
                "keywordGroups": [
                  [
                    "negative zellspannung",
                    "negative spannung",
                    "zellspannung ist negativ",
                    "spannung ist negativ",
                    "u ist negativ",
                    "u < 0",
                    "kleiner 0",
                    "-1,10",
                    "-1.10"
                  ],
                  [
                    "zellspannung",
                    "spannung",
                    "u"
                  ]
                ]
              },
              {
                "label": "Zink wird als unedler als Kupfer erkannt.",
                "matchMode": "allGroups",
                "keywordGroups": [
                  [
                    "zink",
                    "zn"
                  ],
                  [
                    "kupfer",
                    "cu"
                  ],
                  [
                    "unedler",
                    "niedrigeres potenzial"
                  ]
                ]
              },
              {
                "label": "Die freiwillige Umkehrreaktion wird erkannt.",
                "matchMode": "any",
                "keywords": [
                  "zn + cu",
                  "zink reagiert mit kupfer",
                  "umkehrreaktion",
                  "umkehrung",
                  "andere richtung"
                ]
              }
            ]
          }
        }
      ]
    }
  ],
  "standardPotentials": [
    {
      "id": "mg",
      "redoxPair": "Mg²⁺/Mg",
      "oxidizedForm": "Mg²⁺",
      "reducedForm": "Mg",
      "metal": "Magnesium",
      "symbol": "Mg",
      "potential": -2.37
    },
    {
      "id": "zn",
      "redoxPair": "Zn²⁺/Zn",
      "oxidizedForm": "Zn²⁺",
      "reducedForm": "Zn",
      "metal": "Zink",
      "symbol": "Zn",
      "potential": -0.76
    },
    {
      "id": "fe",
      "redoxPair": "Fe²⁺/Fe",
      "oxidizedForm": "Fe²⁺",
      "reducedForm": "Fe",
      "metal": "Eisen",
      "symbol": "Fe",
      "potential": -0.44
    },
    {
      "id": "h2",
      "redoxPair": "2 H⁺/H₂",
      "oxidizedForm": "H⁺",
      "reducedForm": "H₂",
      "metal": "Standardwasserstoffelektrode",
      "symbol": "H₂",
      "potential": 0
    },
    {
      "id": "cu",
      "redoxPair": "Cu²⁺/Cu",
      "oxidizedForm": "Cu²⁺",
      "reducedForm": "Cu",
      "metal": "Kupfer",
      "symbol": "Cu",
      "potential": 0.34
    },
    {
      "id": "ag",
      "redoxPair": "Ag⁺/Ag",
      "oxidizedForm": "Ag⁺",
      "reducedForm": "Ag",
      "metal": "Silber",
      "symbol": "Ag",
      "potential": 0.8
    }
  ]
};

  const state = { view: 'home', notice: '', selectedTaskId: null, electrodeView: 'overview', selectedElectrodeExerciseId: null, electrodeHalfCellA: null, electrodeHalfCellB: null, electrodeSheCellId: null, inputs: {}, directResults: {}, electrodeResults: {}, redoxResults: {}, criteriaVisible: {}, criteriaResults: {}, electrodeCriteriaVisible: {}, solutions: {}, redoxData: null, redoxDataError: '' };
  const selfCheckStorageKey = 'electrochemistry-self-check';

  function pageHeader(title, subtitle) {
    return `<header class="page-header"><p class="eyebrow">Elektrochemie</p><h1>${title}</h1>${subtitle ? `<p class="lead">${subtitle}</p>` : ''}</header>`;
  }
  function backButton(label, view) { return `<button type="button" class="back-button" data-nav="${view}">← ${label}</button>`; }
  function formula(value, block = false) { return `<${block ? 'div' : 'span'} class="formula${block ? ' formula--block' : ''}">${value}</${block ? 'div' : 'span'}>`; }
  function navigate(view) { state.view = view; state.notice = ''; if (view === 'klausurTasks') state.selectedTaskId = null; if (view === 'electrodePotentials') { state.electrodeView = 'overview'; state.selectedElectrodeExerciseId = null; } render(); }
  function fieldId(...parts) { return parts.join('__'); }
  function valueFor(id) { return state.inputs[id] ?? ''; }
  function resultClass(subtaskId, id) { const result = state.directResults[subtaskId]; return !result || !(id in result) ? '' : result[id] ? 'is-correct' : 'is-wrong'; }

  function normalizeUnicode(value) {
    const sup = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁺': '+', '⁻': '-' };
    const sub = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' };
    return String(value ?? '').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/g, c => sup[c] || c).replace(/[₀₁₂₃₄₅₆₇₈₉]/g, c => sub[c] || c).replace(/[−–—]/g, '-').replace(/→/g, '->');
  }
  function normalizePlain(value) { return normalizeUnicode(value).toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/\((\d?[+-])\)/g, '$1').replace(/[-‐‑‒]/g, ' ').replace(/\s+/g, ' ').trim(); }
  function containsTerm(text, term) {
    const normalizedText = normalizePlain(text);
    const aliasTerms = Object.values(chemistryAliases).find(list => list.some(alias => normalizePlain(alias) === normalizePlain(term)));
    return (aliasTerms || [term]).some(candidate => {
      const normalizedTerm = normalizePlain(candidate);
      return normalizedTerm && (normalizedText.includes(normalizedTerm) || normalizedText.replace(/\s/g, '').includes(normalizedTerm.replace(/\s/g, '')));
    });
  }
  function normalizeOx(value) { const roman = { I: '1', II: '2', III: '3', IV: '4', V: '5', VI: '6' }; let normalized = normalizeUnicode(value).trim().replace(/\s+/g, '').toUpperCase(); const sign = normalized.startsWith('-') ? '-' : ''; normalized = normalized.replace(/^[+-]/, ''); normalized = roman[normalized] || normalized; return normalized ? sign + normalized : ''; }
  function normalizeCharge(value) { let normalized = normalizeUnicode(value).trim().replace(/\s+/g, ''); if (normalized === '' || normalized === '0') return '0'; if (['+', '+1', '1+'].includes(normalized)) return '+'; if (['-', '-1', '1-'].includes(normalized)) return '-'; return normalized.replace(/^([+-])(\d)$/, '$2$1'); }
  function isAccepted(value, answer, kind = 'text') { const accepted = [answer?.correct, ...(answer?.accepted || []), ...(answer?.correctValues || [])].filter(v => v !== undefined); const norm = v => kind === 'element' ? String(v || '').trim().toLowerCase() : kind === 'charge' ? normalizeCharge(v) : kind === 'oxidationNumber' ? normalizeOx(v) : normalizeUnicode(v).trim().replace(/\s+/g, ''); return accepted.some(item => norm(value) === norm(item)); }

  function renderHome() {
    return `${pageHeader('Elektrochemie Lernprogramm', 'Interaktive Übungen und Erklärungen zur Elektrochemie')}${state.notice ? `<div class="notice" role="status">${state.notice}</div>` : ''}<div class="tile-grid"><button type="button" class="tile-card tile-card--featured" data-nav="selfCheck"><span class="tile-card__title">Selbstcheck</span><span class="tile-card__description">Kompetenzen abhaken und den eigenen Lernstand festhalten.</span><span class="tile-card__badge">Neu</span></button><button type="button" class="tile-card" data-nav="klausurTasks"><span class="tile-card__title">Klausurähnliche Aufgaben – Grundlagen</span><span class="tile-card__description">Aufgaben zu Oxidationszahlen, Redoxreihe, galvanischer Zelle und Zellspannung.</span><span class="tile-card__badge">Neu</span></button>${modules.map(module => `<button type="button" class="tile-card ${module.status !== 'active' ? 'is-disabled' : ''}" data-module="${module.id}"><span class="tile-card__title">${module.title}</span><span class="tile-card__description">${module.description}</span>${module.status !== 'active' ? '<span class="tile-card__badge">Kommt später</span>' : ''}</button>`).join('')}</div>`;
  }
  function renderSelfCheck() { let checked = {}; try { checked = JSON.parse(localStorage.getItem(selfCheckStorageKey) || '{}'); } catch {} return `<div class="self-check-actions no-print">${backButton('Zurück zur Startseite', 'home')}<button type="button" class="primary-button" data-print>Selbstcheck drucken / als PDF speichern</button></div>${pageHeader('Selbstcheck', 'Hake ab, welche Kompetenzen du schon sicher beherrschst.')}<div class="self-check-list">${selfCheckCompetencies.map((cat, ci) => `<section class="self-check-category"><h2>${cat.category}</h2><div class="self-check-items">${cat.items.map((item, ii) => { const id = `${ci}-${ii}`; return `<label class="self-check-item"><input type="checkbox" data-self-check="${id}" ${checked[id] ? 'checked' : ''} /><span>${item}</span></label>`; }).join('')}</div></section>`).join('')}</div>`; }
  let redoxDataLoadStarted = false;
  function loadRedoxData() {
    if (state.redoxData || redoxDataLoadStarted) return;
    redoxDataLoadStarted = true;
    Promise.all([
      import('./src/data/redoxExercises.js'),
      import('./src/data/redoxMediumExercises.js'),
      import('./src/data/redoxHardExercises.js'),
    ]).then(([easy, medium, hard]) => {
      state.redoxData = repairRedoxData({
        easy: (easy.redoxExercises || []).filter(item => item.level === 'einfach'),
        medium: medium.redoxMediumExercises || [],
        hard: hard.redoxHardExercises || [],
      });
      state.redoxDataError = '';
      render();
    }).catch(() => {
      state.redoxData = fallbackRedoxData();
      state.redoxDataError = '';
      render();
    });
  }
  function repairImportedText(value) {
    if (typeof value !== 'string' || !/[Ãâ]/.test(value)) return value;
    try {
      const bytes = Uint8Array.from(value, char => char.charCodeAt(0) & 255);
      return new TextDecoder('utf-8').decode(bytes);
    } catch {
      return value;
    }
  }
  function repairRedoxData(value) {
    if (Array.isArray(value)) return value.map(repairRedoxData);
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, repairRedoxData(item)]));
    return repairImportedText(value);
  }
  function fallbackRedoxData() {
    return {
      easy: [
        { id: 'redox-local-easy-1', type: 'gesamtreaktion', title: 'Gesamtreaktion aufstellen', givenForms: [{ element: 'Zn', reducedForm: 'Zn', oxidizedForm: 'Zn²⁺' }, { element: 'Cu', reducedForm: 'Cu', oxidizedForm: 'Cu²⁺' }], prompt: 'Stelle die Gesamtreaktion auf.', answer: 'Zn + Cu²⁺ → Zn²⁺ + Cu', acceptedAnswers: ['Zn + Cu2+ -> Zn2+ + Cu'], explanation: 'Zink gibt zwei Elektronen ab. Cu²⁺ nimmt zwei Elektronen auf.' },
        { id: 'redox-local-easy-2', type: 'oxidation', title: 'Oxidation formulieren', givenForms: [{ element: 'Al', reducedForm: 'Al', oxidizedForm: 'Al³⁺' }], prompt: 'Formuliere die Oxidation.', answer: 'Al → Al³⁺ + 3 e⁻', acceptedAnswers: ['Al -> Al3+ + 3 e-'], explanation: 'Aluminium gibt drei Elektronen ab.' },
        { id: 'redox-local-easy-3', type: 'reduktion', title: 'Reduktion formulieren', givenForms: [{ element: 'Ag', reducedForm: 'Ag', oxidizedForm: 'Ag⁺' }], prompt: 'Formuliere die Reduktion.', answer: 'Ag⁺ + e⁻ → Ag', acceptedAnswers: ['Ag+ + e- -> Ag'], explanation: 'Ein Silber-Ion nimmt ein Elektron auf.' },
      ],
      medium: [
        { id: 'redox-local-medium-1', type: 'gesamtreaktion', title: 'Gesamtreaktion mit Eisen(II) und Chlor', givenForms: [{ element: 'Eisen', reducedForm: 'Fe²⁺', oxidizedForm: 'Fe³⁺' }, { element: 'Chlor', reducedForm: 'Cl⁻', oxidizedForm: 'Cl₂' }], prompt: 'Stelle die Gesamtreaktion auf.', answer: '2 Fe²⁺ + Cl₂ → 2 Fe³⁺ + 2 Cl⁻', acceptedAnswers: ['2 Fe2+ + Cl2 -> 2 Fe3+ + 2 Cl-'], explanation: 'Zwei Fe²⁺-Ionen geben insgesamt zwei Elektronen ab. Cl₂ nimmt zwei Elektronen auf.' },
        { id: 'redox-local-medium-2', type: 'oxidation', title: 'Oxidation von Bromid zu Brom', givenForms: [{ element: 'Brom', reducedForm: 'Br⁻', oxidizedForm: 'Br₂' }], prompt: 'Formuliere die Oxidation.', answer: '2 Br⁻ → Br₂ + 2 e⁻', acceptedAnswers: ['2 Br- -> Br2 + 2 e-'], explanation: 'Zwei Bromid-Ionen geben zusammen zwei Elektronen ab.' },
      ],
      hard: [
        { id: 'redox-local-hard-1', type: 'gesamtreaktion', title: 'Permanganat und Eisen(II) in saurer Lösung', givenForms: [{ element: 'Mangan', reducedForm: 'Mn²⁺', oxidizedForm: 'MnO₄⁻' }, { element: 'Eisen', reducedForm: 'Fe²⁺', oxidizedForm: 'Fe³⁺' }], medium: 'sauer', helperSpecies: ['H⁺', 'H₂O'], helperHint: 'In saurer Lösung darfst du O-Atome mit H₂O und H-Atome mit H⁺ ausgleichen.', prompt: 'Stelle die Gesamtreaktion in saurer Lösung auf.', answer: 'MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺', acceptedAnswers: ['MnO4- + 8 H+ + 5 Fe2+ -> Mn2+ + 4 H2O + 5 Fe3+'], explanation: 'Permanganat wird in saurer Lösung zu Mn²⁺ reduziert. Fe²⁺ wird zu Fe³⁺ oxidiert.' },
      ],
    };
  }
  function redoxTiles() {
    const tiles = [
      ['redoxExplanation', 'Redoxreaktionen aufstellen – Erläuterung', 'Schritt für Schritt am Beispiel Zink und Kupfer-Ionen.'],
      ['redoxPractice', 'Redoxreaktionen aufstellen – einfach', 'Übe mit einfachen Metallatomen und Metallionen.'],
      ['redoxMediumPractice', 'Redoxreaktionen aufstellen – mittel', 'Übe mit Ionen, Nichtmetallen, Molekülen und Elektronenausgleich.'],
      ['redoxHardPractice', 'Redoxreaktionen aufstellen – schwer', 'Übe anspruchsvolle Redoxgleichungen in saurer Lösung.'],
    ];
    return `<div class="tile-grid">${tiles.map(([view, title, description]) => `<button type="button" class="tile-card" data-nav="${view}"><span class="tile-card__title">${title}</span><span class="tile-card__description">${description}</span></button>`).join('')}</div>`;
  }
  function renderOverview() {
    return `${backButton('Zur Startseite', 'home')}${pageHeader('Redoxreaktionen aufstellen', 'In diesem Modul lernst du, Redoxreaktionen aus reduzierten und oxidierten Formen aufzustellen. Du übst Oxidation, Reduktion, Elektronenanzahl und Gesamtreaktion.')}${redoxTiles()}`;
  }
  function renderRedoxExplanation() {
    const steps = [
      ['Schritt 1: Gegebene Formen betrachten', `Zuerst vergleichst du reduzierte und oxidierte Form. Bei Zink ist ${formula('Zn')} die reduzierte Form und ${formula('Zn²⁺')} die oxidierte Form. Bei Kupfer ist ${formula('Cu')} reduziert und ${formula('Cu²⁺')} oxidiert.`],
      ['Schritt 2: Oxidation erkennen', `Bei der Oxidation werden Elektronen abgegeben.${formula('Zn → Zn²⁺ + 2 e⁻', true)}`],
      ['Schritt 3: Reduktion erkennen', `Bei der Reduktion werden Elektronen aufgenommen.${formula('Cu²⁺ + 2 e⁻ → Cu', true)}`],
      ['Schritt 4: Elektronenanzahl prüfen', 'Oxidation und Reduktion müssen gleich viele Elektronen enthalten. Hier werden 2 Elektronen abgegeben und 2 Elektronen aufgenommen.'],
      ['Schritt 5: Gesamtreaktion bilden', `Die Elektronen werden gekürzt. In der Gesamtreaktion tauchen sie nicht mehr auf.${formula('Zn + Cu²⁺ → Zn²⁺ + Cu', true)}`],
      ['Schritt 6: Fachliche Deutung', `Zink wird oxidiert und ist das Reduktionsmittel. ${formula('Cu²⁺')} wird reduziert und ist das Oxidationsmittel.`],
    ];
    return `${backButton('Zur Modulübersicht', 'redoxOverview')}${pageHeader('Redoxreaktionen aufstellen – Erläuterung', 'Ein Beispiel mit Zink und Kupfer-Ionen.')}<section class="given-forms"><h2>Gegebene Formen</h2><div class="given-forms__grid"><div><strong>Zink</strong>${formula('Zn / Zn²⁺', true)}</div><div><strong>Kupfer</strong>${formula('Cu / Cu²⁺', true)}</div></div></section><div class="task-list">${steps.map(([title, body], index) => `<section class="task-box"><p class="eyebrow">Schritt ${index + 1}</p><h2>${title}</h2><p>${body}</p></section>`).join('')}</div><section class="solution-card"><h2>Fertige Lösung</h2><p>Oxidation:</p>${formula('Zn → Zn²⁺ + 2 e⁻', true)}<p>Reduktion:</p>${formula('Cu²⁺ + 2 e⁻ → Cu', true)}<p>Gesamtreaktion:</p>${formula('Zn + Cu²⁺ → Zn²⁺ + Cu', true)}</section><aside class="memory-card"><h2>Merke</h2><p>Oxidation: Elektronen stehen auf der Produktseite.</p><p>Reduktion: Elektronen stehen auf der Eduktseite.</p><p>In der Gesamtreaktion dürfen keine Elektronen mehr vorkommen.</p></aside>`;
  }
  function redoxLevelConfig(view) {
    if (view === 'redoxMediumPractice') return { key: 'medium', title: 'Redoxreaktionen aufstellen – mittel', subtitle: 'Übe mit Ionen, Nichtmetallen, Molekülen und Elektronenausgleich.' };
    if (view === 'redoxHardPractice') return { key: 'hard', title: 'Redoxreaktionen aufstellen – schwer', subtitle: 'Übe anspruchsvolle Redoxgleichungen in saurer Lösung.' };
    return { key: 'easy', title: 'Redoxreaktionen aufstellen – einfach', subtitle: 'Übe mit einfachen Metallatomen und Metallionen.' };
  }
  function normalizeRedoxAnswer(value) {
    return normalizeUnicode(value).toLowerCase().replace(/²/g, '2').replace(/³/g, '3').replace(/⁺/g, '+').replace(/⁻/g, '-').replace(/₁/g, '1').replace(/₂/g, '2').replace(/₃/g, '3').replace(/₄/g, '4').replace(/₇/g, '7').replace(/\s+/g, '').replace(/→/g, '->');
  }
  function redoxAnswerMatches(exercise, value) {
    const accepted = [exercise.answer, ...(exercise.acceptedAnswers || [])].filter(Boolean);
    const normalized = normalizeRedoxAnswer(value);
    return accepted.some(answer => normalizeRedoxAnswer(answer) === normalized);
  }
  function renderRedoxGivenForms(forms = []) {
    if (!forms.length) return '';
    return `<section class="given-forms"><h3>Gegebene Formen</h3><div class="given-forms__grid">${forms.map(form => `<div><strong>${form.element}</strong><p>reduziert: ${formula(form.reducedForm)}</p><p>oxidiert: ${formula(form.oxidizedForm)}</p></div>`).join('')}</div></section>`;
  }
  function renderRedoxExercise(exercise, index) {
    const id = fieldId('redox', exercise.id);
    const result = state.redoxResults[exercise.id];
    const resultClassName = result === undefined ? '' : result ? 'is-correct' : 'is-wrong';
    const solutionVisible = state.solutions[exercise.id];
    const inputValue = valueFor(id);
    const partials = exercise.partialReactions ? `<section class="partial-reactions"><h3>Vorgegebene Teilreaktionen</h3><p>Oxidation:</p>${formula(exercise.partialReactions.oxidation, true)}<p>Reduktion:</p>${formula(exercise.partialReactions.reduction, true)}</section>` : '';
    const helper = (exercise.medium || exercise.helperSpecies) ? `<section class="helper-card">${exercise.medium ? '<p><strong>Reaktionsmedium:</strong> saure Lösung</p>' : ''}${exercise.helperSpecies ? `<p><strong>Hilfsstoffe:</strong> ${exercise.helperSpecies.map(item => formula(item)).join(' ')}</p>` : ''}${exercise.helperHint ? `<p>${exercise.helperHint}</p>` : ''}</section>` : '';
    const answerInput = exercise.type === 'zuordnung'
      ? `<div class="pair-task">${(exercise.pairs || []).map((pair, pairIndex) => { const pairId = fieldId('redox', exercise.id, pairIndex); return `<div class="pair-row">${formula(pair.equation, true)}<select class="${state.redoxResults[pairId] === undefined ? '' : state.redoxResults[pairId] ? 'is-correct' : 'is-wrong'}" data-input="${pairId}"><option value="">Bitte wählen</option><option value="Oxidation" ${valueFor(pairId) === 'Oxidation' ? 'selected' : ''}>Oxidation</option><option value="Reduktion" ${valueFor(pairId) === 'Reduktion' ? 'selected' : ''}>Reduktion</option></select></div>`; }).join('')}</div>`
      : `<label class="klausur-field"><span>Deine Antwort</span><input class="${resultClassName}" value="${inputValue}" data-input="${id}" placeholder="${exercise.type === 'elektronenanzahl' ? 'z. B. 2' : 'Reaktionsgleichung eingeben'}" /></label>`;
    return `<article class="task-box" id="${exercise.id}"><p class="eyebrow">Aufgabe ${index + 1}</p><h2>${exercise.title}</h2><p>${exercise.prompt}</p>${renderRedoxGivenForms(exercise.givenForms)}${helper}${partials}${exercise.template ? `<p><strong>Vorlage:</strong> ${formula(exercise.template)}</p>` : ''}${answerInput}<div class="button-row"><button type="button" class="primary-button" data-check-redox="${exercise.id}">Antwort prüfen</button><button type="button" class="secondary-button" data-solution="${exercise.id}">${solutionVisible ? 'Musterlösung ausblenden' : 'Musterlösung anzeigen'}</button></div>${result !== undefined && exercise.type !== 'zuordnung' ? `<p class="feedback ${result ? 'feedback--success' : 'feedback--error'}">${result ? 'Richtig.' : 'Noch nicht richtig.'}</p>` : ''}${solutionVisible ? `<section class="solution-card solution-card--compact"><h3>Musterlösung</h3>${formula(exercise.answer, true)}<p>${exercise.explanation || ''}</p>${exercise.solutionSteps?.oxidation ? `<p>Oxidation:</p>${formula(exercise.solutionSteps.oxidation, true)}` : ''}${exercise.solutionSteps?.reduction ? `<p>Reduktion:</p>${formula(exercise.solutionSteps.reduction, true)}` : ''}${exercise.solutionSteps?.electronBalance ? `<p><strong>Elektronenausgleich:</strong> ${exercise.solutionSteps.electronBalance}</p>` : ''}</section>` : ''}</article>`;
  }
  function renderRedoxPractice(view) {
    loadRedoxData();
    const config = redoxLevelConfig(view);
    if (state.redoxDataError) return `${backButton('Zur Modulübersicht', 'redoxOverview')}${pageHeader(config.title, config.subtitle)}<section class="task-box"><p>${state.redoxDataError}</p><p>Bitte lade die Seite neu oder öffne die Projektversion.</p></section>`;
    if (!state.redoxData) return `${backButton('Zur Modulübersicht', 'redoxOverview')}${pageHeader(config.title, config.subtitle)}<section class="task-box"><p>Die Übungen werden geladen.</p></section>`;
    const exercises = state.redoxData[config.key] || [];
    return `${backButton('Zur Modulübersicht', 'redoxOverview')}${pageHeader(config.title, config.subtitle)}<div class="task-list">${exercises.map(renderRedoxExercise).join('')}</div>`;
  }
  function formatLocalVoltage(value) { return `${value >= 0 ? '+' : '−'}${Math.abs(value).toFixed(2).replace('.', ',')} V`; }
  function electrodeResultClass(exerciseId, id) { const result = state.electrodeResults[exerciseId]; return !result || !(id in result) ? '' : result[id] ? 'is-correct' : 'is-wrong'; }
  function electrodeFieldId(...parts) { return ['electrode', ...parts].join('__'); }
  function electrodeAccepted(value, accepted = []) { return accepted.some(item => normalizePlain(value).replace(/\s/g, '') === normalizePlain(item).replace(/\s/g, '')); }
  function mixedOptions(options = []) { if (options.length < 2) return options; if (options.length === 2) return [...options].reverse(); const midpoint = Math.ceil(options.length / 2); return [...options.slice(midpoint), ...options.slice(0, midpoint)]; }
  function renderElectrodeOperatorChips(operators = []) { return operators.map(operator => `<span class="operator-chip afb-${String(operator.afb).toLowerCase()}">${operator.name} · AFB ${operator.afb}</span>`).join(''); }
  function renderElectrodeMaterials(materials = []) { return materials.map(material => { if (material.type === 'table') return `<section class="material-block"><h3>${material.title}</h3><div class="table-scroll"><table class="material-table"><thead><tr>${material.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead><tbody>${material.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section>`; if (material.type === 'text-list' || material.type === 'reaction-list') return `<section class="material-block"><h3>${material.title}</h3><ul>${material.content.map(item => `<li>${item}</li>`).join('')}</ul></section>`; return `<section class="material-block"><h3>${material.title}</h3><p>${material.content || ''}</p></section>`; }).join(''); }
  function renderElectrodeInfoSections(sections = []) { return `<div class="info-sections">${sections.map(section => `<section class="info-section"><h2>${section.title}</h2>${(section.content || []).map(p => `<p>${p}</p>`).join('')}${section.labels ? `<div class="label-chip-row">${section.labels.map(label => `<span class="label-chip">${label}</span>`).join('')}</div>` : ''}${section.formula ? `<div class="formula-box">${section.formula}</div>` : ''}${section.keyIdea ? `<div class="key-idea">${section.keyIdea}</div>` : ''}${section.example ? `<div class="example-box"><h3>${section.example.title}</h3><p><strong>Gegeben:</strong> ${section.example.given.join(', ')}</p><ul>${section.example.solution.map(item => `<li>${item}</li>`).join('')}</ul></div>` : ''}</section>`).join('')}</div>`; }
  function electrodeViewName(targetView) { return targetView === 'electrodePotentialIntro' ? 'intro' : targetView; }
  function selectedPotential(id, fallback) { return electrodePotentialData.standardPotentials.find(cell => cell.id === (id || fallback)) || electrodePotentialData.standardPotentials[0]; }
  function renderHalfCellSelector(interactiveElement) { const options = interactiveElement.potentials; const a = selectedPotential(state.electrodeHalfCellA, interactiveElement.defaultSelection.halfCellA); const b = selectedPotential(state.electrodeHalfCellB, interactiveElement.defaultSelection.halfCellB); const cathode = a.potential >= b.potential ? a : b; const anode = cathode.id === a.id ? b : a; const voltage = cathode.potential - anode.potential; const cellLabel = cell => cell?.symbol || cell?.redoxPair || cell?.title || ''; return `<section class="interactive-box"><h2>${interactiveElement.title}</h2><p>${interactiveElement.instruction}</p><div class="selector-row"><label>Halbzelle A<select data-electrode-half="a">${options.map(cell => `<option value="${cell.id}" ${cell.id === a.id ? 'selected' : ''}>${cell.redoxPair} (${formatLocalVoltage(cell.potential)})</option>`).join('')}</select></label><label>Halbzelle B<select data-electrode-half="b">${options.map(cell => `<option value="${cell.id}" ${cell.id === b.id ? 'selected' : ''}>${cell.redoxPair} (${formatLocalVoltage(cell.potential)})</option>`).join('')}</select></label></div><div class="result-box"><p><strong>Kathode:</strong> ${cathode.redoxPair}</p><p><strong>Anode:</strong> ${anode.redoxPair}</p><p><strong>Elektronenfluss:</strong> von ${cellLabel(anode)} zu ${cellLabel(cathode)}</p><p><strong>Zellspannung:</strong> ${formatLocalVoltage(voltage)}</p></div></section>`; }
  function renderSheSimulation(simulation) { const selected = simulation.selectableHalfCells.find(cell => cell.id === (state.electrodeSheCellId || simulation.selectableHalfCells[0].id)) || simulation.selectableHalfCells[0]; const h2 = electrodePotentialData.standardPotentials.find(cell => cell.id === 'h2'); const cathode = selected.potential >= h2.potential ? selected : h2; const anode = cathode.id === selected.id ? h2 : selected; const voltage = cathode.potential - anode.potential; const cellLabel = cell => cell?.symbol || cell?.redoxPair || cell?.title || ''; return `<section class="interactive-box she-simulation"><h2>${simulation.title}</h2><p>${simulation.instruction}</p><label>Metallhalbzelle auswählen<select data-electrode-she>${simulation.selectableHalfCells.map(cell => `<option value="${cell.id}" ${cell.id === selected.id ? 'selected' : ''}>${cell.redoxPair} (${formatLocalVoltage(cell.potential)})</option>`).join('')}</select></label><div class="she-visual"><div class="half-cell-card"><span class="large-symbol">H₂</span><strong>Standardwasserstoffelektrode</strong><span>E° = 0,00 V</span></div><div class="voltmeter-card"><strong>Voltmeter</strong><span class="large-symbol">${formatLocalVoltage(voltage)}</span><span class="electron-arrow">e⁻: ${cellLabel(anode)} → ${cellLabel(cathode)}</span></div><div class="half-cell-card"><span class="large-symbol">${selected.redoxPair}</span><strong>${selected.title}</strong><span>E° = ${formatLocalVoltage(selected.potential)}</span></div></div><div class="result-box"><p><strong>Anode:</strong> ${anode.redoxPair}</p><p><strong>Kathode:</strong> ${cathode.redoxPair}</p><p><strong>Oxidation:</strong> an der Anode</p><p><strong>Reduktion:</strong> an der Kathode</p></div></section>`; }
  function renderElectrodeOverview() { return `${backButton('Zur Hauptübersicht', 'home')}${pageHeader(electrodePotentialData.meta.title, electrodePotentialData.meta.subtitle)}<div class="module-card-grid">${electrodePotentialData.overviewCards.map(card => `<button type="button" class="module-card" data-open-electrode-view="${electrodeViewName(card.targetView)}">${card.icon ? `<span class="module-card-icon">${card.icon}</span>` : ''}<h2>${card.title}</h2><p>${card.description}</p><div class="operator-chips">${renderElectrodeOperatorChips(card.operators)}</div><span class="module-card-action">Öffnen →</span></button>`).join('')}</div>`; }
  function renderElectrodeIntro() { const page = electrodePotentialData.introPage; return `${backButton('Zur Modulübersicht', 'electrodePotentials')}${pageHeader(page.title, page.subtitle)}${renderElectrodeInfoSections(page.sections)}${renderHalfCellSelector(page.interactiveElement)}`; }
  function renderElectrodeShe() { const page = electrodePotentialData.shePage; return `${backButton('Zur Modulübersicht', 'electrodePotentials')}${pageHeader(page.title, page.subtitle)}${renderElectrodeInfoSections(page.sections)}${renderSheSimulation(page.simulation)}`; }
  function renderElectrodePracticeOverview() { const page = electrodePotentialData.practiceOverview; return `${backButton('Zur Modulübersicht', 'electrodePotentials')}${pageHeader(page.title, page.subtitle)}<div class="module-card-grid">${page.cards.map(card => `<button type="button" class="module-card" data-open-electrode-exercise="${card.targetExerciseId}"><h2>${card.title}</h2><p>${card.description}</p><div class="operator-chips">${renderElectrodeOperatorChips(card.operators)}</div><span class="module-card-action">Aufgabe öffnen</span></button>`).join('')}</div>`; }
  function renderElectrodeModelAnswer(id, text) { return text ? `<div class="model-answer-wrapper"><button type="button" class="secondary-button" data-solution="${id}">Musterlösung ${state.solutions[id] ? 'ausblenden' : 'anzeigen'}</button>${state.solutions[id] ? `<div class="model-answer"><p>${text}</p></div>` : ''}</div>` : ''; }
  function renderElectrodeMatching(exercise) { return `<div class="exercise-content">${renderElectrodeMaterials(exercise.materials)}${(exercise.tasks || []).map(task => `<section class="task-box">${task.title ? `<h2>${task.title}</h2>` : ''}${task.prompt ? `<p>${task.prompt}</p>` : ''}<div class="matching-grid">${task.pairs.map(pair => { const id = electrodeFieldId(exercise.id, task.id, pair.left); return `<label class="matching-row"><span>${pair.left}</span><select class="${electrodeResultClass(exercise.id, id)}" data-input="${id}" data-electrode-input><option value="">Bitte auswählen</option>${mixedOptions(task.rightOptions).map(option => `<option value="${option}" ${valueFor(id) === option ? 'selected' : ''}>${option}</option>`).join('')}</select></label>`; }).join('')}</div></section>`).join('')}<button type="button" class="primary-button" data-check-electrode="${exercise.id}">Antwort prüfen</button>${renderElectrodeModelAnswer(exercise.id, exercise.modelAnswer)}</div>`; }
  function renderElectrodeStructured(exercise) { return `<div class="exercise-content">${renderElectrodeMaterials(exercise.materials)}${exercise.tasks.map(task => `<section class="task-box">${task.title ? `<h2>${task.title}</h2>` : ''}${task.prompt ? `<p>${task.prompt}</p>` : ''}<div class="structured-field-grid">${task.fields.map(field => { const id = electrodeFieldId(exercise.id, task.id, field.id); return `<label>${field.label}<input type="text" class="${electrodeResultClass(exercise.id, id)}" value="${valueFor(id)}" data-input="${id}" data-electrode-input></label>`; }).join('')}</div>${renderElectrodeModelAnswer(`${exercise.id}-${task.id}`, task.modelAnswer)}</section>`).join('')}<button type="button" class="primary-button" data-check-electrode="${exercise.id}">Antwort prüfen</button>${renderElectrodeModelAnswer(exercise.id, exercise.modelAnswer)}</div>`; }
  function renderElectrodeCalculation(exercise) { const tasks = exercise.tasks || [exercise]; return `<div class="exercise-content">${exercise.formula ? `<div class="formula-box">${exercise.formula}</div>` : ''}${renderElectrodeMaterials(exercise.materials)}${tasks.map(task => `<section class="task-box">${task.title ? `<h2>${task.title}</h2>` : ''}${task.prompt ? `<p>${task.prompt}</p>` : ''}<div class="calculation-grid">${task.fields.map(field => { const id = electrodeFieldId(exercise.id, task.id, field.id); return `<label>${field.label}<input type="text" inputmode="decimal" class="${electrodeResultClass(exercise.id, id)}" value="${valueFor(id)}" data-input="${id}" data-electrode-input></label>`; }).join('')}</div>${renderElectrodeModelAnswer(`${exercise.id}-${task.id}`, task.modelAnswer)}</section>`).join('')}<button type="button" class="primary-button" data-check-electrode="${exercise.id}">Antwort prüfen</button></div>`; }
  function renderElectrodeScaffold(exercise) { const tasks = exercise.tasks || [{ id: exercise.id, title: exercise.title, prompt: exercise.prompt, materials: exercise.materials, scaffold: exercise.scaffold, modelAnswer: exercise.modelAnswer }]; const input = (exerciseId, id, label, cls = 'equation-input') => `<input class="${cls} ${electrodeResultClass(exerciseId, id)}" value="${valueFor(id)}" data-input="${id}" data-electrode-input aria-label="${label}">`; const partHtml = (exerciseId, taskId, part, eqi, pi) => { if (part.type === 'plus') return '<span class="equation-symbol">+</span>'; if (part.type === 'arrow') return '<span class="equation-symbol">→</span>'; if (part.type === 'electron') { const base = electrodeFieldId(exerciseId, taskId, 'scaffold', eqi, pi); return `<span class="equation-electron">${input(exerciseId, `${base}__coefficient`, 'Elektronenanzahl')}<span>e</span><sup>${input(exerciseId, `${base}__charge`, 'Elektronenladung')}</sup></span>`; } return `<span class="equation-particle">${input(exerciseId, electrodeFieldId(exerciseId, taskId, 'scaffold', eqi, pi, 'coefficient'), 'Koeffizient')}${part.formula.map((item, fi) => { const base = electrodeFieldId(exerciseId, taskId, 'scaffold', eqi, pi, fi); return `<span class="formula-unit">${input(exerciseId, `${base}__element`, 'Elementsymbol')}<sub>${input(exerciseId, `${base}__index`, 'Index')}</sub><sup>${input(exerciseId, `${base}__charge`, 'Ladung')}</sup></span>`; }).join('')}</span>`; }; return `<div class="exercise-content">${exercise.tasks ? renderElectrodeMaterials(exercise.materials) : ''}${tasks.map(task => `<section class="task-box">${renderElectrodeMaterials(task.materials)}${task.title ? `<h2>${task.title}</h2>` : ''}${task.prompt ? `<p>${task.prompt}</p>` : ''}${task.scaffold?.instruction ? `<p>${task.scaffold.instruction}</p>` : ''}<div class="equation-scaffold-list">${(task.scaffold?.equations || []).map((eq, eqi) => `<div class="equation-row"><strong>${eq.label}:</strong><div class="equation-line">${eq.parts.map((part, pi) => partHtml(exercise.id, task.id, part, eqi, pi)).join('')}</div>${state.electrodeResults[exercise.id] && eq.expectedDisplay ? `<p class="expected-display">Lösung: ${eq.expectedDisplay}</p>` : ''}</div>`).join('')}</div>${renderElectrodeModelAnswer(`${exercise.id}-${task.id}`, task.modelAnswer)}</section>`).join('')}<button type="button" class="primary-button" data-check-electrode="${exercise.id}">Antwort prüfen</button>${renderElectrodeModelAnswer(exercise.id, exercise.modelAnswer)}</div>`; }
  function renderElectrodeCriteria(criteria = [], answer = '') { return `<div class="criteria-box"><h3>Deine Antwort enthält:</h3><ul>${criteria.map(c => { const met = criterionMatches(c, answer); return `<li class="${met ? 'criterion-met' : 'criterion-open'}">${met ? '✓' : '○'} ${c.label}</li>`; }).join('')}</ul></div>`; }
  function renderElectrodeMixed(exercise) { const cases = exercise.cases || [{ id: exercise.id, title: exercise.title, materials: exercise.materials, calculationPart: exercise.calculationPart, freeTextPart: exercise.freeTextPart }]; return `<div class="exercise-content">${cases.map(currentCase => { const calc = currentCase.calculationPart; const free = currentCase.freeTextPart; const textId = electrodeFieldId(exercise.id, currentCase.id, 'freeText'); return `<section class="task-box">${currentCase.title ? `<h2>${currentCase.title}</h2>` : ''}${renderElectrodeMaterials(currentCase.materials)}<div class="task-box task-box--inner">${calc.prompt ? `<h3>${calc.prompt}</h3>` : ''}<div class="calculation-grid">${calc.fields.map(field => { const id = electrodeFieldId(exercise.id, currentCase.id, 'calc', field.id); return `<label>${field.label}<input type="text" inputmode="decimal" class="${electrodeResultClass(exercise.id, id)}" value="${valueFor(id)}" data-input="${id}" data-electrode-input></label>`; }).join('')}</div><button type="button" class="primary-button" data-check-electrode-case="${currentCase.id}">Rechnung prüfen</button>${renderElectrodeModelAnswer(`${exercise.id}-${currentCase.id}-calc`, calc.modelAnswer)}</div><div class="task-box task-box--inner">${free.prompt ? `<h3>${free.prompt}</h3>` : ''}<textarea class="free-text-area" data-input="${textId}" data-electrode-input>${valueFor(textId)}</textarea><button type="button" class="primary-button" data-check-electrode-criteria="${currentCase.id}">${state.electrodeCriteriaVisible[currentCase.id] ? 'Antwort erneut überprüfen' : 'Antwort überprüfen'}</button>${state.electrodeCriteriaVisible[currentCase.id] ? `${renderElectrodeCriteria(free.criteria, valueFor(textId))}${renderElectrodeModelAnswer(`${exercise.id}-${currentCase.id}-text`, free.modelAnswer)}` : ''}</div></section>`; }).join('')}</div>`; }
  function renderElectrodeExercise() { const exercise = electrodePotentialData.practiceExercises.find(item => item.id === state.selectedElectrodeExerciseId); if (!exercise) return renderElectrodePracticeOverview(); const body = exercise.type === 'matchingExercise' ? renderElectrodeMatching(exercise) : exercise.type === 'halfCellChoiceExercise' ? renderElectrodeStructured(exercise) : exercise.type === 'calculationExercise' ? renderElectrodeCalculation(exercise) : exercise.type === 'redoxEquationScaffold' ? renderElectrodeScaffold(exercise) : exercise.type === 'mixedExercise' ? renderElectrodeMixed(exercise) : `<section class="task-box">Dieser Übungstyp wird noch nicht unterstützt: ${exercise.type}</section>`; return `${backButton('Zur Übungsübersicht', 'electrodePracticeOverview')}${pageHeader(exercise.title, exercise.description)}${body}`; }
  function renderElectrodePotentials() { if (state.electrodeView === 'intro') return renderElectrodeIntro(); if (state.electrodeView === 'standardHydrogenElectrode') return renderElectrodeShe(); if (state.electrodeView === 'electrodePotentialPracticeOverview' || state.electrodeView === 'electrodePracticeOverview') return renderElectrodePracticeOverview(); if (state.electrodeView === 'exercise') return renderElectrodeExercise(); return renderElectrodeOverview(); }
  function findElectrodeExercise(id) { return electrodePotentialData.practiceExercises.find(exercise => exercise.id === id); }
  function checkElectrodeExercise(exercise) { const results = {}; const numberOk = (id, value, tolerance = 0.01) => { const n = Number(String(valueFor(id)).replace(',', '.').replace(/[^\d.-]/g, '')); results[id] = !Number.isNaN(n) && Math.abs(n - value) <= tolerance; }; if (exercise.type === 'matchingExercise') exercise.tasks.forEach(task => task.pairs.forEach(pair => { const id = electrodeFieldId(exercise.id, task.id, pair.left); results[id] = valueFor(id) === pair.correctRight; })); if (exercise.type === 'halfCellChoiceExercise') exercise.tasks.forEach(task => task.fields.forEach(field => { const id = electrodeFieldId(exercise.id, task.id, field.id); results[id] = electrodeAccepted(valueFor(id), field.correctValues); })); if (exercise.type === 'calculationExercise') (exercise.tasks || [exercise]).forEach(task => task.fields.forEach(field => numberOk(electrodeFieldId(exercise.id, task.id, field.id), field.correctValue, task.tolerance || exercise.tolerance || 0.01))); if (exercise.type === 'redoxEquationScaffold') (exercise.tasks || [{ id: exercise.id, scaffold: exercise.scaffold }]).forEach(task => (task.scaffold?.equations || []).forEach((eq, eqi) => eq.parts.forEach((part, pi) => { if (part.type === 'particle') { const cid = electrodeFieldId(exercise.id, task.id, 'scaffold', eqi, pi, 'coefficient'); results[cid] = isAccepted(valueFor(cid), part.coefficient, 'number'); part.formula.forEach((item, fi) => { const base = electrodeFieldId(exercise.id, task.id, 'scaffold', eqi, pi, fi); results[`${base}__element`] = isAccepted(valueFor(`${base}__element`), item.element, 'element'); results[`${base}__index`] = isAccepted(valueFor(`${base}__index`), item.index, 'number'); results[`${base}__charge`] = isAccepted(valueFor(`${base}__charge`), item.charge, 'charge'); }); } if (part.type === 'electron') { const base = electrodeFieldId(exercise.id, task.id, 'scaffold', eqi, pi); results[`${base}__coefficient`] = isAccepted(valueFor(`${base}__coefficient`), part.coefficient, 'number'); results[`${base}__charge`] = isAccepted(valueFor(`${base}__charge`), part.charge, 'charge'); } }))); if (exercise.type === 'mixedExercise') (exercise.cases || [{ id: exercise.id, calculationPart: exercise.calculationPart }]).forEach(currentCase => currentCase.calculationPart.fields.forEach(field => numberOk(electrodeFieldId(exercise.id, currentCase.id, 'calc', field.id), field.correctValue, currentCase.calculationPart.tolerance || 0.01))); state.electrodeResults[exercise.id] = results; }
  function checkElectrodeCase(exercise, caseId) { const results = { ...(state.electrodeResults[exercise.id] || {}) }; const currentCase = (exercise.cases || []).find(item => item.id === caseId); if (!currentCase) return; currentCase.calculationPart.fields.forEach(field => { const id = electrodeFieldId(exercise.id, currentCase.id, 'calc', field.id); const n = Number(String(valueFor(id)).replace(',', '.').replace(/[^\d.-]/g, '')); results[id] = !Number.isNaN(n) && Math.abs(n - field.correctValue) <= (currentCase.calculationPart.tolerance || 0.01); }); state.electrodeResults[exercise.id] = results; }
  function renderMaterial(material) { if (material.type === 'table') return `<section class="klausur-material"><h3>${material.title}</h3><div class="klausur-table-wrap"><table><thead><tr>${material.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead><tbody>${material.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section>`; if (material.type === 'sequence') return `<section class="klausur-material"><h3>${material.title}</h3>${formula(material.content, true)}</section>`; return `<section class="klausur-material"><h3>${material.title}</h3><ul>${(material.content || []).map(item => `<li>${item}</li>`).join('')}</ul></section>`; }
  function renderOxReaction(subtask) { const renderSide = side => subtask.reaction[side].map((particle, pi) => `${pi ? '<span class="fixed-operator">+</span>' : ''}<span class="oxidation-particle">${particle.coefficient ? `<span class="chemical-coefficient">${particle.coefficient}</span>` : ''}${particle.formula.map((entry, ei) => { const id = fieldId(subtask.id, 'ox', side, pi, ei); return `<span class="oxidation-element"><input class="oxidation-input ${resultClass(subtask.id, id)}" value="${valueFor(id)}" data-input="${id}" /><span class="oxidation-symbol-row"><span class="chemical-symbol">${entry.element}</span>${entry.index ? `<sub>${entry.index}</sub>` : ''}</span></span>`; }).join('')}</span>`).join(''); return `<div class="chemical-equation">${renderSide('left')}<span class="fixed-operator">→</span>${renderSide('right')}</div>`; }
  function inputHtml(subtask, id, label, cls) { return `<input class="${cls} ${resultClass(subtask.id, id)}" value="${valueFor(id)}" data-input="${id}" aria-label="${label}" />`; }
  function renderScaffold(subtask) { const renderPart = (part, eqi, pi) => { if (part.type === 'plus') return '<span class="fixed-operator">+</span>'; if (part.type === 'arrow') return '<span class="fixed-operator">→</span>'; if (part.type === 'electron') { const cid = fieldId(subtask.id, 'scaffold', eqi, pi, 'electronCoefficient'); const chid = fieldId(subtask.id, 'scaffold', eqi, pi, 'electronCharge'); return `<span class="scaffold-electron">${inputHtml(subtask, cid, 'Elektronenanzahl', 'scaffold-input scaffold-input--coefficient')}<span class="chemical-symbol">${part.symbol || 'e'}</span>${part.charge ? inputHtml(subtask, chid, 'Elektronenladung', 'scaffold-input scaffold-input--charge') : ''}</span>`; } const cid = fieldId(subtask.id, 'scaffold', eqi, pi, 'coefficient'); return `<span class="scaffold-particle">${inputHtml(subtask, cid, 'Koeffizient', 'scaffold-input scaffold-input--coefficient')}<span class="scaffold-formula">${part.formula.map((entry, fi) => { const eid = fieldId(subtask.id, 'scaffold', eqi, pi, fi, 'element'); const iid = fieldId(subtask.id, 'scaffold', eqi, pi, fi, 'index'); const chid = fieldId(subtask.id, 'scaffold', eqi, pi, fi, 'charge'); return `<span class="scaffold-formula-entry">${inputHtml(subtask, eid, 'Elementsymbol', 'scaffold-input scaffold-input--element')}${inputHtml(subtask, iid, 'Index', 'scaffold-input scaffold-input--index')}${inputHtml(subtask, chid, 'Ladung', 'scaffold-input scaffold-input--charge')}</span>`; }).join('')}</span></span>`; }; return `<div class="scaffold-equations">${subtask.scaffold.instruction ? `<p class="klausur-instruction">${subtask.scaffold.instruction}</p>` : ''}${subtask.scaffold.equations.map((eq, eqi) => `<section class="scaffold-equation"><h4>${eq.label}</h4><div class="chemical-equation">${eq.parts.map((part, pi) => renderPart(part, eqi, pi)).join('')}</div></section>`).join('')}</div>`; }
  function renderDirect(subtask) { if (subtask.type === 'oxidationNumberReaction') return renderOxReaction(subtask); if (subtask.type === 'redoxEquationScaffold') return renderScaffold(subtask); if (subtask.type === 'choiceGroup') return `<div class="direct-fields">${Object.entries(subtask.choices).map(([group, choices]) => { const id = fieldId(subtask.id, group); return `<fieldset class="klausur-choice-group ${resultClass(subtask.id, id)}"><legend>${group}</legend>${choices.map(choice => `<label class="klausur-option"><input type="radio" name="${id}" value="${choice}" data-input="${id}" ${valueFor(id) === choice ? 'checked' : ''} /><span>${choice}</span></label>`).join('')}</fieldset>`; }).join('')}</div>`; if (subtask.type === 'multiSelect') return `<fieldset class="klausur-choice-group"><legend>Antwort auswählen</legend>${subtask.options.map(option => { const id = fieldId(subtask.id, option); return `<label class="klausur-option ${resultClass(subtask.id, id)}"><input type="checkbox" data-input="${id}" ${state.inputs[id] ? 'checked' : ''} /><span>${option}</span></label>`; }).join('')}</fieldset>`; return `<div class="direct-fields">${(subtask.fields || []).map(field => { const id = fieldId(subtask.id, field.id); return `<label class="klausur-field"><span>${field.label}</span><input class="${resultClass(subtask.id, id)}" value="${valueFor(id)}" data-input="${id}" /></label>`; }).join('')}</div>`; }
  function criterionMatches(criterion, answer) { if (criterion.matchMode === 'all') return (criterion.keywords || []).every(k => containsTerm(answer, k)); if (criterion.matchMode === 'allGroups') return (criterion.keywordGroups || []).every(g => g.some(k => containsTerm(answer, k))); if (criterion.matchMode === 'atLeastGroups') return (criterion.keywordGroups || []).filter(g => g.some(k => containsTerm(answer, k))).length >= (criterion.requiredGroups || 1); return (criterion.keywords || []).some(k => containsTerm(answer, k)); }
  function renderCriteria(subtask) { if (!state.criteriaVisible[subtask.id]) return ''; const results = state.criteriaResults[subtask.id] || []; return `<section class="criteria-check"><h4>Deine Antwort enthält:</h4><ul>${subtask.criteria.map((criterion, i) => `<li class="${results[i] ? 'is-correct' : 'is-wrong'}"><span>${results[i] ? '✓' : '×'}</span>${criterion.label}</li>`).join('')}</ul></section>`; }
  function renderSubtask(subtask) { const tid = fieldId(subtask.id, 'text'); const directTypes = ['oxidationNumberReaction', 'redoxEquationScaffold', 'choiceGroup', 'multiSelect', 'calculation', 'structuredFields']; const isDirect = subtask.checking?.type === 'direct' || directTypes.includes(subtask.type); const isCriteria = subtask.type === 'freeText' && subtask.checking?.type === 'criteria'; return `<section class="klausur-subtask"><h3>${subtask.label} ${subtask.prompt}</h3>${subtask.instruction ? `<p class="klausur-instruction">${subtask.instruction}</p>` : ''}${(subtask.materials || []).map(renderMaterial).join('')}${isDirect ? renderDirect(subtask) : ''}${isCriteria ? `<textarea class="klausur-textarea" data-input="${tid}">${valueFor(tid)}</textarea>${renderCriteria(subtask)}` : ''}<div class="button-row klausur-button-row">${isDirect ? `<button type="button" class="primary-button" data-check-direct="${subtask.id}">Antwort prüfen</button>` : ''}${isCriteria ? `<button type="button" class="primary-button" data-check-criteria="${subtask.id}">${state.criteriaVisible[subtask.id] ? 'Antwort erneut überprüfen' : 'Antwort überprüfen'}</button>` : ''}<button type="button" class="secondary-button" data-solution="${subtask.id}">Musterlösung ${state.solutions[subtask.id] ? 'ausblenden' : 'anzeigen'}</button></div>${state.solutions[subtask.id] ? `<section class="solution-card solution-card--compact"><h4>Musterlösung</h4><p>${subtask.modelAnswer}</p></section>` : ''}</section>`; }
  function renderOperatorChips(task) { return (task.overview?.operators || []).map(operator => `<span class="afb-chip afb-chip--${operator.afb}">${operator.name} – AFB ${operator.afb}</span>`).join(''); }
  function renderKlausurOverview() { return `${backButton('Zur Hauptübersicht', 'home')}${pageHeader(klausurTaskMeta.title, klausurTaskMeta.subtitle)}<div class="klausur-overview-grid">${klausurTasks.map((task, i) => `<button type="button" class="klausur-overview-card" data-open-klausur-task="${task.id}"><span class="klausur-card__number">Aufgabe ${i + 1}</span><span class="klausur-card__title">${task.title}</span><span class="klausur-card__description">${task.overview?.cardDescription || task.description}</span><span class="klausur-card__operators">${renderOperatorChips(task)}</span><span class="klausur-card__action">Aufgabe öffnen</span></button>`).join('')}</div>`; }
  function renderKlausurTask(task) { const index = klausurTasks.findIndex(item => item.id === task.id); return `<div class="self-check-actions no-print">${backButton(klausurTaskMeta.overviewButtonLabel, 'klausurTasks')}<button type="button" class="primary-button" data-print>${klausurTaskMeta.printButtonLabel}</button></div>${pageHeader(task.title, task.description)}<div class="klausur-page"><article class="klausur-task" id="${task.id}"><p class="eyebrow">Aufgabe ${index + 1}</p><h2>${task.title}</h2><p class="klausur-context">${task.context}</p>${task.image ? `<img class="klausur-image" src="${task.image}" alt="" loading="lazy" />` : ''}${(task.materials || []).map(renderMaterial).join('')}${task.subtasks.map(renderSubtask).join('')}</article></div>`; }
  function renderKlausurTasks() { const selectedTask = klausurTasks.find(task => task.id === state.selectedTaskId); return selectedTask ? renderKlausurTask(selectedTask) : renderKlausurOverview(); }
  function findSubtask(id) { return klausurTasks.flatMap(t => t.subtasks).find(s => s.id === id); }
  function checkDirect(subtask) { const results = {}; if (subtask.type === 'oxidationNumberReaction') ['left', 'right'].forEach(side => subtask.reaction[side].forEach((p, pi) => p.formula.forEach((e, ei) => { const id = fieldId(subtask.id, 'ox', side, pi, ei); results[id] = isAccepted(valueFor(id), e.oxidationNumber, 'oxidationNumber'); }))); if (subtask.type === 'redoxEquationScaffold') subtask.scaffold.equations.forEach((eq, eqi) => eq.parts.forEach((part, pi) => { if (part.type === 'particle') { const cid = fieldId(subtask.id, 'scaffold', eqi, pi, 'coefficient'); results[cid] = isAccepted(valueFor(cid), part.coefficient, 'number'); part.formula.forEach((e, fi) => { const eid = fieldId(subtask.id, 'scaffold', eqi, pi, fi, 'element'); const iid = fieldId(subtask.id, 'scaffold', eqi, pi, fi, 'index'); const chid = fieldId(subtask.id, 'scaffold', eqi, pi, fi, 'charge'); results[eid] = isAccepted(valueFor(eid), e.element, 'element'); results[iid] = isAccepted(valueFor(iid), e.index, 'number'); results[chid] = isAccepted(valueFor(chid), e.charge, 'charge'); }); } if (part.type === 'electron') { const cid = fieldId(subtask.id, 'scaffold', eqi, pi, 'electronCoefficient'); results[cid] = isAccepted(valueFor(cid), part.coefficient, 'number'); if (part.charge) { const chid = fieldId(subtask.id, 'scaffold', eqi, pi, 'electronCharge'); results[chid] = isAccepted(valueFor(chid), part.charge, 'charge'); } } })); if (subtask.type === 'choiceGroup') Object.keys(subtask.choices).forEach(g => { const id = fieldId(subtask.id, g); results[id] = valueFor(id) === subtask.correctValues[g]; }); if (subtask.type === 'multiSelect') { const correct = new Set(subtask.correctAnswers); subtask.options.forEach(o => { const id = fieldId(subtask.id, o); results[id] = Boolean(state.inputs[id]) === correct.has(o); }); } if (subtask.type === 'calculation') subtask.fields.forEach(f => { const id = fieldId(subtask.id, f.id); const v = Number(String(valueFor(id)).replace(',', '.')); results[id] = Math.abs(v - f.correctValue) <= (subtask.tolerance || 0); }); if (subtask.type === 'structuredFields') subtask.fields.forEach(f => { const id = fieldId(subtask.id, f.id); results[id] = f.correctValues.some(c => normalizePlain(valueFor(id)).replace(/\s/g, '') === normalizePlain(c).replace(/\s/g, '')); }); state.directResults[subtask.id] = results; }
  function checkCriteria(subtask) { const answer = valueFor(fieldId(subtask.id, 'text')); state.criteriaVisible[subtask.id] = true; state.criteriaResults[subtask.id] = subtask.criteria.map(c => criterionMatches(c, answer)); }
  function checkRedoxExercise(exerciseId) {
    const exercises = Object.values(state.redoxData || {}).flat();
    const exercise = exercises.find(item => item.id === exerciseId);
    if (!exercise) return;
    if (exercise.type === 'zuordnung') {
      (exercise.pairs || []).forEach((pair, pairIndex) => {
        const pairId = fieldId('redox', exercise.id, pairIndex);
        state.redoxResults[pairId] = valueFor(pairId) === pair.correctType;
      });
      return;
    }
    state.redoxResults[exercise.id] = redoxAnswerMatches(exercise, valueFor(fieldId('redox', exercise.id)));
  }
  function bindEvents() { document.querySelectorAll('[data-nav]').forEach(b => b.addEventListener('click', () => { if (b.dataset.nav === 'electrodePracticeOverview') { state.view = 'electrodePotentials'; state.electrodeView = 'electrodePotentialPracticeOverview'; render(); } else navigate(b.dataset.nav); })); document.querySelectorAll('[data-open-electrode-view]').forEach(b => b.addEventListener('click', () => { state.electrodeView = b.dataset.openElectrodeView; state.selectedElectrodeExerciseId = null; render(); })); document.querySelectorAll('[data-open-electrode-exercise]').forEach(b => b.addEventListener('click', () => { state.electrodeView = 'exercise'; state.selectedElectrodeExerciseId = b.dataset.openElectrodeExercise; render(); })); document.querySelectorAll('[data-electrode-half]').forEach(select => select.addEventListener('change', () => { if (select.dataset.electrodeHalf === 'a') state.electrodeHalfCellA = select.value; else state.electrodeHalfCellB = select.value; render(); })); document.querySelectorAll('[data-electrode-she]').forEach(select => select.addEventListener('change', () => { state.electrodeSheCellId = select.value; render(); })); document.querySelectorAll('[data-electrode-input]').forEach(input => input.addEventListener('input', () => { state.inputs[input.dataset.input] = input.value; if (Object.values(state.electrodeCriteriaVisible).some(Boolean)) render(); })); document.querySelectorAll('[data-check-electrode]').forEach(b => b.addEventListener('click', () => { const exercise = findElectrodeExercise(b.dataset.checkElectrode); if (exercise) { checkElectrodeExercise(exercise); render(); } })); document.querySelectorAll('[data-check-electrode-case]').forEach(b => b.addEventListener('click', () => { const exercise = findElectrodeExercise('practice-spontaneity'); if (exercise) { checkElectrodeCase(exercise, b.dataset.checkElectrodeCase); render(); } })); document.querySelectorAll('[data-check-electrode-criteria]').forEach(b => b.addEventListener('click', () => { state.electrodeCriteriaVisible[b.dataset.checkElectrodeCriteria] = true; render(); })); document.querySelectorAll('[data-open-klausur-task]').forEach(b => b.addEventListener('click', () => { state.selectedTaskId = b.dataset.openKlausurTask; render(); })); document.querySelectorAll('[data-module]').forEach(b => b.addEventListener('click', () => { const module = modules.find(m => m.id === b.dataset.module); if (module.href) window.location.href = module.href; else if (module.status === 'active') navigate(module.target); else { state.notice = 'Dieses Modul wird später ergänzt.'; render(); } })); document.querySelectorAll('[data-self-check]').forEach(cb => cb.addEventListener('change', () => { let checked = {}; try { checked = JSON.parse(localStorage.getItem(selfCheckStorageKey) || '{}'); } catch {} checked[cb.dataset.selfCheck] = cb.checked; localStorage.setItem(selfCheckStorageKey, JSON.stringify(checked)); })); document.querySelectorAll('[data-print]').forEach(b => b.addEventListener('click', () => window.print())); document.querySelectorAll('[data-input]').forEach(input => input.addEventListener('input', () => { state.inputs[input.dataset.input] = input.type === 'checkbox' ? input.checked : input.value; const subtask = findSubtask(input.dataset.input.split('__')[0]); if (subtask && state.criteriaVisible[subtask.id]) { checkCriteria(subtask); render(); } })); document.querySelectorAll('[data-check-redox]').forEach(b => b.addEventListener('click', () => { checkRedoxExercise(b.dataset.checkRedox); render(); })); document.querySelectorAll('[data-check-direct]').forEach(b => b.addEventListener('click', () => { const subtask = findSubtask(b.dataset.checkDirect); if (subtask) { checkDirect(subtask); render(); } })); document.querySelectorAll('[data-check-criteria]').forEach(b => b.addEventListener('click', () => { const subtask = findSubtask(b.dataset.checkCriteria); if (subtask) { checkCriteria(subtask); render(); } })); document.querySelectorAll('[data-solution]').forEach(b => b.addEventListener('click', () => { state.solutions[b.dataset.solution] = !state.solutions[b.dataset.solution]; render(); })); }
  function render() { const root = document.getElementById('root'); root.className = 'app-shell'; const page = state.view === 'selfCheck' ? renderSelfCheck() : state.view === 'klausurTasks' ? renderKlausurTasks() : state.view === 'electrodePotentials' ? renderElectrodePotentials() : state.view === 'redoxOverview' ? renderOverview() : state.view === 'redoxExplanation' ? renderRedoxExplanation() : ['redoxPractice', 'redoxMediumPractice', 'redoxHardPractice'].includes(state.view) ? renderRedoxPractice(state.view) : renderHome(); root.innerHTML = `<main class="page-wrap">${page}</main>`; bindEvents(); }
  render();

})();
