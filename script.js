var clicks = 0; // Cliques do usuário
var cookies = 1; // Cookie obtidos
var CookiePerSeconds = 0; // Cookie por segundo

window.setInterval(function () {
  // VERIFICA SE O NÚMERO DE COOKIES É MENOR DO QUE ZERO
  if (cookies < 0) {
    document.getElementById("cookies").disabled = true;
  } else {
    document.getElementById("cookies").disabled = false;
  }

  // VERIFICADOR DE RECOMPENSA
  if (cookies < 50) {
    document.getElementById("RewardCookie1").disabled = true;
  } else {
    document.getElementById("RewardCookie1").disabled = false;
  }

  // VERIFICADOR DE RECOMPENSA
  if (cookies < 200) {
    document.getElementById("RewardCookie2").disabled = true;
  } else {
    document.getElementById("RewardCookie2").disabled = false;
  }

  // VERIFICADOR DE RECOMPENSA
  if (cookies < 1000) {
    document.getElementById("RewardCookie3").disabled = true;
  } else {
    document.getElementById("RewardCookie3").disabled = false;
  }

  // VERIFICADOR DE RECOMPENSA
  if (cookies < 5000) {
    document.getElementById("RewardCookie4").disabled = true;
  } else {
    document.getElementById("RewardCookie4").disabled = false;
  }

  // VERIFICADOR DE RECOMPENSA
  if (cookies < 20000) {
    document.getElementById("RewardCookie5").disabled = true;
  } else {
    document.getElementById("RewardCookie5").disabled = false;
  }

  // VERIFICADOR DE RECOMPENSA
  if (cookies < 100000) {
    document.getElementById("RewardCookie6").disabled = true;
  } else {
    document.getElementById("RewardCookie6").disabled = false;
  }

  // VERIFICADOR DE RECOMPENSA
  if (cookies < 5000000) {
    document.getElementById("RewardCookie7").disabled = true;
  } else {
    document.getElementById("RewardCookie7").disabled = false;
  }

  // VERIFICADOR DE RECOMPENSA
  if (cookies < 20000000) {
    document.getElementById("RewardCookie8").disabled = true;
  } else {
    document.getElementById("RewardCookie8").disabled = false;
  }

  // VERIFICADOR DE RECOMPENSA
  if (cookies < 100000000) {
    document.getElementById("RewardCookie9").disabled = true;
  } else {
    document.getElementById("RewardCookie9").disabled = false;
  }

  // VERIFICADOR DE RECOMPENSA
  if (cookies < 5000000000) {
    document.getElementById("RewardCookie10").disabled = true;
  } else {
    document.getElementById("RewardCookie10").disabled = false;
  }

  // DÁ O COOKIE POR SEGUNDO COMO PADRÃO
  cookies += CookiePerSeconds;
  document.getElementById("resultcookies").innerHTML = cookies + " COOKIES";
  document.getElementById(
    "resultbonus"
  ).innerHTML = `VOCÊ POSSUI CERCA DE ${CookiePerSeconds} COOKIESEGUNDO`;
}, 1000);

// FUNÇÃO DE ADICIONAR COOKIE POR CLIQUE
function AddCookie() {
  cookies = cookies + CookiePerSeconds;
  clicks += 1;
  resultclicks.innerHTML = `VOCÊ DEU CERCA DE ${clicks} CLIQUES`;

  if (CookiePerSeconds == 0) {
    cookies = clicks;
  }

  document.getElementById("resultcookies").innerHTML = cookies + " COOKIES";
}

// FUNÇÃO DE LOJA POR COOKIE
function RewardCookie1() {
  if ((cookies) => 50 && cookies != 0) {
    cookies -= 50;
    CookiePerSeconds += 1;
  }
}

// FUNÇÃO DE LOJA POR COOKIE
function RewardCookie2() {
  if ((cookies) => 200 && cookies != 0) {
    cookies -= 200;
    CookiePerSeconds += 2;
  }
}

// FUNÇÃO DE LOJA POR COOKIE
function RewardCookie3() {
  if ((cookies) => 1000 && cookies != 0) {
    cookies -= 1000;
    CookiePerSeconds += 10;
  }
}

// FUNÇÃO DE LOJA POR COOKIE
function RewardCookie4() {
  if ((cookies) => 5000 && cookies != 0) {
    cookies -= 5000;
    CookiePerSeconds += 20;
  }
}

// FUNÇÃO DE LOJA POR COOKIE
function RewardCookie5() {
  if ((cookies) => 20000 && cookies != 0) {
    cookies -= 20000;
    CookiePerSeconds += 100;
  }
}

// FUNÇÃO DE LOJA POR COOKIE
function RewardCookie6() {
  if ((cookies) => 100000 && cookies != 0) {
    cookies -= 100000;
    CookiePerSeconds += 200;
  }
}

// FUNÇÃO DE LOJA POR COOKIE
function RewardCookie7() {
  if ((cookies) => 5000000 && cookies != 0) {
    cookies -= 5000000;
    CookiePerSeconds += 1000;
  }
}

// FUNÇÃO DE LOJA POR COOKIE
function RewardCookie8() {
  if ((cookies) => 20000000 && cookies != 0) {
    cookies -= 20000000;
    CookiePerSeconds += 2000;
  }
}

// FUNÇÃO DE LOJA POR COOKIE
function RewardCookie9() {
  if ((cookies) => 1000000000 && cookies != 0) {
    cookies -= 1000000000;
    CookiePerSeconds += 10000;
  }
}

// FUNÇÃO DE LOJA POR COOKIE
function RewardCookie10() {
  if ((cookies) => 5000000000 && cookies != 0) {
    cookies -= 5000000000;
    CookiePerSeconds += 20000;
  }
}
