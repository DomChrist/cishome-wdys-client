// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const cisHome = {
    service : 'http://localhost:8051/',
    base : 'http://localhost:8051/',
    host : 'http://localhost:8051',
    socket : 'ws://localhost:8051/',
    // "service" : 'http://pi4:8088/',
    // "login" : "http://pi4:8180/auth/realms/CIS/protocol/openid-connect/auth?client_id=account&redirect_uri=http://localhost:4200/auth/token&response_type=code&scope=openid"
    // "login" : "http://localhost:8082/auth/realms/CIS/protocol/openid-connect/auth?client_id=cishome&redirect_uri=http://localhost:4200/auth/token&response_type=code&scope=openid"
    login : 'http://localhost:8082/auth/realms/CIS/protocol/openid-connect/auth?client_id=cishome&response_type=code&scope=openid'
};

let keycloak: { baseRealm: string; host: string; client: string; realm: string; secret: string; base: string };
keycloak = {
    // "host" : "http://pi4:8180/auth/realms/CIS/account/",
    base: 'http://localhost:8082/auth/',
    baseRealm: 'http://localhost:8082/auth/realms/CIS/',
    host: 'http://localhost:8082/auth/realms/CIS/cishome/',
    realm: 'CIS',
    secret: '3d9fdc9d-a492-49d2-8928-bc89df183bf1',
    client: 'cishome'
};

export const wdys = {
    root : 'wdys',
    base : '/'
};
export const apps = {
    wdys : wdys
};



export const environment = {
    production: false,
    serviceUrl: 'http://localhost:8080',

    keycloak,

    cisHome,

    apps : apps

};



