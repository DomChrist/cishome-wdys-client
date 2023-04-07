
const cisHome = {
    service : 'http://localhost:8051/api/',
    base : 'http://localhost:8051/',
    host : 'http://localhost:8051',
    socket : 'ws://localhost:8051/',
    login : 'http://localhost:8082/auth/realms/CIS/protocol/openid-connect/auth?client_id=cishome&response_type=code&scope=openid'
};

const keycloak = {
    host : 'http://localhost:8082/auth/realms/CIS/cishome/',
    baseRealm: 'http://localhost:8082/auth/realms/CIS/',
    realm : 'CIS',
    client : 'cishome',
    secret: '3d9fdc9d-a492-49d2-8928-bc89df183bf1',
};

export const wdys = {
    root : 'wdys',
    base : '/wdys/'
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
