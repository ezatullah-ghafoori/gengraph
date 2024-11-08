import SidebarItem from "@/components/sidebar/SidebarItem";
import { SidebarBtnType } from "@/types/SidebarBtns.types";
import { faBarcode, faCalculator, faCode, faHome, faLineChart, faLinesLeaning, faLongArrowRight, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";


export const  SidebarBtn: SidebarBtnType[] = [
    {
        title: "Home",
        icon: faHome,
        link: '/'
    },
    {
        title: "Liner Algebra",
        icon: faLineChart,
        link: 'linear-algebra'
    },
    {
        title: "Metrix",
        icon: faLinesLeaning,
        link: '/metrix'
    },
    {
        title: "Standard Calc..",
        icon: faCalculator,
        link: '/calculator'
    },
    {
        title: "Programmer",
        icon: faCode,
        link: '/programmer'
    },
    {
        title: "Our Team",
        icon: faUsers,
        link: 'ourTeam',
    }
] 