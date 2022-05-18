const CSS_CLASS_POSITIVE_PERCENTAGE = 'perc-pos';
const CSS_CLASS_NEGATIVE_PERCENTAGE = 'perc-neg';

const BITCOIN_ORANGE = "#F7931A";
const BITCOIN_GREY = "#4d4d4e";

const SV_PRICE = 47000;
const CF_PRICE = 40000;

let currentBitcoinPrice;

getBitcoinPrice()
    .then(drawMap);

function drawMap() {
    new svgMap({
        targetElementID: 'svgMap',
        colorNoData: BITCOIN_GREY,
        colorMin: BITCOIN_ORANGE,
        colorMax: BITCOIN_ORANGE,
        noDataText: "NGMI",
        data: {
            data: {
                otherLegalTender: {
                    name: 'Other Legal Tender',
                    format: '{0}',
                },
                gdp: {
                    name: 'GDP',
                    format: '${0} billion',
                    thousandSeparator: ',',
                    thresholdMax: 50000,
                    thresholdMin: 1000
                },
                // change: {
                //     name: 'Change to year before',
                //     format: '{0} %'
                // },
                population: {
                    name: 'Population',
                    format: '{0}',
                    thousandSeparator: ',',
                },
                date: {
                    name: 'Bitcoin Legal Tender',
                    format: 'since: {0}',
                },
                price: {
                    name: 'Bitcoin price that day',
                    format: '{0}'
                }
            },
            applyData: 'gdp',
            values: {
                SV: {
                    otherLegalTender: "United States Dollar",
                    gdp: 57.95,
                    population: 6830000,
                    date: "Sep 07, 2021",
                    price: getFormattedPriceInfo(SV_PRICE),
                    link: "https://www.cbc.ca/news/world/el-salvador-bitcoin-1.6166977",
                    linkTarget: "_blank"
                },
                CF: {
                    otherLegalTender: "Central African CFA Franc",
                    gdp: 4.262,
                    population: 4666368,
                    date: "April 28, 2022",
                    price: getFormattedPriceInfo(CF_PRICE),
                    link: "https://news.yahoo.com/central-african-republic-adopts-bitcoin-104407031.html",
                    linkTarget: "_blank"
                },
            }
        }
    });
}

function getBitcoinPrice(){
    const options = {
        method: 'GET',
    };

    return fetch('https://blockchain.info/ticker', options)
        .then(response => response.json())
        .then(response => currentBitcoinPrice = response.USD.last)
        .catch(err => console.error(err));
}

function getFormattedPriceInfo(price) {
    let percAppendix = "";
    if(typeof currentBitcoinPrice  == 'number') {
        percAppendix = " " + percentageHtmlTag(price, currentBitcoinPrice);
    }

    return formatPrice(price) + percAppendix;
}

function formatPrice(price) {
    priceInK = price / 1000;
    return "$" + priceInK + "K";
}

function percentageHtmlTag(base, change) {
    return "(<span class='" +
        percentageClass(base, change) +
        "'>" +
        percentageAsString(base, change) +
        "</span>)";
}

function percentageClass(base, change) {
    return (percentage(base, change) < 0 ? CSS_CLASS_NEGATIVE_PERCENTAGE : CSS_CLASS_POSITIVE_PERCENTAGE);
}

function percentageAsString(base, change) {
    return percentage(base, change).toFixed(1) + "%";
}

function percentage(base, change) {
    return change / base * 100 - 100;
}
