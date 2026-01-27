export const authConfig = {
    pages: { 
        signIn: '/login'
    },
    providers: [],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isAdminPage = nextUrl.pathname.match(/^\/(ka|en|ru)?\/admin/);
            if (isAdminPage) {
                if (isLoggedIn) return true;
                return false; // Redirect to login
            }
            return true;
        },
    },
}
