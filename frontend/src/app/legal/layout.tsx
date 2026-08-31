import type { Metadata } from "next";


export const metadata:Metadata={

title:"Legal | RNOTSKY",

description:
"Official RNOTSKY legal information including Terms, Privacy Policy, AI Policy and Security."

};


export default function LegalLayout({

children

}:{

children:React.ReactNode

}){


return children;


}