import React, { useEffect } from "react";
import { ContainerProps } from "./Container";
import { PanelProps } from "./component/Panel";

interface LayoutProps {
    children?: React.ReactElement<ContainerProps | PanelProps> | React.ReactElement<ContainerProps | PanelProps>[]
    className?: string
    id?: string
}


const Layout = (props: LayoutProps) => {

    return (
        <div className={"merapi__editor--layout" + (props.className ? " " + props.className : "")} id={props.id}>
            {props.children}
        </div>
    )
}

export default Layout;
export type { LayoutProps }