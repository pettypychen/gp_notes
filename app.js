document.addEventListener("DOMContentLoaded", function () {
  // --- Tab switching ---
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tabButtons.forEach(function (b) { b.classList.remove("active"); });
      tabPanels.forEach(function (p) { p.classList.remove("active"); });
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  // --- SOAP Notes tab ---
  const data = window.CONDITIONS || [];
  const dxInput = document.getElementById("dxInput");
  const hxOutput = document.getElementById("hxOutput");
  const oeOutput = document.getElementById("oeOutput");
  const ixOutput = document.getElementById("ixOutput");
  const txOutput = document.getElementById("txOutput");
  const copyHxButton = document.getElementById("copyHxButton");
  const copyOeButton = document.getElementById("copyOeButton");
  const searchResults = document.getElementById("searchResults");
  const editor = document.getElementById("editor");
  const copyEditorButton = document.getElementById("copyEditorButton");
  const clearEditorButton = document.getElementById("clearEditorButton");

  let currentResultIndex = -1;

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      // Fallback for file:// protocol where clipboard API may not work
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
  }

  function appendToEditor(contentToAdd) {
    if (!contentToAdd) return;
    if (editor.value === "") {
      editor.value = contentToAdd;
    } else {
      var lastChar = editor.value.slice(-1);
      editor.value += (lastChar === "\n" ? "\n" : "\n\n") + contentToAdd;
    }
  }

  function selectEntry(entry) {
    dxInput.value = entry.Dx;
    hxOutput.value = entry.Hx.replace(/\n+/g, "\n");
    oeOutput.value = entry.OE.replace(/\n+/g, "\n");
    ixOutput.value = entry.Ix;
    txOutput.value = entry.Tx.replace(/\n+/g, "\n");

    // Clear editor and populate with Hx + OE + Tx
    editor.value = "";
    var parts = [];
    if (entry.Hx) parts.push(entry.Hx.replace(/\n+/g, "\n"));
    if (entry.OE) parts.push(entry.OE.replace(/\n+/g, "\n"));
    if (entry.Tx) parts.push(entry.Tx.replace(/\n+/g, "\n"));
    appendToEditor(parts.join("\n\n"));

    searchResults.style.display = "none";
    hxOutput.style.display = "block";
    oeOutput.style.display = "block";
    ixOutput.style.display = "block";
    txOutput.style.display = "block";
  }

  // Search input
  dxInput.addEventListener("input", function () {
    var userInput = dxInput.value.toLowerCase();
    var matchingEntries = data.filter(function (item) {
      return item.Dx.toLowerCase().includes(userInput);
    });

    if (matchingEntries.length > 0) {
      matchingEntries.sort(function (a, b) { return a.Dx.localeCompare(b.Dx); });
      searchResults.innerHTML = matchingEntries.map(function (entry) {
        return "<div>" + entry.Dx + "</div>";
      }).join("");
      hxOutput.style.display = "none";
      oeOutput.style.display = "none";
      ixOutput.style.display = "none";
      txOutput.style.display = "none";
      searchResults.style.display = "block";
    } else {
      searchResults.style.display = "none";
      hxOutput.style.display = "block";
      oeOutput.style.display = "block";
      ixOutput.style.display = "block";
      txOutput.style.display = "block";
      hxOutput.value = "No corresponding content found.";
      oeOutput.value = "No corresponding content found.";
      ixOutput.value = "No corresponding content found.";
      txOutput.value = "No corresponding content found.";
    }
    currentResultIndex = -1;
  });

  // Keyboard navigation
  dxInput.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      currentResultIndex = Math.min(currentResultIndex + 1, searchResults.children.length - 1);
      highlightResult(currentResultIndex);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      currentResultIndex = Math.max(currentResultIndex - 1, -1);
      highlightResult(currentResultIndex);
    } else if (event.key === "Enter" && currentResultIndex !== -1) {
      event.preventDefault();
      var clickedDx = searchResults.children[currentResultIndex].innerText;
      var matchingEntry = data.find(function (item) { return item.Dx === clickedDx; });
      if (matchingEntry) selectEntry(matchingEntry);
    }
  });

  // Click on search result
  searchResults.addEventListener("click", function (event) {
    if (event.target.tagName === "DIV") {
      var clickedDx = event.target.innerText;
      var matchingEntry = data.find(function (item) { return item.Dx === clickedDx; });
      if (matchingEntry) selectEntry(matchingEntry);
    }
  });

  function highlightResult(index) {
    for (var i = 0; i < searchResults.children.length; i++) {
      if (i === index) {
        searchResults.children[i].classList.add("highlighted");
      } else {
        searchResults.children[i].classList.remove("highlighted");
      }
    }
  }

  // Copy buttons
  copyHxButton.addEventListener("click", function () {
    copyToClipboard(hxOutput.value);
    appendToEditor(hxOutput.value);
  });

  copyOeButton.addEventListener("click", function () {
    copyToClipboard(oeOutput.value);
    appendToEditor(oeOutput.value);
  });

  copyEditorButton.addEventListener("click", function () {
    copyToClipboard(editor.value);
  });

  clearEditorButton.addEventListener("click", function () {
    editor.value = "";
  });

  // --- Referrals tab ---
  var referrals = window.REFERRALS || [];
  var referralSelect = document.getElementById("referralSelect");
  var referralEditor = document.getElementById("referralEditor");
  var copyReferralButton = document.getElementById("copyReferralButton");
  var clearReferralButton = document.getElementById("clearReferralButton");

  // Populate dropdown
  referrals.forEach(function (ref) {
    var option = document.createElement("option");
    option.value = ref.id;
    option.textContent = ref.name;
    referralSelect.appendChild(option);
  });

  referralSelect.addEventListener("change", function () {
    var selected = referrals.find(function (r) { return r.id === referralSelect.value; });
    if (selected) {
      referralEditor.value = selected.content;
    } else {
      referralEditor.value = "";
    }
  });

  copyReferralButton.addEventListener("click", function () {
    copyToClipboard(referralEditor.value);
  });

  clearReferralButton.addEventListener("click", function () {
    referralEditor.value = "";
    referralSelect.value = "";
  });

  // --- Paeds Dosing tab ---
  var paedsMeds = window.PAEDS_MEDS || [];
  var paedsAgeYears = document.getElementById("paedsAgeYears");
  var paedsAgeMonths = document.getElementById("paedsAgeMonths");
  var paedsWeight = document.getElementById("paedsWeight");
  var paedsMedSearch = document.getElementById("paedsMedSearch");
  var paedsMedResults = document.getElementById("paedsMedResults");
  var paedsMedList = document.getElementById("paedsMedList");
  var paedsDoseOutput = document.getElementById("paedsDoseOutput");
  var selectedPaedsMeds = [];

  function getPaedsAgeMonths() {
    var y = parseInt(paedsAgeYears.value) || 0;
    var m = parseInt(paedsAgeMonths.value) || 0;
    return y * 12 + m;
  }

  function getPaedsWeight() {
    return parseFloat(paedsWeight.value) || 0;
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function rowMatches(med, row) {
    var ageM = getPaedsAgeMonths();
    var wt = getPaedsWeight();
    if (ageM === 0 && wt === 0) return false;

    if (med.matchBy === "weight") {
      // Weight-based: check weight first, fall back to age
      if (row.wtMin != null && row.wtMax != null && wt > 0) {
        var wtMatch = wt >= row.wtMin && wt <= row.wtMax;
        // If row also has age constraints, check those too
        if (row.ageMin != null && row.ageMax != null && ageM > 0) {
          return wtMatch && ageM >= row.ageMin && ageM < row.ageMax;
        }
        return wtMatch;
      }
      return false;
    }

    // Age-based
    if (ageM > 0 && row.ageMin != null && row.ageMax != null) {
      return ageM >= row.ageMin && ageM < row.ageMax;
    }
    return false;
  }

  function renderPaedsTables() {
    if (selectedPaedsMeds.length === 0) {
      paedsDoseOutput.innerHTML = '<div class="paeds-empty">Search and select a medication to see dosing.</div>';
      return;
    }

    var html = "";
    selectedPaedsMeds.forEach(function (med, idx) {
      html += '<div class="paeds-card">';
      html += '<div class="paeds-card-header">';
      html += '<div><span class="paeds-card-title">' + escapeHtml(med.name) + '</span>';
      html += '<span class="paeds-card-category">' + escapeHtml(med.category) + '</span></div>';
      html += '<button class="paeds-remove-btn" data-idx="' + idx + '">&times;</button>';
      html += '</div>';

      if (med.formula) {
        html += '<div class="paeds-formula">' + escapeHtml(med.formula) + '</div>';
      }
      if (med.notes) {
        html += '<div class="paeds-notes">' + escapeHtml(med.notes) + '</div>';
      }

      if (med.rows.length > 0) {
        html += '<table class="paeds-table"><thead><tr>';
        html += '<th>' + (med.matchBy === "weight" ? "Weight" : "Age") + '</th>';
        med.columns.forEach(function (col) {
          html += '<th>' + escapeHtml(col) + '</th>';
        });
        html += '</tr></thead><tbody>';

        med.rows.forEach(function (row) {
          var match = rowMatches(med, row);
          var contraindicated = row.doses.some(function (d) { return d === "CONTRAINDICATED"; });
          var cls = "";
          if (match && contraindicated) cls = ' class="paeds-row-danger"';
          else if (match) cls = ' class="paeds-row-match"';

          html += '<tr' + cls + '>';
          html += '<td class="paeds-label-cell">' + escapeHtml(row.label) + '</td>';
          row.doses.forEach(function (dose) {
            var cellCls = dose === "CONTRAINDICATED" ? ' class="paeds-cell-danger"' : (dose === "-" ? ' class="paeds-cell-na"' : "");
            html += '<td' + cellCls + '>' + escapeHtml(dose) + '</td>';
          });
          html += '</tr>';
        });

        html += '</tbody></table>';
      } else {
        html += '<div class="paeds-formula" style="margin-top:8px">Use weight-based formula above to calculate dose.</div>';
      }

      html += '</div>';
    });

    paedsDoseOutput.innerHTML = html;

    // Bind remove buttons
    paedsDoseOutput.querySelectorAll(".paeds-remove-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectedPaedsMeds.splice(parseInt(btn.dataset.idx), 1);
        renderPaedsTables();
        renderMedList();
      });
    });
  }

  function renderMedList() {
    if (selectedPaedsMeds.length === 0) {
      paedsMedList.innerHTML = "";
      return;
    }
    var html = '<div class="paeds-selected-list">';
    selectedPaedsMeds.forEach(function (med, idx) {
      html += '<span class="paeds-selected-chip">' + escapeHtml(med.name);
      html += '<button class="paeds-chip-remove" data-idx="' + idx + '">&times;</button></span>';
    });
    html += '</div>';
    paedsMedList.innerHTML = html;

    paedsMedList.querySelectorAll(".paeds-chip-remove").forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectedPaedsMeds.splice(parseInt(btn.dataset.idx), 1);
        renderPaedsTables();
        renderMedList();
      });
    });
  }

  function selectPaedsMed(med) {
    // Don't add duplicates
    if (selectedPaedsMeds.some(function (m) { return m.name === med.name; })) return;
    selectedPaedsMeds.push(med);
    paedsMedSearch.value = "";
    paedsMedResults.style.display = "none";
    renderMedList();
    renderPaedsTables();
  }

  // Search
  paedsMedSearch.addEventListener("input", function () {
    var q = paedsMedSearch.value.toLowerCase();
    if (q.length === 0) {
      paedsMedResults.style.display = "none";
      return;
    }
    var matches = paedsMeds.filter(function (m) {
      return m.name.toLowerCase().includes(q) || m.category.toLowerCase().includes(q);
    });
    if (matches.length > 0) {
      paedsMedResults.innerHTML = matches.map(function (m) {
        return '<div><strong>' + escapeHtml(m.name) + '</strong> <span class="paeds-result-cat">' + escapeHtml(m.category) + '</span></div>';
      }).join("");
      paedsMedResults.style.display = "block";
    } else {
      paedsMedResults.innerHTML = '<div class="paeds-no-result">No medications found</div>';
      paedsMedResults.style.display = "block";
    }
  });

  paedsMedResults.addEventListener("click", function (event) {
    var target = event.target.closest("div");
    if (!target || target.classList.contains("paeds-no-result")) return;
    var name = target.querySelector("strong");
    if (!name) return;
    var med = paedsMeds.find(function (m) { return m.name === name.textContent; });
    if (med) selectPaedsMed(med);
  });

  // Re-render on age/weight change
  paedsAgeYears.addEventListener("input", renderPaedsTables);
  paedsAgeMonths.addEventListener("input", renderPaedsTables);
  paedsWeight.addEventListener("input", renderPaedsTables);

  // Initial render
  renderPaedsTables();

  // --- Antimicrobial Guidelines tab ---
  var abxData = window.ANTIMICROBIAL || [];
  var abxSearch = document.getElementById("abxSearch");
  var abxSearchResults = document.getElementById("abxSearchResults");
  var abxSystemList = document.getElementById("abxSystemList");
  var abxContent = document.getElementById("abxContent");
  var abxPcnToggle = document.getElementById("abxPcnToggle");
  var abxOpToggle = document.getElementById("abxOpToggle");
  var abxActiveSystem = null;
  var abxSearchIdx = -1;
  // Track what's currently displayed so toggles can re-render
  var abxCurrentView = { type: "empty" }; // {type:"empty"} | {type:"system",sys} | {type:"cards",inds,sys}

  // GP-common outpatient patterns for matching
  var abxGpCommonNames = [
    "acute cystitis", "copd", "cellulitis (mild", "bronchiectasis (mild",
    "community-acquired pneumonia (mild", "pyelonephritis (outpatient",
    "pelvic inflammatory disease (mild", "carbuncles", "acute prostatitis",
    "infected foot wound with diabetes/pvd (community-acquired, non-limb"
  ];

  function abxIsOutpatient(ind) {
    var n = ind.name.toLowerCase();
    return n.includes("outpatient") || n.includes("mild") || n.includes("curb 0");
  }

  function abxIsGpCommon(ind) {
    var n = ind.name.toLowerCase();
    return abxGpCommonNames.some(function (pat) { return n.includes(pat); });
  }

  function abxEscape(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function abxFormatText(str) {
    if (!str) return "";
    return abxEscape(str).replace(/\n/g, "<br>");
  }

  function abxCopyText(text) {
    copyToClipboard(text);
  }

  function abxFilterIndications(inds) {
    if (!abxOpToggle.checked) return inds;
    return inds.filter(abxIsOutpatient);
  }

  function abxRenderSystemList() {
    var html = "";
    abxData.forEach(function (sys) {
      var filteredCount = abxFilterIndications(sys.indications).length;
      var activeClass = abxActiveSystem === sys.system ? " abx-system-active" : "";
      if (abxOpToggle.checked && filteredCount === 0) return; // hide empty systems
      html += '<div class="abx-system-item' + activeClass + '" data-system="' + abxEscape(sys.system) + '">';
      html += '<div class="abx-system-name">' + abxEscape(sys.system) + '</div>';
      html += '<div class="abx-system-count">' + filteredCount + '</div>';
      html += '</div>';
      if (abxActiveSystem === sys.system) {
        html += '<div class="abx-indication-list">';
        abxFilterIndications(sys.indications).forEach(function (ind) {
          var origIdx = sys.indications.indexOf(ind);
          var gpClass = abxIsGpCommon(ind) ? " abx-gp-common" : "";
          html += '<div class="abx-indication-item' + gpClass + '" data-system="' + abxEscape(sys.system) + '" data-idx="' + origIdx + '">' + abxEscape(ind.name) + '</div>';
        });
        html += '</div>';
      }
    });
    abxSystemList.innerHTML = html;

    abxSystemList.querySelectorAll(".abx-system-item").forEach(function (el) {
      el.addEventListener("click", function () {
        var sys = el.dataset.system;
        if (abxActiveSystem === sys) {
          abxActiveSystem = null;
          abxRenderSystemList();
          abxShowView({ type: "empty" });
        } else {
          abxActiveSystem = sys;
          abxRenderSystemList();
          var sysObj = abxData.find(function (s) { return s.system === sys; });
          if (sysObj) abxShowView({ type: "system", sys: sysObj });
        }
      });
    });

    abxSystemList.querySelectorAll(".abx-indication-item").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.stopPropagation();
        var sys = abxData.find(function (s) { return s.system === el.dataset.system; });
        if (sys) {
          var ind = sys.indications[parseInt(el.dataset.idx)];
          if (ind) abxShowView({ type: "cards", inds: [ind], sys: sys });
        }
      });
    });
  }

  function abxRenderCard(ind, sys) {
    var pcn = abxPcnToggle.checked;
    var html = '<div class="abx-card">';
    html += '<div class="abx-card-header">';
    html += '<div class="abx-card-title">' + abxEscape(ind.name);
    if (abxIsGpCommon(ind)) html += ' <span class="abx-gp-badge">GP</span>';
    html += '</div>';
    html += '<div class="abx-card-meta">';
    if (sys) html += '<span class="abx-card-system">' + abxEscape(sys.system) + '</span>';
    if (ind.duration) html += '<span class="abx-card-duration">' + abxEscape(ind.duration) + '</span>';
    html += '</div>';
    html += '</div>';

    html += '<div class="abx-card-body">';

    // First-line
    if (ind.firstLine) {
      var flClass = pcn ? " abx-dimmed" : "";
      html += '<div class="abx-therapy-section' + flClass + '">';
      html += '<div class="abx-therapy-label">FIRST-LINE THERAPY';
      html += '<button class="abx-copy-btn" data-text="' + abxEscape(ind.firstLine) + '" title="Copy"><span class="material-icons">content_copy</span></button>';
      html += '</div>';
      html += '<div class="abx-therapy-text">' + abxFormatText(ind.firstLine) + '</div>';
      html += '</div>';
    }

    // Alternative
    if (ind.alternative) {
      var altClass = pcn ? " abx-highlighted" : "";
      html += '<div class="abx-therapy-section abx-alt' + altClass + '">';
      html += '<div class="abx-therapy-label">ALTERNATIVE (IF PENICILLIN ALLERGY)';
      html += '<button class="abx-copy-btn" data-text="' + abxEscape(ind.alternative) + '" title="Copy"><span class="material-icons">content_copy</span></button>';
      html += '</div>';
      html += '<div class="abx-therapy-text">' + abxFormatText(ind.alternative) + '</div>';
      html += '</div>';
    }

    // Remarks (collapsible, open by default)
    if (ind.remarks) {
      html += '<div class="abx-collapsible abx-remarks-section">';
      html += '<div class="abx-collapsible-toggle abx-remarks-label" data-open="true"><span class="abx-caret">&#9660;</span> Remarks</div>';
      html += '<div class="abx-collapsible-body">' + abxFormatText(ind.remarks) + '</div>';
      html += '</div>';
    }

    // De-escalation (collapsible, closed by default)
    if (ind.deescalation) {
      html += '<div class="abx-collapsible abx-deesc-section">';
      html += '<div class="abx-collapsible-toggle abx-deesc-label" data-open="false"><span class="abx-caret">&#9654;</span> De-escalation (cultures negative, patient better)</div>';
      html += '<div class="abx-collapsible-body abx-collapsed">' + abxFormatText(ind.deescalation) + '</div>';
      html += '</div>';
    }

    html += '</div></div>';
    return html;
  }

  function abxBindCardEvents() {
    // Copy buttons
    abxContent.querySelectorAll(".abx-copy-btn").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var text = btn.dataset.text;
        abxCopyText(text);
        btn.classList.add("abx-copied");
        btn.innerHTML = '<span class="material-icons">check</span>';
        setTimeout(function () {
          btn.classList.remove("abx-copied");
          btn.innerHTML = '<span class="material-icons">content_copy</span>';
        }, 1200);
      });
    });

    // Collapsible toggles
    abxContent.querySelectorAll(".abx-collapsible-toggle").forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        var body = toggle.nextElementSibling;
        var caret = toggle.querySelector(".abx-caret");
        var isOpen = toggle.dataset.open === "true";
        if (isOpen) {
          body.classList.add("abx-collapsed");
          toggle.dataset.open = "false";
          caret.innerHTML = "&#9654;";
        } else {
          body.classList.remove("abx-collapsed");
          toggle.dataset.open = "true";
          caret.innerHTML = "&#9660;";
        }
      });
    });
  }

  function abxShowView(view) {
    abxCurrentView = view;
    abxRenderView();
  }

  function abxRenderView() {
    var view = abxCurrentView;
    if (view.type === "cards") {
      var html = "";
      view.inds.forEach(function (ind) {
        html += abxRenderCard(ind, view.sys);
      });
      abxContent.innerHTML = html;
      abxBindCardEvents();
      return;
    }
    if (view.type === "system") {
      var sysObj = view.sys;
      var filtered = abxFilterIndications(sysObj.indications);
      var html = '<div class="abx-system-header">' + abxEscape(sysObj.system) + ' Infections';
      html += '<span class="abx-updated">Last updated: ' + abxEscape(sysObj.lastUpdated) + '</span></div>';
      if (filtered.length === 0) {
        html += '<div class="abx-empty">No outpatient indications in this system.</div>';
      } else {
        filtered.forEach(function (ind) {
          html += abxRenderCard(ind, sysObj);
        });
      }
      html += '<div class="abx-footer">Dosing regimens are for patients with normal renal function. Please refer to the Renal Dose Adjustment Guidelines if your patient is renally-impaired.</div>';
      abxContent.innerHTML = html;
      abxBindCardEvents();
      return;
    }
    abxContent.innerHTML = '<div class="abx-empty">Select a system or search for an indication to view antimicrobial guidelines.</div>';
  }

  // Search
  abxSearch.addEventListener("input", function () {
    var q = abxSearch.value.toLowerCase();
    abxSearchIdx = -1;
    if (q.length < 2) {
      abxSearchResults.style.display = "none";
      return;
    }
    var matches = [];
    abxData.forEach(function (sys) {
      var inds = abxFilterIndications(sys.indications);
      inds.forEach(function (ind) {
        if (ind.name.toLowerCase().includes(q) || ind.firstLine.toLowerCase().includes(q) || ind.alternative.toLowerCase().includes(q)) {
          matches.push({ ind: ind, sys: sys });
        }
      });
    });
    if (matches.length > 0) {
      abxSearchResults.innerHTML = matches.map(function (m, i) {
        var gpMark = abxIsGpCommon(m.ind) ? '<span class="abx-gp-dot"></span>' : '';
        return '<div data-system="' + abxEscape(m.sys.system) + '" data-name="' + abxEscape(m.ind.name) + '" data-idx="' + i + '">' + gpMark + '<strong>' + abxEscape(m.ind.name) + '</strong> <span class="abx-search-system">' + abxEscape(m.sys.system) + '</span></div>';
      }).join("");
      abxSearchResults.style.display = "block";
    } else {
      abxSearchResults.innerHTML = '<div class="abx-no-result">No indications found</div>';
      abxSearchResults.style.display = "block";
    }
  });

  // Keyboard navigation for search
  abxSearch.addEventListener("keydown", function (e) {
    var items = abxSearchResults.querySelectorAll("div[data-name]");
    if (!items.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      abxSearchIdx = Math.min(abxSearchIdx + 1, items.length - 1);
      abxHighlightSearchResult(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      abxSearchIdx = Math.max(abxSearchIdx - 1, 0);
      abxHighlightSearchResult(items);
    } else if (e.key === "Enter" && abxSearchIdx >= 0 && abxSearchIdx < items.length) {
      e.preventDefault();
      items[abxSearchIdx].click();
    }
  });

  function abxHighlightSearchResult(items) {
    items.forEach(function (el, i) {
      if (i === abxSearchIdx) {
        el.classList.add("highlighted");
        el.scrollIntoView({ block: "nearest" });
      } else {
        el.classList.remove("highlighted");
      }
    });
  }

  abxSearchResults.addEventListener("click", function (e) {
    var target = e.target.closest("div[data-name]");
    if (!target) return;
    var sysName = target.dataset.system;
    var indName = target.dataset.name;
    var sys = abxData.find(function (s) { return s.system === sysName; });
    if (sys) {
      var ind = sys.indications.find(function (i) { return i.name === indName; });
      if (ind) {
        abxActiveSystem = sysName;
        abxRenderSystemList();
        abxShowView({ type: "cards", inds: [ind], sys: sys });
        abxSearchResults.style.display = "none";
        abxSearch.value = "";
      }
    }
  });

  // Toggle handlers — re-render current view
  abxPcnToggle.addEventListener("change", function () {
    abxRenderView();
  });

  abxOpToggle.addEventListener("change", function () {
    abxRenderSystemList();
    // If current view is a system, re-render with filter
    if (abxCurrentView.type === "system") {
      abxRenderView();
    } else if (abxCurrentView.type === "empty") {
      abxRenderView();
    }
  });

  // Initial state
  abxRenderSystemList();
  abxShowView({ type: "empty" });
});
