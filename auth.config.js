export const authConfig = {
    pages: { 
        signIn: '/login'
    },
    providers: [],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const pathname = nextUrl.pathname;
            const isAdmin = /\/(ka|en|ru)?\/?admin/.test(pathname);

            if (isAdmin) {
                if (isLoggedIn) return true;
                const locale = nextUrl.pathname.split('/')[1];
                const targetLocale = ['ka', 'en', 'ru'].includes(locale) ? locale : 'ka';
                const loginUrl = new URL(`/${targetLocale}/login`, nextUrl.origin);
                return Response.redirect(loginUrl);
            }
            return true;
        },
    },
}
