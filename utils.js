function getLanguage(number) {
  switch (number) {
    case 1:
      return "Portuguese";
    default:
      return "English";
  }
}

module.exports = {
  getLanguage: getLanguage
}
