function calc() {
  let pagaBaze = (document.getElementById("pagabaze") || {}).value || "";
  let turni1Count = (document.getElementById("turni1count") || {}).value || "";
  let turni2Count = (document.getElementById("turni2count") || {}).value || "";
  let turni3Count = (document.getElementById("turni3count") || {}).value || "";
  let sundayCount = (document.getElementById("sundaycount") || {}).value || "";
  let oreShteseCount =
    (document.getElementById("oreshtesecount") || {}).value || "";

  let dita = pagaBaze / 22;
  let ora = dita / 8;
  let turni1 = dita;
  let turni2 = ora * 1.2 * 3 + ora * 5;
  let turni3 = dita * 1.5;
  let sunday = dita * 1.2;

  console.log("pagaBaze " + pagaBaze);
  console.log("dita " + dita);
  console.log("ora " + ora);
  console.log("turni1 " + turni1);
  console.log("turni2 " + turni2);
  console.log("turni3 " + turni3);
  console.log("sunday " + sunday);

  let turni1Total = turni1Count * turni1;
  let turni2Total = turni2Count * turni2;
  let turni3Total = turni3Count * turni3;
  let sundayTotal = sundayCount * sunday;
  let oreShteseTotal = oreShteseCount * ora;

  console.log("turni1Total " + turni1Total);
  console.log("turni2Total " + turni2Total);
  console.log("turni3Total " + turni3Total);
  console.log("sundayTotal " + sundayTotal);
  console.log("oreShteseTotal " + oreShteseTotal);

  const pagaTotalBruto =
    turni1Total + turni2Total + turni3Total + sundayTotal + oreShteseTotal;

  let pagaTotalBrutoRounded = pagaTotalBruto.toFixed(2);
  document.getElementById("sum").value = pagaTotalBrutoRounded;

  let sigShoq = pagaTotalBruto * 0.095;
  let sigShen = pagaTotalBruto * 0.017;
  let pagaETat = pagaTotalBruto - 30000;
  let tatimi = pagaETat * 0.13;

  const pagaNeto = pagaTotalBruto - (sigShoq + sigShen + tatimi);

  let pagaNetoRounded = pagaNeto.toFixed(2);
  document.getElementById("sumneto").value = pagaNetoRounded;

  console.log("pagaTotalBruto " + pagaTotalBrutoRounded);
  console.log("Paga totale per kete muaj neto: " + pagaNetoRounded);
}

function clearFields() {
  document.getElementById("pagabaze").value = "";
  document.getElementById("turni1count").value = "";
  document.getElementById("turni2count").value = "";
  document.getElementById("turni3count").value = "";
  document.getElementById("sundaycount").value = "";
  document.getElementById("oreshtesecount").value = "";
  document.getElementById("sum").value = "";
  document.getElementById("sumneto").value = "";
}
