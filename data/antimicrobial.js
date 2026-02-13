window.ANTIMICROBIAL = [
  {
    system: "Respiratory",
    lastUpdated: "18 Jul 2023",
    indications: [
      {
        name: "Acute infective exacerbation of COPD",
        firstLine: "PO Amoxicillin/clavulanate 875/125 mg every 12 hours\nOR\nIV Amoxicillin/clavulanate 1.2g every 8 hours",
        alternative: "PO Azithromycin 500mg once daily (for 3 days only)\nOR\nPO Doxycycline 100mg every 12 hours",
        remarks: "Antibiotics may be considered for patients who present with \u22652 of the following:\n\u2022 Increased cough\n\u2022 Increased dyspnoea\n\u2022 Increased sputum purulence\n\u2022 Increased sputum volume",
        deescalation: "If IV antibiotics were used initially:\nSwitch to PO Amoxicillin/clavulanate 875/125 mg every 12 hours",
        duration: "5 days"
      },
      {
        name: "Acute exacerbation of bronchiectasis (Mild)",
        firstLine: "PO Amoxicillin/clavulanate 875/125 mg every 12 hours",
        alternative: "PO Levofloxacin 750mg once daily",
        remarks: "Use fluoroquinolone only when tuberculosis is NOT suspected.",
        deescalation: "",
        duration: "10\u201314 days (duration depends on clinical response)"
      },
      {
        name: "Acute exacerbation of bronchiectasis (Moderate to severe OR at risk for Pseudomonas aeruginosa)",
        firstLine: "IV Piperacillin/tazobactam 4.5g every 6 hours",
        alternative: "IV Levofloxacin 750mg once daily",
        remarks: "Consider an anti-pseudomonal agent (e.g. Piptazo) in patients with evidence of sepsis and \u22651 of the following:\n\u2022 Critically ill (ICU/ICA)\n\u2022 Haemodynamically unstable\n\u2022 High flow oxygen / mechanical ventilation\n\u2022 Pseudomonas aeruginosa isolated within past 1 year\n\u2022 Satisfactory clinical response not achieved after \u22653 days of antibiotics\n\nUse fluoroquinolone only when tuberculosis is NOT suspected.",
        deescalation: "PO Ciprofloxacin 750mg every 12 hours\n\u00b1\nPO Amoxicillin/clavulanate 875/125 mg every 12 hours",
        duration: "14 days"
      },
      {
        name: "Community-acquired pneumonia (Mild, CURB 0\u20131, outpatient)",
        firstLine: "PO Amoxicillin 1g every 8 hours\n\u00b1\nPO Azithromycin 500mg once daily (for 3 days only)\n\nIf comorbidities* present:\nPO Amoxicillin/clavulanate 875/125 mg every 12 hours\n\u00b1\nPO Azithromycin 500mg once daily (for 3 days only)",
        alternative: "PO Levofloxacin 750mg once daily",
        remarks: "Applicable to nursing home residents, dialysis/non-neutropenic patients on any chemotherapy.\n\n*Comorbidities include:\nHeart, lung, liver, or renal disease; diabetes mellitus, alcoholism, malignancy, and asplenia.\n\nUse fluoroquinolone only when tuberculosis is NOT suspected.",
        deescalation: "",
        duration: "5\u20137 days"
      },
      {
        name: "Community-acquired pneumonia (Moderate, CURB 2)",
        firstLine: "IV Ceftriaxone 2g once daily\n+\nPO Azithromycin 500mg once daily (for 3 days only)",
        alternative: "IV Levofloxacin 750mg once daily",
        remarks: "Applicable to nursing home residents, dialysis/non-neutropenic patients on any chemotherapy.\n\nUse fluoroquinolone only when tuberculosis is NOT suspected.\n\nKeep vancomycin trough level 15\u201320mg/L.",
        deescalation: "PO Amoxicillin 1g every 8 hours\n\nIf heart/lung/liver/renal disease, diabetes mellitus, alcoholism, malignancy, asplenia:\nPO Amoxicillin/clavulanate 875/125 mg every 12 hours",
        duration: "5\u20137 days (5 days may be considered in patients who are haemodynamically stable and with temperature <37.8\u00b0C for 48 hours)"
      },
      {
        name: "Community-acquired pneumonia (*Special population, CURB 2)",
        firstLine: "IV Piperacillin/tazobactam 4.5g every 6 hours (infuse over 4 hours where possible)\n+\nPO Azithromycin 500mg once daily (for 3 days only)",
        alternative: "IV Levofloxacin 750mg once daily\n\nIf severe infection:\nAdd IV Amikacin 15mg/kg once daily",
        remarks: "*Special population includes:\n1) Admitted to an acute care hospital for >48 hours AND received broad-spectrum antibiotics within 30 days; OR\n2) Underlying structural lung pathology (e.g. bronchiectasis) AND received antibiotics in the past 90 days; OR\n3) Pseudomonas aeruginosa isolated within past 1 year\n\nUse fluoroquinolone only when tuberculosis is NOT suspected.\n\nKeep vancomycin trough level 15\u201320mg/L.",
        deescalation: "PO Amoxicillin/clavulanate 875/125 mg every 12 hours\n\u00b1\nPO Ciprofloxacin 500mg every 12 hours",
        duration: "7\u201314 days (duration may be longer depending on clinical response)"
      },
      {
        name: "Community-acquired pneumonia (Severe, CURB 3\u20135, NOT requiring mechanical ventilation)",
        firstLine: "IV Ceftazidime 2g every 8 hours\n+\nIV Levofloxacin 750mg once daily\n\nIf MRSA-colonised within past 3 months:\nConsider adding IV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        alternative: "IV Levofloxacin 750mg once daily\n\n(If melioidosis is suspected in patients with serious beta-lactam allergy, please refer to ID)",
        remarks: "Perform respiratory virus multiplex PCR, pneumonia multiplex PCR, and check for Streptococcus pneumoniae antigen in urine.\n\nUse fluoroquinolone only when tuberculosis is NOT suspected.\n\nKeep vancomycin trough level 15\u201320mg/L.",
        deescalation: "PO Amoxicillin/clavulanate 875/125 mg every 12 hours\n\nIf continued atypical cover is necessary:\nAdd PO Azithromycin 500mg once daily",
        duration: "7\u201314 days (duration may be longer depending on clinical response, or if definitive melioidosis)"
      },
      {
        name: "Severe community-acquired pneumonia requiring mechanical ventilation",
        firstLine: "IV Meropenem 1g every 8 hours (infuse over 3 hours where possible)\n+\nIV Azithromycin 500mg once daily\n\nIf MRSA-colonised within past 3 months:\nConsider adding IV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        alternative: "IV Levofloxacin 750mg once daily\n\n(If melioidosis is suspected in patients with serious beta-lactam allergy, please refer to ID)",
        remarks: "Perform respiratory virus multiplex PCR, pneumonia multiplex PCR, and check for Streptococcus pneumoniae antigen in urine.\n\nUse fluoroquinolone only when tuberculosis is NOT suspected.\n\nKeep vancomycin trough level 15\u201320mg/L.",
        deescalation: "Consider prompt de-escalation of antibiotics when patient has demonstrated clinical improvement.",
        duration: "7\u201314 days (duration may be longer depending on clinical response, or if definitive melioidosis)\n\n3 days (IV Azithromycin; duration may be longer depending on clinical response)"
      },
      {
        name: "Hospital-acquired pneumonia (No mechanical ventilation, occurs >48 hours into admission)",
        firstLine: "IV Piperacillin/tazobactam 4.5g every 6 hours (infuse over 4 hours where possible)\n\nIf MRSA-colonised within past 3 months:\nConsider adding IV Vancomycin loading dose of 20mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        alternative: "IV Levofloxacin 750mg once daily\n+\nIV Vancomycin loading dose of 20mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        remarks: "Use fluoroquinolone only when tuberculosis is NOT suspected.\n\nKeep vancomycin trough level 15\u201320mg/L.",
        deescalation: "PO Amoxicillin/clavulanate 875/125 mg every 12 hours\n\u00b1\nPO Ciprofloxacin 500mg every 12 hours",
        duration: "7\u201314 days (duration may be longer depending on clinical response)"
      },
      {
        name: "Hospital-acquired pneumonia (Severe, mechanical ventilation, occurs >48 hours into admission)",
        firstLine: "IV Meropenem 1g every 8 hours (infuse over 3 hours where possible)\n\nIf MRSA-colonised within past 3 months:\nConsider adding IV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        alternative: "IV Levofloxacin 750mg once daily\n+\nIV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours\n+\nIV Amikacin 15mg/kg once daily",
        remarks: "Use fluoroquinolone only when tuberculosis is NOT suspected.\n\nKeep vancomycin trough level 15\u201320mg/L.",
        deescalation: "Consider prompt de-escalation of antibiotics when patient has demonstrated clinical improvement.",
        duration: "7\u201314 days (duration may be longer depending on clinical response)"
      }
    ]
  },
  {
    system: "Skin & Soft Tissue",
    lastUpdated: "18 Jul 2023",
    indications: [
      {
        name: "Cellulitis (Mild, outpatient)",
        firstLine: "PO Cefuroxime 500mg every 12 hours",
        alternative: "PO Clindamycin 450mg every 6 hours",
        remarks: "",
        deescalation: "",
        duration: "5 days (uncomplicated cellulitis with demonstrated clinical improvement)"
      },
      {
        name: "Cellulitis (Severe, inpatient)",
        firstLine: "IV Cefazolin 2g every 8 hours\n\nIf patient is colonised with MRSA:\nUse IV Vancomycin load 20mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours instead of cefazolin",
        alternative: "IV Vancomycin load 20mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        remarks: "",
        deescalation: "PO Cefuroxime 500mg every 12 hours",
        duration: "5 days (uncomplicated cellulitis with demonstrated clinical improvement)"
      },
      {
        name: "Carbuncles / Cutaneous abscesses (Mild, outpatient)",
        firstLine: "PO Cefuroxime 500mg every 12 hours",
        alternative: "PO Clindamycin 450mg every 6 hours",
        remarks: "Incision and drainage is essential and may be curative.",
        deescalation: "",
        duration: "Continue antibiotics until resolution of abscess or if incision and drainage is performed."
      },
      {
        name: "Carbuncles / Cutaneous abscesses (Severe, inpatient)",
        firstLine: "IV Cefazolin 2g every 8 hours\n\nIf patient is colonised with MRSA:\nUse IV Vancomycin load 20mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours instead of cefazolin",
        alternative: "IV Vancomycin load 20mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        remarks: "Incision and drainage is essential and may be curative.",
        deescalation: "PO Cefuroxime 500mg every 12 hours",
        duration: "Continue antibiotics until resolution of abscess or if incision and drainage is performed."
      },
      {
        name: "Infected foot wound with diabetes/PVD (Community-acquired, non-limb threatening)",
        firstLine: "PO Amoxicillin/clavulanate 875/125 mg every 12 hours\n\nIf extensive infection/obese/chronic infection:\nPO Amoxicillin/clavulanate 875/125mg every 8 hours;\nOr PO Amoxicillin/clavulanate 875/125mg every 12 hours + PO Amoxicillin 500mg every 12 hours",
        alternative: "PO Clindamycin 450mg every 6 hours\n+ PO Ciprofloxacin 500mg every 12 hours",
        remarks: "Superficial wound swabs are clinically not helpful and should not be done.",
        deescalation: "",
        duration: "7\u201310 days"
      },
      {
        name: "Infected foot wound with diabetes/PVD (Community-acquired, antibiotic-na\u00efve, limb-threatening)",
        firstLine: "IV Amoxicillin/clavulanate 1.2g every 6 hours;\nOr IV Co-amoxiclav 1.2g every 8 hours + IV ampicillin 1g every 8 hours\n\nIf patient is colonised with MRSA:\nAdd IV Vancomycin load 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        alternative: "IV Vancomycin load 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours\n+ IV Aztreonam 2g every 8 hours\n+ IV Metronidazole 500mg every 8 hours",
        remarks: "Superficial wound swabs are clinically not helpful and should not be done.\n\nEarly debridement to obtain tissue for culture is essential.",
        deescalation: "PO Amoxicillin/clavulanate 875/125mg every 12 hours",
        duration: "Duration of antibiotics depends on clinical response and severity of infection."
      },
      {
        name: "Infected foot wound with diabetes/PVD (Recent hospitalisation, non-limb threatening)",
        firstLine: "PO Amoxicillin/clavulanate 875/125mg every 12 hours\n+ PO Ciprofloxacin 500mg every 12 hours\n\nIf extensive/chronic infection/obese:\nPO Amoxicillin/clavulanate 875/125mg every 8 hours + PO Ciprofloxacin 750mg every 12 hours;\nOr PO Amoxicillin/clavulanate 875/125mg every 12 hours + PO Amoxicillin 500mg every 12 hours + PO Ciprofloxacin 750mg every 12 hours",
        alternative: "PO Clindamycin 450mg every 6 hours\n+ PO Ciprofloxacin 500mg every 12 hours",
        remarks: "Superficial wound swabs are clinically not helpful and should not be done.\n\nConsider patient\u2019s recent tissue cultures and use of prior antibiotics in recurrent episodes to guide choice of empiric treatment.",
        deescalation: "",
        duration: "7\u201310 days"
      },
      {
        name: "Infected foot wound with diabetes/PVD (Recent hospitalisation or pre-treated, limb-threatening)",
        firstLine: "IV Piperacillin/tazobactam 4.5g every 6 hours (infuse over 4 hours where possible)\n\nIf patient is colonised with MRSA:\nAdd IV Vancomycin load 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        alternative: "IV Vancomycin load 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours\n+ IV Aztreonam 2g every 8 hours\n+ IV Metronidazole 500mg every 8 hours",
        remarks: "Superficial wound swabs are clinically not helpful and should not be done.\n\nConsider patient\u2019s recent tissue cultures and use of prior antibiotics in recurrent episodes to guide choice of empiric treatment.\n\nEarly debridement to obtain tissue for culture is essential.",
        deescalation: "PO Amoxicillin/clavulanate 875/125mg every 12 hours\n+ PO Ciprofloxacin 500mg every 12 hours",
        duration: "Duration of antibiotics depends on clinical response and severity of infection."
      },
      {
        name: "Infected pressure sores (Community-acquired, antibiotic-na\u00efve, mild, outpatient)",
        firstLine: "PO Amoxicillin/clavulanate 875/125 mg every 12 hours",
        alternative: "PO Clindamycin 450mg q6h\n+ PO Ciprofloxacin 500mg every 12 hours",
        remarks: "Superficial wound swabs are clinically not helpful and should not be done.\n\nWound care should be the mainstay of therapy. Antibiotic use is often supportive.",
        deescalation: "",
        duration: "7\u201310 days"
      },
      {
        name: "Infected pressure sores (Community-acquired, antibiotic-na\u00efve, inpatient)",
        firstLine: "IV Amoxicillin/clavulanate 1.2g every 8 hours",
        alternative: "IV Clindamycin 600mg q6h\n+ IV Ciprofloxacin 400mg every 12 hours",
        remarks: "Superficial wound swabs are clinically not helpful and should not be done.\n\nWound care should be the mainstay of therapy. Antibiotic use is often supportive.\n\nEarly debridement is essential.",
        deescalation: "PO Amoxicillin/clavulanate 875/125mg every 12 hours",
        duration: "Duration of antibiotics depends on clinical response and severity of infection."
      }
    ]
  },
  {
    system: "Genitourinary",
    lastUpdated: "24 Jun 2024",
    indications: [
      {
        name: "Acute cystitis",
        firstLine: "PO Amoxicillin/clavulanate 875/125mg every 12 hours",
        alternative: "PO Ciprofloxacin 500mg every 12 hours\nOR\nPO Fosfomycin 3g single dose (labelled indication: female patients only)",
        remarks: "",
        deescalation: "",
        duration: "5 days of PO Amoxicillin/clavulanate\nOR\n3 days of PO Ciprofloxacin\nOR\n1 day of PO Fosfomycin"
      },
      {
        name: "Acute cystitis in pregnant woman",
        firstLine: "PO Amoxicillin 500mg every 8 hours",
        alternative: "PO Nitrofurantoin 50mg every 6 hours",
        remarks: "Please consider alternatives if patient has penicillin allergy & is in first trimester.",
        deescalation: "",
        duration: "5\u20137 days"
      },
      {
        name: "Asymptomatic bacteriuria in non-pregnant woman",
        firstLine: "Do not treat with antibiotics",
        alternative: "Do not treat with antibiotics",
        remarks: "Antibiotic treatment for asymptomatic bacteriuria is generally not recommended because it does not reduce incidence of symptomatic UTIs.\n\nBacteriuria also tends to recur after therapy with subsequent emergence of antibiotic resistance.",
        deescalation: "",
        duration: ""
      },
      {
        name: "Acute pyelonephritis (Outpatient)",
        firstLine: "PO Ciprofloxacin 500mg every 12 hours",
        alternative: "PO Ciprofloxacin 500mg every 12 hours",
        remarks: "Up to 20% of isolates of E. coli may be ciprofloxacin-resistant.\n\nReview patient\u2019s prior antibiotic exposure or cultures (if available) to guide selection of empiric antibiotic.",
        deescalation: "",
        duration: "7 days"
      },
      {
        name: "Acute pyelonephritis (Inpatient, community acquired)",
        firstLine: "IV Ceftriaxone 2g once daily\n\nIf haemodynamically unstable:\nAdd IV Gentamicin 7mg/kg once daily",
        alternative: "IV Aztreonam 2g every 8 hours\n\nIf haemodynamically unstable:\nAdd IV Gentamicin 7mg/kg once daily",
        remarks: "Review the need to continue gentamicin when culture results return.\n\nIf critically ill & albumin <25 g/L, dose IV Ceftriaxone as 1g every 12 hours.\n\nToxicity of aminoglycosides increases when duration is >5 days.",
        deescalation: "PO Amoxicillin/clavulanate 875/125 mg every 12 hours\nOR\nPO Ciprofloxacin 500mg every 12 hours",
        duration: "7\u201314 days"
      },
      {
        name: "Acute pyelonephritis (Inpatient, hospital acquired)",
        firstLine: "IV Piperacillin/tazobactam 4.5g every 6 hours\n\nIf haemodynamically unstable:\nAdd IV Amikacin 15mg/kg once daily",
        alternative: "IV Aztreonam 2g every 8 hours\n\nIf haemodynamically unstable:\nAdd IV Amikacin 15mg/kg once daily",
        remarks: "Review the need to continue amikacin when culture results become available.\n\nToxicity of aminoglycosides increases when duration is >5 days.",
        deescalation: "PO Amoxicillin/clavulanate 875/125mg every 12 hours\nOR\nPO Ciprofloxacin 500mg every 12 hours",
        duration: "7\u201314 days"
      },
      {
        name: "Acute pyelonephritis (Pregnant woman)",
        firstLine: "IV Ceftriaxone 2g once daily",
        alternative: "Refer ID",
        remarks: "",
        deescalation: "PO Amoxicillin/clavulanate 875/125 mg every 12 hours",
        duration: "10\u201314 days"
      },
      {
        name: "Acute prostatitis",
        firstLine: "PO Ciprofloxacin 500mg every 12 hours",
        alternative: "PO Ciprofloxacin 500mg every 12 hours",
        remarks: "Consider HIV and STD screening.\n\nConsider admission for IV antibiotics if patient has risk of fluoroquinolone resistance.",
        deescalation: "",
        duration: "4 weeks"
      },
      {
        name: "Symptomatic catheter-associated UTI (Mild)",
        firstLine: "PO Amoxicillin/clavulanate 875/125 mg every 12 hours",
        alternative: "PO Ciprofloxacin 500mg every 12 hours",
        remarks: "Remove catheter where possible.\nUrine cultures should be obtained from freshly placed catheter prior to initiation of antibiotic therapy.\n\nConsider patient\u2019s recent urine cultures and use of prior antibiotics for recurrent episodes.",
        deescalation: "",
        duration: "7 days (may require a longer duration of antibiotics if response is delayed, up to 10\u201314 days)"
      },
      {
        name: "Symptomatic catheter-associated UTI (Severe)",
        firstLine: "IV Ceftriaxone 2g every 24 hours",
        alternative: "IV Aztreonam 2g every 8 hours",
        remarks: "If critically ill & albumin <25 g/L, dose IV Ceftriaxone as 1g every 12 hours.\n\nRemove catheter where possible.\nUrine cultures should be obtained from freshly placed catheter prior to initiation of antibiotic therapy.\n\nConsider patient\u2019s recent urine cultures and use of prior antibiotics for recurrent episodes.",
        deescalation: "PO Amoxicillin/clavulanate 875/125 mg every 12 hours\nOR\nPO Ciprofloxacin 500mg every 12 hours",
        duration: "7 days (may require a longer duration of antibiotics if response is delayed, up to 10\u201314 days)"
      }
    ]
  },
  {
    system: "Gastrointestinal",
    lastUpdated: "19 Feb 2024",
    indications: [
      {
        name: "Spontaneous bacterial peritonitis",
        firstLine: "IV Ceftriaxone 2g once daily",
        alternative: "IV Aztreonam 2g every 8 hours",
        remarks: "Initiate empiric antibiotic therapy in patient with ascites, liver cirrhosis AND signs/symptoms of infection (fever, abdominal pain or unexplained encephalopathy) while awaiting ascitic fluid culture results.\n\nRequest for ascitic fluid differential count.\n\nIf critically ill & albumin <25 g/L, please dose IV Ceftriaxone 1g every 12 hours.\n\nIf risk of MDRO infection: Consider adding IV Gentamicin 7mg/kg (single dose).\n\nConsider long-term prophylaxis with PO ciprofloxacin 500mg daily after treatment of spontaneous bacterial peritonitis.",
        deescalation: "",
        duration: "5 days (may require a longer duration if response is delayed)"
      },
      {
        name: "Liver abscess (Community-acquired)",
        firstLine: "IV Ceftriaxone 2g once daily\n+\nIV Metronidazole 500mg every 8 hours",
        alternative: "IV Ciprofloxacin 400mg every 12 hours\n+\nIV Metronidazole 500mg every 8 hours",
        remarks: "If critically ill & albumin <25 g/L, dose IV Ceftriaxone as 1g every 12 hours.\n\nIf there is no biliary tract pathology and amoebic liver abscess not suspected, stop metronidazole.\n\nFor patients with drug susceptible Klebsiella pneumoniae liver abscess, switch to PO ciprofloxacin 500mg every 12 hours (for patients \u2265 75 kg, switch to PO ciprofloxacin 750mg every 12 hours).",
        deescalation: "",
        duration: "4\u20136 weeks"
      },
      {
        name: "Community-acquired intra-abdominal infection (e.g. secondary peritonitis, acute cholecystitis/cholangitis)",
        firstLine: "IV Ceftriaxone 2g once daily\n+\nIV Metronidazole 500mg every 8 hours\n\nIf patient is haemodynamically unstable:\nAdd IV Gentamicin 5\u20137 mg/kg once daily",
        alternative: "IV Ciprofloxacin 400mg every 12 hours\n+\nIV Metronidazole 500mg every 8 hours\n\nIf patient is haemodynamically unstable:\nAdd IV Gentamicin 5\u20137 mg/kg once daily",
        remarks: "If critically ill & albumin <25 g/L, dose IV Ceftriaxone as 1g every 12 hours.\n\nToxicity of aminoglycoside increases when duration is >5 days.",
        deescalation: "PO Amoxicillin/clavulanate 875/125 mg every 12 hours",
        duration: "7\u201310 days"
      },
      {
        name: "Hospital-acquired / Healthcare-associated intra-abdominal infection",
        firstLine: "IV Piperacillin/tazobactam 4.5g every 6 hours (infuse over 4 hours where possible)\n\nIf severe infection:\nAdd IV Amikacin 15 mg/kg once daily",
        alternative: "After test dose of meropenem:\nIV Meropenem 1g every 8 hours (infuse over 3 hours where possible)\n\nIf severe infection:\nAdd IV Amikacin 15 mg/kg once daily",
        remarks: "Critically ill patients with Candida score \u22653 (Leon et al) are at higher risk of developing invasive Candida infections.\n\nCandida score:\n\u2022 Multifocal Candida colonization: 1 pt\n\u2022 Surgery (as indication for ICU admission): 1 pt\n\u2022 Receipt of TPN: 1 pt\n\u2022 Clinical signs of severe sepsis: 2 pts\n\nStart IV Fluconazole. Refer ID if anidulafungin is preferred.\n\nFor patients with septic shock, use IV Meropenem 1g every 8 hours (infuse over 3 hours where possible) and consider a higher dose of IV Amikacin 20mg/kg once daily till cultures are reported. Toxicity of aminoglycoside increases when duration is >5 days.",
        deescalation: "PO Ciprofloxacin 500mg every 12 hours\n+\nPO Amoxicillin/clavulanate 875/125 mg every 12 hours",
        duration: "7\u201310 days"
      },
      {
        name: "Community-acquired acute pancreatitis (Gallstone-related)",
        firstLine: "IV Ceftriaxone 2g once daily\n+\nIV Metronidazole 500mg every 8 hours",
        alternative: "IV Ciprofloxacin 400mg every 12 hours\n+\nIV Metronidazole 500mg every 8 hours",
        remarks: "Antibiotics should be given to treat extra-pancreatic infection (e.g. cholangitis, bacteraemia, pneumonia) and in patients with infected necrosis. Routine use of prophylactic antibiotics in patients with severe acute pancreatitis or with sterile necrosis is not recommended.\n\nSerial procalcitonin levels can help to exclude bacterial infection and assess prognosis.\n\nStudies do not support claims that meropenem/imipenem are superior agents.\n\nIf critically ill & albumin <25 g/L, dose IV Ceftriaxone as 1g every 12 hours.\n\nFor necrotizing pancreatitis, please refer ID. Duration of treatment can be up to 6 weeks.",
        deescalation: "",
        duration: "7\u201314 days"
      },
      {
        name: "Healthcare-associated acute pancreatitis",
        firstLine: "IV Piperacillin/tazobactam 4.5g every 6 hours (infuse over 4 hours where possible)",
        alternative: "After test dose of meropenem:\nIV Meropenem 1g every 8 hours (infuse over 3 hours where possible)",
        remarks: "Antibiotics should be given to treat extra-pancreatic infection (e.g. cholangitis, bacteraemia, pneumonia) and in patients with infected necrosis. Routine use of prophylactic antibiotics in patients with severe acute pancreatitis or with sterile necrosis is not recommended.\n\nSerial procalcitonin levels can help to exclude bacterial infection and assess prognosis.\n\nStudies do not support claims that meropenem/imipenem are superior agents.\n\nIf critically ill & albumin <25 g/L, dose IV Ceftriaxone as 1g every 12 hours.\n\nFor necrotizing pancreatitis, please refer ID. Duration of treatment can be up to 6 weeks.",
        deescalation: "",
        duration: "7\u201314 days"
      },
      {
        name: "Clostridium difficile diarrhoea (Haemodynamically stable, without toxic megacolon)",
        firstLine: "PO Vancomycin 125mg every 6 hours",
        alternative: "",
        remarks: "DO NOT use IV Vancomycin as penetration to bowel mucosa is poor.\n\nFor mild disease, PO metronidazole 400mg every 8 hours is an alternative.",
        deescalation: "",
        duration: "10\u201314 days"
      },
      {
        name: "Clostridium difficile diarrhoea (Severe with haemodynamic instability, or with evidence of toxic megacolon)",
        firstLine: "IV Metronidazole 500mg every 8 hours\n+\nPO Vancomycin 500mg every 6 hours",
        alternative: "",
        remarks: "DO NOT use IV Vancomycin as penetration to bowel mucosa is poor.",
        deescalation: "",
        duration: "Duration of antibiotics depends on clinical response and severity of infection."
      },
      {
        name: "Clostridium difficile diarrhoea (Recurrent)",
        firstLine: "First recurrence:\nPO Vancomycin 125mg every 6 hours for 10\u201314 days;\nPO Vancomycin 125mg every 12 hours for next 7 days;\nPO Vancomycin 125mg once daily for next 7 days;\nPO Vancomycin 125mg every 2\u20133 days for 2\u20138 weeks\n\nSubsequent recurrence:\nAs above OR\nPO Vancomycin 125mg every 6 hours for 10 days followed by PO rifaximin 400mg every 8 hours for 20 days",
        alternative: "",
        remarks: "If oral metronidazole was used for initial episode, treat with PO Vancomycin 125mg every 6 hours for 10 days.",
        deescalation: "",
        duration: ""
      }
    ]
  },
  {
    system: "Musculoskeletal",
    lastUpdated: "31 Aug 2023",
    indications: [
      {
        name: "Complex trauma with no biological contamination (Open fracture, tendon injury, amputation)",
        firstLine: "IV Cefazolin 2g every 8 hours",
        alternative: "IV Clindamycin 600mg every 6 hours",
        remarks: "For infections that are slow to resolve, consider increasing dose of cefazolin to 2g every 6 hours (please discuss with ID Doctor or ID pharmacist).\n\nConsider ID referral if:\na) infection is slow to reverse\nb) unusual bacteria cultured",
        deescalation: "PO Cefuroxime 500mg every 12 hours",
        duration: "Duration of antibiotics depends on clinical response and severity of infection."
      },
      {
        name: "Traumatized limb with biological contamination (Human or animal bites)",
        firstLine: "IV Amoxicillin/clavulanate 1.2g every 8 hours",
        alternative: "IV Clindamycin 600mg every 6 hours\n+\nIV Ciprofloxacin 400mg every 12 hours",
        remarks: "Refer ID if:\na) infection is slow to reverse\nb) unusual bacteria cultured\nc) bites from monkey or animal bites sustained overseas\n\nTetanus prophylaxis: Tetanus vaccine injection IM 0.5mL once if not done in the last 5 years.",
        deescalation: "PO Amoxicillin/clavulanate 875/125mg every 12 hours",
        duration: "Duration of antibiotics depends on clinical response and severity of infection."
      },
      {
        name: "Septic arthritis (Native joint)",
        firstLine: "IV Cefazolin 2g every 8 hours",
        alternative: "IV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        remarks: "Surgical drainage is vital.\n\nDuring surgical procedure, please send specimen for urgent gram stain in addition to culture.\n\nKeep vancomycin trough level 15\u201320mg/L.\n\nFor infections that are slow to resolve, consider increasing dose of Cefazolin to 2g every 6 hours (please discuss with ID Doctor or ID pharmacist).",
        deescalation: "Consider OPAT",
        duration: "4\u20136 weeks (duration depending on clinical response and severity of infection)"
      },
      {
        name: "Septic arthritis (Native joint with risk factors for sexually transmitted diseases [STDs])",
        firstLine: "IV Ceftriaxone 2g once daily",
        alternative: "Refer ID.",
        remarks: "Surgical drainage is vital.\n\nDuring surgical procedure, please send specimen for urgent gram stain in addition to culture.",
        deescalation: "Consider OPAT",
        duration: "4\u20136 weeks (duration depending on clinical response and severity of infection)"
      },
      {
        name: "Septic arthritis (Prosthetic joint) OR Osteomyelitis following surgical procedure",
        firstLine: "IV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours\n+\nIV Cefepime 2g every 8 hours (infuse over 4 hours where possible)",
        alternative: "IV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours\n+\nIV Ciprofloxacin 400 mg every 12 hours OR PO Ciprofloxacin 750mg every 12 hours",
        remarks: "Surgical drainage is vital.\n\nDuring surgical procedure, please send specimen for urgent gram stain in addition to culture.\n\nKeep vancomycin trough level 15\u201320mg/L.\n\nRefer ID.",
        deescalation: "Consider OPAT",
        duration: "4\u20136 weeks (duration depending on clinical response and severity of infection)"
      },
      {
        name: "Spinal osteomyelitis (With no prior instrumentation)",
        firstLine: "IV Cefazolin 2g every 8 hours",
        alternative: "IV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        remarks: "Refer ID.\n\nFor infections that are slow to resolve, consider increasing dose of cefazolin to 2g every 6 hours (please discuss with ID Doctor or ID pharmacist).\n\nKeep vancomycin trough level 15\u201320mg/L.",
        deescalation: "Consider OPAT",
        duration: "4\u20136 weeks (duration depending on clinical response and severity of infection)"
      }
    ]
  },
  {
    system: "Central Nervous System",
    lastUpdated: "01 Apr 2022",
    indications: [
      {
        name: "Meningitis",
        firstLine: "IV Ceftriaxone 2g every 12 hours\n+\nIV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        alternative: "IV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours\n+\nIV Moxifloxacin 400mg once daily",
        remarks: "Consider IV Dexamethasone 0.15mg/kg q6h for 4 days (first dose prior to antibiotics) for suspected bacterial meningitis. Indication for continuing steroids is determined by microbiological data, indicated mainly for S. pneumoniae meningitis. Please stop dexamethasone if S. pneumoniae not isolated.\n\nRefer ID.\n\nKeep vancomycin trough level 15\u201320mg/L.",
        deescalation: "",
        duration: "S. pneumoniae 14 days\nN. meningitidis 7 days\nH. influenzae 7 days\nL. monocytogenes 21 days"
      },
      {
        name: "Meningitis, with any of the following factors: a) >50 years old, b) History of alcoholism, c) Immunocompromised",
        firstLine: "IV Ceftriaxone 2g every 12 hours\n+\nIV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours\n+\nIV Ampicillin 2g every 4 hours",
        alternative: "IV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours\n+\nIV Moxifloxacin 400mg once daily\n+\nIV Trimethoprim-sulfamethoxazole (trimethoprim component 15mg/kg/day) in 2 to 4 divided doses",
        remarks: "Consider IV Dexamethasone 0.15mg/kg q6h for 4 days (first dose prior to antibiotics) for suspected bacterial meningitis. Indication for continuing steroids is determined by microbiological data, indicated mainly for S. pneumoniae meningitis. Please stop dexamethasone if S. pneumoniae not isolated.\n\nRefer ID.\n\nKeep vancomycin trough level 15\u201320mg/L.",
        deescalation: "",
        duration: "S. pneumoniae 14 days\nN. meningitidis 7 days\nH. influenzae 7 days\nL. monocytogenes 21 days"
      },
      {
        name: "Brain abscess (Primary or contiguous source or post-trauma)",
        firstLine: "IV Ceftriaxone 2g every 12 hours\n+\nIV Cloxacillin 2g every 4 hours\n+\nIV Metronidazole 500mg every 8 hours",
        alternative: "IV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours\n+\nIV Ciprofloxacin 400mg every 12 hours\n+\nIV Metronidazole 500mg every 8 hours",
        remarks: "Refer ID.\n\nKeep vancomycin trough level 15\u201320mg/L.",
        deescalation: "",
        duration: "Duration of antibiotics depends on clinical response and severity of infection."
      },
      {
        name: "Brain abscess (Post-neurosurgery)",
        firstLine: "IV Meropenem 2g every 8 hours (run each dose over 3 hours where possible)\n+\nIV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        alternative: "After test dose of meropenem:\nIV Meropenem 2g every 8 hours (run each dose over 3 hours where possible)\n+\nIV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        remarks: "Refer ID.\n\nKeep vancomycin trough level 15\u201320mg/L.",
        deescalation: "",
        duration: "Duration of antibiotics depends on clinical response and severity of infection."
      }
    ]
  },
  {
    system: "Cardiovascular",
    lastUpdated: "01 Apr 2022",
    indications: [
      {
        name: "Infective endocarditis (Native valve)",
        firstLine: "IV Crystalline Penicillin 4 mega units every 4 hours\n+\nIV Cloxacillin 2g every 4 hours\n+\nIV Gentamicin 3mg/kg once daily",
        alternative: "IV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours\n+\nIV Gentamicin 3mg/kg once daily",
        remarks: "In subacute endocarditis (stable patient with >1 week of symptoms), antibiotics need not be initiated immediately. Please take 3 sets of blood cultures before starting antibiotics.\n\nPerform regular therapeutic drug monitoring for vancomycin and gentamicin, targeting trough levels of:\na) vancomycin 15\u201320mg/L\nb) gentamicin <1mg/L",
        deescalation: "",
        duration: "4\u20136 weeks"
      },
      {
        name: "Infective endocarditis (Prosthetic valve, including early IE)",
        firstLine: "IV Vancomycin loading dose of 25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours\n+\nIV Gentamicin 3mg/kg once daily\n+\nPO Rifampicin 600mg once daily",
        alternative: "",
        remarks: "Perform regular therapeutic drug monitoring for vancomycin and gentamicin, targeting trough levels of:\na) vancomycin 15\u201320mg/L\nb) gentamicin <1mg/L\n\nMonitor LFTs weekly while on rifampicin.",
        deescalation: "",
        duration: "6 weeks"
      }
    ]
  },
  {
    system: "Gynaecological",
    lastUpdated: "17 Nov 2023",
    indications: [
      {
        name: "Pelvic inflammatory disease (Mild, outpatient)",
        firstLine: "IM Ceftriaxone 500mg in a single dose\n+\nPO Metronidazole 400mg every 12 hours\n+\nPO Doxycycline 100mg every 12 hours",
        alternative: "PO Metronidazole 400mg every 12 hours\n+\nPO Azithromycin 2g in a single dose\n\nPatients treated with this alternative regimen should return 1 week after treatment for review.",
        remarks: "Investigate for gonococcal & chlamydial infection and other STDs in sexually active women. Negative tests do not exclude such infections in high risk patients.",
        deescalation: "",
        duration: "2 weeks"
      },
      {
        name: "Pelvic inflammatory disease (Severe, inpatient)",
        firstLine: "IV Ceftriaxone 2g once daily\n+\nIV Metronidazole 500mg every 8 hours\n+\nPO Doxycycline 100mg every 12 hours",
        alternative: "IV Clindamycin 900mg every 8 hours\n+\nIV Gentamicin 7mg/kg once daily\n+\nPO Azithromycin 2g in a single dose",
        remarks: "Quinolone resistance rates among Neisseria gonorrhoeae are more than 80%.\n\nPlease consult Infectious Disease for the following scenarios:\n1. Continuing IV Gentamicin >5 days in view of increased risk of nephrotoxicity\n2. Patient is unable to tolerate orally",
        deescalation: "IV therapy may be discontinued 24 hours after the patient improves clinically to:\nPO Doxycycline 100mg every 12 hours\n+\nPO Metronidazole 400mg every 12 hours\n\nOR\n\nPO Metronidazole 400mg every 12 hours, if received alternative therapy",
        duration: "2 weeks"
      }
    ]
  },
  {
    system: "Unspecified Sepsis",
    lastUpdated: "1 Aug 2023",
    indications: [
      {
        name: "Unspecified sepsis (No recent hospitalisation, normotensive)",
        firstLine: "IV Amoxicillin/clavulanate 1.2g every 8 hours",
        alternative: "IV Aztreonam 2g every 8 hours\n+\nIV Vancomycin loading dose of 20mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        remarks: "",
        deescalation: "PO Amoxicillin/clavulanate 875/125mg every 12 hours",
        duration: "5\u20137 days"
      },
      {
        name: "Unspecified sepsis (No recent hospitalisation, hypotensive)",
        firstLine: "IV Co-amoxiclav 1.2g every 6 hours\n+ IV gentamicin 7mg/kg every 24 hours\n\nOr\nIV Co-amoxiclav 1.2g every 8 hours\n+ IV ampicillin 1g every 8 hours\n+ IV gentamicin 7mg/kg every 24 hours",
        alternative: "IV Aztreonam 2g every 8 hours\n+\nIV Vancomycin loading dose of 20mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours\n+\nIV gentamicin 7mg/kg every 24 hours",
        remarks: "",
        deescalation: "PO Amoxicillin/clavulanate 875/125mg every 12 hours",
        duration: "5\u20137 days\n\nConsider stopping IV Gentamicin after 3\u20135 days if patient demonstrates clinical improvement."
      },
      {
        name: "Unspecified sepsis (Nosocomial, normotensive)",
        firstLine: "IV Piperacillin/tazobactam 4.5g every 6 hours (infuse over 4 hours where possible)\n\nIf MRSA colonized & suspect skin/soft tissue infection or skin translocation:\nAdd IV Vancomycin loading dose of 20mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        alternative: "IV Aztreonam 2g every 8 hours\n+\nIV Vancomycin loading dose of 20mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        remarks: "",
        deescalation: "PO Amoxicillin/clavulanate 875/125mg every 12 hours\n\u00b1\nPO Ciprofloxacin 500mg every 12 hours",
        duration: "7 days"
      },
      {
        name: "Unspecified sepsis (Nosocomial, hypotensive)",
        firstLine: "IV Meropenem 1g every 8 hours (infuse over 3 hours where possible)\n\u00b1\nIV Amikacin 15mg/kg every 24 hours\n\nIf MRSA colonized & suspect skin/soft tissue infection or skin translocation:\nAdd IV Vancomycin loading dose of 20mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        alternative: "After test dose of meropenem:\nIV Meropenem 1g every 8 hours (infuse over 3 hours where possible)\n\u00b1\nIV Amikacin 15mg/kg every 24 hours",
        remarks: "For patients with septic shock, consider a higher dose of IV Amikacin 20mg/kg once daily till cultures are reported. Toxicity of aminoglycosides increases when duration is > 5 days.",
        deescalation: "IV Piperacillin/tazobactam 4.5g every 6 hours",
        duration: "10\u201314 days\n\nConsider stopping IV Amikacin after 3\u20135 days if patient demonstrates clinical improvement."
      }
    ]
  },
  {
    system: "Burns",
    lastUpdated: "01 Apr 2022",
    indications: [
      {
        name: "Burns infection (On admission)",
        firstLine: "IV Cefazolin 2g every 6 hours\n\nIf patient is colonised with MRSA:\nIV Vancomycin loading dose of *25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours instead of cefazolin",
        alternative: "IV Vancomycin loading dose of *25mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        remarks: "Please refer ID if:\na) 48 hours later and still not better, or\nb) admitted to BICU\n\nKeep vancomycin trough level 15\u201320mg/L.",
        deescalation: "",
        duration: "Duration of antibiotics depends on clinical response and severity of infection."
      }
    ]
  },
  {
    system: "Vascular Access",
    lastUpdated: "8 Feb 2021",
    indications: [
      {
        name: "Vascular access infection (including infected catheter/AVF/AVG)",
        firstLine: "IV Piperacillin/tazobactam 4.5g every 6 hours (infuse over 4 hours where possible)\n+\nIV Vancomycin loading dose of 20mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours",
        alternative: "IV Vancomycin loading dose of 20mg/kg, followed by IV Vancomycin 15mg/kg every 12 hours\n+\nIV Aztreonam 2g every 8 hours",
        remarks: "Keep vancomycin trough level 15\u201320mg/L.",
        deescalation: "",
        duration: "2\u20136 weeks depending on clinical response and severity of infection"
      }
    ]
  }
];
