"use client";
import AdminSubTitle from "@/admin-side/components/AdminSubTitle";
import React, { useRef, useState } from "react";

const NotificationController = () => {
  const [Notifications, setNotifications] = useState<string[]>([]);

  const NotificationRef = useRef();

  const addNotification = () => {
    setNotifications([...Notifications, NotificationRef.current.value]);
    NotificationRef.current.value = "";
  };

  const removeNotification = (notification) => {
    setNotifications(Notifications.filter((el) => el !== notification));
  };

  return (
    <div className="border-b pb-6">
      <AdminSubTitle title="Notifications Controller" />
      <div className="flex flex-col">
        <label htmlFor="Notification" className="text-sm text-gray-700 mb-2">Notification Title</label>
        <div className="flex flex-row">
          <input
            id="Notification"
            ref={NotificationRef}
            type="text"
            className="outline-none py-2 px-3 border border-gray-300 w-[500px]"
          />
          <div
            onClick={addNotification}
            className="w-[100px] flex items-center justify-center uppercase cursor-pointer bg-gray-800 text-white"
          >
            Add
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <label className="text-sm text-gray-700 mb-2">
          Notifications ({Notifications.length}/12)
        </label>
        <div className="flex flex-col mt-3 w-[600px]">
          {Notifications.length > 0 ? (
            Notifications.map((notification, i) => (
              <Notification
                notification={notification}
                removeNotification={removeNotification}
                key={i}
              />
            ))
          ) : (
            <p className="text-gray-600">There is no Notifications</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Notification = ({ notification, removeNotification }) => {
  return (
    <div className="flex flex-row gap-3 mb-1.5 items-center">
      <div className="w-[5px] h-[5px] rounded-full bg-gray-700"></div>
      <p>{notification}</p>
      <div
        onClick={() => removeNotification(notification)}
        className="ms-3 text-gray-500 cursor-pointer hover:text-gray-800 duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default NotificationController;
