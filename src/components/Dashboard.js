import { Link } from "react-router-dom"

function Dashboard() {

    return (
        <div className="homepage-wrapper">
        <div className="homepageLeft">
          <div className="logo">
            <img src="logo.png" alt="" />
            <p className="postit">Postit</p>
          </div>
          <div className="create-channel">
              <p className="create">Create Channel</p>
              <Link href="createChannelForm.html" className="add">+</Link>
          </div>

          <div className="group">
              <p className=" one"> Software Engineers</p>
              <p className="groups"> UX/UI Designers</p>
              <p className="groups"> Data Scientists</p>
          </div>
      </div>
        {/* <!-- <div className="bigman"> -->
          <!-- <div className="tochukwu"></div> --> */}
        
          <div className="container-box">
            <div className="box-1">
              <img
                src="./image/7d92b315-b8f4-45a8-978a-a16bd2fca076.jpg"
                alt="User Pics"
              />
              <Link to="/">Logout</Link>
            </div>
            <div className="content-1">
              <div className="post">
                <div className="post 1">
                  <img
                    src="./image/7d92b315-b8f4-45a8-978a-a16bd2fca076.jpg"
                    alt="User Pics"
                  />
                  <h2>Okorie Nnamdi</h2>
                </div>
                <div className="button">
                  <button>Critical</button>
                </div>
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium perferendis tempore neque fuga! Nobis inventore, odio
                  aliquam animi repellendus magnam sunt, tempora quibusdam, ducimus
                  consequatur est qui placeat hic sapiente libero cupiditate! Vitae
                  qui quaerat dolores placeat, ab dignissimos velit.
                </p>
              </div>
            </div>
            <div className="addmessage">
              <div className="mood">
                <button className="normal">Normal</button>
                <button className="other">Urgent</button>
                <button className="other">Critical</button>
              </div>
              <div className="inputmedia">
                <div>
                <input
                  type="text"
                  name="text"
                  id=""
                  placeholder="Type your message here"
                />
              </div>
                <div className="medialine">
                    {/* <img src="./image/Vector (1).png" alt="Send" />
                    <img src="./image/Vector (2).png" alt="Attachment" />  */}
                  <span><i className="fa fa-paper-plane plane"></i></span>
                  <span><i className="fa fa-paperclip clip"></i></span>
                </div>
              </div>
            </div>
          </div>
    </div>
    )
}

export default Dashboard