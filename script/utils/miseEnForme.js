// fonction de mise en forme Maj et Accent
export function miseEnFormeText(param) {
    return param
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
  }