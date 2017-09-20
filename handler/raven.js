import Raven from 'raven'

export default (app, dsn) => {
    Raven.config(dsn).install();
    app.use(Raven.requestHandler());
    app.use(function onError(err, req, res, next) {
        // The error id is attached to `res.sentry` to be returned
        // and optionally displayed to the user for support.
        res.statusCode = 500;
        res.end(res.sentry + '\n');
    });
}