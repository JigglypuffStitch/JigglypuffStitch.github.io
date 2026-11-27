(() => {
  const publications = document.querySelector('#publications');
  const controls = publications?.querySelector('.publication-switch');
  if (!controls) return;

  const buttons = [...controls.querySelectorAll('[data-publication-filter]')];
  // HTML order is the All view; numeric ranks preserve the curated Selected view.
  const papers = [...publications.querySelectorAll('article.paper')];
  const selectedOrder = [...papers].sort((a, b) =>
    Number(a.dataset.selected || Infinity) - Number(b.dataset.selected || Infinity));
  const heading = publications.querySelector('#publications-heading');
  const status = publications.querySelector('#publication-status');

  function selectPublications(filter, announce = true) {
    const all = filter === 'all';
    let count = 0;
    const orderedPapers = all ? papers : selectedOrder;
    orderedPapers.forEach(paper => {
      publications.append(paper);
      paper.hidden = !all && !paper.hasAttribute('data-selected');
      if (!paper.hidden) count += 1;
    });
    buttons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.publicationFilter === filter));
    });
    heading.textContent = all ? 'All Publications' : 'Selected Publications';
    if (announce) status.textContent = `Showing ${count} ${all ? '' : 'selected '}publications.`;
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => selectPublications(button.dataset.publicationFilter));
  });
  selectPublications('selected', false);
  controls.hidden = false;
})();

(() => {
  const dialog = document.querySelector('.figure-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('.expanded-figure');
  const title = dialog.querySelector('#figure-title');
  let trigger;
  document.querySelectorAll('[data-figure]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      title.textContent = link.dataset.title;
      dialog.showModal();
      document.body.classList.add('figure-open');
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('figure-open');
    trigger?.focus({preventScroll: true});
  });
})();
