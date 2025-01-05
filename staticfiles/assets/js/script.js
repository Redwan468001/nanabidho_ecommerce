

// Script for Overview product
function initializeproductNav(cntNavSelector, cntSelector) {
    const cntNavLinks = document.querySelectorAll(`${cntNavSelector} a`);
    const cntSections = document.querySelectorAll(cntSelector);

    // Function to show the active section
    function setActiveSection(activeId) {
        cntSections.forEach((cntsection) => {
            if (cntsection.id === activeId) {
                cntsection.classList.add("active_ov");
            } else {
                cntsection.classList.remove("active_ov")
            }
        });
    }

    // Add Click lintener to navigation links
    cntNavLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            setActiveSection(targetId)
        });
    });

    // Show the first item by default
    if (cntSections.length > 0){
        setActiveSection(cntSections[0].id)
    }

    // All class to nav after click
    cntNavLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            // Remove the 'active' class from all links
            cntNavLinks.forEach((nav) => nav.classList.remove("active_cnt_nav"));
            // Add the 'active' class to the clicked link
            link.classList.add("active_cnt_nav")
        });
    });
}

initializeproductNav(".product_nav", ".product .section");

// End Script for Overview product


