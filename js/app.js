const   currencyoneel = document.getElementById('currency-one'),
        amountoneel = document.getElementById('amount-one');

const currencytwoel = document.getElementById('currency-two'),
        amounttwoel = document.getElementById('amount-two');

const swapel = document.getElementById('swap');
        rateel = document.getElementById('rate');

// calculate
function calculate(){
    // console.log("hay");

    const crcyone = currencyoneel.value;
    const crcytwo = currencytwoel.value;

    const amtone = amountoneel.value;
    const amttwo = amounttwoel.value;

    // console.log(crcytwo,amttwo); 
    // console.log(crcyone,amtone);

    const apikey = "26d66cc59455c7defc75ad23";
    const uri = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;
    // console.log(uri);

    // AJAX Request
    fetch(uri)
    .then(res => res.json())
    .then(data =>{
        // console.log(data);

        // console.log(data.conversion_rates);
        // console.log(typeof data.conversion_rates);
        // console.log(data.conversion_rates.USD);


        const rate = data.conversion_rates[crcytwo];
        // console.log(rate);
        
        rateel.innerHTML = `1 ${crcyone} = ${rate} ${crcytwo}`;

        amounttwoel.value= (amountoneel.value * rate).toFixed(2);
    });

}

// Event Listener
currencyoneel.addEventListener('change',calculate);
amountoneel.addEventListener('input',calculate);

currencytwoel.addEventListener('change',calculate);
amounttwoel.addEventListener('input',calculate);

swapel.addEventListener('click',()=>{
    // console.log("already swap");

    const temp = currencyoneel.value;
     
    currencyoneel.value = currencytwoel.value;
    currencytwoel.value = temp;

    calculate();
});
