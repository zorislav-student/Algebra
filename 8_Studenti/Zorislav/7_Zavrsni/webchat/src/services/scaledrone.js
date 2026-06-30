const CHANNEL_ID = "od2p5o4HKBibVN1h";
const APP_OPEN_EVENT = "open";
const DATA_RECEIVED_EVENT = "data";
const ROOM_NAME = "observable-room";

export default function scaledrone({ member, onInit, onMessageReceived }) {
  let drone = null;
  drone = new window.Scaledrone(CHANNEL_ID, { data: member });

  drone.on(APP_OPEN_EVENT, (error) => {
    if (!error) {
      onInit(drone.clientId);
    }
  });

  const room = drone.subscribe(ROOM_NAME);
  room.on(DATA_RECEIVED_EVENT, (message) => {
    onMessageReceived(message);
  });

  return {
    sendMessage: (text) => {
      drone.publish({
        room: ROOM_NAME,
        message: { text, member, id: drone.clientId },
      });
    },
  };
}
