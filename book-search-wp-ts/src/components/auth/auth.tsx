// auth.tsx
import React from 'react';
import { auth, GoogleAuthProvider } from '../../fireBase/fireBaseConfig';
import * as firebaseui from 'firebaseui';

export function Auth() {
        const uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult: any, redirectUrl: any) {
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    return true;
                },
            },
            signInFlow: 'popup',
            signInSuccessUrl: '/',
            signInOptions: [
                GoogleAuthProvider.PROVIDER_ID,
            ],
            tosUrl: '/',
            privacyPolicyUrl: '/',
        };

        const ui = new firebaseui.auth.AuthUI(auth);
        ui.start('#firebaseui-auth-container', uiConfig);

    return (
        <>
            <div id="loader">Loading...</div>
        </>
    );
}
