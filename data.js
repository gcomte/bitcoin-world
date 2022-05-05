new svgMap({
    targetElementID: 'svgMap',
    colorNoData: "#4d4d4e",
    colorMin: "#f2a900",
    colorMax: "#f2a900",
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
            SV: {gdp: 57.95, population: 6830000, date: "Sep 07, 2021"},
            CF: {gdp: 4.262, population: 4666368, date: "April 28, 2022"},
        }
    }
});
