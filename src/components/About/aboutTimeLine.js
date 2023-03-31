import { FaGraduationCap as Grad} from 'react-icons/fa';
import {FaPython as Free} from 'react-icons/fa';
import {FaHtml5 as KodeGo} from 'react-icons/fa';
import {GrNode as Bayan} from 'react-icons/gr';
import {FaReact as Link} from 'react-icons/fa';

const blueAndWhite = { background: '#586eff', color: '#fff' };
const blueArrow = { borderRight: '7px solid #586eff' };
const violetAndWhite = { background: 'rgb(120, 11, 192)', color: '#fff' };
const violetArrow = { borderRight: '7px solid rgb(120, 11, 192)' };


const lx = [

    {
        key: 1,
        contentStyle: blueAndWhite,
        contentArrowStyle: blueArrow,
        date: "S.Y. 2019 - 2020",
        iconStyle: blueAndWhite,
        icon: <Grad />,
        title: "SHS Diploma | Computer Systems Servicing",
        subTitle: "Tanauan Institute Inc.",
        pDetails: "Learned the fundamentals of computer systems and practiced the basics of programming",
    },
    {
        key: 2,
        contentStyle: violetAndWhite,
        contentArrowStyle: violetArrow,
        date: "December 2021 - January 2022",
        iconStyle: violetAndWhite,
        icon: <Free />,
        title: "Python Programming Course",
        subTitle: "freeCodeCamp",
        pDetails: "Learned from the basics to core concepts in python programming",
    },
    {
        key: 3,
        contentStyle: blueAndWhite,
        contentArrowStyle: blueArrow,
        date: "May 2022 - August 2022",
        iconStyle: blueAndWhite,
        icon: <KodeGo/>,
        title: "Full Stack Web Development",
        subTitle: "KodeGo",
        pDetails: "Learned the fundamentals of Full Stack Web Development",
    },
    {
        key: 4,
        contentStyle: violetAndWhite,
        contentArrowStyle: violetArrow,
        date: "September 2022 - October 2022",
        iconStyle: violetAndWhite,
        icon: <Bayan />,
        title: "Back-End Web Development",
        subTitle: "Bayan Academy",
        pDetails: "Learned the foundations of Back-End Web Development",
    },
    {
        key: 5,
        contentStyle: blueAndWhite,
        contentArrowStyle: blueArrow,
        date: "December 2022 - January 2023",
        iconStyle: blueAndWhite,
        icon: <Link />,
        title: "App Development with the MERN Stack",
        subTitle: "LinkedIn Learning",
        pDetails: "Learned the MERN Stack to create full-stack applications",
    },

];

export default lx;

