
function SolarenergycalfinalController(moduleController, $scope) /* Please don't rename function name */ {
    this.onPageLoad = function () {
        moduleController.callActionsByEvent('module', 'OnPageLoad').then((data) => {
            $scope.Form.RoofSlopeOne = 0;
            $scope.Form.RoofSlopeTwo = 0;
            $scope.Form.RoofSlopeThree = 0;
            $scope.Form.RoofSlopeFour = 0;
            $scope.RoofOrientation = null;
            $scope.items = [
                { name: 'Pitched Composite Slate', src: 'https://www.apnelec.co.uk/Portals/0/Icons/roof-type-02-piched-composite-slate.png' },
                { name: 'Pitched Slate', src: 'https://www.apnelec.co.uk/Portals/0/Icons/roof-type-01-piched-slate.png' },
                { name: 'Pitched Plain Tile', src: 'https://www.apnelec.co.uk/Portals/0/Icons/roof-type-04-piched-plain-tile.png' },
                { name: 'Pitched Concrete Tile', src: 'https://www.apnelec.co.uk/Portals/0/Icons/roof-type-03-piched-concrete-tile.png' },
                { name: 'Piched sheet metall', src: 'https://www.apnelec.co.uk/Portals/0/Icons/roof-type-06-piched-sheet-metall.png' },
                { name: 'Piched pan tile', src: '	https://www.apnelec.co.uk/Portals/0/Icons/roof-type-05-piched-pan-tile.png' },
                { name: 'Flat', src: 'https://www.apnelec.co.uk/Portals/0/Icons/roof-type-07-Flat.png' },
                { name: 'Ground Mounted', src: 'https://www.apnelec.co.uk/Portals/0/Icons/roof-type-08-ground-mounted.png' }

            ];
            $scope.hoveredItem = null;
            $scope.rooftype1 = null;
            $scope.rooftype2 = null;
            $scope.rooftype3 = null;
            $scope.rooftype4 = null;

            //****************************************** Current Date ************************************************//
            $scope.showDate = new Date();
            var day = $scope.showDate.getDate();
            var month = $scope.showDate.getMonth();
            var year = $scope.showDate.getFullYear();
            var monthNames = [
                "Jan", "Feb", "Mar",
                "Apr", "May", "Jun",
                "Jul", "Aug", "Sep",
                "Oct", "Nov", "Dec"
            ];
            $scope.showDate = day + ' / ' + monthNames[month] + ' / ' + year;
            document.getElementById('showDateid').innerHTML = $scope.showDate;
        });
    }
    //****************************************** Save Pdf ************************************************//
    function setPrint() {
        const closePrint = () => {
            document.body.removeChild(this);
        };
        this.contentWindow.onbeforeunload = closePrint;
        this.contentWindow.onafterprint = closePrint;
        this.contentWindow.print();
    }

    // document.getElementById("print_external").addEventListener("click", () => {
    //     const hideFrame = document.createElement("iframe");
    //     hideFrame.onload = setPrint;
    //     hideFrame.style.display = "none"; // hide iframe
    //     hideFrame.src = "external-page.html";
    //     document.body.appendChild(hideFrame);
    // });
    $scope.triggerPrint = function (item) {
        window.print();
    };
    $scope.printDiv = function (divId) {
        // let printContents = document.getElementById(divId).innerHTML;
        // let originalContents = document.body.innerHTML;
        // document.body.innerHTML = printContents;
        window.print();
        // document.body.innerHTML = originalContents;
    };
    // $("#downloadPdf").on("click", function (event) {
    //     event.preventDefault();
    //     var element = document.getElementById('result');
    //     // Options for html2pdf.
    //     var opt = {
    //         margin: 0.1,
    //         filename: 'APN Elec Result.pdf',
    //         image: { type: 'jpeg', quality: 0.98 },
    //         html2canvas: { scale: 1 },
    //         jsPDF: { unit: 'in', format: 'A4', orientation: 'Landscape' }
    //     };
    //     // Choose the element and pass it with the options
    //     html2pdf().set(opt).from(element).save();
    // });
    $("#downloadPdf").on("click", function (event) {
        event.preventDefault();

        // Delay in milliseconds
        var delay = 5000; // 5 seconds delay, for example

        setTimeout(function () {
            var element = document.getElementById('result');

            // Get current datetime
            var currentDate = new Date();

            // Format date as a string 'YYYY-MM-DD_HH-mm-ss'
            var dateString = currentDate.toISOString().replace(/T/, '_').replace(/\..+/, '').replace(/:/g, '-');

            // Create the filename with the current date and time
            var filename = 'APN_Elec_Result_' + dateString + '.pdf';

            // Options for html2pdf with the dynamic filename
            var opt = {
                margin: 0.1,
                filename: filename,
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'A4', orientation: 'Landscape' }
            };
            // Choose the element and pass it with the options
            html2pdf().set(opt).from(element).save();
        }, delay);
    });
    // $("#downloadPdf").on("click", function (event) {
    //     // Choose the element that our PDF is going to be.
    //     var element = document.getElementById('contentToPdf');
    //     if (!element) {
    //         console.error("The element to convert to PDF was not found.");
    //         return;
    //     }

    //     // Get current datetime
    //     var currentDate = new Date();

    //     // Format date as a string 'YYYY-MM-DD_HH-mm-ss'
    //     var dateString = currentDate.toISOString().replace(/T/, '_').replace(/\..+/, '').replace(/:/g, '-');

    //     // Create the filename with the current date and time
    //     var filename = 'file_' + dateString + '.pdf';

    //     // Options for html2pdf including the dynamic filename
    //     var opt = {
    //         margin: 0.1,
    //         filename: filename,
    //         image: { type: 'jpeg', quality: 0.98 },
    //         html2canvas: { scale: 2 },
    //         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    //     };

    //     // Output the filename to the console for debugging
    //     console.log("Attempting to save PDF with filename:", filename);

    //     // Choose the element and pass it with the options
    //     html2pdf().set(opt).from(element).save();
    // });
    //******************************************post code to cordinate************************************************//
    $scope.selectItem = function (item) {
        $scope.rooftype1 = item;
        $scope.CheckRoofType(item, 1);
    };
    $scope.selectItemTwo = function (item) {
        $scope.rooftype2 = item;
        $scope.CheckRoofType(item, 2);
    };
    $scope.selectItemThree = function (item) {
        $scope.rooftype3 = item;
        $scope.CheckRoofType(item, 3);
    };
    $scope.selectItemFour = function (item) {
        $scope.rooftype4 = item;
        $scope.CheckRoofType(item, 4);
    };

    $scope.hoverIn = function (item) {
        $scope.hoveredItem = item;
    };

    $scope.hoverOut = function () {
        $scope.hoveredItem = null;
    };
    //******************************************post code to cordinate************************************************//
    $scope.addSpace = function () {
        var outwardLength = $scope.PostCode.length === 5 ? 2 : ($scope.PostCode.length === 6 ? 3 : 4);
        var parts = /^([A-Z]{1,2})([0-9][A-Z0-9]?)([0-9][A-Z]{2})$/i.exec($scope.PostCode.replace(/\s/g, ''));
        debugger
        if (parts) {
            $scope.PostCode = parts[1] + parts[2] + " " + parts[3];
        }
        $scope.PostCodeSh = $scope.PostCode;
        // alert('error');
    };

    $scope.LoadMap = async function () {
        const postcodeZones = await $scope.loadCSVFile('/Portals/0/solar-calculation/postcode-zone.csv');
        // alert('The result is: ' + $scope.PostCode + $scope.PVOutPut + $scope.ShadeFactor);

        // Ensure $scope.PostCode has a value before calling toLowerCase
        if ($scope.PostCode) {
            $scope.PostCode = $scope.PostCode.toLowerCase();
        }

        let numOfChars = 4;
        $scope.PostcodeZone = undefined;

        while (numOfChars > 0 && $scope.PostcodeZone === undefined) {
            $scope.PostcodeZone = postcodeZones.find(e => e.postcode === $scope.PostCode.substr(0, numOfChars));
            numOfChars--;

        }
        if ($scope.PostcodeZone === undefined) {
            return; // If postcode entered doesn't exist
        }
        const zone = 'Z' + $scope.PostcodeZone.zone.toUpperCase();
        $scope.ZoneNumber = zone;


        debugger
        var postcode = $scope.PostCode;
        // if (!postcode) {
        //     alert("Please enter a postcode.");
        //     return;
        // }
        var apiUrl = 'https://api.postcodes.io/postcodes/' + encodeURIComponent(postcode);
        fetch(apiUrl)
            .then(function (response) {
                debugger

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                return response.json();
            })
            .then(function (data) {
                debugger

                var lat = data.result.latitude;
                var lon = data.result.longitude;
                // Construct the Google Maps iframe URL with new lat and lng
                // var iframeSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25900.760853889118!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1702321495350!5m2!1sen!2s`;
                var iframeSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.94233897586585!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1702407346148!5m2!1sen!2s`;
                // Insert updated iframe into the map container
                document.getElementById('circle').innerHTML = `<iframe src="${iframeSrc}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
                document.getElementById('circletwo').innerHTML = `<iframe src="${iframeSrc}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
                document.getElementById('circlethree').innerHTML = `<iframe src="${iframeSrc}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
                document.getElementById('circlefour').innerHTML = `<iframe src="${iframeSrc}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
                document.getElementById('resultshow').innerHTML = `<iframe src="${iframeSrc}" width="600" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

            })
            .catch(function (error) {
                debugger

                // alert(error.message);
            });
    }

    //******************************************solar calculator************************************************//

    $scope.loadCSVFile = async function (filename) {
        try {
            const response = await fetch(filename);
            const text = await response.text();
            const lines = text.toLowerCase().replace(/\r/g, '').split('\n');
            const headers = lines.shift().split(',');
            const data = lines.map(line => {
                const currentLine = line.split(',');
                let obj = {};
                headers.forEach((header, i) => {
                    obj[header] = currentLine[i];
                });
                return obj;
            });
            return data;
        } catch (error) {
            console.error('Error loading CSV file:', error);
            throw error;
        }
    };
    $scope.calculateResult = async function (e) {
        const postcodeZones = await $scope.loadCSVFile('/Portals/0/solar-calculation/postcode-zone.csv');
        // alert('The result is: ' + $scope.PostCode + $scope.PVOutPut + $scope.ShadeFactor);

        // Ensure $scope.PostCode has a value before calling toLowerCase
        if ($scope.PostCode) {
            $scope.PostCode = $scope.PostCode.toLowerCase();
        }

        let numOfChars = 4;
        $scope.PostcodeZone = undefined;

        while (numOfChars > 0 && $scope.PostcodeZone === undefined) {
            $scope.PostcodeZone = postcodeZones.find(e => e.postcode === $scope.PostCode.substr(0, numOfChars));
            numOfChars--;

        }
        if ($scope.PostcodeZone === undefined) {
            return; // If postcode entered doesn't exist
        }
        const zone = 'Z' + $scope.PostcodeZone.zone.toUpperCase();
        $scope.ZoneNumber = zone;
        const zoneFile = await $scope.loadCSVFile(`/Portals/0/solar-calculation/zones/${zone}.csv`);

        const inputOrientation = parseFloat($scope.RoofOneOrientation);
        const positiveOrientation = Math.abs(inputOrientation); // Convert to positive if negative
        const orientation = Math.round(positiveOrientation / 5) * 5;

        if (orientation > 180) {
            return; // Orientation entered is out of range
        }

        const inputInclination = parseFloat($scope.Form.RoofSlopeOne);
        const inclination = Math.round(inputInclination);
        if (inclination < 0 || inclination > 90) {
            return; // Inclination entered is out of range
        }
        const amountOfRadiation = parseFloat(zoneFile[inclination][orientation]);
        const inputShadeFactor = parseFloat($scope.ShadeFactorOne);
        const shadeFactor = 1 - (inputShadeFactor / 100);
        if (shadeFactor < 0 || shadeFactor > 1) { // Fixed range check here
            return; // Shade factor entered is out of range
        }
        const kWp = parseFloat($scope.PVOutPutOne);
        const result = (amountOfRadiation * shadeFactor * kWp).toFixed(2);

        $scope.Result1 = parseFloat(result);
        $scope.Result1 = $scope.Result1.toFixed(2);

        // alert('The result is: ' + $scope.Result2);

        $scope.FullResult = parseFloat($scope.Result1);
        $scope.FullResult = $scope.FullResult.toFixed(2);
        $scope.PVOutPut = parseFloat($scope.PVOutPutOne);
        $scope.PVOutPut = $scope.PVOutPut.toFixed(2);

        $scope.$apply(function () {
            debugger
            document.getElementById('Result-1').value = $scope.Result1;
            document.getElementById('FormResult1').value = $scope.Result1;
            document.getElementById('Result-final').value = $scope.FullResult;
            document.getElementById('FullResultNumb').value = $scope.FullResult;
            document.getElementById('PVOutPutNum').value = $scope.PVOutPut;
            document.getElementById('PVOutPutNumb').value = $scope.PVOutPut;
        });
        debugger
        $scope.$apply();

    };
    $scope.calculateResult2 = async function (e) {
        const postcodeZones = await $scope.loadCSVFile('/Portals/0/solar-calculation/postcode-zone.csv');
        // alert('The result is: ' + $scope.PostCode + $scope.PVOutPut + $scope.ShadeFactor);

        // Ensure $scope.PostCode has a value before calling toLowerCase
        if ($scope.PostCode) {
            $scope.PostCode = $scope.PostCode.toLowerCase();
        }

        let numOfChars = 4;
        $scope.PostcodeZone = undefined;

        while (numOfChars > 0 && $scope.PostcodeZone === undefined) {
            $scope.PostcodeZone = postcodeZones.find(e => e.postcode === $scope.PostCode.substr(0, numOfChars));
            numOfChars--;

        }
        if ($scope.PostcodeZone === undefined) {
            return; // If postcode entered doesn't exist
        }
        const zone = 'Z' + $scope.PostcodeZone.zone.toUpperCase();
        const zoneFile = await $scope.loadCSVFile(`/Portals/0/solar-calculation/zones/${zone}.csv`);

        const inputOrientation = parseFloat($scope.RoofTwoOrientation);
        const positiveOrientation = Math.abs(inputOrientation); // Convert to positive if negative
        const orientation = Math.round(positiveOrientation / 5) * 5;
        if (orientation > 180) {
            return; // Orientation entered is out of range
        }

        const inputInclination = parseFloat($scope.Form.RoofSlopeTwo);
        const inclination = Math.round(inputInclination);
        if (inclination < 0 || inclination > 90) {
            return; // Inclination entered is out of range
        }
        const amountOfRadiation = parseFloat(zoneFile[inclination][orientation]);
        const inputShadeFactor = parseFloat($scope.ShadeFactorTwo);
        const shadeFactor = 1 - (inputShadeFactor / 100);
        if (shadeFactor < 0 || shadeFactor > 1) { // Fixed range check here
            return; // Shade factor entered is out of range
        }
        const kWp = parseFloat($scope.PVOutPutTwo);
        const result = (amountOfRadiation * shadeFactor * kWp).toFixed(2);
        $scope.Result2 = parseFloat(result);
        $scope.Result2 = $scope.Result2.toFixed(2);

        // alert('The result is: ' + $scope.Result2);

        $scope.FullResult = parseFloat($scope.Result1) + parseFloat($scope.Result2);
        $scope.FullResult = $scope.FullResult.toFixed(2);
        $scope.PVOutPut = parseFloat($scope.PVOutPutOne) + parseFloat($scope.PVOutPutTwo);
        $scope.PVOutPut = $scope.PVOutPut.toFixed(2);
        $scope.$apply(function () {
            debugger
            document.getElementById('Result-2').value = $scope.Result2;
            document.getElementById('FormResult2').value = $scope.Result2;
            document.getElementById('Result-final').value = $scope.FullResult;
            document.getElementById('FullResultNumb').value = $scope.FullResult;
            document.getElementById('PVOutPutNum').value = $scope.PVOutPut;
            document.getElementById('PVOutPutNumb').value = $scope.PVOutPut;
        });
        debugger
        $scope.$apply();


    };
    $scope.calculateResult3 = async function (e) {
        const postcodeZones = await $scope.loadCSVFile('/Portals/0/solar-calculation/postcode-zone.csv');
        // alert('The result is: ' + $scope.PostCode + $scope.PVOutPut + $scope.ShadeFactor);

        // Ensure $scope.PostCode has a value before calling toLowerCase
        if ($scope.PostCode) {
            $scope.PostCode = $scope.PostCode.toLowerCase();
        }

        let numOfChars = 4;
        $scope.PostcodeZone = undefined;

        while (numOfChars > 0 && $scope.PostcodeZone === undefined) {
            $scope.PostcodeZone = postcodeZones.find(e => e.postcode === $scope.PostCode.substr(0, numOfChars));
            numOfChars--;

        }
        if ($scope.PostcodeZone === undefined) {
            return; // If postcode entered doesn't exist
        }
        const zone = 'Z' + $scope.PostcodeZone.zone.toUpperCase();
        const zoneFile = await $scope.loadCSVFile(`/Portals/0/solar-calculation/zones/${zone}.csv`);

        const inputOrientation = parseFloat($scope.RoofThreeOrientation);
        const positiveOrientation = Math.abs(inputOrientation); // Convert to positive if negative
        const orientation = Math.round(positiveOrientation / 5) * 5;

        if (orientation > 180) {
            return; // Orientation entered is out of range
        }

        const inputInclination = parseFloat($scope.Form.RoofSlopeThree);
        const inclination = Math.round(inputInclination);
        if (inclination < 0 || inclination > 90) {
            return; // Inclination entered is out of range
        }
        const amountOfRadiation = parseFloat(zoneFile[inclination][orientation]);
        const inputShadeFactor = parseFloat($scope.ShadeFactorThree);
        const shadeFactor = 1 - (inputShadeFactor / 100);
        if (shadeFactor < 0 || shadeFactor > 1) { // Fixed range check here
            return; // Shade factor entered is out of range
        }
        const kWp = parseFloat($scope.PVOutPutThree);
        const result = (amountOfRadiation * shadeFactor * kWp).toFixed(2);
        $scope.Result3 = parseInt(result);
        $scope.Result3 = $scope.Result3.toFixed(2);

        // alert('The result is: ' + $scope.Result3);

        $scope.FullResult = parseFloat($scope.Result1) + parseFloat($scope.Result2) + parseFloat($scope.Result3);
        $scope.PVOutPut = parseFloat($scope.PVOutPutOne) + parseFloat($scope.PVOutPutTwo) + parseFloat($scope.PVOutPutThree);
        $scope.FullResult = $scope.FullResult.toFixed(2);
        $scope.PVOutPut = $scope.PVOutPut.toFixed(2);
        $scope.$apply(function () {
            debugger
            document.getElementById('Result-3').value = $scope.Result3;
            document.getElementById('FormResult3').value = $scope.Result3;
            document.getElementById('Result-final').value = $scope.FullResult;
            document.getElementById('FullResultNumb').value = $scope.FullResult;
            document.getElementById('PVOutPutNum').value = $scope.PVOutPut;
            document.getElementById('PVOutPutNumb').value = $scope.PVOutPut;
        });
        debugger
        $scope.$apply();


    };
    $scope.calculateResult4 = async function (e) {
        const postcodeZones = await $scope.loadCSVFile('/Portals/0/solar-calculation/postcode-zone.csv');
        // alert('The result is: ' + $scope.PostCode + $scope.PVOutPut + $scope.ShadeFactor);

        // Ensure $scope.PostCode has a value before calling toLowerCase
        if ($scope.PostCode) {
            $scope.PostCode = $scope.PostCode.toLowerCase();
        }

        let numOfChars = 4;
        $scope.PostcodeZone = undefined;

        while (numOfChars > 0 && $scope.PostcodeZone === undefined) {
            $scope.PostcodeZone = postcodeZones.find(e => e.postcode === $scope.PostCode.substr(0, numOfChars));
            numOfChars--;

        }
        if ($scope.PostcodeZone === undefined) {
            return; // If postcode entered doesn't exist
        }
        const zone = 'Z' + $scope.PostcodeZone.zone.toUpperCase();
        const zoneFile = await $scope.loadCSVFile(`/Portals/0/solar-calculation/zones/${zone}.csv`);

        const inputOrientation = parseFloat($scope.RoofFourOrientation);
        const positiveOrientation = Math.abs(inputOrientation); // Convert to positive if negative
        const orientation = Math.round(positiveOrientation / 5) * 5;
        if (orientation > 180) {
            return; // Orientation entered is out of range
        }

        const inputInclination = parseFloat($scope.Form.RoofSlopeFour);
        const inclination = Math.round(inputInclination);
        if (inclination < 0 || inclination > 90) {
            return; // Inclination entered is out of range
        }
        const amountOfRadiation = parseFloat(zoneFile[inclination][orientation]);
        const inputShadeFactor = parseFloat($scope.ShadeFactorFour);
        const shadeFactor = 1 - (inputShadeFactor / 100);
        if (shadeFactor < 0 || shadeFactor > 1) { // Fixed range check here
            return; // Shade factor entered is out of range
        }
        const kWp = parseFloat($scope.PVOutPutFour);
        const result = (amountOfRadiation * shadeFactor * kWp).toFixed(2);
        $scope.Result4 = parseFloat(result);
        $scope.Result4 = $scope.Result4.toFixed(2);
        // alert('The result is: ' + $scope.Result1);
        $scope.FullResult = parseFloat($scope.Result1) + parseFloat($scope.Result2) + parseFloat($scope.Result3) + parseFloat($scope.Result4);
        $scope.PVOutPut = parseFloat($scope.PVOutPutOne) + parseFloat($scope.PVOutPutTwo) + parseFloat($scope.PVOutPutThree) + parseFloat($scope.PVOutPutFour);
        $scope.FullResult = $scope.FullResult.toFixed(2);
        $scope.PVOutPut = $scope.PVOutPut.toFixed(2);
        // alert('The result is: ' + $scope.FullResult);
        $scope.$apply(function () {
            debugger
            document.getElementById('Result-4').value = $scope.Result4;
            document.getElementById('FormResult4').value = $scope.Result4;
            document.getElementById('Result-final').value = $scope.FullResult;
            document.getElementById('FullResultNumb').value = $scope.FullResult;
            document.getElementById('PVOutPutNum').value = $scope.PVOutPut;
            document.getElementById('PVOutPutNumb').value = $scope.PVOutPut;
        });
        debugger
        $scope.$apply();



    };


    //******************************************tabs************************************************//

    $(document).ready(function () {
        // Initialize tooltips
        $(".nav-tabs > li a[title]").tooltip();

        // Wizard
        $('a[data-toggle="tab"]').on("show.bs.tab", function (e) {
            var $target = $(e.target);
            if ($target.parent().hasClass("disabled")) {
                return false;
            }
        });

        // Function to handle tab selection
        function handleTabSelection($tab) {
            var tabId = $tab.attr("href");
            if (tabId === "#step6") { // Check if the selected tab is step6
                $("#selection-wizard-costum").removeClass("col-md-9").addClass("col-md-12"); // Adjust classes
                $(".neomorphsm-container").hide(); // Hide the neomorphsm-container div
            } else {
                $("#selection-wizard-costum").removeClass("col-md-12").addClass("col-md-9"); // Adjust classes
                $(".neomorphsm-container").show(); // Show the neomorphsm-container div for other tabs
            }
        }

        // When a tab is shown
        $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
            handleTabSelection($(e.target));
        });

        // When the document is ready, handle tab selection for the initially active tab
        handleTabSelection($(".wizard .nav-tabs li.active a"));



        $(".next-step").click(function (e) {
            var isValid = true;
            var $activeTab = $(".wizard .nav-tabs li.active");
            var $activeTabPane = $($activeTab.find('a[data-toggle="tab"]').attr("href"));


            // Check all required inputs in the current tab
            $activeTabPane.find(".required-input").each(function () {
                if (!$(this).val()) {
                    isValid = false;
                    // alert or use other ways to notify the user
                    alert("Please fill out all required fields before moving to the next step.");
                    $(this).focus(); // Optional: focus on the first empty input
                    return false; // Break out of the each loop
                }
            });


            // If all required inputs are filled, proceed to the next tab
            if (isValid) {
                var $next = $activeTab.next();
                // Find the next non-hidden tab
                while ($next.hasClass("hidden")) {
                    $next = $next.next();
                }
                if ($next.length > 0) {
                    $next.removeClass("disabled");
                    moveToTab($next.find('a[data-toggle="tab"]').attr("href"));
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }
            }
        });


        $(".prev-step").click(function (e) {
            var $active = $(".wizard .nav-tabs li.active");
            moveToTab($active.prev().find('a[data-toggle="tab"]').attr("href"));
        });


        $("#plusButton").on("click", function (event) {
            event.preventDefault(); // Prevent the default behavior
            // Find the next hidden tab and unhide it
            var $nextHiddenTab = $(".wizard .nav-tabs li.hidden:first");
            if ($nextHiddenTab.length > 0) {
                $nextHiddenTab.removeClass("hidden");
                $nextHiddenTab.removeClass("disabled");
                moveToTab($nextHiddenTab.find('a[data-toggle="tab"]').attr("href"));
            }
        });
        $('input').keypress(function (e) {
            // Check if the pressed key is the "Enter" key
            if (e.which == 13) {
                e.preventDefault(); // Prevent the default behavior of the Enter key
                var $activeTab = $(".wizard .nav-tabs li.active");
                var $next = $activeTab.next();

                // If there is a next tab available and it's not hidden
                if ($next.length > 0 && !$next.hasClass("hidden") && !$next.hasClass("disabled")) {
                    // Trigger the click event of the .next-step button
                    $(".next-step").click();
                }
            }
        });
    });


    function moveToTab(tabId) {
        // Simulate a click on the tab link
        $(".wizard .nav-tabs li a[href='" + tabId + "']").click();
    }



    // $(document).ready(function () {
    //     // Initialize tooltips
    //     $(".nav-tabs > li a[title]").tooltip();

    //     // Wizard
    //     $('a[data-toggle="tab"]').on("show.bs.tab", function (e) {
    //         var $target = $(e.target);

    //         if ($target.parent().hasClass("disabled")) {
    //             return false;
    //         }
    //     });

    //     $(".next-step").click(function (e) {
    //         var $active = $(".wizard .nav-tabs li.active");
    //         var $next = $active.next();

    //         // Find the next non-hidden tab
    //         while ($next.hasClass("hidden")) {
    //             $next = $next.next();
    //         }

    //         if ($next.length > 0) {
    //             $next.removeClass("disabled");
    //             moveToTab($next.find('a[data-toggle="tab"]').attr("href"));
    //         }
    //     });

    //     $(".prev-step").click(function (e) {
    //         var $active = $(".wizard .nav-tabs li.active");
    //         moveToTab($active.prev().find('a[data-toggle="tab"]').attr("href"));
    //     });

    //     $("#plusButton").on("click", function (event) {
    //         event.preventDefault(); // Prevent the default behavior
    //         // Find the next hidden tab and unhide it
    //         var $nextHiddenTab = $(".wizard .nav-tabs li.hidden:first");
    //         if ($nextHiddenTab.length > 0) {
    //             $nextHiddenTab.removeClass("hidden");
    //             $nextHiddenTab.removeClass("disabled");
    //             moveToTab($nextHiddenTab.find('a[data-toggle="tab"]').attr("href"));
    //         }
    //     });
    // });
    // function moveToTab(tabId) {
    //     // Simulate a click on the tab link
    //     $(".wizard .nav-tabs li a[href='" + tabId + "']").click();
    // }


    // Usage example:
    // moveToTab("#step3");



    $scope.orientationOneShowOnPanelCalled = false;
    $scope.orientationTwoShowOnPanelCalled = false;
    $scope.orientationThreeShowOnPanelCalled = false;
    $scope.orientationFourShowOnPanelCalled = false;


    $scope.OrientationOneShowOnPanel = function () {

        if (!$scope.orientationOneShowOnPanelCalled) {
            $scope.orientationOneShowOnPanelCalled = true; // Update the flag after the first call
        } else {
            $scope.OrientationOneShowOnPanelKey = 1; // Or any other value
        }
    };
    $scope.OrientationTwoShowOnPanel = function () {

        if (!$scope.orientationTwoShowOnPanelCalled) {
            $scope.orientationTwoShowOnPanelCalled = true; // Update the flag after the first call
        } else {
            $scope.OrientationTwoShowOnPanelKey = 1; // Or any other value
        }
    };
    $scope.OrientationThreeShowOnPanel = function () {

        if (!$scope.orientationThreeShowOnPanelCalled) {
            $scope.orientationThreeShowOnPanelCalled = true; // Update the flag after the first call
        } else {
            $scope.OrientationThreeShowOnPanelKey = 1; // Or any other value
        }
    };
    $scope.OrientationFourShowOnPanel = function () {

        if (!$scope.orientationFourShowOnPanelCalled) {
            $scope.orientationFourShowOnPanelCalled = true; // Update the flag after the first call
        } else {
            $scope.OrientationFourShowOnPanelKey = 1; // Or any other value
        }
    };
    $scope.RoofSlopeOneShowOnPanelCalled = false;
    $scope.RoofSlopeTwoShowOnPanelCalled = false;
    $scope.RoofSlopeThreeShowOnPanelCalled = false;
    $scope.RoofSlopeFourShowOnPanelCalled = false;


    $scope.RoofSlopeOneShowOnPanel = function () {
        if (!$scope.RoofSlopeOneShowOnPanelCalled) {

            $scope.RoofSlopeOneShowOnPanelCalled = true; // Update the flag after the first call
        } else {

            $scope.RoofSlopeOneShowOnPanelKey = 1; // Or any other value
        }
    };
    $scope.RoofSlopeTwoShowOnPanel = function () {

        if (!$scope.RoofSlopeTwoShowOnPanelCalled) {
            $scope.RoofSlopeTwoShowOnPanelCalled = true; // Update the flag after the first call
        } else {
            $scope.RoofSlopeTwoShowOnPanelKey = 1; // Or any other value
        }
    };
    $scope.RoofSlopeThreeShowOnPanel = function () {

        if (!$scope.RoofSlopeThreeShowOnPanelCalled) {
            $scope.RoofSlopeThreeShowOnPanelCalled = true; // Update the flag after the first call
        } else {
            $scope.RoofSlopeThreeShowOnPanelKey = 1; // Or any other value
        }
    };
    $scope.RoofSlopeFourShowOnPanel = function () {

        if (!$scope.RoofSlopeFourShowOnPanelCalled) {
            $scope.RoofSlopeFourShowOnPanelCalled = true; // Update the flag after the first call
        } else {
            $scope.RoofSlopeFourShowOnPanelKey = 1; // Or any other value
        }
    };
    $scope.PrintResult = function (result) {

        var printContents = document.getElementById(result).innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }

    /********************************* check showing which canvas *********************************/


    // $scope.CheckRoofType = function(item, number) {
    //     if (item.name === 'Flat') {
    //         hideElements(number);
    //         showFlatElements(number);
    //     } else if (item.name === 'Ground Mounted') {
    //         hideElements(number);
    //         showGroundMountedElements(number);
    //     } 
    // };



    // function hideElements(number) {
    //     document.getElementById('my-house-' + number).classList.add('hidden');
    //     document.getElementById('slope-info-' + number).classList.add('hidden');

    //     var element = document.getElementById("angel-info-" + number);
    //     var upperelement = document.getElementById("solarPanelCanvas" + number);
    //     if (!element.classList.contains("hidden")) {
    //         element.classList.add("hidden");
    //         upperelement.classList.add("hidden");
    //     }
    // }

    // function showFlatElements(number) {
    //     document.getElementById('solarPanelCanvasFlat' + number).classList.remove('hidden');
    //     document.getElementById('angel-flat-info-' + number).classList.remove('hidden');
    // }

    // function showGroundMountedElements(number) {
    //     document.getElementById('solarPanelCanvas' + number).classList.remove('hidden');
    //     document.getElementById('angel-info-' + number).classList.remove('hidden');
    // }

    $scope.CheckRoofType = function (item, number) {
        // Check if the selected item is one of the last two items
        if (item.name === 'Flat' && number == 1) {

            document.getElementById('my-house-1').classList.add('hidden');
            document.getElementById('slope-info-1').classList.add('hidden');

            var element1 = document.getElementById("angel-info-1");
            var upperelement1 = document.getElementById("solarPanelCanvas1");
            if (!element1.classList.contains("hidden")) {
                element1.classList.add("hidden");
                upperelement1.classList.add("hidden");
            }

            document.getElementById('solarPanelCanvasFlat1').classList.remove('hidden');
            document.getElementById('angel-flat-info-1').classList.remove('hidden');

        } else if (item.name === 'Flat' && number == 2) {

            document.getElementById('my-house-2').classList.add('hidden');
            document.getElementById('slope-info-2').classList.add('hidden');

            var element2 = document.getElementById("angel-info-2");
            var upperelement2 = document.getElementById("solarPanelCanvas2");
            if (!element2.classList.contains("hidden")) {
                element2.classList.add("hidden");
                upperelement2.classList.add("hidden");
            }

            document.getElementById('solarPanelCanvasFlat2').classList.remove('hidden');
            document.getElementById('angel-flat-info-2').classList.remove('hidden');

        } else if (item.name === 'Flat' && number == 3) {

            document.getElementById('my-house-3').classList.add('hidden');
            document.getElementById('slope-info-3').classList.add('hidden');

            var element3 = document.getElementById("angel-info-3");
            var upperelement3 = document.getElementById("solarPanelCanvas3");
            if (!element3.classList.contains("hidden")) {
                element3.classList.add("hidden");
                upperelement3.classList.add("hidden");
            }

            document.getElementById('solarPanelCanvasFlat3').classList.remove('hidden');
            document.getElementById('angel-flat-info-3').classList.remove('hidden');

        } else if (item.name === 'Flat' && number == 4) {

            document.getElementById('my-house-4').classList.add('hidden');
            document.getElementById('slope-info-4').classList.add('hidden');

            var element4 = document.getElementById("angel-info-4");
            var upperelement4 = document.getElementById("solarPanelCanvas4");
            if (!element4.classList.contains("hidden")) {
                element4.classList.add("hidden");
                upperelement4.classList.add("hidden");
            }

            document.getElementById('solarPanelCanvasFlat4').classList.remove('hidden');
            document.getElementById('angel-flat-info-4').classList.remove('hidden');

        } else if (item.name === 'Ground Mounted' && number == 1) {

            document.getElementById('my-house-1').classList.add('hidden');
            document.getElementById('slope-info-1').classList.add('hidden');

            var element1 = document.getElementById("angel-flat-info-1");
            var upperelement1 = document.getElementById("solarPanelCanvasFlat1");
            if (!element1.classList.contains("hidden")) {
                element1.classList.add("hidden");
                upperelement1.classList.add("hidden");
            }

            document.getElementById('solarPanelCanvas1').classList.remove('hidden');
            document.getElementById('angel-info-1').classList.remove('hidden');

        } else if (item.name === 'Ground Mounted' && number == 2) {

            document.getElementById('my-house-2').classList.add('hidden');
            document.getElementById('slope-info-2').classList.add('hidden');

            var element2 = document.getElementById("angel-flat-info-2");
            var upperelement2 = document.getElementById("solarPanelCanvasFlat2");
            if (!element2.classList.contains("hidden")) {
                element2.classList.add("hidden");
                upperelement2.classList.add("hidden");
            }

            document.getElementById('solarPanelCanvas2').classList.remove('hidden');
            document.getElementById('angel-info-2').classList.remove('hidden');

        } else if (item.name === 'Ground Mounted' && number == 3) {

            document.getElementById('my-house-3').classList.add('hidden');
            document.getElementById('slope-info-3').classList.add('hidden');

            var element3 = document.getElementById("angel-flat-info-3");
            var upperelement3 = document.getElementById("solarPanelCanvasFlat3");
            if (!element3.classList.contains("hidden")) {
                element3.classList.add("hidden");
                upperelement3.classList.add("hidden");
            }

            document.getElementById('solarPanelCanvas3').classList.remove('hidden');
            document.getElementById('angel-info-3').classList.remove('hidden');

        } else if (item.name === 'Ground Mounted' && number == 4) {

            document.getElementById('my-house-4').classList.add('hidden');
            document.getElementById('slope-info-4').classList.add('hidden');

            var element4 = document.getElementById("angel-flat-info-4");
            var upperelement4 = document.getElementById("solarPanelCanvasFlat4");
            if (!element4.classList.contains("hidden")) {
                element4.classList.add("hidden");
                upperelement4.classList.add("hidden");
            }

            document.getElementById('solarPanelCanvas4').classList.remove('hidden');
            document.getElementById('angel-info-4').classList.remove('hidden');

        } else if (item.name != 'Flat' && !item.name != 'Ground Mounted' && number == 1) {

            var element = document.getElementById("slope-info-1");
            var upperelement = document.getElementById("my-house-1");
            var parameter = document.getElementById("angel-flat-info-1");
            var upperparameter = document.getElementById("solarPanelCanvasFlat1");
            var variable = document.getElementById("angel-info-1");
            var uppervariable = document.getElementById("solarPanelCanvas1");
            if (element.classList.contains("hidden")) {
                element.classList.remove("hidden");
                upperelement.classList.remove("hidden");
            }
            if (!parameter.classList.contains("hidden")) {
                parameter.classList.add("hidden");
                upperparameter.classList.add("hidden");
            }
            if (!variable.classList.contains("hidden")) {
                variable.classList.add("hidden");
                uppervariable.classList.add("hidden");
            }

        } else if (!item.name != 'Flat' && !item.name != 'Ground Mounted' && number == 2) {

            var element = document.getElementById("slope-info-2");
            var upperelement = document.getElementById("my-house-2");
            var parameter = document.getElementById("angel-flat-info-2");
            var upperparameter = document.getElementById("solarPanelCanvasFlat2");
            var variable = document.getElementById("angel-info-2");
            var uppervariable = document.getElementById("solarPanelCanvas2");
            if (element.classList.contains("hidden")) {
                element.classList.remove("hidden");
                upperelement.classList.remove("hidden");
            }
            if (!parameter.classList.contains("hidden")) {
                parameter.classList.add("hidden");
                upperparameter.classList.add("hidden");
            }
            if (!variable.classList.contains("hidden")) {
                variable.classList.add("hidden");
                uppervariable.classList.add("hidden");
            }

        } else if (!item.name != 'Flat' && !item.name != 'Ground Mounted' && number == 3) {

            var element = document.getElementById("slope-info-3");
            var upperelement = document.getElementById("my-house-3");
            var parameter = document.getElementById("angel-flat-info-3");
            var upperparameter = document.getElementById("solarPanelCanvasFlat3");
            var variable = document.getElementById("angel-info-3");
            var uppervariable = document.getElementById("solarPanelCanvas3");
            if (element.classList.contains("hidden")) {
                element.classList.remove("hidden");
                upperelement.classList.remove("hidden");
            }
            if (!parameter.classList.contains("hidden")) {
                parameter.classList.add("hidden");
                upperparameter.classList.add("hidden");
            }
            if (!variable.classList.contains("hidden")) {
                variable.classList.add("hidden");
                uppervariable.classList.add("hidden");
            }

        } else if (!item.name != 'Flat' && !item.name != 'Ground Mounted' && number == 4) {

            var element = document.getElementById("slope-info-4");
            var upperelement = document.getElementById("my-house-4");
            var parameter = document.getElementById("angel-flat-info-4");
            var upperparameter = document.getElementById("solarPanelCanvasFlat4");
            var variable = document.getElementById("angel-info-4");
            var uppervariable = document.getElementById("solarPanelCanvas4");
            if (element.classList.contains("hidden")) {
                element.classList.remove("hidden");
                upperelement.classList.remove("hidden");
            }
            if (!parameter.classList.contains("hidden")) {
                parameter.classList.add("hidden");
                upperparameter.classList.add("hidden");
            }
            if (!variable.classList.contains("hidden")) {
                variable.classList.add("hidden");
                uppervariable.classList.add("hidden");
            }

        }
    };

}
