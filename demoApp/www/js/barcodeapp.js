var scanCode = function() {
    cordova.plugins.barcodeScanner.scan(
        function(result) {
        alert("Scanned Code: " + result.text 
                + ". Format: " + result.format
                + ". Cancelled: " + result.cancelled);
    }, function(error) {
        alert("Scan failed: " + error);
    });
}
document.addEventListener('DOMContentLoaded',scanCode);
document.getElementById("captureImage").addEventListener('click', function(){
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
		destinationType: Camera.DestinationType.DATA_URL
	});
});
function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}