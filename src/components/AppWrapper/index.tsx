import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createRealmContext } from '@realm/react';
import { Profile } from '../../../models/objectsModels';

interface AppWrapperProps {
    children: React.ReactNode;
}

const realmConfig: Realm.Configuration = {
    schema: [Profile],
};

const { RealmProvider, useRealm, useObject, useQuery } =
    createRealmContext(realmConfig);

function AppWrapper({ children }: AppWrapperProps): JSX.Element {
    return (
        <RealmProvider>
            <NavigationContainer>{children}</NavigationContainer>
        </RealmProvider>
    );
}

export default AppWrapper;
