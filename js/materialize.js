// Autocomplete
var ac = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Apple": null,
        "Microsoft": null,
        "Google": null
    }
});

// Modal
var mb = document.querySelectorAll('.modal');
M.Modal.init(mb);