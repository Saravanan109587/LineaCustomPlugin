 
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
        // set dev key
        Infinea.setDeveloperKey("LZ2DfYZw/+Uo3fRXZt3xdnbR+FdCBawrAoE0Me1zzzJhC7G6UhtGWidZuTcPFjRLVyN/oVf64znAeedZAaKrUw==");
        
        // Connect device
        Infinea.connect();
        
        // Bind barcodeData
        Infinea.barcodeData = function (barcode, type) {
            alert("Barcode: " + barcode + "\n" + "Type: " + type);
        }.bind(this);
        
        Infinea.barcodeNSData = function (barcode, type) {
            //alert("Barcode hex: " + barcode + "\n" + "Type: " + type);
        }.bind(this);
        
        Infinea.barcodeDecimals = function (barcodes, type) {
            // Combine the decimals back into string
            var barcodeString = String.fromCharCode.apply(String, barcodes);
            // Display
            //alert("Barcode decimal: " + barcodeString);
        }.bind(this);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
