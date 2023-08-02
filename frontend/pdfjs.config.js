module.exports = {
    module: {
      rules: [
        {
          test: /pdfjs-dist/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                fallback: 'file-loader',
                name: 'fonts/[name].[hash:8].[ext]',
                esModule: false,
              },
            },
          ],
        },
      ],
    },
  }