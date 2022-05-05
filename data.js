new svgMap({
    targetElementID: 'svgMap',
    colorNoData: "#4d4d4e",
    colorMin: "#F7931A",
    colorMax: "#F7931A",
    noDataText: "NGMI",
    data: {
        data: {
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
                thresholdMax: 50000,
                thresholdMin: 1000
            },
            date: {
                name: 'Bitcoin Legal Tender',
                format: 'since: {0}',
            }
        },
        applyData: 'gdp',
        values: {
            SV: {
                data: {gdp: 57.95, population: 6830000, date: "Sep 07, 2021"},
                link: "https://www.cbc.ca/news/world/el-salvador-bitcoin-1.6166977",
                linkTarget: "_blank"
            },
            CF: {
                data: {gdp: 4.262, population: 4666368, date: "April 28, 2022"},
                link: "https://news.yahoo.com/central-african-republic-adopts-bitcoin-104407031.html",
                linkTarget: "_blank"
            },
        }
    }
});
