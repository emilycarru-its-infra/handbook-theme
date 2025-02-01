document.addEventListener("DOMContentLoaded", () => {
    const setDarkMode = () => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        // Ensure we are ONLY using system settings, not cached localStorage values
        localStorage.removeItem("theme");

        document.documentElement.classList.toggle("dark", prefersDark);
    };

    // Apply theme on load
    setDarkMode();

    // Listen for system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setDarkMode);
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", setDarkMode);
});