export function setupFilters() {
  const filterCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  const sortRadios = document.querySelectorAll('input[name="sort-by"]');
  const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
  const mobCardsContainer = document.querySelector('[data-mob-container]') as HTMLElement;
  const mobCards = document.querySelectorAll('[data-mob-card]');
  
  function filterAndSortMobs() {
    const activeFilters = {
      mobTypes: [] as string[],
      variants: [] as string[],
      versions: [] as string[],
      obtained: null as boolean | null,
      usedFarm: null as boolean | null
    };
    
    const activeSortOption = document.querySelector('input[name="sort-by"]:checked') as HTMLInputElement;
    const sortBy = activeSortOption ? activeSortOption.value : 'probability';
    
    filterCheckboxes.forEach(checkbox => {
      const cb = checkbox as HTMLInputElement;
      if (cb.checked) {
        const filterType = cb.dataset.filterType;
        const filterValue = cb.id;
        
        if (filterType === 'mobType') {
          activeFilters.mobTypes.push(filterValue);
        } else if (filterType === 'variant') {
          activeFilters.variants.push(filterValue);
        } else if (filterType === 'version') {
          activeFilters.versions.push(filterValue);
        }
      }
    });
    
    const searchQuery = searchInput.value.toLowerCase();
    
    const visibleMobs: HTMLElement[] = [];
    
    mobCards.forEach(card => {
      const mobCard = card as HTMLElement;
      const mobType = mobCard.dataset.mobType || '';
      const variant = mobCard.dataset.variant || '';
      const version = mobCard.dataset.version || '';
      const obtained = mobCard.dataset.obtained === 'true';
      const usedFarm = mobCard.dataset.usedFarm === 'true';
      const name = mobCard.dataset.name?.toLowerCase() || '';
      
      let visible = true;
      
      if (activeFilters.mobTypes.length > 0 && !activeFilters.mobTypes.includes(mobType)) {
        visible = false;
      }
      
      if (visible && activeFilters.variants.length > 0 && !activeFilters.variants.includes(variant)) {
        visible = false;
      }
      
      if (visible && activeFilters.versions.length > 0 && !activeFilters.versions.includes(version)) {
        visible = false;
      }
      
      if (visible && sortBy === 'obtained' && !obtained) {
        visible = false;
      }
      
      if (visible && sortBy === 'not-obtained' && obtained) {
        visible = false;
      }
      
      if (visible && sortBy === 'used-farm' && !usedFarm) {
        visible = false;
      }
      
      if (visible && sortBy === 'without-farm' && (usedFarm || !obtained)) {
        visible = false;
      }
      
      if (visible && sortBy === 'date' && !obtained) {
        visible = false;
      }
      
      if (visible && searchQuery && !name.includes(searchQuery)) {
        visible = false;
      }
      
      mobCard.style.display = visible ? 'block' : 'none';
      
      if (visible) {
        visibleMobs.push(mobCard);
      }
    });
    
    visibleMobs.sort((a, b) => {
      switch (sortBy) {
        case 'probability':
          return parseFloat(a.dataset.probability || '0') - parseFloat(b.dataset.probability || '0');
        case 'alphabet':
          return (a.dataset.name || '').localeCompare(b.dataset.name || '');
        case 'date':
          return parseInt(a.dataset.when || '0') - parseInt(b.dataset.when || '0');
        default:
          return 0;
      }
    });
    
    visibleMobs.forEach(mob => {
      mobCardsContainer.appendChild(mob);
    });
  }
  
  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterAndSortMobs);
  });
  
  sortRadios.forEach(radio => {
    radio.addEventListener('change', filterAndSortMobs);
  });
  
  searchInput.addEventListener('input', filterAndSortMobs);
  
  filterAndSortMobs();
}