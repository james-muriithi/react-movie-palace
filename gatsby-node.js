exports.onCreateWebpackConfig = ({
    actions,
}) => {
    const { setWebpackConfig } = actions;
    setWebpackConfig({
        externals: {
            jquery: 'jQuery', // important: 'Q' capitalized
        }
    })
}