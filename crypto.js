function cryptoINR() {
  var inr = parseFloat(document.getElementById("inr").value);
  var usd = inr * 0.012;
  document.getElementById("usd").value = usd;
  document.getElementById("btc").value = usd * 0.000037;
  document.getElementById("eth").value = usd * 0.00054;
  document.getElementById("doge").value = usd * 13.69;
  document.getElementById("sol").value = usd * 0.0513;
}
function cryptoUSD() {
  var usd = parseFloat(document.getElementById("usd").value);
  var inr = usd / 0.012;
  document.getElementById("inr").value = inr;
  document.getElementById("btc").value = usd * 0.000037;
  document.getElementById("eth").value = usd * 0.00054;
  document.getElementById("doge").value = usd * 13.69;
  document.getElementById("sol").value = usd * 0.0513;
}
function cryptoBTC() {
  var btc = parseFloat(document.getElementById("btc").value);
  var usd = btc / 0.000037;
  var inr = usd / 0.012;
  document.getElementById("inr").value = inr;
  document.getElementById("usd").value = usd;
  document.getElementById("eth").value = usd * 0.00054;
  document.getElementById("doge").value = usd * 13.69;
  document.getElementById("sol").value = usd * 0.0513;
}
function cryptoETH() {
  var eth = parseFloat(document.getElementById("eth").value);
  var usd = eth / 0.00054;
  var inr = usd / 0.012;
  document.getElementById("inr").value = inr;
  document.getElementById("usd").value = usd;
  document.getElementById("btc").value = usd * 0.000037;
  document.getElementById("doge").value = usd * 13.69;
  document.getElementById("sol").value = usd * 0.0513;
}
function cryptoDOGE() {
  var doge = parseFloat(document.getElementById("doge").value);
  var usd = doge / 13.69;
  var inr = usd / 0.012;
  document.getElementById("inr").value = inr;
  document.getElementById("usd").value = usd;
  document.getElementById("btc").value = usd * 0.000037;
  document.getElementById("eth").value = usd * 0.00054;
  document.getElementById("sol").value = usd * 0.0513;
}
function cryptoSOL() {
  var sol = parseFloat(document.getElementById("sol").value);
  var usd = sol / 0.0513;
  var inr = usd / 0.012;
  document.getElementById("inr").value = inr;
  document.getElementById("usd").value = usd;
  document.getElementById("btc").value = usd * 0.000037;
  document.getElementById("eth").value = usd * 0.00054;
  document.getElementById("doge").value = usd * 13.69;
}