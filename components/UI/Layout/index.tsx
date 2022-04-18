import React from "react";
import { ThemeProvider } from "next-themes";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
    return(
        <React.Fragment>
            <ThemeProvider attribute="class">
                <main>{children}</main>
            </ThemeProvider>            
        </React.Fragment>
    );
};