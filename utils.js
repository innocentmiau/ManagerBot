function getLanguage(number) {
  switch (number) {
    case 1:
      return "Portuguese";
    default:
      return "English";
  }
}

function getLanguagePT(number) {
  switch (number) {
    case 1:
      return "Português";
    default:
      return "Inglês";
  }
}

module.exports = {
  getLanguage: getLanguage,
  getLanguagePT: getLanguagePT
}
