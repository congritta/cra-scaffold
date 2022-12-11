import ReactDOM from "react-dom/client";
import IndexPage from "./pages/Index/IndexPage";

import {Provider as StoreProvider} from "react-redux";
import {store} from "./store/store";
import {HashRouter, Route, Routes} from "react-router-dom";

import "animate.css";
import "./styles/main.sass";
import Notifications from "./components/main/Notifications/Notifications";
import SendNotificationPage from "./pages/sendNotification/SendNotificationPage";
import {clearExpiredNotifications} from "./helpers/notifications";
import InfiniteScrollPage from "./pages/InfiniteScroll/InfiniteScrollPage";
import Navigation from "./components/main/Navigation/Navigation";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreProvider store={store}>
    <HashRouter basename="">
      <div
        className="App"
        style={{
          "--majorColor": "#102fb3"
        } as any}
      >
        <div className="main-container">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/sendNotification" element={<SendNotificationPage />} />
            <Route path="/infiniteScroll" element={<InfiniteScrollPage />} />
          </Routes>
          <Navigation />
        </div>
      </div>
    </HashRouter>
    <Notifications />
  </StoreProvider>
);

// Clear expired notifications
setInterval(clearExpiredNotifications, 1000);
