export const convert = (baseCurrency: any, targetCurrency: any, amount: any) => {

  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurrency}/${targetCurrency}.json`
    
  return fetch(url)
    .then(response => response.json())
    .then(data => data[targetCurrency] * amount)
}

export const getCurrencies = () => {

  return [
    { value: 'usd', text: 'Американский доллар' },
    { value: 'eur', text: 'Евро' },
    { value: 'dzd', text: 'Алжирский динар' },
    { value: 'cad', text: 'Канадский доллар' },
    { value: 'aed', text: 'Дирхам ОАЭ' },
    { value: 'amd', text: 'Армянский драм' },
    { value: 'iqd', text: 'Иракский динар' },
    { value: 'jmd', text: 'Ямайский доллар' },
    { value: 'jod', text: 'Иорданский динар' },
    { value: 'jpy', text: 'Японская иена' },
  ]
}