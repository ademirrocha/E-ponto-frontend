import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { AlertsType } from '@/types';
import { SnackbarContent } from '@mui/material';
import { Circle, ErrorOutline } from '@mui/icons-material';

interface NotificationsProps {
  notifications: AlertsType[];
  handleClose: (index: number) => void;
}

const getIndexOpen = (notification: AlertsType, notifications: AlertsType[]) => {
  return notifications.filter(a => a.open).indexOf(notification);
}

const getBgColor = (notification: AlertsType) => {
  const cores = [
    {type: 'error', color: '#d61616'},
    {type: 'success', color: '#2E7D32'}
  ]
  return cores.find(a => a.type == notification.type)?.color ?? '#a0a0a0';
}

const Notification = ({ notifications, handleClose }: NotificationsProps) => {
  return (
    <>
      {notifications.map((notification, index) => (
        <Snackbar
          key={index}
          open={notification.open}
          autoHideDuration={notification.duration ? notification.duration * 1000 : 6000}
          onClose={() => handleClose(index)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          style={{ marginTop: getIndexOpen(notification, notifications) * 60 }}
        >
          <SnackbarContent
            style={{
              backgroundColor: getBgColor(notification),
              opacity: notification.open ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
            message={
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {notification.type === 'error' ? (
                  <ErrorOutline />
                ) : (
                  <Circle />
                )}
                {notification.text}
              </span>
            }
          />
        </Snackbar>
      ))}
    </>
  );
};

export default Notification;
