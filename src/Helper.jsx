import Iconfacebook from './Assets/icon-facebook.svg';
import Iconinstagram from './Assets/icon-instagram.svg';
import Icontwitter from './Assets/icon-twitter.svg';
import Iconyoutube from './Assets/icon-youtube.svg';

import Icondown from './Assets/icon-down.svg';
import Iconup from './Assets/icon-up.svg';



const Helper = {
    GetPlateformeIcon(iconName) {
        const icons = {
            facebook: Iconfacebook,
            instagram: Iconinstagram,
            youtube: Iconyoutube,
            twitter: Icontwitter,
        };
        return icons[iconName?.toLowerCase()];
    },


GetPlateformeColor(plateforme) {
    const colors = {
        facebook: "bg-Facebook",
        instagram: "bg-Instagram",
        youtube: "bg-YouTube",
        twitter: "bg-Twitter",
    };

    return colors[plateforme?.toLowerCase()];
},

    GetStatformeIcon(value) {
        return value >= 0 ? Iconup : Icondown;
    },



}


export default Helper;

