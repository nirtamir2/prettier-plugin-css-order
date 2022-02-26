module.exports = {
    plugins: [
        require.resolve("prettier-plugin-packagejson"),
    ],
    overrides: [
        {
            files: "*.svg",
            options: {
                parser: "html",
            },
        },
    ],
};
