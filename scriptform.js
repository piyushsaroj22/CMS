const form = document.querySelector(".contact-form");
const status = document.getElementById("form-status"); // optional
const submitBtn = form.querySelector(".btn-primary");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Prevent double submit
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";

    if (status) {
        status.textContent = "Sending...";
        status.style.color = "#9ca3af";
    }

    try {
        const formData = new FormData(form);

        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
        });

        const result = await response.json();

        if (result.success) {
            if (status) {
                status.textContent = "✅ Message sent successfully!";
                status.style.color = "#22c55e";
            }
            form.reset();
        } else {
            if (status) {
                status.textContent = "❌ Something went wrong. Try again.";
                status.style.color = "#ef4444";
            }
        }
    } catch (error) {
        if (status) {
            status.textContent = "❌ Network error. Please try again.";
            status.style.color = "#ef4444";
        }
    }

    // Re-enable button
    submitBtn.disabled = false;
    submitBtn.style.opacity = "1";
});
