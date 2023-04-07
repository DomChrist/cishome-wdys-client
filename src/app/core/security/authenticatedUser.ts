export class CisUser {

    public id: string;
    public sub: string;
    public group: Group;
    public userName: string;
    public name1: string;
    public name2: string;
    public phone: string;
    public image?: CisImage;
    public fullName: string;
    public given_name: string;
    public family_name: string;
    public cisgroup: string;
    public roles: string[];
    public resource_access: ResourceAccess;

    public shortName: string;

    public static with( k: KeycloakToken ): CisUser {
        console.log( k );

        const  u: CisUser = {
            id: k.sub,
            sub: k.sub,
            name1 : k.given_name,
            name2: k.family_name,
            fullName : k.name,
            userName : k.preferred_username,
            cisgroup : k.cisgroup,
            roles : k.resource_access.cishome.roles,
            phone : '',
            given_name : k.given_name,
            family_name : k.family_name,
            resource_access : k.resource_access
        } as CisUser;
        u.shortName = u.name1.charAt(0).toUpperCase() + '.' + u.name2.charAt(0).toUpperCase();

        return u;
    }

    public hasAccess( roles: string[], role: string ): boolean {
        return roles.filter( r => r === role ).length !== 0;
    }

}

export interface Group {
    id: string;
    name: string;
}

export interface CisImage {
    contentType: string;
    image: string;
    baseImage: string;
}

export class Keycloak {
    access_token: string;
    expires_in: number;
    id_token: string;
    refresh_expires_in: number;
    refresh_token: string;
    scope: string;
    session_state: string;
    token_type: string;

    public toAccessToken(): AccessToken {
        return AccessToken.fromString( this.access_token );
    }

}

export class AccessToken{

    private $plainToken: string;
    private $token: KeycloakToken;

    public static fromString( t: string ){
        const a = new AccessToken();
        a.$token = this.parseToken( t );
        a.$plainToken = t;
        return a;
    }

    private static parseToken( token: string ): KeycloakToken {
        const t = token.split('.')[1];
        const access: KeycloakToken = JSON.parse(atob( t )) as KeycloakToken ;
        return access;
    }

    get token(){
        return this.$token;
    }

    get plain(){
        return this.$plainToken;
    }

}


export interface KeycloakToken {
    exp: number;
    iat: number;
    auth_time: number;
    jti: string;
    iss: string;
    aud: string;
    sub: string;
    typ: string;
    azp: string;
    session_state: string;
    at_hash: string;
    acr: string;
    email_verified: boolean;
    name: string;
    groups: string[];
    preferred_username: string;
    given_name: string;
    resource_access: ResourceAccess;
    cisgroup: string;
    family_name: string;
    email: string;
}



export interface ResourceAccess {
    account: Account;
    cishome: Account;
}

export interface Account {
    roles: string[];
}

