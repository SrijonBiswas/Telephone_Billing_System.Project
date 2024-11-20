document.getElementById('billing-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const duration = parseFloat(document.querySelector('input[placeholder="Call Duration (mins)"]').value);
    const callType = document.querySelector('select[name="callType"]').value;

    let rate = callType === 'local' ? 0.5 : 1.5; // Example rates
    let totalBill = duration * rate;

    document.getElementById('bill-result').innerText = `Total Bill: $${totalBill.toFixed(2)}`;
});