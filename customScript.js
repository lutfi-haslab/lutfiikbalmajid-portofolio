function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: "en",
            layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
        },
        'google_translate_element'
    );
}