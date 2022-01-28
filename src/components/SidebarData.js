import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";



export const sidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Notification",
        path: "/notification",
        icon: <IoIcons.IoIosNotifications />,
        cName: 'nav-text'
    },
    {
        title: "Attendence",
        path: "/attendence",
        icon: <IoIcons.IoIosBusiness />,
        cName: 'nav-text'
    },
    {
        title: "Exam",
        path: "/exam",
        icon: <IoIcons.IoIosBook />,
        cName: 'nav-text'
    },
    {
        title: "Logout",
        path: "/logout",
        icon: <FaIcons.FaLock />,
        cName: 'nav-text'
    },
]
