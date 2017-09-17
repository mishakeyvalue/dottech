// Write your Javascript code.
function myFilter(input) {
    if (!input) return
    let uri = input.toLowerCase().replace(/[`~!@#$%^&*()_|+-=?;:'",.<>\{\}\[\]]/gi, '');
    uri = uri.replace(/[\s+]/g, '-');
    return uri.toLowerCase();
}

String.prototype.transliterate = function () {
    var dict = {
        'а': 'a',
        'б': 'b',
        'в': 'v',
        'г': 'g',
        'д': 'd',
        'е': 'ye',
        'ё': 'yo',
        'ж': 'zh',
        'з': 'z',
        'и': 'i',
        'й': 'y',
        'к': 'k',
        'л': 'l',
        'м': 'm',
        'н': 'n',
        'о': 'o',
        'п': 'p',
        'р': 'r',
        'с': 's',
        'т': 't',
        'у': 'u',
        'ф': 'f',
        'х': 'kh',
        'ц': 'ts',
        'ч': 'ch',
        'ш': 'sh',
        'щ': 'shch',
        'ь': '',
        'ъ': '',
        'ы': 'y',
        'э': 'e',
        'ю': 'yu',
        'я': 'ya',
    };
    var result = this.toLowerCase();
    for (var val in dict) {
        result = result.replace(val, dict[val]);
    }
    return result;
};