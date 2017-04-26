module.exports = function(app) {
    app.dataSources.memory.automigrate('message', function(err) {
        if (err) throw err;

        app.models.message.create([
            { time: (new Date).getTime(), body: 'Hello' },
            { time: (new Date).getTime(), body: 'Hello' },
            { time: (new Date).getTime(), body: 'Hello' }
        ], function(err, messages) {
            if (err) throw err;

            console.log(`Models created:\n${messages}`);
        });
    });
};
