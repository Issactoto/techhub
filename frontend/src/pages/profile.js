import React, { useState, useEffect } from "react";
import {
  Tile,
  Button,
  CodeSnippet,
  FileUploader,
  Loading,
} from "carbon-components-react";
import { AvatarLogo } from "../data";
import { useNavigate } from "react-router";
import { HeadingBar } from "../components";
import Cookies from "js-cookie";
import { userStoreImage, userGetImage } from "../functions";
import { useLocation } from "react-router-dom";

export function ProfilePage({ setIsLogin }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [profileImage, setProfileImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [userName, setUserName] = useState("");

  useEffect(() => {
    console.log("email");
    async function fetchMyAPI() {
      setIsLoading(true);
      console.log(typeof null);
      console.log(typeof state);
      if (state !== null) {
        console.log("Cookies.get(");
        setUserName(state.email);
        Cookies.set("userEmail", state.email);
      }
      if (Cookies.get("userEmail") != null) {
        setUserName(Cookies.get("userEmail"));
        const tempProfileImage = await userGetImage({
          email: Cookies.get("userEmail"),
        });
        console.log(tempProfileImage.data);
        console.log("tempProfileImage");
        if (tempProfileImage !== "error") {
          setProfileImage(tempProfileImage.data);
        }
      }
      setIsLoading(false);
    }
    fetchMyAPI();
  }, []);
  return (
    <div className="headingTemplate">
      {isLoading ? <Loading /> : null}
      <HeadingBar title="Profile" />
      <div className="BackgroundFAQTemplate">
        <div className="profileTemplate">
          <Tile className="ProfileTile" id="settingProfileTile">
            {profileImage != null ? (
              <img src={profileImage} className="profileImage" />
            ) : (
              <AvatarLogo fill="blue" width="30vh" />
            )}

            <div className="bx--file__container profileUploadBox">
              <FileUploader
                accept={[".jpg", ".png"]}
                buttonKind="primary"
                buttonLabel="Add files"
                filenameStatus="edit"
                iconDescription="Clear file"
                labelDescription="only .jpg files at 500mb or less"
                labelTitle="Upload"
                className="profileUploadBox"
                onChange={(event) => {
                  const reader = new FileReader();
                  reader.onloadend = async () => {
                    // console.log(reader.result)
                    setProfileImage(reader.result);
                    userStoreImage({
                      image: reader.result,
                      email: userName,
                    });
                  };
                  // console.log(event.target.files[0])
                  reader.readAsDataURL(event.target.files[0]);
                }}
              />
            </div>
          </Tile>
          <div className="CopyTextSection" id="CopyTextSection">
            {/* <div className="smallSectionBox">
              <p className="whiteText">Username:</p>
              <CodeSnippet type="single" className="blackText">
                PublicLink
              </CodeSnippet>
            </div> */}

            <div className="smallSectionBox">
              <p className="whiteText" id="profileEmailText">Email:</p>
              <CodeSnippet type="single" className="blackText" id="profileEmailSnippet">
                {userName}
              </CodeSnippet>
            </div>

            <div className="smallSectionBox">
              <Button
                onClick={() => {
                  Cookies.set("isLogin", "false");
                  setIsLogin(false);
                  navigate("../");
                }}
                id="profileLogoutButton"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
