            //   skill transition

const skillParElements = document.querySelectorAll('.skill-par');

for (const skillParElement of skillParElements) {
  const parAttribute = skillParElement.getAttribute('par');
  const parPercentage = parseInt(parAttribute, 10);


  if (parPercentage >= 90 && parPercentage <= 100) {
    skillParElement.style.backgroundColor = 'green';
  } 
  else if (parPercentage >= 60 && parPercentage <= 89) {
    skillParElement.style.backgroundColor = 'yellow';
  } 
  else if (parPercentage >= 40 && parPercentage <= 59) {
    skillParElement.style.backgroundColor = 'aqua';
  } 
  else if (parPercentage >= 30 && parPercentage <= 39) {
    skillParElement.style.backgroundColor = 'blue';
  } 
  else {
    skillParElement.style.backgroundColor = 'red';
  }
}

  // skill content navigation 

 const tabLinks = document.querySelectorAll('.tab-links');
 const tabContents = document.querySelectorAll('.tab-content')
 
 function opentab (tabname) {

  for (const tabLink of tabLinks ){
    tabLink.classList.remove('active-link')
  }

  for (const tabContent of tabContents){
    tabContent.classList.remove('active-tab')
  }
  event.target.classList.add('active-link');

  document.getElementById(tabname).classList.add('active-tab');
 }

