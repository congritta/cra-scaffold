import {useState} from "react";
import NotificationModel from "../../models/Notification";
import TextareaAutosize from "react-textarea-autosize";
import {createNotification} from "../../helpers/notifications";
import {DateTime} from "luxon";
import Select from "../../components/Select/Select";

export default function SendNotificationPage() {

  const [notification, setNotification] = useState<Omit<NotificationModel, "id" | "expireDate">>({
    title: "",
    status: "success",
    description: "",
  });

  // Send notification function
  function sendNotification() {

    createNotification({
      ...notification,
      expireDate: DateTime.now().plus({second: 5}).toISO()
    });
  }

  // Render
  return (
    <div className="SendNotificationPage">

      <h1>Send notification</h1>

      <form onSubmit={(e) => e.preventDefault()}>

        <div className="field-wrapper">
          <input
            type="text"
            placeholder="Notification title..."
            value={notification.title}
            onChange={({target: {value}}) => setNotification({...notification, title: value})}
          />
          <Select
            options={
              ["info", "success", "warn", "error"].map((status) => ({
                value: status, element: status.toUpperCase()
              }))
            }
            value={notification.status}
            onTriggered={(status) => setNotification({...notification, status: status as NotificationModel["status"]})}
          />
        </div>

        <div className="field-wrapper">
          <TextareaAutosize
            placeholder="Notification description..."
            minRows={3}
            value={notification.description}
            onChange={({target: {value}}) => setNotification({...notification, description: value})}
          />
        </div>

        <div className="field-wrapper">
          <button className="_auto-width" onClick={() => sendNotification()}>
            Send notification
          </button>
        </div>
      </form>
    </div>
  );
}
