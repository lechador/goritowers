export const authConfig = {
    pages: { 
        signIn: '/login'
    },
    providers: [],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const pathname = nextUrl.pathname;
            const isAdminPage = pathname.startsWith('/admin') || 
                              pathname.startsWith('/ka/admin') || 
                              pathname.startsWith('/en/admin') || 
                              pathname.startsWith('/ru/admin');

            if (isAdminPage) {
                if (isLoggedIn) return true;
                return false; // Redirect to login
            }
            return true;
        },
    },
}
