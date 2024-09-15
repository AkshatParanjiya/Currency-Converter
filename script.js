const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

//
const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";
//   const a="https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json"
//   fetch(a).then((response)=>{
//     return response.json()
//   }).then((data)=>{
//     console.log(data)
//   })

// const amount=document.querySelector(".amount input value")
// amount=(amount.value);
const btn = document.querySelector("#btn");
const fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
// toCurr=toCurr.value.toLowerCase();
// console.log(toCurr.value)
// console.log(toCurr)

const msg = document.querySelector(".msg");

// const toc=document.querySelector(".toc")

// console.log(toc)

const dropdowns = document.querySelectorAll(".dropdown select");
for (let select of dropdowns) {
  for (crrcode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = crrcode;
    newOption.value = crrcode;
    if (select.name === "from" && crrcode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && crrcode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  });
}

const updateflag = (element) => {
  // console.log(element)
  let crrcode = element.value;
  // console.log(crrcode)
  let countrycode = countryList[crrcode];
  // console.log(countrycode)
  let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  // console.log(amount.value)
  let amtval = amount.value;
  if (amtval === "" || amtval < 1) {
    amtval = 1;
    amount.value = "1";
  }
  // "https://2024-03-06.currency-api.pages.dev/v1/currencies";

  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json `;
  // console.log(URL)
  // console.log(URL.fromCurr)
  let response = await fetch(URL);
  let data = await response.json();
  // console.log(data);
  // let a=fromCurr.value.toLowerCase();
  // console.log(a)

  // let b=toCurr.value.toLowerCase();
  // console.log(b)

  // let rate=data[a];
  // console.log(rate)
  // let frate=rate[b];
  // console.log(frate)

  let frate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  frate = frate.toFixed(2);
  // console.log(frate);
  // console.log(amtval)

  let finalAmount = amtval * frate;
  // console.log(finalAmount)

  // msg.innerHTML=`${amtval}${fromCurr.value}=${finalAmount}${toCurr.value} `
  msg.innerText = `${amtval}${fromCurr.value}=${finalAmount}${toCurr.value} `;
  // console.log(`${amtval}${fromCurr.value}=${finalAmount}${toCurr.value} `)
});

// ${toCurr.value.toLowerCase()}
