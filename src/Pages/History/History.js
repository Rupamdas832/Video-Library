import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Toast } from "../../Components";
import { useStore, useUser } from "../../Store";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./History.css";
import axios from "axios";
import { URL } from "../../Server/serverURL";

export const History = () => {
  const { storeState, storeDispatch } = useStore();
  const { historyVideos, videos, isLoading } = storeState;
  console.log(historyVideos);

  const { userState } = useUser();
  const { user } = userState;

  const deleteFunction = async (_id) => {
    storeDispatch({ type: "IS_LOADING", payload: "removeHistoryVideo" });
    try {
      const { status } = await axios.delete(
        `${URL}/video-library/${user._id}`,
        {
          data: {
            _id: _id,
            section: "historyVideos",
          },
        }
      );
      if (status === 202) {
        const newVideo = {
          _id: _id,
        };
        storeDispatch({ type: "REMOVE_FROM_HISTORY", payload: newVideo });
        const storage = JSON.parse(localStorage.getItem("VideoLoginUser"));
        storage.historyVideos = storage.historyVideos.filter(
          (item) => item._id !== _id
        );
        localStorage.setItem("VideoLoginUser", JSON.stringify(storage));
      }
    } catch (error) {
      console.log(error);
    } finally {
      storeDispatch({ type: "IS_LOADING", payload: "success" });
    }
  };

  const toBottom = useRef(null);
  const scrollToBottom = () => {
    toBottom.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="historyContainer">
      {isLoading === null ? (
        <Toast message="Fetching Videos..." />
      ) : (
        <div className="historyContainer">
          <h1>History</h1>
          <div className="historyVideoList">
            {historyVideos.map((item, idx) => {
              const foundVideo = videos.find((video) => video._id === item._id);
              const { videoId, thumbnail, channelName, title, _id } =
                foundVideo;
              return (
                <div className="flatCard history" key={idx}>
                  <Link className="routerLink" to={`/video-detail/${videoId}`}>
                    <div className="imgFlat">
                      <img src={thumbnail} alt="thumbnail" />
                    </div>
                  </Link>
                  <div className="detailFlat history">
                    <p>{title}</p>
                    <div className="detailFooter">
                      <p>{channelName}</p>
                      <div className="dropdown">
                        <button>
                          <BsThreeDotsVertical />
                        </button>
                        <div className="dropdownContent">
                          <ul>
                            <li onClick={() => deleteFunction(_id)}>Remove</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div ref={toBottom} />
    </div>
  );
};
