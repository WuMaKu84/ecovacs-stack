import { io } from 'socket.io-client';

const websocketService = () => {
  const socket = io(`ws://${process.env.REACT_APP_HOST_IP}:${process.env.REACT_APP_WS_PORT || 3001}`);

  socket.on('disconnect', () => {
    console.log(socket.id);
  });

  return socket;
};

export default websocketService;
