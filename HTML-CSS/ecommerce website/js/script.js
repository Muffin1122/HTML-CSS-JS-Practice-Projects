  
    document.addEventListener("DOMContentLoaded", function() {
        var minusBtns = document.querySelectorAll(".minus");
        var plusBtns = document.querySelectorAll(".plus");

        minusBtns.forEach(function(minusBtn) {
            minusBtn.addEventListener("click", function() {
                var numElement = this.parentElement.querySelector(".num");
                var numValue = parseInt(numElement.textContent);
                if (numValue > 1) {
                    numValue--;
                    numElement.textContent = numValue;
                }
            });
        });

        plusBtns.forEach(function(plusBtn) {
            plusBtn.addEventListener("click", function() {
                var numElement = this.parentElement.querySelector(".num");
                var numValue = parseInt(numElement.textContent);
                numValue++;
                numElement.textContent = numValue;
            });
        });
    });

/*product toggle section js*/
var activeSectionId = null;

window.addEventListener('DOMContentLoaded', function () {
// Hide all sections on page load
var sections = document.getElementsByClassName('section');
for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
}
});

function toggleSection(sectionId) {
var section = document.getElementById(sectionId);

if (activeSectionId !== sectionId) {
    // Hide the previously active section
    if (activeSectionId) {
        document.getElementById(activeSectionId).style.display = 'none';
    }

    // Show the selected section
    section.style.display = 'block';

    // Update the active section ID
    activeSectionId = sectionId;
} else {
    // Hide the currently active section
    section.style.display = 'none';

    // Reset the active section ID
    activeSectionId = null;
}
}