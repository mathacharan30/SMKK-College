
import fs from 'fs';
import path from 'path';

const documentsDir = 'd:/documents';
const outputPath = 'd:/documents/app/src/data/naacData.js';

const fileMappings = {
    'iiqa': ['iiqa.php'],
    'ssr': ['ssr.php'],
    'extendedProfile': ['extendedresult.php'],
    'criteria1': ['c1.php'],
    'criteria2': ['c2.php'],
    'criteria3': ['c3.php'],
    'criteria4': ['c4.php'],
    'criteria5': ['c5.php'],
    'criteria6': ['c6.php'],
    'criteria7': ['c7.php'],
    'iqacMeetings': ['meetings.php'],
    'iqacDocuments': ['iqacdocuments.php'],
    'iqacFeedback': ['feedback.php'],
    'alumniMeetings': ['alumni-meetings.php'],
    'alumniActivities': ['alumni-activities.php']
};

function extractLinks(content) {
    const items = [];
    const blockRegex = /<div class="pricing[^>]*>([\s\S]*?)<\/div>/g;
    let match;

    while ((match = blockRegex.exec(content)) !== null) {
        const block = match[1];

        // Extract Title
        const titleMatch = /<h6[^>]*>(.*?)<\/h6>/s.exec(block);
        const title = titleMatch ? titleMatch[1].trim() : 'Document';

        // Extract Link
        const linkMatch = /<a[^>]*href="([^"]+)"[^>]*>/s.exec(block);
        let link = linkMatch ? linkMatch[1].trim() : '#';

        if (link && !link.startsWith('http')) {
            link = '/' + link; // Ensure absolute path for public folder
        }

        if (link !== '#') {
            items.push({ title, link });
        }
    }
    return items;
}

const resultData = {};

Object.entries(fileMappings).forEach(([key, files]) => {
    resultData[key] = [];
    files.forEach(file => {
        const filePath = path.join(documentsDir, file);
        if (fs.existsSync(filePath)) {
            console.log(`Processing ${file}...`);
            const content = fs.readFileSync(filePath, 'utf-8');
            const items = extractLinks(content);
            resultData[key].push(...items);
        } else {
            console.warn(`File not found: ${file}`);
        }
    });
});

// Create the file content
const fileContent = `export const naacData = ${JSON.stringify(resultData, null, 4)};`;

fs.writeFileSync(outputPath, fileContent);
console.log(`Successfully generated naacData.js`);
