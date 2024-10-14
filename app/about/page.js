import Header from "../components/header.js";
export const metadata = {
    title: 'About',
  }
  
export default function About() {
    return(
        <main>
            <Header/>
            <div className="banner">
            <h4>My About Page</h4>
            </div>
        </main>
    )
    
}