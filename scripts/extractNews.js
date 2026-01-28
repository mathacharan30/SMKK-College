import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const documentsDir = 'd:/documents';
const months = {
    'JAN': 0, 'FEB': 1, 'MAR': 2, 'APR': 3, 'MAY': 4, 'JUN': 5,
    'JUL': 6, 'AUG': 7, 'SEP': 8, 'OCT': 9, 'NOV': 10, 'DEC': 11
};

function parseNewsFile(filename) {
    const content = fs.readFileSync(path.join(documentsDir, filename), 'utf-8');
    const articles = [];
    const articleRegex = /<article[\s\S]*?<\/article>/g;
    let match;

    while ((match = articleRegex.exec(content)) !== null) {
        const articleHtml = match[0];

        const titleMatch = /<h3 class="entry-title[^>]*><a[^>]*>(.*?)<\/a><\/h3>/s.exec(articleHtml);
        const title = titleMatch ? titleMatch[1].trim() : 'News Item';

        const dayMatch = /<span class="day[^>]*>(\d+)<\/span>/s.exec(articleHtml);
        const monthMatch = /<span class="month[^>]*>([A-Za-z]+)<\/span>/s.exec(articleHtml);
        const yearMatch = /<span class="year[^>]*>(\d+)<\/span>/s.exec(articleHtml);

        let date = new Date().toISOString();
        if (dayMatch && monthMatch && yearMatch) {
            const monthIndex = months[monthMatch[1].toUpperCase().slice(0, 3)];
            const d = new Date(yearMatch[1], monthIndex, dayMatch[1]);
            if (!isNaN(d.getTime())) {
                date = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            }
        }

        const descMatch = /<p class="mt-15">(.*?)<\/p>/s.exec(articleHtml);
        let excerpt = descMatch ? descMatch[1].trim() : '';
        excerpt = excerpt.replace(/<a.*?>Read more<\/a>/, '').trim();

        const imgMatch = /<img src="([^"]+)"/s.exec(articleHtml);
        const image = imgMatch ? '/' + imgMatch[1] : null;

        // Initial ID generation
        let id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        if (id.length < 2 || id === 'news-item') {
            id = `news-${Math.random().toString(36).substr(2, 6)}`;
        }

        articles.push({
            id,
            title,
            date,
            excerpt,
            image,
            content: `<p>${excerpt}</p>`
        });
    }
    return articles;
}

const newsFiles = [
    'news2023.php', 'news2022.php', 'news2021.php', 'news2020.php', 'news2019.php'
];

let allNews = [];

newsFiles.forEach(file => {
    try {
        if (fs.existsSync(path.join(documentsDir, file))) {
            console.log(`Parsing ${file}...`);
            const news = parseNewsFile(file);
            allNews = [...allNews, ...news];
        }
    } catch (e) {
        console.error(`Error parsing ${file}:`, e);
    }
});

// Ensure Unique IDs
const idCounts = {};
allNews = allNews.map(item => {
    if (idCounts[item.id]) {
        idCounts[item.id]++;
        item.id = `${item.id}-${idCounts[item.id]}`;
    } else {
        idCounts[item.id] = 1;
    }
    return item;
});

const outputPath = path.join(__dirname, '../src/data/newsData.js');
const fileContent = `export const newsData = ${JSON.stringify(allNews, null, 2)};`;

fs.writeFileSync(outputPath, fileContent);
console.log(`Successfully wrote ${allNews.length} news items to newsData.js`);
