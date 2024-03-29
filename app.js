const accordionItemsEl = document.getElementsByClassName("accordion__item");

function showAccordionDetails () {
  for (let item of accordionItemsEl) {
    let accHeader = item.firstElementChild;
    accHeader.addEventListener("click", function() {
      let accDetails = this.nextElementSibling;
      if (accDetails.style.maxHeight != 0) {
        accDetails.style.maxHeight = null;
        this.lastElementChild.innerHTML = "+";
      } else {
        accDetails.style.maxHeight = accDetails.scrollHeight + "px";
        this.lastElementChild.innerHTML = "-";
      }
    })
  }
}

showAccordionDetails();