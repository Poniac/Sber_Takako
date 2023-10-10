<script>

    let amount = 0.00;
    let convertFrom = 'INR';
    let finalAmount = '';
    let convertTo = '';
	let yourApi = 'YOUR_API_KEY';

    let currencyList = [
        {name : "USD", desc:"US Dollar"},
        {name:"EUR", desc:"Euro"},
        {name:"INR", desc:"Indian Rupee"}
    ];

    async function convertCurrency() {
        finalAmount = 0.00

        let curKey = convertFrom + '_' + convertTo;
        let url = "https://free.currconv.com/api/v7/convert?q=" + curKey + "&compact=ultra&apiKey=yourApi

        await fetch(url).then( response => {
            return response.json()
        })
        .then( data => {
            let rate = data[curKey]

            finalAmount = rate * amount
        })

    }

</script>

<div class="mt-4 rounded shadow border bg-red-50">

    <div id="currency-converter" class="px-4 py-4">

        <h1 class="font-bold text-3xl font-sans justify-center mb-10">
            Currency Converter
        </h1> <br />

        <span class="mt-10">Enter Amount:</span>

        <input class="px-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 rounded sm:text-sm border-gray-300" type="number" name="currencyAmount" placeholder="Enter Amount" bind:value="{amount}" />
        <br /> <br/>

        <span>Convert From:</span>

        <select class="px-4 py-3 rounded-full" bind:value={convertFrom} >
            {#each currencyList as cl }
                <option value="{cl.name}">
                    {cl.desc}
                </option>
            {/each}
        </select>

        <span class="ml-10 mr-10">Convert To:</span>

        <select class="px-4 py-3 rounded-full" bind:value={convertTo} on:change="{convertCurrency}">

            {#each currencyList as cl }
                <option value="{cl.name}">
                    {cl.desc}
                </option>
            {/each}
        </select><br/><br/>

        <span> {amount} {convertFrom} equals {finalAmount} {convertTo}</span>

    </div>

</div>
