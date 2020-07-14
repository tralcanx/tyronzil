/*
    TyronZIL-js: Decentralized identity client for the Zilliqa blockchain platform
    Copyright (C) 2020 Julio Cesar Cabrapan Duarte

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
*/

import JwkEs256k from '@decentralized-identity/sidetree/dist/lib/core/models/JwkEs256k';

/** Defines model for the JWS payload object required by the Update Operation Signed Data Object */
export default interface SignedDataModel {
    /** Encoded representation of the Update Operation Delta Object hash */
    delta_hash: string; //todo change name to kebab
    /** The JCS canonicalized IETF RFC 7517 compliant JWK representation matching the previous updateCommitment value */
    update_key: JwkEs256k;
}