import './styles/style.css';

document.addEventListener('DOMContentLoaded', function() {

    
    function handleInputEvent(searchInput, clearBtn, searchBtn) {
        searchInput.addEventListener('input', function() {
            if (searchInput.value.length > 0) {
                clearBtn.style.display = 'block';
                if (searchBtn) {
                    searchBtn.style.display = 'block';
                }
            } else {
                clearBtn.style.display = 'none';
                if (searchBtn) {
                    searchBtn.style.display = 'none';
                }
            }
        });

        clearBtn.addEventListener('click', function() {
            searchInput.value = '';
            clearBtn.style.display = 'none';
            if (searchBtn) {
                searchBtn.style.display = 'none';
            }
            searchInput.focus();
            clearSearchResults(searchInput.id);
        });
    }
    function clearSearchResults(inputId) {
        if (inputId === 'search-input-brand') {
            document.getElementById('result-message-brand').style.display = 'none';
        } else if (inputId === 'search-input-product') {
            document.getElementById('search-results-product').innerHTML = '';
            document.getElementById('result-message-product').style.display = 'none';
        }
    }

    function handleEnterKeySearch(searchInput, searchCallback) {
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                searchCallback();
            }
        });
    }

    function searchBrands() {
        const searchQuery = document.getElementById('search-input-brand').value.trim().toLowerCase();
        const resultMessage = document.getElementById('result-message-brand');

        // const matchedBrands = brands.filter(brand => brand.name.toLowerCase().includes(searchQuery));

        // if (matchedBrands.length < 1) {
        // }
        resultMessage.style.display = 'block';
    }

    function clearAttributes() {
        const checkboxes = document.querySelectorAll('.checkbox-input');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    }

    const productSearchInput = document.getElementById('search-input');
    const productClearBtn = document.getElementById('clear-btn');
    const productSearchBtn = document.getElementById('search-btn');

    const brandSearchInput = document.getElementById('search-input-brand');
    const brandClearBtn = document.getElementById('clear-btn-brand');

    const clearAttributesBtn = document.getElementById('clear-attributes-btn');

    if (clearAttributesBtn) {
        clearAttributesBtn.addEventListener('click', clearAttributes);
    }

    if (productSearchInput && productClearBtn && productSearchBtn) {
        handleInputEvent(productSearchInput, productClearBtn, productSearchBtn);
    } 

    if (brandSearchInput && brandClearBtn) {
        handleInputEvent(brandSearchInput, brandClearBtn);
        handleEnterKeySearch(brandSearchInput, searchBrands);
    } 
});
