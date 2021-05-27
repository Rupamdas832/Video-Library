import React from "react";
import "./VideoItemFlat.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStore, useUser } from "../../Store";
import axios from "axios";
import { URL } from "../../Server/serverURL";

export const VideoItemFlat = ({ video, section, playlistId }) => {
  const { title, thumbnail, channelName, videoId, _id } = video;

  const { storeDispatch } = useStore();

  const { userState } = useUser();
  const { user } = userState;

  const deleteFunction = async () => {
    if (section === "likedVideos") {
      storeDispatch({ type: "IS_LOADING", payload: "removeLikeVideo" });
      try {
        const { status } = await axios.delete(
          `${URL}/video-library/${user._id}`,
          {
            data: {
              _id: _id,
              section: section,
            },
          }
        );
        if (status === 202) {
          const newVideo = {
            _id: _id,
          };
          storeDispatch({ type: "REMOVE_FROM_LIKED_VIDEO", payload: newVideo });
          const storage = JSON.parse(localStorage.getItem("VideoLoginUser"));
          storage.likedVideos = storage.likedVideos.filter(
            (item) => item._id !== _id
          );
          localStorage.setItem("VideoLoginUser", JSON.stringify(storage));
        }
      } catch (error) {
        console.log(error);
      } finally {
        storeDispatch({ type: "IS_LOADING", payload: "success" });
      }
    } else if (section === "watchLaterVideos") {
      storeDispatch({ type: "IS_LOADING", payload: "removeWatchLater" });
      try {
        const { status } = await axios.delete(
          `${URL}/video-library/${user._id}`,
          {
            data: {
              _id: _id,
              section: section,
            },
          }
        );
        if (status === 202) {
          const newVideo = {
            _id: _id,
          };
          storeDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: newVideo });
          const storage = JSON.parse(localStorage.getItem("VideoLoginUser"));
          storage.watchLaterVideos = storage.watchLaterVideos.filter(
            (item) => item._id !== _id
          );
          localStorage.setItem("VideoLoginUser", JSON.stringify(storage));
        }
      } catch (error) {
        console.log(error);
      } finally {
        storeDispatch({ type: "IS_LOADING", payload: "success" });
      }
    } else if (section === "playlist") {
      storeDispatch({ type: "IS_LOADING", payload: "removePlaylistVideo" });
      try {
        const {
          status,
          data: { playlist },
        } = await axios.delete(
          `${URL}/video-library/${user._id}/${playlistId}`,
          {
            data: {
              _id: _id,
            },
          }
        );
        if (status === 202) {
          storeDispatch({ type: "REMOVE_FROM_PLAYLIST", payload: playlist });
          const storage = JSON.parse(localStorage.getItem("VideoLoginUser"));
          storage.playlist = playlist;
          localStorage.setItem("VideoLoginUser", JSON.stringify(storage));
        }
      } catch (error) {
        console.log(error);
      } finally {
        storeDispatch({ type: "IS_LOADING", payload: "success" });
      }
    }
  };
  return (
    <div className="flatCard">
      <Link className="routerLink" to={`/video-detail/${videoId}`}>
        <div className="imgFlat">
          <img src={thumbnail} alt="thumbnail" />
        </div>
      </Link>

      <div className="detailFlat">
        <p>{title}</p>
        <div className="detailFooter">
          <p>{channelName}</p>
          <div className="dropdown">
            <button>
              <BsThreeDotsVertical />
            </button>
            <div className="dropdownContent">
              <ul>
                <li onClick={() => deleteFunction()}>Remove</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
