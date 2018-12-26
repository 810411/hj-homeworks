'use strict';

function handleTableClick(event) {
  if (event.target.tagName === 'TH') {
    const current = event.target;
    const propName = current.dataset.propName;

    table.dataset.sortBy = propName;
    current.dataset.dir = (current.dataset.dir === undefined || current.dataset.dir === '-1') ?
      current.dataset.dir = '1' : current.dataset.dir = '-1';

    sortTable(propName, current.dataset.dir);
  }
}
