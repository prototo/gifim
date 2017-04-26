const fs = require('fs');
const path = require('path');
const template = require('swig');

const template_dir = 'client';

function render(file, args) {
    let filepath = path.resolve(template_dir, file);
    if (!fs.existsSync(filepath)) {
        return false;
    }

    let tmpl = template.compileFile(filepath);
    return tmpl(args);
}

module.exports = function(app) {
    const Message = app.models.message;

    app.get('/chat', function(req, res) {
        Message.find({}, function(err, messages) {
            if (err) throw err;

            res.send(
                render('index.html', { messages })
            );
        });
    });
};
