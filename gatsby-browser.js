const $ = require("jquery")

export const onInitialClientRender = () => {
    $(document).ready(function () {
        console.log("The answer is don't think about it!")
    });
}