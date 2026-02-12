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
});
