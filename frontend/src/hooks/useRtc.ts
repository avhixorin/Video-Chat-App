import { useCallback, useEffect, useRef, useState } from "react";

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
      console.log("Accessing media devices with constraints:", constraints);
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setLocalStream(stream);

      if (peerConnection.current) {
        stream.getTracks().forEach((track) => {
          peerConnection.current!.addTrack(track, stream);
        });
      }
    } catch (error) {
      console.error("Error accessing media devices:", error);
      alert("Could not access your camera and microphone. Please check permissions.");
    }
  }, [constraints]);

  const createOffer = useCallback(async () => {
    if (!peerConnection.current) {
      console.error("Peer connection does not exist");
      return null;
    }
    try {
      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);
      return offer;
    } catch (error) {
      console.error("Error creating offer:", error);
      return null;
    }
  }, []);

  const createAnswer = useCallback(async (offer: RTCSessionDescriptionInit) => {
    if (!peerConnection.current) {
      console.error("Peer connection does not exist");
      return null;
    }
    try {
      await peerConnection.current.setRemoteDescription(offer);
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);
      return answer;
    } catch (error) {
      console.error("Error creating answer:", error);
      return null;
    }
  }, []);

  const addAnswer = useCallback(async (answer: RTCSessionDescriptionInit) => {
    if (!peerConnection.current) {
      console.error("Peer connection does not exist");
      return;
    }
    try {
      await peerConnection.current.setRemoteDescription(answer);
    } catch (error) {
      console.error("Error adding answer:", error);
    }
  }, []);

  useEffect(() => {
    peerConnection.current = new RTCPeerConnection();

    peerConnection.current.ontrack = (event) => {
      setRemoteStream(new MediaStream(event.streams[0]));
    };

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        console.log("Sending ICE candidate:", event.candidate);
      } else {
        console.log("All ICE candidates have been sent");
      }
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
    createOffer,
    createAnswer,
    addAnswer,
  };
};

export default useRtc;
