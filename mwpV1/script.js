document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Logic
  const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('theme');

  // Check system preference if no stored theme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = storedTheme || (prefersDark ? 'dark' : 'light');

  setTheme(defaultTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update icon if using one
    if (toggleBtn) {
      toggleBtn.innerHTML = theme === 'dark' ? '☀&#xFE0E;' : '☾&#xFE0E;';
      toggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }

  // Active Link Logic
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
});
