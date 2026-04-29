export function toggleNav(hamburgerEl, navEl) {
  let navElDisplay = window.getComputedStyle(navEl).display;

  if (navElDisplay === "block") {
    navEl.classList.remove("open");
  } else {
    navEl.classList.add("open");
  }

  hamburgerEl.classList.toggle("change");
}

export async function ucitajFirebase() {
  const tmpNalozi = [];

  const response = await fetch();

  const data = await response.json();

  for (let key in data) {
    tmpNalozi.push(data[key]);
  }

  return tmpNalozi[0];
}
