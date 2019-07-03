const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
module.exports = withTypescript(
    withSass({
        webpack: cfg => {
            cfg.module.rules.push({
                test: /\.md$/,
                use: 'frontmatter-markdown-loader',
            });
            return cfg;
        },
    }),
);
