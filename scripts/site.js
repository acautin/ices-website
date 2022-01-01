function setlangcookie(lang) {
    if(lang !== 'es' && lang !== 'en') {
        console.error('Unsupported language');
        return;
    }

    document.cookie = 'LAST_LANG='+lang+'; samesite=Strict;path=/';
}
