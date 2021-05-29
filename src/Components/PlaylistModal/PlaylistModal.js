import axios from "axios";
import React, { useState } from "react";
import { useStore, useUser } from "../../Store";
import { URL } from "../../Server/serverURL";

import "./PlaylistModal.css";

export const PlaylistModal = ({ setIsModalOpen, video_id }) => {
  const [playlistName, setPlaylistName] = useState("");

  const { storeState, storeDispatch } = useStore();
  const { playlist } = storeState;

  const { userState } = useUser();
  const { token } = userState;

  const addNewPlaylist = async () => {
    if (playlistName === "") {
      return alert("Playlist name can't be empty");
    } else {
      storeDispatch({ type: "IS_LOADING", payload: "playlist" });
      try {
        const {
          data: { playlist },
          status,
        } = await axios.post(
          `${URL}/video-library/`,
          {
            _id: video_id,
            section: "playlistVideos",
            title: playlistName,
          },
          {
            headers: { authorization: token },
          }
        );
        if (status === 201) {
          storeDispatch({ type: "ADD_NEW_PLAYLIST", payload: playlist });
          const storage = JSON.parse(localStorage.getItem("VideoLoginUser"));
          storage.playlist = playlist;
          localStorage.setItem("VideoLoginUser", JSON.stringify(storage));
        }
      } catch (error) {
        console.log(error);
      } finally {
        storeDispatch({ type: "IS_LOADING", payload: "success" });
      }
      setPlaylistName("");
      setIsModalOpen(false);
    }
  };

  const addVideoToPlaylist = async (_id) => {
    storeDispatch({ type: "IS_LOADING", payload: "playlistVideo" });
    try {
      const {
        data: { playlist },
        status,
      } = await axios.post(
        `${URL}/video-library/${_id}`,
        {
          _id: video_id,
        },
        {
          headers: { authorization: token },
        }
      );
      if (status === 201) {
        const videoDetail = {
          _id: _id,
          video_id: video_id,
        };
        storeDispatch({ type: "ADD_VIDEO_TO_PLAYLIST", payload: videoDetail });
        const storage = JSON.parse(localStorage.getItem("VideoLoginUser"));
        storage.playlist = playlist;
        localStorage.setItem("VideoLoginUser", JSON.stringify(storage));
      }
    } catch (error) {
      console.log(error);
    } finally {
      storeDispatch({ type: "IS_LOADING", payload: "success" });
    }
    setIsModalOpen(false);
  };

  return (
    <div className="modal">
      <div className="modalBox">
        <h3>Playlist</h3>
        <ul>
          {playlist.map((playlistItem) => {
            const { _id } = playlistItem;
            return (
              <li
                key={_id}
                onClick={() => addVideoToPlaylist(_id)}
                className="modalPlayList"
              >
                {playlistItem.title}
              </li>
            );
          })}
        </ul>
        <input
          className="input"
          onChange={(e) => setPlaylistName(e.target.value)}
          placeholder="Add new playlist name"
        />
        <div className="playlistBtns">
          <button className="btn outline" onClick={() => addNewPlaylist()}>
            Add New
          </button>
          <button className="btn outline" onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
