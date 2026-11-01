function openTab(tabId) {
  // 1. Прячем все вкладки
  let allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(function(tab) {
    tab.style.display = 'none';
  });

  // 2. Убираем синий цвет со всех кнопок
  let allButtons = document.querySelectorAll('.tab-btn');
  allButtons.forEach(function(btn) {
    btn.classList.remove('active');
  });

  // 3. Показываем нужную вкладку (получится 'tab-rus', 'tab-mat' и т.д.)
  let currentTab = document.getElementById('tab-' + tabId);
  if (currentTab) {
    currentTab.style.display = 'block';
  }

  // 4. Красим кнопку, по которой кликнули
  event.currentTarget.classList.add('active');
}