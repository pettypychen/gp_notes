window.STI_CONDITIONS = [

  // ── Bacterial STIs ────────────────────────────────────────────────────────

  {
    name: "Chlamydia Trachomatis",
    category: "Bacterial STIs",
    notifyMOH: true,
    symptoms: [
      "Often asymptomatic (especially in women)",
      "Men: urethral discharge, dysuria",
      "Women: mucopurulent cervical discharge, post-coital bleeding, pelvic pain",
      "Rectal: proctitis (discharge, bleeding, tenesmus)",
      "Pharyngeal: usually asymptomatic"
    ],
    diagnosticWorkup: [
      "NAAT (first-catch urine or urethral / cervical / rectal / pharyngeal swab) — test of choice",
      "Culture (less sensitive; used for treatment failure investigation)"
    ],
    firstLine: "Doxycycline 100mg orally BD × 7 days",
    secondLine: "Azithromycin 1g orally single dose\nor Levofloxacin 500mg orally OD × 7 days",
    pregnancy: "Azithromycin 1g orally single dose\nor Amoxicillin 500mg orally TDS × 7 days\n(avoid doxycycline)",
    notes: "Treat sexual contacts. Test of cure not routinely needed unless pregnant, symptoms persist, or poor compliance. Screen for co-infections (GC, Syphilis, HIV)."
  },

  {
    name: "Gonorrhoea",
    category: "Bacterial STIs",
    notifyMOH: true,
    symptoms: [
      "Men: purulent urethral discharge, dysuria, frequency",
      "Women: mucopurulent cervical discharge, dysuria, pelvic pain; often asymptomatic",
      "Rectal: proctitis, discharge, rectal bleeding",
      "Pharyngeal: usually asymptomatic or sore throat",
      "Complications: PID, epididymo-orchitis, disseminated gonococcal infection (DGI)"
    ],
    diagnosticWorkup: [
      "NAAT (urine, cervical, urethral, rectal, pharyngeal) — test of choice",
      "Gram stain of urethral discharge (gram-negative intracellular diplococci) — useful for rapid diagnosis in men",
      "Culture with sensitivity testing — essential for resistance monitoring",
      "Always screen for co-infections (Chlamydia, Syphilis, HIV)"
    ],
    firstLine: "Ceftriaxone 500mg IM single dose\n+ Doxycycline 100mg orally BD × 7 days (for chlamydia cover)\n\nPharyngeal GC:\nCeftriaxone 500mg IM single dose\n+ Azithromycin 1g orally single dose",
    secondLine: "Aztreonam 1g IM single dose\n+ Doxycycline 100mg orally BD × 7 days\n\nor Gentamicin 240mg IM single dose\n+ Azithromycin 2g orally single dose",
    pregnancy: "Ceftriaxone 500mg IM single dose\n(avoid fluoroquinolones and doxycycline)",
    notes: "Increasing antibiotic resistance — always culture for sensitivity testing. Test of cure recommended 1–2 weeks post-treatment (especially pharyngeal GC). Notify sexual contacts."
  },

  {
    name: "Syphilis",
    category: "Bacterial STIs",
    notifyMOH: true,
    symptoms: [
      "Primary: single painless indurated chancre; rubbery non-tender inguinal lymphadenopathy",
      "Secondary (2–6 months after primary): symmetrical non-itchy rash including palms and soles, mucous membrane lesions, patchy alopecia, generalised lymphadenopathy",
      "Latent: asymptomatic — early latent <1 year; late latent >1 year",
      "Tertiary: gumma formation, cardiovascular syphilis (aortitis), neurosyphilis (meningitis, dementia, tabes dorsalis)"
    ],
    diagnosticWorkup: [
      "Non-treponemal (quantitative, for treatment monitoring): RPR or VDRL",
      "Treponemal (confirmatory): TPHA / TPPA / LIA / EIA",
      "Dark-field microscopy of primary chancre or moist secondary lesions",
      "Neurosyphilis: CSF examination (cell count, protein, VDRL, LIA) — indicated if neurological symptoms, evidence of active tertiary syphilis, or treatment failure"
    ],
    firstLine: "Early syphilis (primary, secondary, early latent <1 year):\nBenzathine Penicillin G 2.4 million units IM single dose\nor Aqueous Procaine Penicillin G 600,000 units IM daily × 10 days\n\nLate syphilis (latent >1 year or unknown duration, cardiovascular):\nBenzathine Penicillin G 2.4 million units IM weekly × 3 doses\n\nNeurosyphilis:\nAqueous Procaine Penicillin G 2.4 million units IM daily × 10 days\n+ Probenecid 500mg orally QDS × 10 days\nfollowed by Benzathine Penicillin G 2.4 million units IM weekly × 3 doses",
    secondLine: "Penicillin allergy — Early syphilis:\nDoxycycline 100mg orally BD × 14 days\nor Tetracycline 500mg orally QDS × 14 days\n\nPenicillin allergy — Late syphilis:\nDoxycycline 100mg orally BD × 28 days\n\nPenicillin allergy — Neurosyphilis:\nDoxycycline 100mg orally BD × 28 days (preferred oral alternative)\n(Consider penicillin desensitisation for neurosyphilis)",
    pregnancy: "Penicillin mandatory in pregnancy (same schedule for stage of syphilis).\nPenicillin-allergic: erythromycin (poor placental transfer — treat neonate with penicillin at birth).\nJarisch-Herxheimer reaction may precipitate premature labour — advise obstetric care.",
    notes: "Follow-up: Repeat RPR/VDRL at 3, 6, 12, 18, 24 months. Expect ≥4× (2-dilution) titre decrease within 6 months for early syphilis. Epidemiologic treatment of contacts: Benzathine Penicillin G 2.4M units IM single dose."
  },

  {
    name: "Lymphogranuloma Venereum (LGV)",
    category: "Bacterial STIs",
    notifyMOH: false,
    symptoms: [
      "Primary: painless papule or pustule at inoculation site (often unnoticed)",
      "Secondary: tender unilateral inguinal lymphadenopathy; 'groove sign' between inguinal and femoral nodes; fever, malaise",
      "Anorectal syndrome (MSM): proctitis, bloody/mucoid rectal discharge, tenesmus",
      "Tertiary: genital elephantiasis, rectal stricture, fistulae"
    ],
    diagnosticWorkup: [
      "Chlamydia NAAT (genital, rectal swab or urine) — LGV serovars L1, L2, L3",
      "LGV-specific PCR or serotyping if available",
      "Complement fixation titre ≥1:64 supports LGV diagnosis",
      "Bubo: aspirate for NAAT (do not incise — risk of fistula)"
    ],
    firstLine: "Doxycycline 100mg orally BD × 3 weeks",
    secondLine: "Azithromycin 1g orally weekly × 3 weeks\nor Erythromycin 500mg orally QDS × 3 weeks",
    pregnancy: "Erythromycin 500mg orally QDS × 3 weeks\n(avoid doxycycline in pregnancy)",
    notes: "Treat until all lesions healed (may require >3 weeks). Buboes: needle aspiration if fluctuant (prevents spontaneous rupture). Consider proctoscopy in MSM with anorectal symptoms."
  },

  {
    name: "Chancroid",
    category: "Bacterial STIs",
    notifyMOH: false,
    symptoms: [
      "One or more painful genital ulcers with ragged, undermined edges",
      "Ulcer bleeds easily on contact",
      "Tender unilateral inguinal lymphadenopathy; fluctuant bubo in ~50%",
      "Ulcers may be atypical in HIV-positive patients"
    ],
    diagnosticWorkup: [
      "Clinical diagnosis (exclude syphilis by dark-field/serology and HSV by PCR first)",
      "Culture of Haemophilus ducreyi from ulcer swab (requires special media, sensitivity <80%)",
      "PCR (most sensitive, if available)",
      "Note: RPR/VDRL negative; dark-field microscopy negative"
    ],
    firstLine: "Ceftriaxone 250mg IM single dose\nor Azithromycin 1g orally single dose",
    secondLine: "Ciprofloxacin 500mg orally BD × 3 days\nor Erythromycin 500mg orally QDS × 7 days",
    pregnancy: "Erythromycin 500mg orally QDS × 7 days\nor Ceftriaxone 250mg IM single dose\n(avoid ciprofloxacin)",
    notes: "Re-examine at 3–7 days. If no improvement: consider incorrect diagnosis, co-infection (HSV/syphilis), antibiotic resistance, or non-compliance. HIV co-infection may impair healing."
  },

  {
    name: "Granuloma Inguinale (Donovanosis)",
    category: "Bacterial STIs",
    notifyMOH: false,
    symptoms: [
      "Painless, progressive genital ulcer with beefy-red granulation tissue",
      "Bleeds easily on contact; no true lymphadenopathy",
      "Pseudobuboes: subcutaneous inguinal granulomas mimicking lymphadenopathy",
      "Ulcer can be destructive and spread; rare in Singapore (tropical/subtropical endemic)"
    ],
    diagnosticWorkup: [
      "Tissue smear (Giemsa or Wright stain): Donovan bodies within mononuclear macrophages",
      "Biopsy from lesion edge",
      "PCR if available",
      "Exclude syphilis and HSV"
    ],
    firstLine: "Azithromycin 1g orally weekly\nor Azithromycin 500mg orally daily\n(continue ≥3 weeks and until all lesions have fully healed)",
    secondLine: "Doxycycline 100mg orally BD ≥3 weeks\nor Trimethoprim-sulphamethoxazole 160/800mg orally BD ≥3 weeks\nor Ciprofloxacin 750mg orally BD ≥3 weeks",
    pregnancy: "Azithromycin\n(avoid doxycycline and trimethoprim-sulphamethoxazole in pregnancy)",
    notes: "Prolonged treatment required until all lesions heal. Relapse can occur 6–18 months after apparent cure. Treat sexual contacts."
  },

  {
    name: "Mycoplasma Genitalium",
    category: "Bacterial STIs",
    notifyMOH: false,
    symptoms: [
      "Often asymptomatic",
      "Men: urethral discharge, dysuria (NGU / urethritis)",
      "Women: cervicitis, post-coital bleeding, pelvic inflammatory disease symptoms",
      "Consider if recurrent or persistent NGU/PID unresponsive to standard therapy"
    ],
    diagnosticWorkup: [
      "NAAT (urine, urethral or cervical swab) — only practical diagnostic test",
      "Macrolide resistance mutation testing (A2058G/A2059G) recommended before treating",
      "Consider when standard NGU treatment fails after 4–6 weeks"
    ],
    firstLine: "Macrolide-sensitive (or resistance unknown):\nDoxycycline 100mg orally BD × 7 days\nthen Azithromycin 1g orally STAT + 500mg orally OD × 3 days\n\nMacrolide-resistant:\nDoxycycline 100mg orally BD × 7 days\nthen Moxifloxacin 400mg orally OD × 7–14 days",
    secondLine: "Moxifloxacin failure or resistance: consult ID specialist",
    pregnancy: "Azithromycin regimen (without doxycycline)\n(avoid doxycycline and moxifloxacin in pregnancy)",
    notes: "Start doxycycline first to reduce bacterial load and minimise risk of emergent macrolide resistance. Test of cure recommended 3–5 weeks after treatment completion."
  },

  // ── Male Genital Syndromes ────────────────────────────────────────────────

  {
    name: "Non-Gonococcal Urethritis (NGU)",
    category: "Male Genital Syndromes",
    notifyMOH: false,
    symptoms: [
      "Urethral discharge (clear, mucoid, or purulent)",
      "Dysuria or urethral discomfort/itch",
      "Often asymptomatic or symptoms very mild"
    ],
    diagnosticWorkup: [
      "Urethral smear: ≥5 WBC/hpf on microscopy",
      "NAAT for Chlamydia trachomatis and Gonorrhoea (urine or urethral swab)",
      "NAAT for Mycoplasma genitalium if persistent or recurrent NGU",
      "Urine dipstick / MSU to exclude UTI"
    ],
    firstLine: "Doxycycline 100mg orally BD × 7–14 days\n(14 days if M. genitalium not excluded)",
    secondLine: "Azithromycin 500mg orally STAT + 250mg orally OD × 4 days\nor Erythromycin 500mg orally QDS × 14 days",
    notes: "If M. genitalium confirmed or suspected: switch to Mycoplasma Genitalium regimen. Treat sexual partners within past 4 weeks. Abstain or use condoms until both partners treated. Test of cure not routinely needed unless symptoms persist."
  },

  {
    name: "Acute Epididymo-Orchitis",
    category: "Male Genital Syndromes",
    notifyMOH: false,
    symptoms: [
      "Acute unilateral scrotal pain and swelling",
      "Scrotal tenderness, erythema, warmth",
      "May have urethral discharge or symptoms of urethritis",
      "Fever in severe cases",
      "Always exclude testicular torsion (more acute onset, no urethritis)"
    ],
    diagnosticWorkup: [
      "NAAT for Chlamydia and Gonorrhoea (urine or urethral swab) — essential in sexually active men <35 years",
      "Scrotal ultrasound if torsion cannot be excluded clinically",
      "Urine dipstick and culture (enteric organisms more common in men >35 or post-urological procedure)",
      "Blood cultures if febrile"
    ],
    firstLine: "STI-related (sexually active men, age <35):\nCeftriaxone 500mg IM single dose\n+ Doxycycline 100mg orally BD × 10–14 days\n\nEnteric organisms (men >35 or after urological procedure):\nOfloxacin 200mg orally BD × 14 days\nor Levofloxacin 500mg orally OD × 10–14 days",
    secondLine: "Penicillin allergy (STI-related):\nLevofloxacin 500mg orally OD × 10 days\n(note increasing fluoroquinolone resistance in GC)",
    notes: "NSAIDS and scrotal support for pain relief. Refer urology if abscess suspected, no improvement within 3 days, or torsion cannot be excluded."
  },

  {
    name: "Acute Bacterial Prostatitis",
    category: "Male Genital Syndromes",
    notifyMOH: false,
    symptoms: [
      "Pelvic, perineal or lower back pain",
      "Dysuria, frequency, urgency",
      "Tender, swollen, boggy prostate on digital rectal examination",
      "Fever, chills, malaise",
      "Urethral discharge may be present"
    ],
    diagnosticWorkup: [
      "MSU urine culture before antibiotics",
      "NAAT for Chlamydia and Gonorrhoea",
      "Blood cultures if febrile or septic",
      "PSA: elevated but non-specific in acute prostatitis",
      "Avoid expressed prostatic secretions in acute phase (risk of bacteraemia)"
    ],
    firstLine: "Ciprofloxacin 500mg orally BD × 14–28 days\nor Ofloxacin 200mg orally BD × 14–28 days",
    secondLine: "Co-trimoxazole 160/800mg orally BD × 14–28 days\n(guide by urine culture and sensitivities)",
    notes: "Ensure adequate hydration. NSAIDS for pain relief. Refer urology if no improvement in 48–72 hours, abscess suspected, or urinary retention develops."
  },

  // ── Vaginal Syndromes ────────────────────────────────────────────────────

  {
    name: "Bacterial Vaginosis",
    category: "Vaginal Syndromes",
    notifyMOH: false,
    symptoms: [
      "Thin, homogeneous grey-white vaginal discharge",
      "Fishy/musty odour (worse after sex or during menses)",
      "Vaginal pruritus or irritation (less common)",
      "Vaginal pH >4.5; no significant vaginal inflammation"
    ],
    diagnosticWorkup: [
      "Amsel criteria (≥3 of 4): (1) homogeneous grey-white discharge, (2) vaginal pH >4.5, (3) positive whiff test (fishy odour with 10% KOH), (4) clue cells on wet mount microscopy",
      "Nugent score on Gram stain (score 7–10 = BV)",
      "Note: BV is not classified as an STI but sexual activity is a risk factor"
    ],
    firstLine: "Metronidazole 400–500mg orally BD × 5–7 days\nor Metronidazole 2g orally single dose\nor Clindamycin 2% vaginal cream once daily × 7 days",
    secondLine: "Clindamycin 300mg orally BD × 7 days\nor Tinidazole 2g orally daily × 2 days",
    pregnancy: "Metronidazole 400mg orally BD × 5–7 days\n(preferred after first trimester; avoid 2g single dose)\nor Clindamycin 2% vaginal cream × 7 days",
    notes: "Avoid alcohol during and 24h after metronidazole (disulfiram-like reaction). Screen for co-existing STIs. Recurrence is common (~50% within 3 months). Male partners do not need routine treatment."
  },

  {
    name: "Vulvovaginal Candidiasis",
    category: "Vaginal Syndromes",
    notifyMOH: false,
    symptoms: [
      "Vulvar pruritus and burning",
      "Thick white 'cottage cheese' discharge (non-offensive odour)",
      "Vulvar erythema, swelling, excoriation, satellite lesions",
      "Dysuria (external), dyspareunia",
      "Vaginal pH typically <4.5"
    ],
    diagnosticWorkup: [
      "Wet mount with 10% KOH: hyphae, pseudohyphae, or budding yeast spores",
      "Vaginal swab for culture (if recurrent or treatment failure — to identify non-albicans Candida)",
      "Check for predisposing factors: diabetes, immunosuppression, recent antibiotics"
    ],
    firstLine: "Topical:\nClotrimazole pessary 200mg × 3 days\nor Clotrimazole pessary 500mg single dose\n\nOral:\nFluconazole 150mg orally single dose\n\nRecurrent (≥4 episodes/year):\nFluconazole 150mg orally weekly × 6 months (after induction)",
    secondLine: "Miconazole, econazole, or other topical azoles\nor Itraconazole 200mg orally BD × 1 day or 200mg OD × 3 days",
    pregnancy: "Topical azoles only (7-day course preferred)\n(oral azoles are contraindicated in pregnancy)",
    notes: "Avoid douching. Treat symptomatic male partners if recurrent. Consider underlying diabetes or HIV in recurrent or refractory cases."
  },

  {
    name: "Trichomoniasis",
    category: "Vaginal Syndromes",
    notifyMOH: false,
    symptoms: [
      "Women: frothy yellow-green vaginal discharge (10–30%); vulval itching, dysuria, offensive odour",
      "Strawberry cervix (punctate haemorrhages on cervix) in ~2% of women",
      "Men: usually asymptomatic; may have urethral discharge, dysuria, or balanitis",
      "Up to 50% of infected individuals are asymptomatic"
    ],
    diagnosticWorkup: [
      "NAAT (urine or vaginal swab) — highest sensitivity, test of choice",
      "Wet mount microscopy (posterior fornix): motile trichomonads — read within 10 min (sensitivity 60–70%)",
      "Culture (sensitivity 75–96%) — can detect in men",
      "Point-of-care OSOM Trichomonas Rapid Test"
    ],
    firstLine: "Metronidazole 400–500mg orally BD × 7 days\nor Metronidazole 2g orally single dose\nor Tinidazole 2g orally single dose",
    secondLine: "Persistent symptoms — retreatment:\nMetronidazole 400mg orally BD × 7 days\n\nSecond failure:\nMetronidazole 2g orally OD × 5–7 days",
    pregnancy: "Metronidazole 400–500mg orally BD × 7 days (safe in all trimesters)\n(Avoid breastfeeding for 12–24h after single 2g dose)",
    notes: "Treat all sexual partners within past 4 weeks. HIV-positive women: use 7-day course (single dose less effective). Avoid alcohol during treatment. Rescreening at 3 months recommended."
  },

  // ── Female Genital Syndromes ──────────────────────────────────────────────

  {
    name: "Mucopurulent Cervicitis (MPC)",
    category: "Female Genital Syndromes",
    notifyMOH: false,
    symptoms: [
      "Mucopurulent cervical discharge (yellow/green on swab)",
      "Cervical friability (contact bleeding on swabbing)",
      "Post-coital or intermenstrual bleeding",
      "Dyspareunia or mild pelvic discomfort",
      "Often asymptomatic"
    ],
    diagnosticWorkup: [
      "Endocervical Gram stain: Gram-negative diplococci inside PMNs = suspect GC",
      "NAAT for Gonorrhoea and Chlamydia (endocervical / vaginal swab or urine)",
      "NAAT for Mycoplasma genitalium if initial treatment fails or recurrent MPC",
      "Bimanual examination to exclude PID"
    ],
    firstLine: "GC seen on Gram stain:\nTreat as per Gonorrhoea regimen\n\nNo GC (treat for Chlamydia):\nDoxycycline 100mg orally BD × 7 days\n\nM. genitalium confirmed/suspected:\nDoxycycline 100mg orally BD × 7 days\n+ Moxifloxacin 400mg orally OD × 7–14 days (macrolide resistant)",
    secondLine: "Azithromycin 1g orally single dose\n(if doxycycline not tolerated; lower efficacy for M. genitalium)",
    notes: "Always collect endocervical specimens for GC culture and NAAT before treating. Treat sexual partners. Review in 1–2 weeks; if no improvement, consider M. genitalium or co-pathogens."
  },

  {
    name: "Pelvic Inflammatory Disease (PID)",
    category: "Female Genital Syndromes",
    notifyMOH: false,
    symptoms: [
      "Lower abdominal/pelvic pain (typically bilateral)",
      "Cervical motion tenderness (chandelier sign)",
      "Uterine or adnexal tenderness on bimanual examination",
      "Abnormal vaginal or cervical discharge",
      "Fever >38.3°C and systemic upset (in severe disease)",
      "Dyspareunia"
    ],
    diagnosticWorkup: [
      "NAAT for Gonorrhoea and Chlamydia (endocervical/vaginal swab)",
      "Endocervical Gram stain",
      "Pelvic ultrasound — if tubo-ovarian abscess (TOA) suspected",
      "FBC, ESR/CRP; serum beta-hCG (exclude ectopic pregnancy)",
      "Laparoscopy: gold standard — reserved for uncertain diagnosis or failure to respond"
    ],
    firstLine: "Outpatient:\nCeftriaxone 500mg IM single dose\n+ Doxycycline 100mg orally BD × 14 days\n+ Metronidazole 400mg orally BD × 14 days\n\nInpatient (IV → oral):\nCeftriaxone 1g IV OD + Doxycycline 100mg IV/oral BD × 14 days\nor Cefoxitin 2g IV q6h + Doxycycline 100mg IV/oral BD × 14 days",
    secondLine: "Penicillin allergy (outpatient):\nOfloxacin 400mg orally BD × 14 days\n+ Metronidazole 400mg orally BD × 14 days\n(check local GC fluoroquinolone sensitivity first)",
    pregnancy: "Hospitalise. Avoid doxycycline and fluoroquinolones.\nCeftriaxone 1g IV OD + Azithromycin + Metronidazole",
    notes: "Indications for hospitalisation: TOA, severe illness, unable to tolerate oral therapy, failure of outpatient treatment, uncertain diagnosis. Clinical review within 72 hours. Treat sexual partners. IUD removal not always necessary but may be considered."
  },

  // ── Viral STIs ────────────────────────────────────────────────────────────

  {
    name: "Genital Herpes (HSV)",
    category: "Viral STIs",
    notifyMOH: false,
    symptoms: [
      "Primary episode: multiple painful vesicles/ulcers on genitalia and perianal area; systemic symptoms (fever, malaise, myalgia); tender inguinal lymphadenopathy",
      "Recurrent episodes: prodromal tingling/burning; fewer, smaller lesions; shorter duration (3–5 days); systemic symptoms uncommon",
      "Atypical presentations: fissures, erythema, urethritis, cervicitis",
      "Complications: sacral radiculopathy (urinary retention), meningitis (rare)"
    ],
    diagnosticWorkup: [
      "PCR from ulcer / vesicle swab — type-specific (HSV-1 vs HSV-2); test of choice",
      "Viral culture (less sensitive than PCR)",
      "Type-specific serology (HSV-1 IgG / HSV-2 IgG) — for asymptomatic individuals or when no active lesions",
      "Tzanck smear (multinucleated giant cells) — low sensitivity, non-specific"
    ],
    firstLine: "Primary episode:\nAcyclovir 400mg orally TDS × 7–10 days\nor Valacyclovir 1g orally BD × 7–10 days\nor Famciclovir 250mg orally TDS × 7–10 days\n\nRecurrent episode (episodic):\nAcyclovir 400mg orally TDS × 5 days\nor Acyclovir 800mg orally BD × 5 days\nor Valacyclovir 500mg orally BD × 3–5 days",
    secondLine: "Suppressive therapy (frequent recurrences ≥6/year):\nAcyclovir 400mg orally BD continuously\nor Valacyclovir 500mg orally OD continuously",
    pregnancy: "Acyclovir 400mg orally TDS (considered safe in pregnancy)\nSuppression from 36 weeks if history of recurrent HSV\nConsider caesarean section if active lesions at delivery",
    notes: "Counsel on asymptomatic viral shedding — transmission risk exists without visible lesions. Condoms reduce but do not eliminate transmission risk. Neonatal HSV is rare but serious — refer if primary HSV near term."
  },

  {
    name: "HPV / Genital Warts",
    category: "Viral STIs",
    notifyMOH: false,
    symptoms: [
      "Flesh-coloured, cauliflower-like or flat papules/plaques on external genitalia, perianal area, vaginal mucosa, cervix, or urethra",
      "Usually painless; may cause pruritus, bleeding, or discomfort",
      "Most caused by low-risk HPV types 6 and 11",
      "Subclinical HPV infection (not visible) is more common than visible warts"
    ],
    diagnosticWorkup: [
      "Clinical inspection — most external genital warts are diagnosed clinically",
      "Biopsy if diagnosis uncertain, unusual appearance, recurrence, or treatment failure",
      "Cervical cytology and colposcopy for HPV-related cervical changes",
      "Routine HPV typing not recommended for external warts"
    ],
    firstLine: "Patient-applied (home):\nImiquimod 5% cream 3× per week (wash off after 6–10h) up to 16 weeks\nor Podophyllotoxin 0.5% solution BD × 3 days, rest 4 days, up to 4 cycles\n\nClinic-applied:\nCryotherapy (liquid nitrogen) every 1–3 weeks\nor TCA (trichloroacetic acid) 80–90% applied carefully weekly",
    secondLine: "Electrosurgery, laser surgery, or surgical excision (extensive or resistant warts)\nor Sinecatechins 15% ointment TDS up to 16 weeks",
    pregnancy: "TCA or cryotherapy (avoid podophyllin, podophyllotoxin and imiquimod in pregnancy)\nLarge warts near delivery may require treatment to prevent obstructed labour",
    notes: "Warts often resolve spontaneously (20–30% within 3 months). Treatment reduces but does not eliminate HPV transmission. Offer HPV vaccination (Gardasil-9). Cervical cancer screening continues regardless of vaccination status."
  },

  {
    name: "Molluscum Contagiosum",
    category: "Viral STIs",
    notifyMOH: false,
    symptoms: [
      "Multiple small (1–5mm) flesh-coloured papules with central umbilication",
      "Genitalia, perianal area, inner thighs, lower abdomen in adults (sexually transmitted)",
      "Usually painless; may cause pruritus or surrounding inflammation",
      "Immunocompromised: large (>5mm), numerous, atypical lesions"
    ],
    diagnosticWorkup: [
      "Clinical diagnosis in most cases",
      "Dermoscopy: polylobular white-yellowish amorphous structures ('popcorn pattern')",
      "Skin biopsy if uncertain (Henderson-Patterson bodies on histology)",
      "Screen for co-existing STIs"
    ],
    firstLine: "Deroofing with application of:\nLiquid nitrogen cryotherapy (every 2–4 weeks)\nor TCA 25–35%\nor Electrocautery (single treatment often curative)",
    secondLine: "Topical imiquimod 5% cream 3× per week\nor Topical tretinoin 0.025–0.05%\nor Salicylic acid",
    notes: "Often self-limiting in immunocompetent adults (resolves in 6–12 months). Treat sexual partners. In HIV patients, immune reconstitution with ART may help resolve extensive lesions."
  },

  // ── HIV-related ───────────────────────────────────────────────────────────

  {
    name: "HIV Post-Exposure Prophylaxis (PEP)",
    category: "HIV-related",
    notifyMOH: false,
    symptoms: [
      "Indication: recent high-risk sexual exposure (within 72 hours), needlestick injury, or sexual assault",
      "High-risk exposures: receptive anal sex, insertive anal sex or receptive vaginal sex with HIV-positive partner",
      "Start ASAP — ideally within 2 hours, no later than 72 hours post-exposure"
    ],
    diagnosticWorkup: [
      "HIV Ag/Ab 4th-generation combo test at baseline (day 0)",
      "HIV RNA PCR if very recent exposure suspected (window period <3 weeks)",
      "Repeat HIV Ag/Ab at 4–6 weeks and 12 weeks post-exposure",
      "Baseline: HBsAg, anti-HBs, Hepatitis C Ab, renal function (creatinine/eGFR)",
      "STI screen: GC / Chlamydia / Syphilis"
    ],
    firstLine: "2-drug regimen (lower-risk exposures):\nTenofovir (TDF) 300mg + Emtricitabine (FTC) 200mg orally OD × 28 days\n\n3-drug regimen (preferred for higher-risk):\nTDF/FTC + Dolutegravir (DTG) 50mg orally OD × 28 days\nor TDF/FTC + Raltegravir (RAL) 400mg orally BD × 28 days",
    secondLine: "If TDF contraindicated (renal impairment):\nZidovudine (AZT) + Lamivudine (3TC) ± DTG\n(consult ID specialist)",
    notes: "Must start within 72 hours (ideally ≤2 hours). Complete full 28-day course — missed doses reduce efficacy. Counsel on safer sex during PEP. Consider transition to PrEP if ongoing risk. Refer to HIV specialist."
  },

  {
    name: "HIV Pre-Exposure Prophylaxis (PrEP)",
    category: "HIV-related",
    notifyMOH: false,
    symptoms: [
      "Indication: HIV-negative individuals at high ongoing risk of HIV acquisition",
      "High-risk groups: MSM with multiple partners or unprotected anal sex, serodiscordant couples, sex workers, people who inject drugs (PWID)"
    ],
    diagnosticWorkup: [
      "HIV Ag/Ab test (must confirm HIV-negative before starting)",
      "HBsAg and anti-HBs (TDF/FTC is active against HBV — do not stop abruptly if HBsAg positive)",
      "Renal function (creatinine, eGFR) — TDF can be nephrotoxic",
      "STI screen (GC / Chlamydia / Syphilis / Hep C) — repeat every 3 months on PrEP",
      "HIV test every 3 months; watch for seroconversion symptoms"
    ],
    firstLine: "Daily PrEP (all populations):\nTenofovir / Emtricitabine (TDF 300mg + FTC 200mg) orally OD — continuous daily dosing\n\nOn-demand PrEP (MSM only — '2-1-1' regimen):\n2 tabs 2–24 hours before sex\nthen 1 tab 24h after first dose\nthen 1 tab 48h after first dose",
    notes: "Daily PrEP preferred for non-MSM, frequent sexual activity, or HBV co-infection. On-demand PrEP not recommended for transgender women on hormones or HBsAg-positive individuals. Monitor renal function and STIs every 3 months. PrEP does not prevent other STIs — promote condom use."
  },

  {
    name: "HIV Infection",
    category: "HIV-related",
    notifyMOH: true,
    symptoms: [
      "Acute seroconversion (2–4 weeks post-exposure): flu-like illness, fever, maculopapular rash, lymphadenopathy, pharyngitis, oral ulcers, myalgia, arthralgia",
      "Chronic HIV: asymptomatic for years; constitutional symptoms (weight loss, night sweats, diarrhoea) as CD4 declines",
      "AIDS-defining conditions (CD4 <200): PCP pneumonia, CMV retinitis, cryptococcal meningitis, toxoplasmosis, Kaposi sarcoma"
    ],
    diagnosticWorkup: [
      "HIV 4th-generation Ag/Ab combo test (screening)",
      "Reactive: confirm with Western blot / HIV-1/2 differentiation assay or HIV RNA PCR",
      "Baseline workup: CD4 count, HIV viral load, FBC, LFTs, renal function, lipids",
      "STI screen, Hepatitis A/B/C serology, CMV/Toxoplasma IgG",
      "TB screening (Mantoux or IGRA)"
    ],
    firstLine: "Refer to Infectious Diseases specialist for ART initiation.\nTreat ALL HIV-positive individuals regardless of CD4 count.\n\nPreferred regimens (INSTI-based):\nTenofovir / Emtricitabine + Dolutegravir (TDF/FTC + DTG)\nor Abacavir / Lamivudine + Dolutegravir (ABC/3TC + DTG)\n(requires HLA-B*57:01 testing before abacavir)",
    notes: "MOH notifiable — notify within 72 hours of diagnosis. Goal: undetectable viral load (<50 copies/mL). Screen all sexual contacts and household members. Opportunistic infection prophylaxis when CD4 <200. Vaccinations: Hep A, Hep B, Pneumococcal, Influenza. Counsel on U=U (Undetectable = Untransmittable)."
  },

  // ── Ectoparasites ─────────────────────────────────────────────────────────

  {
    name: "Pediculosis Pubis (Pubic Lice)",
    category: "Ectoparasites",
    notifyMOH: false,
    symptoms: [
      "Intense pruritus in pubic region (and other coarse-haired areas: axilla, beard, eyebrows, eyelashes)",
      "Visible lice or nits (eggs) attached to hair shafts",
      "Maculae caeruleae: bluish-grey skin discolouration from lice bites",
      "Excoriation and secondary bacterial infection from scratching"
    ],
    diagnosticWorkup: [
      "Clinical identification of lice or nits under magnification (magnifying glass or dermatoscope)",
      "Dermoscopy: lice appear as crustacean-shaped organisms; nits as oval structures on hair shafts",
      "Screen for co-existing STIs"
    ],
    firstLine: "Malathion 0.5% aqueous lotion applied to affected areas, left for 12 hours, then washed off\nRepeat in 7 days",
    secondLine: "Ivermectin 250 mcg/kg orally single dose, repeated in 2 weeks\nor Permethrin 1% cream rinse (repeat in 7 days)",
    notes: "Treat all sexual contacts and close household contacts simultaneously. Wash clothing, bedding, towels in hot water (>60°C) or seal in plastic bags ≥2 weeks. For eyelash involvement: apply petroleum jelly twice daily × 10 days (avoid pediculicides near eyes)."
  },

  {
    name: "Scabies",
    category: "Ectoparasites",
    notifyMOH: false,
    symptoms: [
      "Intense pruritus, typically worse at night",
      "Linear burrows in web spaces of fingers, wrists, flexor surfaces, genitalia, buttocks, waist",
      "Papular or vesicular rash; secondary bacterial infection from scratching",
      "Norwegian (crusted) scabies in immunocompromised: extensive thick scaly crusts, highly contagious"
    ],
    diagnosticWorkup: [
      "Clinical diagnosis based on characteristic distribution and history",
      "Skin scraping from burrow: microscopy for mites, eggs, or feces (scybala)",
      "Dermoscopy: 'delta-wing jet with contrails' sign (mite at end of burrow)",
      "Screen for co-existing STIs if sexually acquired"
    ],
    firstLine: "Malathion 0.5% lotion applied to whole body (below neck) × 24 hours, repeat in 7 days\nor Permethrin 5% cream applied to whole body (below neck) overnight, repeat in 7 days",
    secondLine: "Benzyl benzoate 25% emulsion × 3 consecutive nights\nor Ivermectin 200 mcg/kg orally single dose, repeat in 2 weeks\n(Ivermectin preferred for Norwegian/crusted scabies — may require multiple doses)",
    notes: "Treat ALL household and sexual contacts simultaneously on the same day. Wash clothing, bedding, towels in hot water. Pruritus may persist 4–6 weeks post-treatment (hypersensitivity reaction — does not indicate treatment failure). For Norwegian scabies: combination oral ivermectin + topical treatment."
  },

  // ── Viral Hepatitis ───────────────────────────────────────────────────────

  {
    name: "Hepatitis A",
    category: "Viral Hepatitis",
    notifyMOH: true,
    symptoms: [
      "Prodromal phase (3–10 days): flu-like symptoms (malaise, fatigue, myalgia, anorexia, nausea), right upper quadrant pain, fever",
      "Icteric phase (1–3 weeks): jaundice, dark urine, pale stools, hepatomegaly and tenderness",
      "Most children and up to 50% of adults are asymptomatic or have mild illness",
      "Fulminant hepatitis in <0.4% of cases"
    ],
    diagnosticWorkup: [
      "HAV IgM — positive in acute/current infection (remains positive ~6 months)",
      "HAV IgG — past infection or immunity (persists lifelong; does not distinguish current from past)",
      "AST / ALT (markedly elevated), Bilirubin, ALP",
      "PT/INR if fulminant hepatitis suspected"
    ],
    firstLine: "Supportive treatment:\nRest and oral hydration\nAvoid alcohol and hepatotoxic medications\nAvoid food handling and unprotected sexual contact until non-infectious (1 week after onset of jaundice)",
    notes: "Notifiable disease. No specific antiviral. Prevention: HAV vaccine 2 doses at 0 and 6–12 months. Post-exposure prophylaxis: HAV vaccine within 14 days of exposure. Notify at-risk sexual contacts (anal/oral contacts 2 weeks before to 1 week after jaundice onset)."
  },

  {
    name: "Hepatitis B",
    category: "Viral Hepatitis",
    notifyMOH: true,
    symptoms: [
      "Acute (70% asymptomatic): prodromal serum-sickness-like illness, then jaundice, malaise, anorexia, nausea, right upper quadrant pain",
      "Chronic (mostly asymptomatic until advanced): fatigue, malaise; stigmata of chronic liver disease",
      "Complications: cirrhosis, hepatocellular carcinoma (HCC)"
    ],
    diagnosticWorkup: [
      "HBsAg — presence of HBV infection (positive >6 months = chronic)",
      "HBeAg — active viral replication, high infectivity",
      "Anti-HBc IgM — acute infection",
      "Anti-HBc IgG — past or chronic infection",
      "Anti-HBs — protective antibody (immunity; >10 IU/L)",
      "HBV DNA (viral load) — for treatment decisions",
      "LFTs, AFP, abdominal ultrasound — for HCC surveillance every 6 months"
    ],
    firstLine: "Acute HBV (severe/fulminant):\nTenofovir or Entecavir (consult gastroenterologist)\n\nAcute HBV (mild-moderate): Supportive (most self-limit)\n\nChronic HBV — refer to hepatologist:\nTenofovir (TDF or TAF) — first-line, low resistance\nor Entecavir — first-line, low resistance\n(Avoid entecavir if on ART for HIV — risk of M184V mutation)",
    notes: "Notifiable disease. Universal vaccination in Singapore since 1987 (0, 1, 6 months). Newborns of HBsAg+ mothers: HBIG + HBV vaccine within 12 hours of birth. Screen household and sexual contacts; vaccinate if non-immune. Annual anti-HBs in HIV-positive patients."
  },

  {
    name: "Hepatitis C",
    category: "Viral Hepatitis",
    notifyMOH: true,
    symptoms: [
      ">80% of acute HCV infection is asymptomatic",
      "Acute icteric hepatitis (uncommon): jaundice, fatigue, right upper quadrant pain",
      "Chronic (asymptomatic for years): non-specific malaise; progressive liver disease in 20–30% over 20–30 years",
      "Complications: cirrhosis, hepatocellular carcinoma, liver failure"
    ],
    diagnosticWorkup: [
      "HCV antibody (ELISA / immunoassay) — screening; may be negative up to 9 weeks post-exposure",
      "HCV RNA PCR — confirms active infection; positive by 2 weeks post-exposure",
      "Chronic HCV: HCV RNA positive >6 months after infection",
      "HCV genotype assay — guides DAA regimen choice",
      "LFTs, FBC; FibroScan or biopsy for fibrosis staging"
    ],
    firstLine: "Acute HCV:\nSupportive; observe 6 months for spontaneous clearance before initiating DAAs\n(Treat earlier if high transmission risk or severe liver disease)\n\nChronic HCV — refer to gastroenterologist / hepatologist:\nDirect-Acting Antiviral (DAA) therapy (genotype-dependent regimen)\nGoal: Sustained Virological Response (SVR12) — undetectable HCV RNA 12 weeks post-treatment",
    notes: "Acute HCV is notifiable. No vaccine available — vaccinate against Hepatitis A and B. High-risk groups to screen: PWID, MSM, HIV-positive individuals, sexual partners of HCV-positive individuals, tattoo recipients. No post-exposure prophylaxis. Consistent condom use reduces (not eliminates) sexual transmission risk."
  }

];
