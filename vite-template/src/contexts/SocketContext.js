import { useSocket } from './contexts/SocketContext';

function MyComponent() {
  const { isConnected, emit, on } = useSocket();

  useEffect(() => {
    on('message', (data) => console.log(data));
  }, []);

  return <div>Socket: {isConnected ? 'Connected' : 'Disconnected'}</div>;
}