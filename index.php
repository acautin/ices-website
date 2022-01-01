<?php
if (isset($_COOKIE['LAST_LANG'])) {
    if ($_COOKIE['LAST_LANG'] === 'es') {
        header('Location: es/index.html');
    } else {
        header('Location: en/index.html');
    }
} else {
    header('Location: en/index.html');
}
