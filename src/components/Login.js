import cookie from "vue-cookie";

if (cookie.get("admin-login") === `yes_${{ cookieUSERNAME }}`) {
    window.location.href = "/user/admin/panel";
}

export default class log {
}