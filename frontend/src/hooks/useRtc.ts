import { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const useRtc = () => {
  const peerConnection = useRef<RTCPeerConnection | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [constraints, setConstraints] = useState<MediaStreamConstraints>({
    audio: true,
    video: { width: 1280, height: 720 },
  });

  const getUserMedia = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setLocalStream(stream);

      if (peerConnection.current) {
        stream.getTracks().forEach((track) => {
          peerConnection.current?.addTrack(track, stream);
        });
      }
    } catch (error) {
      console.error("Failed to get user media:", error);
      toast.error("Failed to get user media");
    }
  }, [constraints]);

  useEffect(() => {
    peerConnection.current = new RTCPeerConnection();

    peerConnection.current.ontrack = (event) => {
      setRemoteStream(new MediaStream(event.streams[0]));
    };

    return () => {
      peerConnection.current?.close();
    };
  }, []);

  useEffect(() => {
    getUserMedia();
  }, [getUserMedia]);

  useEffect(() => {
    return () => {
      localStream?.getTracks().forEach((track) => track.stop());
    };
  }, [localStream]);

  return {
    localStream,
    remoteStream,
    getUserMedia,
    setConstraints,
  };
};

export default useRtc;
