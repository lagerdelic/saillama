// Initial setup for markdown
const markdown = window.markdownit({
  html: false,
  linkify: false,
  html_inline: true,
  image: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre><code class="hljs">' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          "</code></pre>"
        );
      } catch (__) {}
    }

    return (
      '<pre><code class="hljs">' +
      markdown.utils.escapeHtml(str) +
      "</code></pre>"
    );
  },
});
