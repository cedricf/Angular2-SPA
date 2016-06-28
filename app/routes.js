"use strict";
var router_deprecated_1 = require('@angular/router-deprecated');
exports.routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'location', component: LocationComponent },
    { path: 'guides', component: GuideComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_deprecated_1.provideRouter(exports.routes)
];
//# sourceMappingURL=routes.js.map