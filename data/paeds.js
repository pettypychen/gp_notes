// Paediatric Medication Dosing Data
// Ages stored in months. matchBy: "age" or "weight".
// Row ageMin/ageMax in months (inclusive/exclusive). wtMin/wtMax in kg.
window.PAEDS_MEDS = [

  // ═══════════════════════════════════════════════════
  // ANALGESIA AND ANTI-PYRETIC
  // ═══════════════════════════════════════════════════
  {
    name: "Paracetamol Syrup",
    category: "Analgesia and Anti-pyretic",
    formula: "10-15 mg/kg/dose, 40-60 mg/kg/day",
    matchBy: "age",
    columns: ["250mg/5ml (qds)"],
    rows: [
      { label: "3-6 months",  ageMin: 3,   ageMax: 6,   doses: ["1.5 ml"] },
      { label: "6-12 months", ageMin: 6,   ageMax: 12,  doses: ["2 ml"] },
      { label: "2 y/o",       ageMin: 24,  ageMax: 36,  doses: ["2.5-3 ml"] },
      { label: "3 y/o",       ageMin: 36,  ageMax: 48,  doses: ["3-3.5 ml"] },
      { label: "4 y/o",       ageMin: 48,  ageMax: 60,  doses: ["3.5-4 ml"] },
      { label: "5 y/o",       ageMin: 60,  ageMax: 72,  doses: ["4-4.5 ml"] },
      { label: "6 y/o",       ageMin: 72,  ageMax: 84,  doses: ["4.5-5 ml"] },
      { label: "7 y/o",       ageMin: 84,  ageMax: 96,  doses: ["5-6 ml"] },
      { label: "8 y/o",       ageMin: 96,  ageMax: 108, doses: ["6-7 ml"] },
      { label: "9 y/o",       ageMin: 108, ageMax: 120, doses: ["7-8 ml"] },
      { label: "10 y/o",      ageMin: 120, ageMax: 132, doses: ["8-9 ml"] },
      { label: "11 y/o",      ageMin: 132, ageMax: 144, doses: ["9-10 ml"] },
      { label: "12 y/o",      ageMin: 144, ageMax: 156, doses: ["10-11 ml"] }
    ]
  },
  {
    name: "Ibuprofen (Brufen/Bifen Syrup)",
    category: "Analgesia and Anti-pyretic",
    formula: "5-10 mg/kg/dose, 20-40 mg/kg/day",
    matchBy: "age",
    columns: ["100mg/5ml (tds)", "100mg/5ml (qds)"],
    rows: [
      { label: "6-12 months", ageMin: 6,   ageMax: 12,  doses: ["2.5 ml", "2.5 ml"] },
      { label: "1-3 y/o",     ageMin: 12,  ageMax: 48,  doses: ["5 ml", "3.75 ml"] },
      { label: "4-6 y/o",     ageMin: 48,  ageMax: 84,  doses: ["7.5 ml", "5.5 ml"] },
      { label: "7-9 y/o",     ageMin: 84,  ageMax: 120, doses: ["10 ml", "7.5 ml"] },
      { label: "10-12 y/o",   ageMin: 120, ageMax: 156, doses: ["15 ml", "11 ml"] }
    ]
  },
  {
    name: "Voren Suppository (Diclofenac 12.5mg)",
    category: "Analgesia and Anti-pyretic",
    formula: "0.5-2.0 mg/kg daily in 2-3 divided doses",
    matchBy: "weight",
    columns: ["12.5mg suppository"],
    rows: []
  },

  // ═══════════════════════════════════════════════════
  // ANTI-EMETIC, ANTI-VERTIGO, ANTACIDS, GIT
  // ═══════════════════════════════════════════════════
  {
    name: "Dimenhydrinate (Dimenate)",
    category: "Anti-emetic / Anti-vertigo / GIT",
    formula: "",
    matchBy: "age",
    columns: ["15mg/5ml"],
    rows: [
      { label: "1-6 y/o",   ageMin: 12,  ageMax: 84,  doses: ["4-8 ml bd/tds"] },
      { label: "7-12 y/o",  ageMin: 84,  ageMax: 156, doses: ["8-15 ml bd/tds"] }
    ]
  },
  {
    name: "Promethazine HCL Syrup",
    category: "Anti-emetic / Anti-vertigo / GIT",
    formula: "",
    notes: "Use with caution for >2 y/o. Not recommended for under 2.",
    matchBy: "age",
    columns: ["5mg/5ml"],
    rows: [
      { label: "2-5 y/o*",       ageMin: 24,  ageMax: 60,  doses: ["5 ml bd/tds"] },
      { label: "5-10 y/o",       ageMin: 60,  ageMax: 120, doses: ["10 ml bd"] },
      { label: ">10 y/o & adult", ageMin: 120, ageMax: 216, doses: ["10 ml tds/qds"] }
    ]
  },
  {
    name: "Domperidone Suspension (Motilium)",
    category: "Anti-emetic / Anti-vertigo / GIT",
    formula: "0.25-0.5 ml/kg/dose (max 80 ml/day)",
    matchBy: "weight",
    columns: ["1mg/1ml (tds/qds)"],
    rows: []
  },
  {
    name: "Domperidone Suppository",
    category: "Anti-emetic / Anti-vertigo / GIT",
    formula: "",
    matchBy: "age",
    columns: ["10mg suppository"],
    rows: [
      { label: "2-3 y/o", ageMin: 24, ageMax: 48, doses: ["Up to 1 supp bd"] },
      { label: ">3 y/o",  ageMin: 48, ageMax: 216, doses: ["Up to 3 supp bd"] }
    ]
  },
  {
    name: "Gaviscon Oral Suspension",
    category: "Anti-emetic / Anti-vertigo / GIT",
    formula: "",
    matchBy: "age",
    columns: ["Dose"],
    rows: [
      { label: "6-12 y/o",        ageMin: 72,  ageMax: 156, doses: ["5-10 ml after meals"] },
      { label: ">12 y/o & adults", ageMin: 156, ageMax: 216, doses: ["10-20 ml after meals"] }
    ]
  },

  // ═══════════════════════════════════════════════════
  // ANTI-DIARRHOEALS AND ANTI-SPASMODICS
  // ═══════════════════════════════════════════════════
  {
    name: "Colimix Syrup",
    category: "Anti-diarrhoeals and Anti-spasmodics",
    formula: "",
    matchBy: "age",
    columns: ["Dose"],
    rows: [
      { label: ">6 months", ageMin: 6,  ageMax: 48,  doses: ["5 ml tds/qds (before feeds)"] },
      { label: "4-12 y/o",  ageMin: 48, ageMax: 156, doses: ["5-10 ml tds/qds"] }
    ]
  },
  {
    name: "Hyoscine Butylbromide (Buscopan Syrup)",
    category: "Anti-diarrhoeals and Anti-spasmodics",
    formula: "",
    matchBy: "age",
    columns: ["5mg/5ml"],
    rows: [
      { label: "6-12 y/o", ageMin: 72,  ageMax: 156, doses: ["10 ml tds"] },
      { label: "Adult",     ageMin: 156, ageMax: 216, doses: ["10 ml tds"] }
    ]
  },
  {
    name: "Lactobacillus acidophilus (Lacteol Fort/Lactoguard)",
    category: "Anti-diarrhoeals and Anti-spasmodics",
    formula: "",
    matchBy: "age",
    columns: ["Sachet 10B (Initial)", "Sachet 10B (Subsequent)", "Capsule 5B"],
    rows: [
      { label: "Infant",   ageMin: 0,  ageMax: 12,  doses: ["\u00bd-1", "\u00bd-1", "-"] },
      { label: "Children", ageMin: 12, ageMax: 156, doses: ["1-2", "1", "2"] }
    ]
  },
  {
    name: "Oral Rehydration Salt (Repalyte)",
    category: "Anti-diarrhoeals and Anti-spasmodics",
    formula: "",
    matchBy: "age",
    columns: ["Max daily sachets"],
    rows: [
      { label: "<2 y/o",  ageMin: 0,   ageMax: 24,  doses: ["3 sachets"] },
      { label: "2-5 y/o", ageMin: 24,  ageMax: 72,  doses: ["6 sachets"] },
      { label: "Adult",   ageMin: 72,  ageMax: 216, doses: ["12 sachets"] }
    ]
  },
  {
    name: "Dioctahedral Smectite (Smecta)",
    category: "Anti-diarrhoeals and Anti-spasmodics",
    formula: "",
    matchBy: "age",
    columns: ["3g sachet"],
    rows: [
      { label: "<1 y/o",  ageMin: 0,   ageMax: 12,  doses: ["\u00bd bd"] },
      { label: "1-2 y/o", ageMin: 12,  ageMax: 24,  doses: ["\u00bd-1 bd"] },
      { label: ">2 y/o",  ageMin: 24,  ageMax: 156, doses: ["1 bd/tds"] },
      { label: "Adult",   ageMin: 156, ageMax: 216, doses: ["1 tds"] }
    ]
  },
  {
    name: "Loperamide Suspension (Diatrol)",
    category: "Anti-diarrhoeals and Anti-spasmodics",
    formula: "",
    matchBy: "age",
    columns: ["1mg/5ml", "Max duration"],
    rows: [
      { label: "4-8 y/o",  ageMin: 48,  ageMax: 108, doses: ["5 ml tds/qds", "3 days"] },
      { label: "9-12 y/o", ageMin: 108, ageMax: 156, doses: ["10 ml tds/qds", "5 days"] }
    ]
  },
  {
    name: "Light Kaolin (Kaomix)",
    category: "Anti-diarrhoeals and Anti-spasmodics",
    formula: "",
    matchBy: "age",
    columns: ["Dose"],
    rows: [
      { label: "3-6 y/o",  ageMin: 36, ageMax: 72,  doses: ["5-10 ml bd, after each BM"] },
      { label: "6-12 y/o", ageMin: 72, ageMax: 156, doses: ["10-20 ml tds, after each BM"] }
    ]
  },

  // ═══════════════════════════════════════════════════
  // CONSTIPATION AND HAEMORRHOIDS
  // ═══════════════════════════════════════════════════
  {
    name: "Ispaghula Husk (Fybogel/Mucilin)",
    category: "Constipation",
    formula: "",
    matchBy: "age",
    columns: ["Sachet"],
    rows: [
      { label: "6-12 y/o",         ageMin: 72,  ageMax: 156, doses: ["\u00bd sachet bd"] },
      { label: ">12 y/o & adult",  ageMin: 156, ageMax: 216, doses: ["1 sachet bd"] }
    ]
  },
  {
    name: "Lactulose (Dhactulose)",
    category: "Constipation",
    formula: "",
    matchBy: "age",
    columns: ["3.35g/5ml"],
    rows: [
      { label: "Infant & <1 y/o", ageMin: 0,  ageMax: 12,  doses: ["2.5 ml bd"] },
      { label: "1-5 y/o",         ageMin: 12, ageMax: 72,  doses: ["5 ml bd"] },
      { label: "6-12 y/o",        ageMin: 72, ageMax: 156, doses: ["10 ml bd"] }
    ]
  },
  {
    name: "Bisacodyl Suppository (Dulcolax)",
    category: "Constipation",
    formula: "",
    matchBy: "age",
    columns: ["5mg suppository", "10mg suppository"],
    rows: [
      { label: "4-10 y/o", ageMin: 48, ageMax: 120, doses: ["1 supp/day", "\u00bd supp/day"] }
    ]
  },

  // ═══════════════════════════════════════════════════
  // NASAL SPRAYS OR DROPS
  // ═══════════════════════════════════════════════════
  {
    name: "Oxymetazoline (Iliadin/Nazolin)",
    category: "Nasal Sprays / Drops",
    formula: "",
    matchBy: "age",
    columns: ["0.01% drops", "0.025% drops", "0.05% drops/spray"],
    rows: [
      { label: "Up to 4 weeks",    ageMin: 0,  ageMax: 1,   doses: ["1 drop each nostril bd/tds", "-", "-"] },
      { label: "5 weeks - 1 year", ageMin: 1,  ageMax: 12,  doses: ["1-2 drops each nostril bd/tds", "-", "-"] },
      { label: "1-6 y/o",          ageMin: 12, ageMax: 72,  doses: ["-", "1-2 drops each nostril bd/tds", "-"] },
      { label: ">6 y/o & adult",   ageMin: 72, ageMax: 216, doses: ["-", "-", "1-2 sprays each nostril bd/tds"] }
    ]
  },
  {
    name: "Nasal Steroid Sprays (comparison)",
    category: "Nasal Sprays / Drops",
    formula: "",
    matchBy: "age",
    columns: ["Nasonex (Mometasone)", "Nasocort (Triamcinolone)", "Flixonase (Fluticasone P.)", "Avamys (Fluticasone F.)"],
    rows: [
      { label: "2-11 y/o",        ageMin: 24,  ageMax: 144, doses: ["1 spray each nostril OD (>2y)", "1 spray each nostril OD (>4y)", "1 spray each nostril OD (>4y)", "1 spray each nostril OD (>6y)"] },
      { label: ">12 y/o & adult", ageMin: 144, ageMax: 216, doses: ["2 sprays OD, max 2 BD", "2 sprays OD, maint 1 OD", "2 sprays OD, max 2 BD", "2 sprays OD, maint 1 OD"] }
    ]
  },

  // ═══════════════════════════════════════════════════
  // ANTI-HISTAMINES
  // ═══════════════════════════════════════════════════
  {
    name: "Dexchlorpheniramine (Polaramine Syrup)",
    category: "Anti-histamines",
    formula: "",
    notes: "2-6 y/o: use with caution",
    matchBy: "age",
    columns: ["2mg/5ml"],
    rows: [
      { label: "2-6 y/o*",  ageMin: 24,  ageMax: 72,  doses: ["1.25-2.5 ml tds"] },
      { label: "6-12 y/o",  ageMin: 72,  ageMax: 156, doses: ["2.5-5 ml qds"] },
      { label: ">12 y/o",   ageMin: 156, ageMax: 216, doses: ["5-10 ml qds"] }
    ]
  },
  {
    name: "Chlorphenamine (Piriton/Chlormine Syrup)",
    category: "Anti-histamines",
    formula: "",
    notes: "1-2 y/o: use only when benefits outweigh risks",
    matchBy: "age",
    columns: ["4mg/5ml"],
    rows: [
      { label: "1-2 y/o*", ageMin: 12, ageMax: 24,  doses: ["1.25 ml bd"] },
      { label: "2-5 y/o",  ageMin: 24, ageMax: 72,  doses: ["1.25 ml tds/qds"] },
      { label: "6-12 y/o", ageMin: 72, ageMax: 156, doses: ["2.5 ml tds/qds"] }
    ]
  },
  {
    name: "Fexofenadine (Telfast Oral Suspension)",
    category: "Anti-histamines",
    formula: "",
    notes: "6mo-2y: urticaria only. 2-11y: urticaria + allergic rhinitis.",
    matchBy: "age",
    columns: ["6mg/ml"],
    rows: [
      { label: "6 months - 2 y/o*", ageMin: 6,  ageMax: 24,  doses: ["2.5 ml bd"] },
      { label: "2-11 y/o",          ageMin: 24, ageMax: 144, doses: ["5 ml bd"] },
      { label: "6-12 y/o",          ageMin: 72, ageMax: 156, doses: ["2.5-5 ml tds/qds"] }
    ]
  },
  {
    name: "Cetirizine (Zyrtec/Adezio)",
    category: "Anti-histamines",
    formula: "",
    matchBy: "age",
    columns: ["1mg/1ml"],
    rows: [
      { label: "2-6 y/o", ageMin: 24, ageMax: 72,  doses: ["2.5 ml OD/BD"] },
      { label: ">6 y/o",  ageMin: 72, ageMax: 216, doses: ["5-10 ml OD"] }
    ]
  },
  {
    name: "Loratadine (Clarinase Syrup)",
    category: "Anti-histamines",
    formula: "Per 5ml: loratadine 5mg, pseudoephedrine sulfate 60mg",
    matchBy: "weight",
    columns: ["Dose"],
    rows: [
      { label: ">6 y/o, <30 kg", ageMin: 72, ageMax: 216, wtMin: 0,  wtMax: 30, doses: ["2.5 ml bd"] },
      { label: ">6 y/o, >30 kg", ageMin: 72, ageMax: 216, wtMin: 30, wtMax: 999, doses: ["5 ml bd"] }
    ]
  },
  {
    name: "Fedac Syrup",
    category: "Anti-histamines",
    formula: "Per 5ml: pseudoephedrine 30mg, triprolidine 1.25mg",
    notes: "2-5 y/o: use with caution",
    matchBy: "age",
    columns: ["Dose"],
    rows: [
      { label: "2-5 y/o*",  ageMin: 24,  ageMax: 72,  doses: ["2.5 ml tds"] },
      { label: "6-12 y/o",  ageMin: 72,  ageMax: 156, doses: ["5 ml tds"] },
      { label: ">12 y/o",   ageMin: 156, ageMax: 216, doses: ["10 ml tds"] }
    ]
  },

  // ═══════════════════════════════════════════════════
  // COUGH AND AIRWAY
  // ═══════════════════════════════════════════════════
  {
    name: "Diphenhydramine (Phenexpect)",
    category: "Cough and Airway",
    formula: "Each ml: diphenhydramine 12.5mg, ammonium chloride 135mg",
    notes: "2-6 y/o: use with caution",
    matchBy: "age",
    columns: ["Dose"],
    rows: [
      { label: "2-6 y/o*",  ageMin: 24,  ageMax: 72,  doses: ["2.5 ml tds"] },
      { label: "6-12 y/o",  ageMin: 72,  ageMax: 156, doses: ["5 ml tds"] },
      { label: ">12 y/o",   ageMin: 156, ageMax: 216, doses: ["5-10 ml tds/qds"] }
    ]
  },
  {
    name: "Abrilar/Prospan (Ivy Leaf Extract)",
    category: "Cough and Airway",
    formula: "",
    matchBy: "age",
    columns: ["Dose"],
    rows: [
      { label: "1-5 y/o",   ageMin: 12,  ageMax: 72,  doses: ["2.5 ml tds"] },
      { label: "6-12 y/o",  ageMin: 72,  ageMax: 156, doses: ["5 ml tds"] },
      { label: ">13 y/o",   ageMin: 156, ageMax: 216, doses: ["5-7.5 ml tds"] }
    ]
  },
  {
    name: "Dhasedyl",
    category: "Cough and Airway",
    formula: "Per 5ml: codeine 9mg, promethazine 3.6mg, ephedrine 6mg",
    notes: "2-5 y/o: use with caution",
    matchBy: "age",
    columns: ["Dose"],
    rows: [
      { label: "2-5 y/o*",  ageMin: 24,  ageMax: 72,  doses: ["1.6 ml tds"] },
      { label: "6-12 y/o",  ageMin: 72,  ageMax: 156, doses: ["2.5-5 ml tds"] },
      { label: ">12 y/o",   ageMin: 156, ageMax: 216, doses: ["5-10 ml tds/qds"] }
    ]
  },
  {
    name: "Dextromethorphan (Beathorphan/Tussidex)",
    category: "Cough and Airway",
    formula: "",
    notes: "2-6 y/o: use with caution",
    matchBy: "age",
    columns: ["15mg/5ml"],
    rows: [
      { label: "2-6 y/o*",  ageMin: 24,  ageMax: 72,  doses: ["2.5 ml tds"] },
      { label: "6-12 y/o",  ageMin: 72,  ageMax: 156, doses: ["5 ml tds"] },
      { label: ">12 y/o",   ageMin: 156, ageMax: 216, doses: ["5-10 ml tds"] }
    ]
  },
  {
    name: "Fedac-Compound",
    category: "Cough and Airway",
    formula: "Per 5ml: codeine 10mg, pseudoephedrine 30mg, triprolidine 1.25mg",
    notes: "2-5 y/o: use with caution",
    matchBy: "age",
    columns: ["Dose"],
    rows: [
      { label: "2-5 y/o*",  ageMin: 24,  ageMax: 72,  doses: ["1.5 ml tds"] },
      { label: "6-12 y/o",  ageMin: 72,  ageMax: 156, doses: ["5 ml tds"] },
      { label: ">12 y/o",   ageMin: 156, ageMax: 216, doses: ["10 ml tds"] }
    ]
  },
  {
    name: "Rhinathiol Promethazine",
    category: "Cough and Airway",
    formula: "Per 5ml: carbocisteine 100mg, promethazine 2.5mg",
    notes: "2-5 y/o: use with caution",
    matchBy: "age",
    columns: ["Dose"],
    rows: [
      { label: "2-5 y/o*",   ageMin: 24,  ageMax: 72,  doses: ["2.5-5 ml qds"] },
      { label: "6-12 y/o",   ageMin: 72,  ageMax: 156, doses: ["7.5-12.5 ml tds"] },
      { label: "12-15 y/o",  ageMin: 144, ageMax: 180, doses: ["12.5-15 ml tds"] }
    ]
  },
  {
    name: "Ketotifen (Dhatifen)",
    category: "Cough and Airway",
    formula: "",
    matchBy: "age",
    columns: ["1mg/5ml"],
    rows: [
      { label: "6 months - 3 y/o", ageMin: 6,  ageMax: 36,  doses: ["2.5 ml bd"] },
      { label: ">3 y/o",           ageMin: 36, ageMax: 216, doses: ["5 ml bd"] }
    ]
  },
  {
    name: "Salbutamol Syrup (Zenmolin/Ventolin)",
    category: "Cough and Airway",
    formula: "1 month-2 y/o: 0.1 mg/kg (max 2mg) tds/qds",
    matchBy: "age",
    columns: ["2mg/5ml"],
    rows: [
      { label: "1 month - 2 y/o", ageMin: 1,   ageMax: 24,  doses: ["0.1 mg/kg (max 2 mg) tds/qds"] },
      { label: "2-6 y/o",         ageMin: 24,  ageMax: 72,  doses: ["2.5-5 ml tds/qds"] },
      { label: "6-12 y/o",        ageMin: 72,  ageMax: 156, doses: ["5 ml tds/qds"] },
      { label: ">12 y/o",         ageMin: 156, ageMax: 216, doses: ["5-10 ml tds/qds"] }
    ]
  },
  {
    name: "Bambuterol Syrup (Bambec)",
    category: "Cough and Airway",
    formula: "",
    matchBy: "age",
    columns: ["1mg/1ml"],
    rows: [
      { label: "2-5 y/o",  ageMin: 24, ageMax: 72,  doses: ["5 ml OD"] },
      { label: "6-12 y/o", ageMin: 72, ageMax: 156, doses: ["10 ml OD, max 20 ml bd"] }
    ]
  },
  {
    name: "Prednisolone Syrup (Dhasolone)",
    category: "Cough and Airway",
    formula: "",
    matchBy: "age",
    columns: ["3mg/5ml"],
    rows: [
      { label: "2-5 y/o",  ageMin: 24, ageMax: 72,  doses: ["5-10 ml bd/tds"] },
      { label: "6-12 y/o", ageMin: 72, ageMax: 156, doses: ["10-15 ml bd/tds"] }
    ]
  },
  {
    name: "Montelukast Sodium (Singulair)",
    category: "Cough and Airway",
    formula: "",
    matchBy: "age",
    columns: ["Granules 4mg", "Chewable Tab 4mg", "Chewable Tab 5mg"],
    rows: [
      { label: "1-2 y/o",  ageMin: 12, ageMax: 24,  doses: ["1 packet OD", "-", "-"] },
      { label: "2-5 y/o",  ageMin: 24, ageMax: 72,  doses: ["-", "1 tab OD", "-"] },
      { label: "6-14 y/o", ageMin: 72, ageMax: 168, doses: ["-", "-", "1 tab OD"] }
    ]
  },
  {
    name: "Seretide Evohaler 25/50",
    category: "Cough and Airway",
    formula: "25mcg salmeterol, 50mcg fluticasone",
    matchBy: "age",
    columns: ["Evohaler 25/50"],
    rows: [
      { label: ">4 y/o",  ageMin: 48,  ageMax: 156, doses: ["1 inhalation bd (max 2 bd)"] },
      { label: ">12 y/o", ageMin: 156, ageMax: 216, doses: ["2 inhalations bd"] }
    ]
  },
  {
    name: "Ventolin Nebulizer Solution",
    category: "Cough and Airway",
    formula: "5mg salbutamol/ml. 0.03 ml/kg/dose. Usually <12 y/o: 0.5 ml (2.5mg) diluted to 2-2.5 ml with N/S. Some may need up to 1 ml (5mg).",
    matchBy: "weight",
    columns: ["5mg/ml nebulizer"],
    rows: []
  },

  // ═══════════════════════════════════════════════════
  // PHLEGM / MUCOLYTICS
  // ═══════════════════════════════════════════════════
  {
    name: "Ambroxol (Mucosolvan)",
    category: "Mucolytics",
    formula: "",
    matchBy: "age",
    columns: ["30mg/5ml"],
    rows: [
      { label: "1-2 y/o",  ageMin: 12, ageMax: 24,  doses: ["2.5 ml bd"] },
      { label: "2-6 y/o",  ageMin: 24, ageMax: 72,  doses: ["2.5 ml tds"] },
      { label: "6-12 y/o", ageMin: 72, ageMax: 156, doses: ["5 ml bd/tds"] }
    ]
  },
  {
    name: "Bromhexine (Vasican/Bisolvon)",
    category: "Mucolytics",
    formula: "",
    matchBy: "age",
    columns: ["4mg/5ml (light green)", "8mg/5ml (pale yellow)"],
    rows: [
      { label: "2-5 y/o",  ageMin: 24,  ageMax: 72,  doses: ["5 ml bd or 2.5 ml tds", "2.5 ml bd"] },
      { label: "6-12 y/o", ageMin: 72,  ageMax: 156, doses: ["5 ml tds", "2.5 ml tds"] },
      { label: ">12 y/o",  ageMin: 156, ageMax: 216, doses: ["10 ml tds", "5-10 ml tds"] }
    ]
  },
  {
    name: "Acetylcysteine (Fluimucil)",
    category: "Mucolytics",
    formula: "",
    matchBy: "age",
    columns: ["100mg/sachet"],
    rows: [
      { label: "2-6 y/o",  ageMin: 24,  ageMax: 72,  doses: ["1 sachet bd/tds"] },
      { label: "6-10 y/o", ageMin: 72,  ageMax: 120, doses: ["2 sachets bd"] },
      { label: ">10 y/o",  ageMin: 120, ageMax: 216, doses: ["2 sachets tds"] }
    ]
  },
  {
    name: "Rhinathiol 2% Children Syrup (Carbocisteine)",
    category: "Mucolytics",
    formula: "",
    matchBy: "age",
    columns: ["100mg/5ml"],
    rows: [
      { label: "<2 y/o", ageMin: 0,  ageMax: 24,  doses: ["CONTRAINDICATED"] },
      { label: "2-5 y/o", ageMin: 24, ageMax: 72,  doses: ["5 ml bd"] },
      { label: ">5 y/o",  ageMin: 72, ageMax: 216, doses: ["5 ml tds"] }
    ]
  },
  {
    name: "Leftose Syrup (Lysozyme Cl)",
    category: "Mucolytics",
    formula: "",
    notes: "Derived from egg white - avoid in egg allergy.",
    matchBy: "age",
    columns: ["5mg/1ml"],
    rows: [
      { label: "<2 y/o",  ageMin: 0,  ageMax: 24,  doses: ["1-2 ml tds"] },
      { label: "2-6 y/o", ageMin: 24, ageMax: 72,  doses: ["2-3 ml tds"] },
      { label: "7-14 y/o", ageMin: 84, ageMax: 168, doses: ["3-4 ml tds"] }
    ]
  },

  // ═══════════════════════════════════════════════════
  // ANTIBIOTICS
  // ═══════════════════════════════════════════════════
  {
    name: "Co-amoxiclav (Augmentin/Curam)",
    category: "Antibiotics",
    formula: "25-50 mg/kg/day",
    matchBy: "age",
    columns: ["312.5mg/5ml", "156.25mg/5ml"],
    rows: [
      { label: "9 months - 2 y/o", ageMin: 9,  ageMax: 24,  doses: ["2 ml bd", "2.5 ml tds OR 4 ml bd"] },
      { label: "2-7 y/o",          ageMin: 24, ageMax: 84,  doses: ["4 ml bd", "5 ml tds OR 7.5 ml bd"] },
      { label: "7-12 y/o",         ageMin: 84, ageMax: 156, doses: ["7.5 ml bd", "10 ml tds OR 15 ml bd"] }
    ]
  },
  {
    name: "Amoxicillin",
    category: "Antibiotics",
    formula: "10-15 mg/kg/dose (tds), 30-50 mg/kg/day",
    matchBy: "age",
    columns: ["125mg/5ml (tds)", "250mg/5ml (tds)"],
    rows: [
      { label: "3-8 months",       ageMin: 3,  ageMax: 9,   doses: ["2.5 ml", "-"] },
      { label: "9 months - 2 y/o", ageMin: 9,  ageMax: 24,  doses: ["5 ml", "2.5 ml"] },
      { label: "2-5 y/o",          ageMin: 24, ageMax: 60,  doses: ["7.5 ml", "4 ml"] },
      { label: "5-12 y/o",         ageMin: 60, ageMax: 156, doses: ["10 ml", "5 ml"] }
    ]
  },
  {
    name: "Erythromycin",
    category: "Antibiotics",
    formula: "30 mg/kg/day in 3-4 divided doses",
    matchBy: "age",
    columns: ["200mg/5ml (tds/qds)"],
    rows: [
      { label: "3-8 months",       ageMin: 3,  ageMax: 9,   doses: ["1.5 ml"] },
      { label: "9 months - 2 y/o", ageMin: 9,  ageMax: 24,  doses: ["2.5 ml"] },
      { label: "2-5 y/o",          ageMin: 24, ageMax: 60,  doses: ["3-4 ml"] },
      { label: "5-12 y/o",         ageMin: 60, ageMax: 156, doses: ["5-6 ml"] }
    ]
  },
  {
    name: "Clarithromycin (Klacid)",
    category: "Antibiotics",
    formula: "7.5 mg/kg/dose, 15 mg/kg/day",
    matchBy: "weight",
    columns: ["125mg/5ml (bd)", "250mg/5ml (bd)"],
    rows: [
      { label: "8-11 kg",  wtMin: 8,  wtMax: 11, doses: ["2.5 ml", "1.25 ml"] },
      { label: "12-19 kg", wtMin: 12, wtMax: 19, doses: ["5 ml", "2.5 ml"] },
      { label: "20-29 kg", wtMin: 20, wtMax: 29, doses: ["7.5 ml", "3.75 ml"] },
      { label: "30-40 kg", wtMin: 30, wtMax: 40, doses: ["10 ml", "5 ml"] }
    ]
  },
  {
    name: "Cephalexin/Cefalexin",
    category: "Antibiotics",
    formula: "25-50 mg/kg/day",
    matchBy: "age",
    columns: ["125mg/5ml", "250mg/5ml"],
    rows: [
      { label: "9 months - 2 y/o", ageMin: 9,   ageMax: 24,  doses: ["2.5 ml tds/qds", "-"] },
      { label: "5-10 y/o",         ageMin: 60,  ageMax: 120, doses: ["5 ml tds/qds", "2.5 ml tds/qds"] },
      { label: "11-12 y/o",        ageMin: 132, ageMax: 156, doses: ["10 ml tds/qds", "5 ml tds/qds"] }
    ]
  },
  {
    name: "Acyclovir",
    category: "Antibiotics",
    formula: "20 mg/kg/dose qds for 5 days. Children >40 kg: adult dose.",
    matchBy: "age",
    columns: ["200mg tablet"],
    rows: [
      { label: "\u22652 y/o", ageMin: 24, ageMax: 216, doses: ["20 mg/kg/dose qds x 5 days"] }
    ]
  }
];
