var menu = {
    item: null
}

const cesarPage = (req, res) => {
    menu.item = "cesar";
    res.render('pages/cesar', { menu });
};

const vigenerePage = (req, res) => {
    menu.item = "vigenere";
    res.render('pages/vigenere', { menu });
};

module.exports = {
    cesarPage,
    vigenerePage
};