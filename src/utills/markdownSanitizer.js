const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdown(markdownContent) {
    // Create a new instance of TurndownService
    const turndownService = new TurndownService();

    // Convert markdown to HTML
    const convertedHtml = marked.parse(markdownContent);

    // Sanitize the HTML
    const sanitizedHtml = sanitizeHtml(convertedHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags
    });

    // Convert the sanitized HTML back to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdown;
