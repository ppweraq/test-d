
    document.addEventListener('DOMContentLoaded', function() {
        const searchInput = document.getElementById('search-input');
        const clearBtn = document.getElementById('clear-btn');
        const searchBtn = document.getElementById('search-btn');

        searchInput.addEventListener('input', function() {
            if (searchInput.value.length > 0) {
                clearBtn.style.display = 'block';
                searchBtn.style.display = 'block';
            } else {
                clearBtn.style.display = 'none';
                searchBtn.style.display = 'none';
            }
        });

        clearBtn.addEventListener('click', function() {
            searchInput.value = '';
            clearBtn.style.display = 'none';
            searchBtn.style.display = 'none';
            searchInput.focus();
        });

        
    });

