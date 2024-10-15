import Header from "./components/header.js"
import Likebutton from "./components/likebutton.js"

export default function Page() {
     return (
        <main>
            <Header/>
            <div className="text">
            <h1>Title Description</h1>
             <p>Title Description</p>
             </div>
            <div className="banner">
            <h1>My Home Page</h1>
            </div>
            <div className="image-box">
              <div className="left-column">
                <div className="card-box">
                    <div className="card-heading">
                      <h3>Title Description</h3>
                      <p>Title description, <span>May 2, 2016</span> </p>
                    </div>
                    <img src="images/girl_hat.jpg" alt="" />
                    <div className="card-text">
                      <p>More Hats! I am crazy about hats these days.
                         Some text about this blog entry. Fashion fashion 
                         and mauris neque quam, fermentum ut nisl vitae, 
                         convallis maximus nisl. Sed mattis nunc id lorem 
                         euismod placerat. Vivamus porttitor magna enim, 
                         ac accumsan tortor cursus at. Phasellus sed ultricies
                          mi non congue ullam corper. Praesent tincidunt sedtellus 
                          ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                           ultricies congue gravida diam non fringilla.
                      </p>
                      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                         nostrud exercitation ullamco.
                      </p>
                      <div className="button-row">
                        <Likebutton/>
                        <button>Replies <span>1</span></button>
                      </div>
                    </div>
                </div>
              </div>
              <div className="right-column">
                <div className="card-box2">
                 <img src="images/avatar_girl2.jpg" alt="" />
                 <h3>My Name</h3>
                 <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
                </div>
               <div className="popular-column">
                  <h3>Popular Posts</h3>
                   <div className="first-row"> 
                      <img src="images/avatar_smoke.jpg" alt="" />
                    <div className="text-box">
                      <h4>Denim</h4>
                      <p>Sed mattis nunc</p>
                    </div>
                   </div>
                   <div className="first-row"> 
                      <img src="images/bandmember.jpg" alt="" />
                    <div className="text-box">
                      <h4>Sweaters</h4>
                      <p>Praes tinci sed</p>
                    </div>
                   </div>
                   <div className="first-row"> 
                      <img src="images/workshop.jpg" alt="" />
                    <div className="text-box">
                      <h4>Workshop</h4>
                      <p>Ultricies congue</p>
                    </div>
                   </div>
                   <div className="second-row"> 
                      <img src="images/avatar_smoke.jpg" alt="" />
                    <div className="text-box">
                      <h4>Trends</h4>
                      <p>Lorem ipsum dipsum</p>
                    </div>
                   </div>
               </div>
              </div>
            </div>
        </main>
     ) 
}