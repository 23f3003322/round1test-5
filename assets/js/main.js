(function(){
  // Seed value used to set the page title
  const seed = 'STATIC-1234';
  document.title = `Sales Summary ${seed}`;

  // Data URI for CSV attachment (embedded as a data URL to support static hosting)
  // CSV contents:
  // sales
  // 120.50
  // 340.75
  // 89.25
  // 450.00
  // 275.30
  const csvUri = 'data:text/csv;charset=utf-8,sales%0A120.50%0A340.75%0A89.25%0A450.00%0A275.30';

  fetch(csvUri)
    .then(res => res.text())
    .then(text => {
      const lines = text.trim().split(/\r?\n/);
      // Skip header and parse numeric values
      const values = lines.slice(1).map(l => parseFloat(l)).filter(n => !Number.isNaN(n));
      const total = values.reduce((a, b) => a + b, 0);
      const el = document.querySelector('#total-sales');
      if (el) el.textContent = total.toFixed(2);
    })
    .catch(err => {
      console.error('Error loading CSV data', err);
    });
})();
