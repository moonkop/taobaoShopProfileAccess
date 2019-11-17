async function init() {
    window.onbeforeunload = () => {
        window.onbeforeunload = null;
        return "something";
    }
}
init();