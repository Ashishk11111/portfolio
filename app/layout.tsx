import './globals.css';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'Ashish Kashyap — Software Engineer',description:'Software engineering, agentic AI and scalable data systems.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
