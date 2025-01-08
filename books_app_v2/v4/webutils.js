
function getQueries() {
    let search = window.location.href.split('?');
    let qs = {};

    if (search.length > 1)
        search = search[1]
            .split('&')
            .forEach(s => {
                let data = s.split('=');

                qs[data[0]] = data[1];

            });

    return qs;
}