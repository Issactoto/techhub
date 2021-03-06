import React from "react";
import { Header } from "carbon-components-react";
import {
    HeaderName,
    HeaderNavigation,
    HeaderMenu,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
} from "carbon-components-react/lib/components/UIShell";
import {LogoGithub20} from "@carbon/icons-react";
import { LoginedSubHeader,NotLoginedSubHeader } from "./rightHeader";
import { ReactComponent as LogoIcon } from "../data/images/logo.svg";



export function HeaderTemplate({isLogin, setIsLogin}) {
    return (
        <div >
            <Header aria-label="Tech Blog HK">
                <HeaderName href="/" prefix="">
                    <LogoIcon width="7vh"/>TechHubHK
                </HeaderName>
                <HeaderNavigation aria-label="IBM Foundation Placement Journal">
                    <HeaderMenu menuLinkName="About" >
                        <HeaderMenuItem href="/aboutBlog">The HK Tech Hub</HeaderMenuItem>
                        <HeaderMenuItem href="/aboutTeam">The Team</HeaderMenuItem>
                        <HeaderMenuItem href="/aboutJoin">Join Us</HeaderMenuItem>
                    </HeaderMenu>
                    <HeaderMenu  menuLinkName="Tutorials" >
                        <HeaderMenuItem href="/menu">Menu</HeaderMenuItem>
                        {/* <HeaderMenuItem href="/list">List</HeaderMenuItem> */}
                        <HeaderMenuItem href="/menu/Frontend">Frontend</HeaderMenuItem>
                        <HeaderMenuItem href="/menu/Backend">Backend</HeaderMenuItem>
                        <HeaderMenuItem href="/menu/Database">Database</HeaderMenuItem>
                        <HeaderMenuItem href="/menu/DevOps">DevOps</HeaderMenuItem>
                    </HeaderMenu>
                    
                    <HeaderMenuItem href="/faq">FAQ</HeaderMenuItem>
                </HeaderNavigation>
                <HeaderGlobalBar>
                    {/* <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                    <LogoGithub20 />
                    </HeaderGlobalAction> */}
                    {isLogin?
                        <LoginedSubHeader setIsLogin={setIsLogin}/>
                        :
                        <NotLoginedSubHeader setIsLogin={setIsLogin}/>
                    }
                </HeaderGlobalBar>

            </Header>
            </div>
    );
}
