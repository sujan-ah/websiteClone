import React from "react";
import "./joinbanner.css";

const Joinbanner = () => {
  return (
    <section className="joinbanner">
      <div className="box">
        <div className="img">
          <img src="image/water.jpg" alt="" />
        </div>
        <div className="img">
          <div className="text">
            <h1>Donate</h1>
            <h3>
              You can give once or monthly knowing{" "}
              <span>
                your gift will help providing a better learning environment
              </span>{" "}
              for the children in Ethiopia.
            </h3>
            <button>Donate Now</button>
          </div>
        </div>

        <div className="img">
          <div className="text2">
            <h1>Donate your birthday</h1>
            <h3>
              Your birthday is coming up and you want to ask for donations
              instead of gifts? Simply sign up, start your birthday campaign on
              our partner’s website Betterplace.org and ask your loved ones to
              contribute.
            </h3>
            <button>Pledge your birthday</button>
          </div>
        </div>
        <div className="img">
          <img src="image/water.jpg" alt="" />
        </div>

        <div className="img">
          <img src="image/water.jpg" alt="" />
        </div>
        <div className="img">
          <div className="text3">
            <h1>Fundraising</h1>
            <h3>
              You want to donate a bit more than you normally would on your own?
              No problem: Start a fundraiser with your friends and family. You
              can donate your birthday, Holiday givings or any other occasion
              you might think of. We work with betterplace.org: Setting up your
              own campaign is easy and takes only minutes.
            </h3>
            <button>Start Campaign</button>
          </div>
        </div>
        <div className="img">
          <div className="text4">
            <h1>
              Sponsor
              <br />a project
            </h1>
            <h3>
              You can choose to{" "}
              <span>
                sponsor a whole project or parts of a bigger initiative
              </span>{" "}
              like the build of a new and improved water resource or the
              construction of the school sanitary facilities. The costs vary
              depending on the project and start from 5,000 €. Once you’ve made
              your gift, we’ll pair it with an appropriate project (or
              projects).
            </h3>
            <button>Contact us for more info</button>
          </div>
        </div>
        <div className="img">
          <img src="image/water.jpg" alt="" />
        </div>

        <div className="img">
          <img src="image/water.jpg" alt="" />
        </div>
        <div className="img">
          <div className="text5">
            <h1>Become a partner</h1>
            <h3>
              We’re always looking for partners who would like to support us in
              our mission. Whether it is a co-branded fundraising campaign,
              sponsored media, your expert knowledge or your network of
              experienced specialists,{" "}
              <span>
                we would love to work with you on a mutually beneficial basis.
              </span>
            </h3>
            <button>Write us an email and let's discuss</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Joinbanner;
