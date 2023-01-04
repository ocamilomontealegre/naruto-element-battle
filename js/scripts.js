// Footer Year
// This function gets the current year and place it on the copyright credits at the footer section
const currentYear = () => {
  let footerYear = new Date();
  document.getElementById("year").innerHTML = footerYear.getFullYear();
}

currentYear();




