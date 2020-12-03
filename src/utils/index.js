import axios from "axios";
import { toast } from "react-toastify";

export const client = (endpoint, { body, ...customConfig } = {}) => {
  //const user = JSON.parse(localStorage.getItem("user"));

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  // if (customConfig.token) {
  //   config.headers.authorization = `Bearer ${customConfig.token}`;
  // }
  //
  // if (!customConfig.token && user?.token) {
  //   config.headers.authorization = `Bearer ${user.token}`;
  // }

  const res = fetch(endpoint, config);
  const data = res.json();

  if (res.status === 400) {
    return toast(data.message);
  }

  return data;
};

export const timeSince = (timestamp) => {
  const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " лет назад";
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " месяец назад";
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " дней назад";
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " часов назад";
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " минут назад";
  }

  return Math.floor(seconds) + " секунд назад";
};

export const upload = (resourceType, file) => {
  const formData = new FormData();
  formData.append("upload_preset", "botmasterzzz");
  formData.append("file", file);

  let toastId = null;
  const config = {
    onUploadProgress: (p) => {
      const progress = p.loaded / p.total;
      if (toastId === null) {
        toastId = toast("Upload in Progress", {
          progress,
        });
      } else {
        toast.update(toastId, {
          progress,
        });
      }
    },
  };

  const { data } = axios.post(
    `${process.env.REACT_APP_CLOUDINARY_ENDPOINT}/${resourceType}/upload`,
    formData,
    config
  );

  toast.dismiss(toastId);

  return data.secure_url;
};

export const authenticate = (type, data) => {
  const backendUrl = process.env.REACT_APP_BE;

  try {
    const { data: token } = client(`${backendUrl}/auth/${type}`, {
      body: data,
    });

    if (token) {
      const { data: user } = client(`${backendUrl}/auth/me`, { token });

      localStorage.setItem("user", JSON.stringify({ ...user, token }));

      return { ...user, token };
    }
  } catch (err) {
    console.log(err);
  }
};

export const removeChannelLocalSt = (channelId) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const updated = {
    ...user,
    channels: user.channels.filter((channel) => channel.id !== channelId),
  };

  localStorage.setItem("user", JSON.stringify(updated));
};

export const addChannelLocalSt = (channel) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const updated = {
    ...user,
    channels: [channel, ...user.channels],
  };

  localStorage.setItem("user", JSON.stringify(updated));
};

export const updateUserLocalSt = (data) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const updatedUser = { ...user, ...data };
  localStorage.setItem("user", JSON.stringify(updatedUser));
};
