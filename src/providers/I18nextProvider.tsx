import React, { ReactNode } from 'react';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n.use(Backend).init({
    lng: 'en',
    whitelist: ['en', 'hy'],
    ns: ['common'],
    defaultNS: 'common',
    backend: {
        loadPath: process.env.PUBLIC_URL + '/locales/{{lng}}/{{ns}}.json'
    }
});

type Props = {
    children: ReactNode;
};

export const t = i18n.t.bind(i18n);

function MyI18nextProvider({ children }: Props) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export default MyI18nextProvider;