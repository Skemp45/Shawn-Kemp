import Link from "next/link";
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="https://medium.com/@shawn_kemp" legacyBehavior>
            <a target="_blank">
              <span className="img-holder">
                <img src="assets/blogging.jpeg" alt="" />
              </span>
              <div className="content">
                <span className="category">My Thoughts</span>
                <span className="title">
                  All of my writing can be found exclusively on Medium
                </span>
                <p>
                  I haven't had as much time as I'd hoped for writing lately. Nevertheless, I've managed to put some thoughts down on Medium. Feel free to take a look!
                </p>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;
