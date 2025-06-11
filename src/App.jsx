import { useEffect } from "react";
import OneSignal from "react-onesignal";

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "SEU_APP_ID_AQUI", // <-- substitui aqui
      notifyButton: {
        enable: true,
      },
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white">
      <h1 className="text-3xl font-bold">🔔 Push Notification ativada!</h1>
    </div>
  );
}

export default App;
