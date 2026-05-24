function checkSubdomain() {
    const input = document.getElementById('subdomainInput').value.trim().toLowerCase();
    const resultBox = document.getElementById('resultMessage');

    // Clean inputs: only allow alphanumeric and hyphens
    const cleanInput = input.replace(/[^a-z0-9-]/g, '');

    if (!cleanInput || cleanInput.length < 3) {
        resultBox.className = "mt-4 text-left px-2 text-red-600 font-medium";
        resultBox.innerHTML = "❌ Please enter at least 3 valid alphanumeric characters.";
        resultBox.classList.remove('hidden');
        return;
    }

    resultBox.className = "mt-4 text-left px-2 text-gray-600 font-medium";
    resultBox.innerHTML = "🔍 Checking availability...";
    resultBox.classList.remove('hidden');

    // Replace this URL with your actual backend API or WHMCS/FOSSBilling check endpoint
    // Example: fetch(`/api/check-domain?subdomain=${cleanInput}`)
    
    setTimeout(() => {
        // Simulated API Response for demonstration
        const isAvailable = true; 

        if (isAvailable) {
            resultBox.className = "mt-4 text-left px-2 text-green-600 font-medium bg-green-50 p-3 rounded-xl flex justify-between items-center";
            resultBox.innerHTML = `
                <span>🎉 <strong>${cleanInput}.launchpad.com</strong> is available!</span>
                <a href="/billing/signup?plan=free&domain=${cleanInput}.launchpad.com" class="bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition">Claim Now</a>
            `;
        } else {
            resultBox.className = "mt-4 text-left px-2 text-red-600 font-medium";
            resultBox.innerHTML = `❌ Sorry, <strong>${cleanInput}.launchpad.com</strong> is already taken. Try another name.`;
        }
    }, 800); // Simulated API latency
}
