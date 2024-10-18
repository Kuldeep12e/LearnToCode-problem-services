
const marked = require('marked');
const sanitizeHtml = require('sanitize-html')

function sanitizeMarkdown(markdownContent){
    //convert markdown to html

    const convertedHtml = marked.parse(markdownContent)

    //sanitize html

    const sanitizedHtml = sanitizeHtml(convertedHtml,{
        allowedTags : sanitizeHtml.defaults.allowedTags
    });

    return sanitizeHtml;
}

