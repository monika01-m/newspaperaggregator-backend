// Simulated news data
const articles = [
    { id: 1, title: "Tech News 1", description: "Details about tech news...", category: "technology" },
    { id: 2, title: "Sports News 1", description: "Details about sports news...", category: "sports" },
    { id: 3, title: "Business News 1", description: "Details about business news...", category: "business" },
    { id: 4, title: "Tech News 2", description: "Details about another tech news...", category: "technology" },
    { id: 5, title: "Sports News 2", description: "Details about more sports news...", category: "sports" },
];

let savedArticles = [];

// Function to display articles
function displayArticles(filteredArticles) {
    const container = document.getElementById("news-container");
    container.innerHTML = ""; // Clear container

    filteredArticles.forEach(article => {
        const card = document.createElement("div");
        card.className = "news-card";

        card.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <button onclick="saveArticle(${article.id})">Save</button>
        `;

        container.appendChild(card);
    });
}

// Function to filter articles by category
function filterNews() {
    const category = document.getElementById("category-select").value;
    const filteredArticles = category === "all"
        ? articles
        : articles.filter(article => article.category === category);
    displayArticles(filteredArticles);
}

// Function to save an article
function saveArticle(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (!savedArticles.includes(article)) {
        savedArticles.push(article);
        alert(`Saved: "${article.title}"`);
    } else {
        alert(`"${article.title}" is already saved.`);
    }
}

// Initialize the page with all articles
displayArticles(articles);
