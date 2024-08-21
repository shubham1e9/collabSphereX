import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  useInboxNotifications,
  useUpdateRoomNotificationSettings,
  useUnreadInboxNotificationsCount,
} from "@liveblocks/react/suspense";
import { InboxNotification, InboxNotificationList } from "@liveblocks/react-ui";
import { useEffect } from "react";

function NotificationBox({ children }) {
  const { inboxNotifications } = useInboxNotifications();
  const updateRoomNotificationSettings = useUpdateRoomNotificationSettings();

  const { count, error, isLoading } = useUnreadInboxNotificationsCount();
  useEffect(() => {
    updateRoomNotificationSettings({ threads: "all" });
    console.log(count);
  }, [count]);

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex gap-1">
          {children} <span className="p-1 text-white rounded-full text-[3px] bg-primary">{count}</span>{" "}
        </div>
      </PopoverTrigger>
      <PopoverContent className={"w-[500px]"}>
        <InboxNotificationList>
          {inboxNotifications.map((inboxNotification) => (
            <InboxNotification
              key={inboxNotification.id}
              inboxNotification={inboxNotification}
            />
          ))}
        </InboxNotificationList>
      </PopoverContent>
    </Popover>
  );
}

export default NotificationBox;
