(function () {
  'use strict';

  const state = {
    type: 'Full-Stack Web App / Micro-SaaS MVP',
    timeline: 'Standard (3–5 days)',
    budget: '$100 – $250 (Feature / Bot / Tool)'
  };

  const briefPreview = document.getElementById('briefPreview');
  const githubSubmitLink = document.getElementById('githubSubmitLink');
  const ideaInput = document.getElementById('ideaInput');
  const contactInput = document.getElementById('contactInput');
  const copyFeedback = document.getElementById('copyFeedback');
  const copyBriefBtn = document.getElementById('copyBriefBtn');

  function updateBrief() {
    if (!briefPreview || !githubSubmitLink) return;
    const ideaText = (ideaInput && ideaInput.value.trim()) || '(Add 1-2 lines describing your goal or bug...)';
    const contactText = (contactInput && contactInput.value.trim()) || '(Add your Email / Telegram / Discord / WhatsApp...)';

    const bodyText = [
      `[PROJECT BRIEF] ${state.type}`,
      `• Type: ${state.type}`,
      `• Timeline: ${state.timeline}`,
      `• Budget: ${state.budget}`,
      `• Scope: ${ideaText}`,
      `• Contact: ${contactText}`
    ].join('\n');

    briefPreview.textContent = bodyText;

    const issueTitle = `[Project Inquiry] ${state.type} (${state.budget})`;
    const url = new URL('https://github.com/MinhTri12995/MinhTri12995/issues/new');
    url.searchParams.set('template', 'project-inquiry.yml');
    url.searchParams.set('title', issueTitle);
    url.searchParams.set('body', bodyText);
    githubSubmitLink.href = url.toString();
  }

  document.querySelectorAll('.drawer-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');
      const drawer = targetId ? document.getElementById(targetId) : null;
      if (!drawer) return;
      const willExpand = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(willExpand));
      drawer.hidden = !willExpand;
      btn.textContent = willExpand ? 'Hide Architecture' : 'Inspect Architecture';
    });
  });

  document.querySelectorAll('.chip-group').forEach((group) => {
    const groupName = group.getAttribute('data-group');
    group.querySelectorAll('.chip-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.chip-btn').forEach((sibling) => {
          sibling.setAttribute('aria-pressed', 'false');
        });
        btn.setAttribute('aria-pressed', 'true');
        if (groupName && Object.prototype.hasOwnProperty.call(state, groupName)) {
          state[groupName] = btn.getAttribute('data-value') || '';
        }
        updateBrief();
      });
    });
  });

  if (ideaInput) ideaInput.addEventListener('input', updateBrief);
  if (contactInput) contactInput.addEventListener('input', updateBrief);

  if (copyBriefBtn && briefPreview) {
    copyBriefBtn.addEventListener('click', async () => {
      const text = briefPreview.textContent || '';
      try {
        await navigator.clipboard.writeText(text);
        if (copyFeedback) {
          copyFeedback.textContent = 'Copied to clipboard — ready to paste!';
          setTimeout(() => {
            copyFeedback.textContent = '';
          }, 3000);
        }
      } catch (_) {
        const range = document.createRange();
        range.selectNodeContents(briefPreview);
        const sel = window.getSelection();
        if (sel) {
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    });
  }

  updateBrief();
})();
