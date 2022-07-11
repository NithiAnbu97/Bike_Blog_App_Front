import React from "react";
import bmw from "../../image/PNGPIX-COM-BMW-R1200R.png";
import ducati from "../../image/PNGPIX-COM-Ducati-Monster.png";
import yamaha from "../../image/Yamaha-R15.png";
import honda from "../../image/hornet.png";
import triumph from "../../image/triumph.png";

const PostHome = () => {
  return (
    <>
      <div className="post">
        <img src={bmw} alt="post pic" />

        <div className="post_info">
          <div className="post_categories"></div>

          <span className="post_title">BMW-R1200R</span>

          <span className="time">
            {" "}
            posted on {new Date(Date.now()).toDateString()}
          </span>
        </div>
        <p className="post_desc">
          We, yes. There’s 3 of us. Hubert on the Ténéré 600, Gaia on the XT and
          myself on the new BMW-R1200R . Three different bikes and 3 different
          aproaches to one region, as not everyone has the same interests and
          there are so many things to discover. To avoid long,
          ‘where-to-next?’-discussions we had decided to split up. We all
          followed our own instincts and would meet up in a week’s time,
          somewhere yet to be decided.
        </p>
      </div>
      <div className="post">
        <img src={ducati} alt="post pic" />

        <div className="post_info">
          <div className="post_categories"></div>

          <span className="post_title">Ducati-Monster</span>

          <span className="time">
            posted on {new Date(Date.now()).toDateString()}
          </span>
        </div>
        <p className="post_desc">
          About 20 miles separate me from the unexpected encounter with Bob. 20
          miles in which I ponder the curious characters of the previous evening
          and the bonding effect of a few shared pints. I think about being on
          the road in general and especially with a motorbike. But above all, I
          think about the very special vibe of travelling home. This feeling
          conglomerate of sentimentality and anticipation, from which new plans
          emerge and impressions of the past time are pinned to memory like on
          an oversized mood board.
        </p>
      </div>
      <div className="post">
        <img src={yamaha} alt="post pic" />

        <div className="post_info">
          <div className="post_categories"></div>

          <span className="post_title">Yamaha R15</span>

          <span className="time">
            posted on{new Date(Date.now()).toDateString()}
          </span>
        </div>
        <p className="post_desc">
          One way to ease the pain? An evening on the couch with a glass of
          craft beer. Fortunately we are not short of nice beers. As I wipe away
          my foam mustache and put down the empty glass, the idea arises to make
          my own pub crawl. Not happily singing from one café to another, but a
          route within our national borders that connects the six recognized
          Trappist monasteries.
        </p>
      </div>
      <div className="post">
        <img src={honda} alt="post pic" />

        <div className="post_info">
          <div className="post_categories"></div>

          <span className="post_title">Honda Hornet</span>

          <span className="time">
            posted on {new Date(Date.now()).toDateString()}
          </span>
        </div>
        <p className="post_desc">
          For me, they’re usually just small blips on the road. As a custom
          motorcycle builder, I maintain my bikes so that breakdowns happen very
          rarely, but an occasional flat tire just isn’t something you can avoid
          entirely. And a flat tire in a tiny nameless Peruvian village was
          precisely what made me stop and chat to local kids on a school break
          as I was fixing my punctured tube.
        </p>
      </div>
      <div className="post">
        <img src={triumph} alt="post pic" />

        <div className="post_info">
          <div className="post_categories"></div>

          <span className="post_title">Triumph Tiger</span>

          <span className="time">{new Date(Date.now()).toDateString()}</span>
        </div>
        <p className="post_desc">
          “Cancha de Tejo” was one of the sketchiest bars in Villa de Leyva, a
          small, touristy town in the heart of the Chicamocha Canyon, Colombia.
          Filled with seasonal construction workers, farmers, and some unsavory
          local characters, “Cancha de Tejo” was a place where Villa de Leyva’s
          working-class men gathered for two things: beer…and dynamite.
        </p>
      </div>
    </>
  );
};

export default PostHome;
