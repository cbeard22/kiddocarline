import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token) ? true : false;
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    login(idToken, idUser) {
        localStorage.setItem('id_token', idToken);
        localStorage.setItem('id_user', idUser);
        //window.location.assign('./Position');
    }

    logout = () => {
        localStorage.removeItem('id_token');
        localStorage.removeItem('id_user');
        window.location.assign('/');
    }
}

export default new AuthService();