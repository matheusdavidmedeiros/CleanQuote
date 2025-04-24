function getPrice() {
    let cleaningType = $("#wpforms-564-field_11").val();
    let squareFootage = parseInt($(".custom-sqft input").val());

    if (!cleaningType || isNaN(squareFootage)) {
        $("#price-estimate").text("Enter a valid square footage.");
        return;
    }

    if (window.pricingData.length === 0) {
        $("#price-estimate").text("Loading price data... Please wait.");
        return;
    }

    let priceEstimate = "Not Found";

    window.pricingData.forEach(row => {
        if (!row["SIZE"]) return;

        let rangeText = row["SIZE"].replace(/,/g, "").trim();
        let minSF = 0, maxSF = 0;

        if (/UP TO (\d+)/i.test(rangeText)) {
            maxSF = parseInt(rangeText.match(/UP TO (\d+)/i)[1]);
        } else if (/(\d+)\s*TO\s*(\d+)/.test(rangeText)) {
            let match = rangeText.match(/(\d+)\s*TO\s*(\d+)/);
            minSF = parseInt(match[1]);
            maxSF = parseInt(match[2]);
        }

        if (squareFootage >= minSF && squareFootage <= maxSF) {
            const mapping = {
                "Deep Cleaning": "DEEP",
                "Regular Cleaning": "REGULAR",
                "Post-Construction Cleaning": "POST CONSTRUCTION",
                "Move-In/Move-Out Cleaning": "MOVE IN/OUT"
            };
            let formattedType = mapping[cleaningType] || cleaningType;

            if (!row.hasOwnProperty(formattedType)) {
                $("#price-estimate").text("Service not available.");
                return;
            }

            priceEstimate = row[formattedType] || "Not Available";
        }
    });

    $("#price-estimate").text(`Estimated Price: $${priceEstimate}`);
}

jQuery(document).ready(function ($) {
    let csvFile = "Price-Chat-Cleaning-Services.csv";
    window.pricingData = [];

    Papa.parse(csvFile, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
            window.pricingData = results.data;
        }
    });

    $(document).on("change keyup", ".custom-sqft input, #wpforms-564-field_11", getPrice);
});
